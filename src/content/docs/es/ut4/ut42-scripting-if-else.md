---
title: "IF/ELSE"
description: "Scripting - if/else"
---

El **if** es una estructura condicional en programación que permite ejecutar un bloque de código solo si se cumple una condición específica.

```js
if [[ condición ]]
then
  acciones
fi
```

- **if** abre la estructura y **fi** la cierra
- [[ condición ]] 
  - verdadero → ejecuto “acciones” 
  - Falsoo → no ejecuto nada
- [[ expresión ]] → Permite el uso de expresiones regulares, no hay que entrecomillar las variables, ni escapar caracteres especiales.
```d2 elk
direction: right
A: Inicio
B: Condición
B.shape: diamond
C: Acciones
D: Fin

A -> B
B -> C: Verdadero
B -> D: Falsoo
C -> D
```

:::note[Cosas a tener en cuenta]
- Hay que dejar un espacio en blanco entre los corchetes.
- Podemos hacer condiciones usando variables, haciendo uso del $, puesto que queremos comparar su contenido.
- Es recomendable tabular las acciones para que quede más limpio el código.
- Siempre debe terminar la estructura con fi.
:::

## IF/ELSE
Podemos crear condiciones con alternativas, donde si no se cumple una condición se realiza otra lista de acciones:

```js
if [[ condición ]]
then
  acciones 1
else
  acciones 2
fi
```


```d2
direction: right
A: Inicio
B: Condición
B.shape: diamond
C: Acciones 1
D: Acciones 2
E: Fin

A -> B
B -> C: Verdad
B -> D: Falso
C -> E
D -> E

```

> La sección **else** es opcional

## Anidar

Se pueden anidar muchas condiciones diferentes con el elemento **elif**:

```js
if [ condición ]
then
    acciones 1
elif [ condición ]
then
    acciones 2
elif [ condición ]
then
    acciones 3
else
    acciones 4
fi
```

```d2
direction: right
A: Inicio
B: Condición 1
B.shape: diamond
C: Acciones 1
D: Condición 2
D.shape: diamond
E: Acciones 2
F: Condición 3
F.shape: diamond
G: Acciones 3
H: Acciones 4
I: Fin

A -> B
B -> C: Verdad
B -> D: Falso
D -> E: Verdad
D -> F: Falso
F -> G: Verdad
F -> H: Falso
C -> I
E -> I
G -> I
H -> I

```
