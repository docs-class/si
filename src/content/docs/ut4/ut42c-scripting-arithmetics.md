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

Podemos emplear varias opciones para sustituir una expresión aritmética por su resultado:
1. Usando dólar y doble paréntesis: `$((expresion))`
2. Usando doble paréntesis como sentencia: `((expresion))`
3. Usando el comando `let`: `let "var=expresion"`
   

## let
El comando **let** existe en `bash`, pero no en `sh`. Por eso, estos scripts deben ejecutarse con Bash.

```
- suma=$(( $x + $y ))   # si x=4 e y=5, suma=9 -> doble paréntesis
- ((suma = x + y))      # alternativa recomendada
- let "mult=x * y"      # Asignamos valor a variable
- let "mult=mult * 3"   # Asignamos valor a la misma variable
- let "res=(x + y) * 3" # Paréntesis de agrupación dentro de la expresión

- let mult++     # Ejemplo de incrementar en 1 el valor de mult -> let 
- let mult--    # Ejemplo de decrementar en 1 el valor de mult  -> let
```

## expr
**expr** se usa hoy sobre todo para operaciones de texto (no para aritmética en scripts nuevos).
- `expr length "Hola Mundo"` → Devuelve 10, que es la longitud de la cadena (incluyendo espacios).
- `expr substr "Hola Mundo" 4 4` → Desde el carácter n.º 4 devuelve los siguientes 4 caracteres: `a Mu`.
- `expr substr "Hola Mundo" 6 5` → Devuelve `Mundo`.

## bc (basic calculator)
- Consiste en una calculadora que nos permite trabajar con decimales: `operacion=$(echo "7.5 * 12.5" | bc)`
- Para sustitución de comandos, usa `$(...)`.
- Para sacar todos los posibles decimales usamos la opción `-l`: `operacion=$(echo "7.5 * 12.5" | bc -l)`
- Si queremos cierto número de decimales usamos la opción `scale`: `operacion=$(echo "scale=3; 7.5 * 12.5" | bc)`


:::caution[actividad]
- A4.2.1 Scripts básicos (Linux) - script4211.sh
:::