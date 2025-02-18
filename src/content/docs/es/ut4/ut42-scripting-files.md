---
title: "Ficheros"
description: "Scripting - Files"
---

# Operadores

| **Operador** | **Descripción**                                      |
|--------------|------------------------------------------------------|
| -e           | Verdadero si el fichero/directorio existe            |
| -d           | Verdadero si el path dado es un directorio           |
| -f           | Verdadero si el path dado es un archivo              |
| -r           | Verdadero si el fichero tiene permiso de lectura     |
| -w           | Verdadero si el fichero tiene permiso de escritura   |
| -x           | Verdadero si el fichero tiene permiso de ejecución   |
| -s           | Verdadero si el fichero tiene un tamaño mayor de 0 (no está vacío) |
| -O           | Verdadero si eres el propietario                     |
| -G           | Verdadero si perteneces al grupo propietario         |

```bash
fichero=”copia.txt”
if [[ -e $fichero ]]
then
  Echo “$fichero existe, pero no sé si es un fichero o un directorio” 
fi
```


## Lectura de un fichero con while

```bash
while IFS= read -r line
do
  echo "$line"
done < input_file
```

Para leer un archivo línea por línea, usamos el comando `read` con el nombre del archivo como argumento, en este caso, `"input_file"`.  El comando `read` asigna cada línea leída a la variable `línea`. El bucle `while` continúa hasta que se hayan procesado todas las líneas del archivo. 

Para mantener los espacios en blanco iniciales y finales de cada línea, establecemos el separador de campo interno (IFS) como una cadena nula. Este comportamiento es el predeterminado del comando `read`. 


## Lectura de un fichero con For

```bash
for line in $(cat input_file); do
  echo "$line"
done
```

En este caso, el comando `cat input_file`  imprime el contenido del archivo "input_file" en la salida estándar. El bucle `for` itera sobre cada línea del archivo, asignando cada una a la variable `line`.  Luego, se imprime la línea con `echo "$line"`. 