---
title: "Scripting"
description: "Scripting"
---

:::note[Connexión con el currículum]
RA: 4 - CE: e, f, g, h
:::

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

### Ejecutar un script en Linux en segundo plano

Para ejecutar un script en segundo plano, aunque sirve para cualquier comando en bash, puedes usar el operador `&` al final del comando. Por ejemplo:
```bash
./mi_script.sh &
```
Esto ejecutará `mi_script.sh` en segundo plano y te devolverá el control de la terminal inmediatamente.

| Comando | Descripción |
|---------|-------------|
| `jobs` | Muestra una lista de trabajos con sus respectivos números de trabajo. |
| `fg %1` | Trae el trabajo número 1 al primer plano. |
| `Ctrl+C` | pasa a segundo plano el trabajo que está en primer plano. comprobar con ´jobs´ |
| `bg %1` | Reanuda el trabajo en segundo plano. |
| `kill %1` | Termina el trabajo número 1. |


:::danger[Consideraciones]
- El script se tiene que ejecutar desde la misma carpeta donde está el fichero, si no tendremos que poner la ruta absoluta.
- El script se sigue ejecutando aunque haya un error.
- Si ponemos un exit en el script, éste se saldrá de la ejecución aunque haya más comandos detrás. La orden exit permite finalizar un script especificando el código de  salida. Si no hacemos uso de exit, el resultado de un script será el de **la última orden que se ejecutó en el script**.
- $? muestra el valor del resultado de lo último que he ejecutado, indicando si ha sido correcto o no. Por convenio, el valor 0 indicará que ha finalizado correctamente y un  valor distinto a 0 que no ha finalizado correctamente.
  - Si OK $? = 0
  - Si NOK $? != 0
:::