---
title: "FOR IN"  
description: "Scripting - FOR IN"  
---

Un bucle **for in** en bash es una estructura de control (de repetición) que permite ejecutar un conjunto de comandos repetidamente para cada elemento en una lista o un rango de valores.

```bash
#!/bin/bash
for variable in lista
do
  instrucciones
done
```
:::note[Aclaraciones]
- La variable toma en cada  iteración uno de los valores que hay en la lista, de forma ordenada
- Se puede emplear como lista la salida de una orden
- **¡OJO!** La variable en el for va sin el $ porque sobrescribimos el valor en cada iteración, no queremos mostrarlo.
- La variable lista si que va con $ porque queremos leer el valor en cada iteración.
:::

### Ejemplo 1 - lista

```bash
#!/bin/bash
for variable in “1 2 3 4 Hola Adiós”
do
  echo valor: $variable 
done
```


:::tip[Separador]

Podemos cambiar el separador por defecto (espacio)

- IFS es una variable de entorno.
- Salto de línea IFS=$’\n’ 
- Tabulador IFS=$’\t’
:::

### Ejemplo 2 - cambio de separador y comando como entrada

```bash
#!/bin/bash
 #Script: Toma el primer archivo listado en el directorio actual y muestra su nombre original y su nombre modificado con guiones bajos en lugar de espacios. 
IFS=$'\n'
for variable in `ls -l | tr -s ' ' | head -n2 | tail –n1 | cut -d ' ' `
do
  FicheroOriginal=$variable
  echo $FicheroOriginal
  NuevoFichero=`echo $FicheroOriginal | tr ' ' '_'` echo $NuevoFichero
done
```

### Ejemplo 3 - argumentos

```js
#!/bin/bash
for numero in $*
do
  echo “ARGUMENTO: $numero” 
done
```