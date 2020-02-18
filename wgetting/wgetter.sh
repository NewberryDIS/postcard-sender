#!/bin/bash
    # wget https://ia803001.us.archive.org/25/items/nby_LL5282/nby_LL5282_scandata.xml

source postcardIds-NoLL.sh
for id in "${itemsNoLL[@]}"
do
    wget https://archive.org/25/items/${id}/${id}\_scandata.xml
    pageNo=$(grep -m1 "<page leafNum=" $id\_scandata.xml | cut -c20)
    echo $id",http://publications.newberry.org/postcard-sender/index.php?id="$id"&p="$pageNo >> bigollist.csv
    echo "['"$id"','"$pageNo"']," >> sampleset.js
    rm -v $id"_scandata.xml"
done