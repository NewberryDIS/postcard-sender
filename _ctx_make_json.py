import json, os
import requests
from PIL import Image

def convert_to_webp(file_path, webp_path):
    """Converts an image from jpg to webp."""
    try:
        with Image.open(file_path) as img:
            img.save(webp_path, "webp")
        print(f"Image converted to webp: {webp_path}")
    
    except FileNotFoundError:
        print(f"File not found: {file_path}")
    except Exception as e:
        print(f"Error converting image: {e}")


with open('_all_galleries.json', 'r') as f:
    allg = json.load(f)


_just_galleries = []
_just_postcards = []
postcards_stacked = []

for gallery in allg:
    minig = {

        "title": gallery["title"],
        "slug": gallery["slug"],
        "mei": gallery["mei"],
        "context": gallery["context"],
        "image": gallery["image"],
        "imageTitle": gallery["imageTitle"],
        "width": gallery["width"],
        "height": gallery["height"]
    }
    _just_galleries.append(minig)
    _just_postcards.append(gallery["postcards"])

_just_postcards = [item for sublist in _just_postcards for item in sublist]

# get all the pix
for postcard in _just_postcards:
    webp_filename = f"./static/images/{postcard["image"]}.webp"
    jpg_filename = f"./static/images/jpg/{postcard["image"]}.jpg"
    if not os.path.exists(jpg_filename) and not os.path.exists(webp_filename):
        ctx_url = f'https://collections.newberry.org/IIIF3/Image/{postcard["image"]}/full/300,/0/default.jpg'
        try: 
            response = requests.get(ctx_url, stream=True)
            with open(jpg_filename, 'wb') as f:
                for chunk in response.iter_content(chunk_size=1024):
                    f.write(chunk)
            convert_to_webp(jpg_filename, webp_filename)
        except requests.exceptions.RequestException as e:
            print(f"Error downloading image: {e}")
    if not os.path.exists(webp_filename):
        convert_to_webp(jpg_filename, webp_filename)


with open('postcards.json', 'w') as json_file:
    json.dump(_just_postcards, json_file, indent=2)
with open('galleries.json', 'w') as json_file:
    json.dump(_just_galleries, json_file, indent=2)
