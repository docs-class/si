---
title: "Variables"
description: "Variables"
---

## VARIABLES

- Son las variables que creamos nosotros y siempre van en minúsculas, para diferenciarlas de las variables de entorno que van en mayúsculas.
- Las variables pueden empezar por letra o `_` 
  - y pueden incluir letras, números o el carácter `_`.
- Tenemos 2 tipos de variables:
  - **Locales o del shell** visibles con `set`: En este caso vemos todas las variables. Usad el comando con `| less` o `grep`, porque el fichero es muy largo.
  - **Globales o de entorno** visibles con `env`: En este caso solo vemos las variables de entorno.
- Para ver el valor de una variable SIEMPRE pondremos `$VARIABLES`.
- Las operaciones con variables son:
  - **Asignar valor**: `variable=valor` (¡OJO! El igual va sin espacios).
  - **Recuperar valor**: `echo $variable` o en expresiones más largas `${variable}`.
    - Ejemplo: `A=Jose; echo "Hola $A, ¿qué tal?"`.
  - **Obtener longitud (nº caracteres)**: `echo ${#variable}` (las llaves son necesarias).
  - **Eliminar**: `unset variable`.
  - **Definir como solo lectura**: `readonly variable`.
- Las variables con el mismo nombre se sobrescriben:
  ```sh  frame="none"
  apellido="López"
  apellido="Pérez"
  echo $apellido  # Pérez
  ```
- Podemos concatenar valores en las variables:
  ```sh  frame="none"
  apellidos="López"
  apellidos="$apellidos Pérez"
  echo $apellidos  # López Pérez
  ```
- Las variables que creamos en el script se quedan en el script y no las veremos desde el terminal. Estas variables existirán mientras se ejecute el script, después dejarán de existir.
- Si creamos una variable localmente, en la terminal, será visible en la shell en la que la hemos creado. Y dejará de existir cuando cerremos la consola.
