---
title: "BREAK & CONTINUE"  
description: "Scripting - BREAK & CONTINUE"  
---

El uso de break y continue no se considera una buena práctica de  programación. Se debe evitar el abuso de ellos, pero en alguna ocasión pueden resultar muy útiles:

## BREAK
Fuerza la salida inmediata, sin comprobar nada y sin terminar de ejecutar las acciones posteriores, de los bucles while, until o for. Nos permite dar por finalizado el bucle (con break X podemos romper y salir de X bucles)

```bash "break"
#!/bin/bash
read -p "Escribe un número del 1 al 100  " num 
for ((x=1;x<100;++))
do
  echo $x
  if [ $x -eq $num ]
  then
    echo "ya he llegado al número $num"
    break
  fi
done
echo "El programa no ha terminado" echo "Solo ha salido del bucle for"
```

## CONTINUE
Permite saltar las instrucciones siguientes a este comando hasta la siguiente iteración

```bash "continue"
#!/bin/bash
echo "Mostramos los números del 1 al 10 divisibles por:  " $1
for ((x=1;x<=10;x++))
do
  let resto=$x%$1
  if [ $resto -ne 0 ]
  then
    #Los números no divisibles no deben salir por pantalla
    continue #Ya no se ejecutan más comandos -> no se escribe el “$x”
  fi
  echo "$x" 
done
```

## EXIT 
Sale del programa, estés donde estés _(no confundir con break que solo sale del bucle pero continua el programa)_.

## SLEEP
Detiene el programa durante x segundos.

## DEPURACIÓN
La depuración o debugging de  scripts es el proceso de identificar y  corregir errores de programación.
- Hay 2 formas:
  - -v: Muestra cada línea completa del  script antes de ser ejecutada
  - -x: Muestra cada línea abreviada del  script antes de ser ejecutada
- Podemos aplicar ambos métodos modificando la primera línea del script o cambiando las opciones de ejecución de la Shell
- bash –v o bash –x + nombre script.