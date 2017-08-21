#!/bin/bash

if ! [ -z "$1" ]; then
  sed -i -e "s/\(<head>\)/<head><base href=\"\/vue-examples\/\"\/>/g" $1
  sed -i -e "s/\(\/static\/\)/\/vue-examples\/static\//g" $1
fi
