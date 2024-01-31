import argparse
import requests
import xml.etree.ElementTree as ET
from dotenv import load_dotenv, find_dotenv
import os

parser = argparse.ArgumentParser(description='Login to Newberry API and get token')
parser.add_argument('username', type=str, help='Newberry API username')
parser.add_argument('password', type=str, help='Newberry API password')
args = parser.parse_args()

url = f'https://collections.newberry.org/API/Authentication/v2.0/Login?Login={args.username}&Password={args.password}'

response = requests.post(url)

root = ET.fromstring(response.content)
token = root.find('.//Token').text

print(f'Token: {token}')

load_dotenv(find_dotenv())

# Write the new API key to the .env file
with open(find_dotenv(), 'r') as f:
    lines = f.readlines()

with open(find_dotenv(), 'w') as f:
    for line in lines:
        if line.startswith('CTX_API_TOKEN'):
            f.write(f'CTX_API_TOKEN="{token}"\n')
        else:
            f.write(line)

# Print the new API key
print(f'New API key: {token}')
