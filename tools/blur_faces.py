import cv2
import sys
import os

def blur_other_faces(input_path, output_path):
    img = cv2.imread(input_path)
    if img is None:
        print('Failed to load image:', input_path)
        return 1
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=4, minSize=(30,30))
    if len(faces) == 0:
        print('No faces detected; saving original to', output_path)
        cv2.imwrite(output_path, img)
        return 0
    # compute areas and skip the largest (assumed proprietor)
    areas = [w*h for (x,y,w,h) in faces]
    largest_idx = areas.index(max(areas))
    for i, (x,y,w,h) in enumerate(faces):
        if i == largest_idx:
            continue
        # expand box a bit
        pad_w = int(w * 0.4)
        pad_h = int(h * 0.6)
        x1 = max(0, x - pad_w)
        y1 = max(0, y - pad_h)
        x2 = min(img.shape[1], x + w + pad_w)
        y2 = min(img.shape[0], y + h + pad_h)
        roi = img[y1:y2, x1:x2]
        # heavy blur
        k = max(51, (max(w,h)//2) | 1)
        blurred = cv2.GaussianBlur(roi, (k,k), 0)
        img[y1:y2, x1:x2] = blurred
    cv2.imwrite(output_path, img)
    print('Saved processed image to', output_path)
    return 0

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print('Usage: python blur_faces.py input.jpg output.jpg')
        sys.exit(2)
    sys.exit(blur_other_faces(sys.argv[1], sys.argv[2]))
