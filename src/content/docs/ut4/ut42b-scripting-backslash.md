---
title: "Básicos"
description: "Comas, contrabarra, echo y read"
---

## Comas y contrabarra

- La contrabarra sirve para escapar (quitar la función especial) un carácter especial. Ej: \*, \(, \)
- El texto siempre irá entre comillas simples o dobles.
- Un texto entre comillas simples ignorará todos los caracteres especiales.
- Un texto entre comillas dobles ignorará todos los caracteres especiales excepto $, ` y \
- La sintaxis $(orden) o `orden` permiten sustituir una orden por su salida.

```bash
echo "Hoy es date"       # Muestra: Hoy es date
echo "Hoy es `date`"     # Muestra: Hoy es [fecha actual]
echo "Hoy es $(date)"    # Muestra: Hoy es [fecha actual]

name=pepito 
echo hola $name  #hola pepito
echo "hola $name"  #hola pepito
echo 'hola $name'  #hola $name (no expande la variable)
echo hola $name, esto es un *  #hola pepito, esto es un *
echo 'hola $name, esto es un *'  #hola $name, esto es un * (no expande la variable)
echo "hola $name, esto es un *"  #hola pepito, esto es un *
```

## echo
Comando para la impresión de un texto en pantalla

```js {3-3}
echo "¿Cansado de estudiar? Recuerda que incluso Batman necesitó entrenamiento." 

# ¿Cansado de estudiar? Recuerda que incluso Batman necesitó entrenamiento.
```

- **-n**     elimina el salto de línea del echo
```js {5-6}
#!/bin/bash
echo -n "Hola"
echo " ¿cómo estas?" echo "bien gracias"

# Hola ¿cómo estás?
# bien gracias
```

- **-e**     activa la interpretación de caracteres precedidos por el carácter de escape

```js {4-5}
#!/bin/bash
echo -e "\nhola\nadiós\n"

# hola
# adiós
```

## read
Permite que el usuario pueda introducir valores para las variables por teclado

```js
#!/bin/bash
echo “Hola, ¿como te llamas?”
read nombre
echo “tu has escrito $nombre”
```

- Cuando el usuario escriba y le de a _enter_, se guardará el valor de la variable nombre. 
- Como en este caso vamos a **“escribir”** la variable **no usamos $**.

:::tip
- Recuerda que la variable se crea y existe solo dentro del script.
- Si creamos la variable en la consola, en la _shell_, sí que podremos usarla hasta cerrar la consola
:::

#### Parámetros

| **Opción** | **Descripción**                                                                                      | **Ejemplo**                                                                 |
|------------|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| -s         | No hace eco en pantalla de la respuesta escogida (p.e. contraseñas)                                   | `read -s password`                                                          |
| -nN        | El número máximo de caracteres que se pueden introducir será de N                                     | `read -n5 input`                                                            |
| -p "frase" | Permite incluir una frase aclaratoria (para poner la pregunta “¿cuál es tu nombre?” nombre (variable) en la misma línea) | `read -p "¿Cuál es tu nombre? " nombre`                                     |
| -tT        | Acepta una entrada por un tiempo máximo de T segundos                                                 | `read -t10 respuesta`                                                       |

:::note
Podemos hacer un read con más de una variable a la vez (separadas por espacio). 
- Lo escrito por el usuario se repartirá entre las variables usando el espacio como separador. 
  - Si hay más variables que valores, las últimas quedan sin valor. 
  - Si hay más valores que variables, la última variable se queda con el texto restante
- Para mostrar varias líneas de texto por pantalla, podríamos usar varios echo o printf, o jugar con **\n** (salto de línea) y **\t** (tabulador) dentro de una cadena.
:::

```js
#!/bin/bash
read -p “Hola, ¿cómo te llamas?” var1 var2 var3 var4
echo “tu has escrito:”
echo “$var1”
echo “$var2”
echo “$var3”
echo “$var4”
```
