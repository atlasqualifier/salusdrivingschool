#!/usr/bin/env python3
"""
Fix and optimize CEO image and Certificate of Operation.

Operations:
- Remove white/solid background from CEO image using GrabCut and save as optimized WebP with alpha.
- Deskew certificate by detecting text orientation and rotate so heading is horizontal; save optimized JPEG.
- Write outputs to `public/optimized/` for use by the site.
"""
import os
import sys
from pathlib import Path
import cv2
import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
OUT = PUBLIC / 'optimized'
OUT.mkdir(parents=True, exist_ok=True)


def find_file(glob_names):
    for name in glob_names:
        for p in ROOT.rglob(name):
            if p.is_file():
                return p
    return None


def remove_background_grabcut(src_path, out_path, max_dim=1200):
    print('Processing CEO image:', src_path)
    img = cv2.imread(str(src_path))
    if img is None:
        raise RuntimeError('Failed to read CEO image')
    h, w = img.shape[:2]
    # run GrabCut with a central rectangle
    mask = np.zeros((h, w), np.uint8)
    rect = (max(1, w//20), max(1, h//20), max(2, w - 2*(w//20)), max(2, h - 2*(h//20)))
    bgdModel = np.zeros((1,65), np.float64)
    fgdModel = np.zeros((1,65), np.float64)
    cv2.grabCut(img, mask, rect, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_RECT)
    mask2 = np.where((mask==2)|(mask==0), 0, 1).astype('uint8')
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGBA)
    img_rgb[...,3] = mask2*255

    # refine alpha with slight blur to smooth edges
    alpha = img_rgb[...,3]
    alpha = cv2.medianBlur(alpha, 5)
    img_rgb[...,3] = alpha

    # convert to PIL and resize for web
    pil = Image.fromarray(cv2.cvtColor(img_rgb, cv2.COLOR_BGRA2RGBA))
    # limit max dimension
    max_current = max(pil.width, pil.height)
    if max_current > max_dim:
        scale = max_dim / max_current
        new_w = int(pil.width * scale)
        new_h = int(pil.height * scale)
        pil = pil.resize((new_w, new_h), Image.LANCZOS)

    # save as WebP with alpha
    out_path.parent.mkdir(parents=True, exist_ok=True)
    pil.save(str(out_path), format='WEBP', quality=85, method=6)
    print('Saved', out_path)


def deskew_certificate(src_path, out_path, quality=78, max_dim=2000):
    print('Processing certificate:', src_path)
    img = cv2.imread(str(src_path))
    if img is None:
        raise RuntimeError('Failed to read certificate image')
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # binary for text
    _, th = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    th = cv2.bitwise_not(th)
    coords = cv2.findNonZero(th)
    if coords is None:
        angle = 0.0
    else:
        rect = cv2.minAreaRect(coords)
        angle = rect[-1]
        # minAreaRect returns angle in [-90, 0); adjust
        if angle < -45:
            angle = 90 + angle

    # rotate by negative angle to deskew
    (h, w) = img.shape[:2]
    center = (w // 2, h // 2)
    M = cv2.getRotationMatrix2D(center, angle, 1.0)
    rotated = cv2.warpAffine(img, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)

    # optional crop to content
    gray2 = cv2.cvtColor(rotated, cv2.COLOR_BGR2GRAY)
    _, th2 = cv2.threshold(gray2, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    th2 = cv2.bitwise_not(th2)
    cnts, _ = cv2.findContours(th2, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if cnts:
        x,y,wc,hc = cv2.boundingRect(np.vstack(cnts))
        cropped = rotated[y:y+hc, x:x+wc]
    else:
        cropped = rotated

    # resize if huge
    pil = Image.fromarray(cv2.cvtColor(cropped, cv2.COLOR_BGR2RGB))
    max_current = max(pil.width, pil.height)
    if max_current > max_dim:
        scale = max_dim / max_current
        new_w = int(pil.width * scale)
        new_h = int(pil.height * scale)
        pil = pil.resize((new_w, new_h), Image.LANCZOS)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    pil.save(str(out_path), format='JPEG', quality=quality, optimize=True)
    print('Saved', out_path)


def main():
    # find CEO image
    ceo_candidates = ['CEO IMAGE.*', 'CEO_IMAGE.*', '*CEO*.jpg', '*CEO*.jpeg', '*CEO*.png']
    ceo = find_file(ceo_candidates)
    if not ceo:
        print('No CEO image found in repo root or subfolders; please place CEO image named like "CEO IMAGE.jpg"')
    else:
        out_ceo = OUT / 'CEO_IMAGE.webp'
        remove_background_grabcut(ceo, out_ceo)

    # find certificate image
    cert_candidates = ['certificate*operation*.*', 'certificate-of-operation.*', 'certificate of operation.*']
    cert = find_file(cert_candidates)
    if not cert:
        print('No certificate image found (searched for certificate-of-operation.jpg etc)')
    else:
        out_cert = OUT / 'certificate-of-operation.jpg'
        deskew_certificate(cert, out_cert)

    print('Done. Outputs in public/optimized/')


if __name__ == '__main__':
    try:
        main()
    except Exception as e:
        print('Error:', e)
        sys.exit(1)
