---
title: "Parámetros"
description: "Scripting - Parámetros"
---

### Paso de parámetros

Un argumento es un parámetros que se le pasa a una función o a un programa. Es decir, son variables de entrada. Puede haber más de uno o ninguno.

```js
./miscript.sh arg1 arg2 arg3 … argn
```
```js
./soyUnScript.sh 1 hola 2 adiós esto es un argumento abc 100
```

| **Argumento** | **Descripción**                | **Resultado**                          |
|---------------|-------------------------------|----------------------------------------|
| $1            | Argumento nº1                  | 1                                      |
| $2            | Argumento nº2                  | hola                                   |
| $3            | Argumento nº3                  | 2                                      |
| $4            | Argumento nº4                  | adiós                                  |
| $5            | Argumento nº5                  | esto                                   |
| ${10}         | Argumento nº10                 | 100                                    |
| $0            | Es el nombre del script        | soyUnScript.sh                         |
| $* o $@       | Una lista con todos los argumentos | 1 hola 2 adiós esto es un argumento abc 100 |
| $#            | Número de argumentos           | 10                                     |

  
  > Los argumentos van separados por espacios y en caso de insertar un metacaracter, como *, es necesario escaparlo → `./soyUnScript.sh \*`
