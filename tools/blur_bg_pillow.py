from PIL import Image, ImageFilter
import sys

if len(sys.argv) < 3:
    print('Usage: python blur_bg_pillow.py input.jpg output.jpg [radius]')
    sys.exit(2)

inp = sys.argv[1]
out = sys.argv[2]
radius = int(sys.argv[3]) if len(sys.argv) > 3 else 50

img = Image.open(inp).convert('RGB')
blurred = img.filter(ImageFilter.GaussianBlur(radius=radius))
blurred.save(out)
print('Saved', out)
