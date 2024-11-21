---
title: "Linux - Comandos avanzados"
description: "Linux - Comandos avanzados"
---

## ls -l
![ls command](https://detailed.wordpress.com/wp-content/uploads/2017/10/ls-command3.jpg)

## **Búsqueda de patrones: `grep`**

`grep [opciones] <patrón> [ficheros]`

#### **Opciones más comunes:**
- **`-c`**: Devuelve el número de líneas que contienen el patrón.
- **`-i`**: Ignora las diferencias entre mayúsculas y minúsculas.
- **`-v`**: Devuelve las líneas que **no contienen** el patrón.
- **`-r`**: Busca en un directorio de forma recursiva.
- **`-n`**: Imprime el número de cada línea que coincide.
- **`-e`**: Permite buscar varios patrones en una misma consulta.
- **`-x`**: Requiere que toda la línea coincida con el patrón.
- **`-w`**: Busca exactamente ese patrón (viene de *word*).

:::note[Ejemplos]
- `grep root /etc/passwd`: Busca todas las líneas que contienen el patrón `root` en el archivo `/etc/passwd`.
- `grep -i error /var/log/syslog`: Busca el término `error`, ignorando mayúsculas y minúsculas, en el archivo `/var/log/syslog`.
- `grep -r "main" ./proyectos`: Busca el patrón `main` de forma recursiva en el directorio `./proyectos`.
- `grep -n "usuario" usuarios.txt`: Busca el patrón `usuario` en el archivo `usuarios.txt` e imprime el número de las líneas coincidentes.
:::

## **Ordenar datos: `sort`**

`sort [opciones] [ficheros]`

#### **Opciones más comunes:**
- **`-r`**: Ordena en orden inverso (descendente).
- **`-n`**: Ordena numéricamente (en lugar de alfabéticamente).
- **`-k`**: Especifica la columna por la que ordenar.
- **`-u`**: Elimina líneas duplicadas en el resultado.
- **`-o`**: Guarda el resultado en un fichero (sobrescribe el archivo especificado).
- **`-t`**: Define un delimitador personalizado para separar campos.
- **`-b`**: Ignora los espacios iniciales al ordenar.

:::note[Ejemplos]
- `sort nombres.txt`: Ordena alfabéticamente las líneas del archivo `nombres.txt`.
- `sort -r datos.txt`: Ordena las líneas del archivo `datos.txt` en orden inverso (descendente).
- `sort -n -k 2 puntuaciones.txt`: Ordena el archivo `puntuaciones.txt` numéricamente según la **segunda columna**.
- `sort -t: -k 1 usuarios.csv`: Ordena el archivo `usuarios.csv` por la **primera columna**, utilizando `:` como delimitador de campos.
:::

## **Visualizar partes de un archivo: `head` y `tail`**

`head [opciones] [ficheros]`  
`tail [opciones] [ficheros]`

#### **Opciones más comunes:**
- **`-n [número]`**: Especifica el número de líneas a mostrar (por defecto son 10).
- **`-c [número]`**: Muestra el número de bytes especificados.
- **`-f`** *(solo `tail`)*: Sigue mostrando en tiempo real nuevas líneas añadidas al archivo.

:::note[`head`]
- `head archivo.txt`: Muestra las primeras 10 líneas de `archivo.txt`.
- `head -n 5 archivo.txt`: Muestra las primeras 5 líneas de `archivo.txt`.
- `head -c 20 archivo.txt`: Muestra los primeros 20 bytes del archivo `archivo.txt`.
:::

:::note[`tail`]
- `tail archivo.txt`: Muestra las últimas 10 líneas de `archivo.txt`.
- `tail -n 15 archivo.txt`: Muestra las últimas 15 líneas de `archivo.txt`.
- `tail -f log.txt`: Sigue mostrando en tiempo real las nuevas líneas que se añadan al archivo `log.txt`.
:::

## **Contar líneas, palabras y caracteres: `wc`**

`wc [opciones] [ficheros]`

#### **Opciones más comunes:**
- **`-l`**: Cuenta solo el número de líneas.
- **`-w`**: Cuenta solo el número de palabras.
- **`-c`**: Cuenta solo el número de bytes (tamaño del archivo).
- **`-m`**: Cuenta el número de caracteres (incluyendo espacios).
- **`-L`**: Muestra la longitud de la línea más larga.

:::note[Ejemplos]
- `wc archivo.txt`: Muestra el número total de líneas, palabras y bytes del archivo `archivo.txt`.
- `wc -l archivo.txt`: Cuenta únicamente las líneas del archivo `archivo.txt`.
- `wc -w texto.txt`: Cuenta las palabras contenidas en el archivo `texto.txt`.
- `wc -c datos.csv`: Muestra el tamaño en bytes del archivo `datos.csv`.
- `wc -L script.sh`: Muestra la longitud de la línea más larga en el archivo `script.sh`.
:::

:::caution[Actividad]
- Linux avanzado
:::