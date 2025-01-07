---
title: "Scripting"
description: "Scripting"
---

### ¿Qué es un script?

Un script en Linux es una lista de órdenes (comandos) que se ejecutan secuencialmente. Aunque no necesitan una extensión específica, es común usar `.sh` para identificarlos fácilmente. Los scripts permiten automatizar tareas, como comprimir logs y borrar archivos antiguos.

### Mi primer script

1. Crea un archivo llamado `mi_primer_script.sh` y ábrelo con nano.
2. Añade la línea inicial:
   ```sh  frame="none"
   #!/bin/bash
   ```
3. Escribe el comando `echo` seguido de "Hola Mundo":
   ```sh  frame="none"
   echo "Hola Mundo"
   ```
4. Guarda el archivo y sal de nano.

### Ejecutar un script en Linux

Para ejecutar el script, usa:
```sh  frame="none"
./mi_primer_script.sh
```
o
```sh  frame="none"
bash mi_primer_script.sh
```
Si no funciona, asegúrate de darle permisos de ejecución:
```sh  frame="none"
chmod u+x mi_primer_script.sh
```
