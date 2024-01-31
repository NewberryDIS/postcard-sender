import requests
import json
import os
from slugify import slugify

def fetch_data(mei):
    api_url = f'{package_extractor[0]}{mei}{package_extractor[1]}{token}'
    print(api_url)
    response = requests.get(api_url)
    return response.json()

def process_top_level_data(api_data):
    _all_galleries = []

    for api_entry in api_data['APIResponse']['Content']:
        processed_data = {
            'title': api_entry['Title'],
            'slug': slugify(api_entry['Title']),
            'mei': api_entry['MediaEncryptedIdentifier'],
            'context': api_entry['new.Context'],
            'postcards': []
        }
        _all_galleries.append(processed_data)

    return _all_galleries

def process_gallery_data(gallery, gallery_api_data):
    gallery.update({
        'image': gallery_api_data['APIResponse']['Representative']['MediaEncryptedIdentifier'],
        'imageTitle': gallery_api_data['APIResponse']['Representative']['Title'],
        'width': gallery_api_data['APIResponse']['Representative']['MaxWidth'],
        'height': gallery_api_data['APIResponse']['Representative']['MaxHeight'],
    })

    for api_entry in gallery_api_data['APIResponse']['Content']:
        processed_data = {
            'gallery': gallery['slug'],
            'title': api_entry['Title'],
            'mei': api_entry['MediaEncryptedIdentifier'],
        }
        gallery['postcards'].append(processed_data)

# when a librarian adds a canvas instead of a manifest, it is used anyway; 
# in a world where we worried about data redundancy, we would use the `Document.RepresentativeIdentfier` in the getMEI url, then redo
def process_postcard_data(postcard, postcard_api_data):
    if postcard_api_data['APIResponse']['CoreField.IIIFResourceType'] == 'Canvas': 
        postcard.update({
            'image': postcard_api_data['APIResponse']['MediaEncryptedIdentifier'],
            'imageTitle': postcard_api_data['APIResponse']['Title'],
            'width': postcard_api_data['APIResponse']['MaxWidth'],
            'height': postcard_api_data['APIResponse']['MaxHeight'],
        })
    else: 
        postcard.update({
            'image': postcard_api_data['APIResponse']['Representative']['MediaEncryptedIdentifier'],
            'imageTitle': postcard_api_data['APIResponse']['Representative']['Title'],
            'width': postcard_api_data['APIResponse']['Representative']['MaxWidth'],
            'height': postcard_api_data['APIResponse']['Representative']['MaxHeight'],
        })

# Main script

package_extractor = [
    'https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=',
    '&PackageFields=SystemIdentifier,Title,new.Context,CoreField.IIIFResourceType,MediaEncryptedIdentifier,MaxHeight,MaxWidth,Link&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight,CoreField.IIIFResourceType&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,Link,CoreField.IIIFResourceType,MaxWidth,MaxHeight,Document.RepresentativeIdentfier,DocumentRepresentative.DocWidth,DocumentRepresentative.DocHeight,new.Context&format=json&token='
]
# all_galleries_api_url = [
#     'https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=',
#     '&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,Link,CoreField.IIIFResourceType,MaxWidth,MaxHeight,Document.RepresentativeIdentfierj&format=json&token='
# ]
# gallery_api_url = [
#     "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=",
#     "&PackageFields=SystemIdentifier,Title,new.Context,CoreField.IIIFResourceType,MediaEncryptedIdentifier,MaxHeight,MaxWidth,Link&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight,CoreField.IIIFResourceType&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,Link,CoreField.IIIFResourceType,MaxWidth,MaxHeight,DocumentRepresentative.DocHeight,DocumentRepresentative.DocWidth&format=json&token="
# ]
# get_mei = [
#     "https://collections.newberry.org//API/search/v3.0/search?query=SystemIdentifier:","&fields=MediaEncryptedIdentifier,MaxWidth,MaxHeight"
# ]

token = os.getenv('CTX_API_TOKEN')  # Load API token from environment variable
all_gallery_mei = "2KXJ8ZSA9MFDO"
api_data_top_level = fetch_data(all_gallery_mei)

_all_galleries = process_top_level_data(api_data_top_level)

for gallery in _all_galleries:
    gallery_mei = gallery['mei']
    gallery_api_data = fetch_data(gallery_mei)
    process_gallery_data(gallery, gallery_api_data)

    for postcard in gallery['postcards']:
        # if postcard['CoreField.IIIFResourceType'] == 'Canvas': 
        #     if po
        postcard_mei = postcard['mei']
        postcard_api_data = fetch_data(postcard_mei)
        process_postcard_data(postcard, postcard_api_data)

# Save _all_galleries to a JSON file
with open('_all_galleries.json', 'w') as json_file:
    json.dump(_all_galleries, json_file, indent=2)

print('Script executed successfully.')

