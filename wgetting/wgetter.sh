#!/bin/bash
source postcardIds.sh
for id in "${itemsSix[@]}"
# started at 3780 --- starting the big one
do
    wget https://ia803001.us.archive.org/25/items/${id}/${id}\_scandata.xml
    pageNo=$(grep -m1 "<page leafNum=" ~/Downloads/nby_LL5282_scandata.xml | cut -c20)
    echo $id",http://publications.newberry.org/postcard-sender/index.php?id="$id"&p="$pageNo >> bigollist.csv
    rm $id"_scandata.xml"
done