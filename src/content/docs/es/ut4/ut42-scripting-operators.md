---
title: "Operadores & parámetros"
description: "Scripting - Operadores"
---

### Cadenas De Texto/ Variables

Aquí tienes la tabla con ejemplos usando doble corchete para no tener que entrecomillar las variables:

| **Operador**     | **Descripción**                                                                                      | **Ejemplo**                                      |
|------------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| =                | Verdadero si es igual                                                                                | `if [[ $a = $b ]]`                               |
| !=               | Verdadero si son diferentes                                                                          | `if [[ $a != $b ]]`                              |
| =~               | Para comparar con expresiones regulares                                                              | `if [[ $a =~ ^[0-9]+$ ]]`                        |
| -n               | Verdadero si la variable no está vacía                                                               | `if [[ -n $a ]]`                                 |
| -z               | Verdadero si la variable está vacía                                                                  | `if [[ -z $a ]]`                                 |
| [[ $variable ]]  | Comprueba si la variable existe y contiene un valor que no sea vacío                                 | `if [[ $variable ]]`                             |


```js
A=“Fer”
if [[ $A ]] then
echo “La variable A no está vacía”
fi
```

### Aritméticos

Comparación numérica **(entre números)**

| **Operador** | **Descripción**           |
|--------------|---------------------------|
| -eq          | Igual a                   |
| -ne          | No igual a                |
| -gt          | Mayor que                 |
| -ge          | Mayor o igual que         |
| -lt          | Menor que                 |
| -le          | Menor o igual que         |

# Ficheros

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

```js
fichero=”copia.txt”
if [[ -e $fichero ]]
then
  Echo “$fichero existe, pero no sé si es un fichero o un directorio” 
fi
```

### Expresiones Lógicas

| **Operador** | **Descripción**                                                                                      |
|--------------|------------------------------------------------------------------------------------------------------|
| !            | Operador NOT, niega lo siguiente que le sigue                                                        |
| -a, &&       | Operador AND (sólo es verdadero si las 2 opciones son verdaderas. Si hay muchas opciones dejamos de comprobar en cuanto una sea falsa) |
| -o, \|\|     | Operador OR (es verdadero si una de las 2 opciones es verdadera. Si hay muchas opciones dejamos de comprobar en cuanto una sea true) |


#### Combinar varios operadores
- **num1 -eq num2 && num1 -gt num3 :** Comprueba si num1 es igual a num2 y además mayor que num3.
- **-r arch1 || -x arch1 :** Comprueba si arch1 tiene permisos de lectura o de ejecución. 
- **! -s arch1 :** Comprueba que el fichero arch1 no contiene nada

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
