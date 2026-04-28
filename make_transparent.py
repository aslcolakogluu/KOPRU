from PIL import Image
import sys

try:
    img = Image.open('public/assets/kopru_logo.png').convert('RGBA')
    datas = img.getdata()
    new_data = []
    for item in datas:
        # Check if pixel is close to white
        if item[0] > 235 and item[1] > 235 and item[2] > 235:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save('public/assets/kopru_logo.png', 'PNG')
    print("Success")
except Exception as e:
    print("Error:", e)
    sys.exit(1)
