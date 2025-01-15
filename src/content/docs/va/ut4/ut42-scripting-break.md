---
title: "BREAK & CONTINUE"  
description: "Scripting - BREAK & CONTINUE"  
---

L'ús de break i continue no es considera una bona pràctica de programació. S'ha d'evitar l'abús d'ells, però en alguna ocasió poden resultar molt útils:

## BREAK
Força la sortida immediata, sense comprovar res i sense acabar d'executar les accions posteriors, dels bucles while, until o for. Ens permet donar per finalitzat el bucle (amb break X podem trencar i sortir de X bucles)

```bash "break"
#!/bin/bash
read -p "Escriu un número de l'1 al 100  " num 
for ((x=1;x<100;++))
do
  echo $x
  if [ $x -eq $num ]
  then
    echo "ja he arribat al número $num"
    break
  fi
done
echo "El programa no ha acabat" echo "Només ha sortit del bucle for"
```
## CONTINUE
Permet saltar les instruccions següents a aquest comandament fins a la següent iteració

```bash "continue"
#!/bin/bash
echo "Mostrem els números de l'1 al 10 divisibles per:  " $1
for ((x=1;x<=10;x++))
do
  let resta=$x%$1
  if [ $resta -ne 0 ]
  then
    #Els números no divisibles no han de sortir per pantalla
    continue #Ja no s'executen més comandaments -> no s'escriu el “$x”
  fi
  echo "$x" 
done
```

## EXIT 
Surt del programa, estigues on estigues _(no confondre amb break que només surt del bucle però continua el programa)_.

## SLEEP
Atura el programa durant x segons.

## DEPURACIÓ
La depuració o debugging de scripts és el procés d'identificar i corregir errors de programació.
- Hi ha 2 formes:
  - -v: Mostra cada línia completa del script abans de ser executada
  - -x: Mostra cada línia abreujada del script abans de ser executada
- Podem aplicar ambdós mètodes modificant la primera línia del script o canviant les opcions d'execució de la Shell
- bash –v o bash –x + nom script.
