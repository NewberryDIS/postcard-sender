#!/bin/zsh

# python _get_ctx_token.py $CTX_UN $CTX_PW
python _get_ctx_api_data.py
python _ctx_make_json.py
rm src/lib/postcards.json && mv postcards.json src/lib/
rm src/lib/galleries.json && mv galleries.json src/lib/
echo "ya done good, update script."
