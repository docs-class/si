---
title: "Operadores"
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

