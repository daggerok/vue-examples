#!/bin/bash

FILE="$1"
BASE_HREF="$2"
COMMAND="$3"

if ! [ -z "$FILE" ] || ! [ -z "$BASE_HREF" ] || ! [ -z "$COMMAND" ] ; then
  if [ -f "$FILE" ]; then
    if [ "add" = "$COMMAND" ]; then
      sed -i -e "s/<head>/<head><base href=\"\/$BASE_HREF\/\"\/>/g" "$FILE"
    fi
    if [ "remove" = "$COMMAND" ]; then
      sed -i -e "s/<head><base href=\"\/$BASE_HREF\/\"\/>/<head>/g" "$FILE"
    fi
    rm -rf "$FILE-e"
  fi
fi
