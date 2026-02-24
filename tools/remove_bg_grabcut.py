#!/usr/bin/env python3
import cv2
import numpy as np
import sys
from pathlib import Path


def remove_bg_grabcut(input_path, output_path, iter_count=5):
    img = cv2.imread(str(input_path))
    if img is None:
        print('Failed to read', input_path)
        return 2

    h, w = img.shape[:2]

    # Detect face to get initial foreground rectangle
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.05, minNeighbors=4, minSize=(30, 30))

    if len(faces) > 0:
        # choose largest face
        areas = [w*h for (x,y,w,h) in faces]
        idx = int(np.argmax(areas))
        (x,y,fw,fh) = faces[idx]
        # Expand rectangle to include torso/head
        pad_x = int(fw * 1.5)
        pad_y = int(fh * 2.5)
        rx1 = max(0, x - pad_x//2)
        ry1 = max(0, y - pad_y//4)
        rx2 = min(w, x + fw + pad_x//2)
        ry2 = min(h, y + fh + pad_y//2)
        rect = (rx1, ry1, rx2 - rx1, ry2 - ry1)
    else:
        # fallback to center rectangle
        rect = (w//8, h//8, w*3//4, h*3//4)

    mask = np.zeros(img.shape[:2], np.uint8)
    bgdModel = np.zeros((1,65), np.float64)
    fgdModel = np.zeros((1,65), np.float64)

    cv2.grabCut(img, mask, rect, bgdModel, fgdModel, iter_count, cv2.GC_INIT_WITH_RECT)

    # Prepare final mask where sure/likely foreground
    mask2 = np.where((mask==2)|(mask==0), 0, 1).astype('uint8')
    img_fg = img * mask2[:, :, np.newaxis]

    # Composite onto white background
    white_bg = np.ones_like(img, dtype=np.uint8) * 255
    inv_mask = 1 - mask2
    out = img_fg + (white_bg * inv_mask[:, :, np.newaxis])

    # Save with transparency as PNG as well
    out_bgr = out
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    cv2.imwrite(str(output_path), out_bgr)
    print('Saved', output_path)
    return 0


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print('Usage: remove_bg_grabcut.py input.jpg output.png')
        sys.exit(2)
    sys.exit(remove_bg_grabcut(sys.argv[1], sys.argv[2]))
