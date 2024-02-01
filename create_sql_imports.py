import csv
import json

def create_csv_files(json_file_path):
    with open(json_file_path, 'r') as json_file:
        all_galleries = json.load(json_file)
    print(all_galleries[0]['title'])
    # Create CSV file for postcards
    postcards_header = ["title", "mei", "image", "imageTitle", "width", "height", "gallery"]
    with open('imports/postcards.csv', 'w', newline='\n') as postcards_file:
        postcards_writer = csv.writer(postcards_file, lineterminator="\n")
        postcards_writer.writerow(postcards_header)
        
        for gallery in all_galleries:
            for postcard in gallery["postcards"]:
                print(postcard['title'])
                for key in postcards_header:
                    print(key)
                    print(postcard[key])
                postcards_writer.writerow([postcard[key] for key in postcards_header])


    pcard_gallery_header = ["mei", "gallery"]
    with open('imports/pcard_gallery.csv', 'w', newline='\n') as pcard_gallery_file:
        pcard_gallery_writer = csv.writer(pcard_gallery_file, lineterminator="\n")
        pcard_gallery_writer.writerow(pcard_gallery_header)
        
        for gallery in all_galleries:
            for postcard in gallery["postcards"]:
                print(postcard['title'])
                for key in pcard_gallery_header:
                    print(key)
                    print(postcard[key])
                pcard_gallery_writer.writerow([postcard[key] for key in pcard_gallery_header])


    # Create CSV file for galleries
    galleries_header = ["title", "slug", "mei", "context", "image", "imageTitle", "width", "height"]
    with open('imports/galleries.csv', 'w', newline='\n') as galleries_file:
        galleries_writer = csv.writer(galleries_file, lineterminator="\n")
        galleries_writer.writerow(galleries_header)
        
        for gallery in all_galleries:
            galleries_writer.writerow([gallery[key] for key in galleries_header])

# Example usage
create_csv_files('./_all_galleries.json')

