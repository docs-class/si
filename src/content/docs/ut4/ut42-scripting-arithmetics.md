---
title: "Operaciones Aritméticas"
description: "Operaciones Aritméticas"
---

Es  posible  realizar  operaciones  aritméticas  en  la  shell  empleando operadores, los más habituales son:
- \+ (suma)
- \- (resta)
- \* (multiplicación)
- / (división)
- % (módulo)
- **(exponenciación)
- ++ (sumo 1 a la variable)
- \- \- (resto 1 a la variable)

## Ejecución

Podemos emplear varias opciones para sustituir una expresión aritmética  por su resultado:
1.  Usando dólar y doble paréntesis $((expresion))
2.  Usando dólar y corchete $[expresion]
3.  Usando el comando “let” -> `let var=expresion`
4.  Usando   el   comando   “expr”   (este   comando   es   más   antiguo   y   tiene   el inconveniente de que hay que escapar los caracteres especiales como *,<,>,(,), etc)
   

## let
El comando **let**, existe en bash, pero no en shell. Esto pasa con este y otros comandos, así que siempre ejecutaremos los scripts en bash.

```
- suma=$(( $x + $y ))   # si x=4 e y=5, suma=9 -> doble paréntesis
- suma=$[ $x + $y ]     # si x=4 e y=5, suma=9 -> corchetes
- let “mult=$x * $y”    # Asignamos valor a variable
- let “mult=$mult * 3”  # Asignamos valor a la misma variable

- let mult++     # Ejemplo de incrementar en 1 el valor de mult -> let 
- let mult--    # Ejemplo de decrementar en 1 el valor de mult  -> let
- expr 2 \* 3   # tenemos que escapar el * -> expr
- expr \( 2 + 2 \) \* 3 # Tenemos que escapar los paréntesis y el * -> expr
- res=`expr 3 + 3`  # asignamos resultado de la operación a la variable res
```

## expr
  Por contra, **expr** es útil para comprobar longitud de cadena de caracteres y sustraer subcadenas, cosa que con el comando let no se puede hacer porque no opera con cadenas, solo con números.
- `expr length “Hola Mundo”` → Este comando devuelve 10, que es la longitud de la cadena pasada como parámetro. Tened en cuenta que se contabiliza cada espacio en blanco como una letra.
- `expr substr “Hola Mundo” 4 4` → Desde el carácter n.º 4 (a) devuelve los siguientes 4 caracteres:
“a Mu”
- `expr substr “Hola Mundo” 6 5` → “Mundo”. Desde el carácter número 6, devuelve los siguientes 5 caracteres.

## bc (basic calculator)
- Consiste en una calculadora que nos permite trabajar con decimales: `operacion=$(echo "7.5 * 12.5" | bc)`
- Las comillas invertidas devuelven el valor de la operación o del comando.
- Para sacar todos los posibles decimales usamos la opción `-l`: `operacion=$(echo "7.5 * 12.5" | bc -l)`
- Si queremos cierto número de decimales usamos la opción `scale`: `operacion=$(echo "scale=3; 7.5 * 12.5" | bc)`
