#!/bin/bash

# 1. add base tag:
# <head> -> <head><base href="/vue-examples/"/>
# 2. replace root with base-path:
# / -> /vue-examples/

if ! [ -z "$1" ]; then
  sed -i -e "s/\(<head>\)/<head><base href=\"\/vue-examples\/\"\/>/g" $1
  sed -i -e "s/\(\/static\/\)/\/vue-examples\/static\//g" $1
fi
