#!/bin/sh
echo "Generando documentación..."
if ! [ -x "$(command -v jsdoc)" ]; then
	echo "\n ¡¡ ERROR: No se tiene instalado jsdoc !! \n\n" >&2
	exit 1
fi

if [ -d ./html ]; then 
	rm -rf ./html
fi

jsdoc -c jsdoc.conf.json
echo "\n Documentación generada en carpeta ./html\n"

if ! [ -x "$(command -v open)" ]; then
	exit 1
fi
open ./html/index.html