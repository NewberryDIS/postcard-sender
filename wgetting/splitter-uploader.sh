#!/bin/bash
mkdir splitfiles
split -l 1000 metadata.csv splitfiles/metadata- --additional-suffix=.csv
for f in splitfiles/*.csv
do
    sed -i '1iidentifier,notes' $f
    # ./ia ....
done