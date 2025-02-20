---
title: "Fitxers"
description: "Scripting - Fitxers"
---

# Operadors

| **Operador** | **Descripció**                                      |
|--------------|------------------------------------------------------|
| -e           | Vertader si el fitxer/directori existeix            |
| -d           | Vertader si el camí donat és un directori           |
| -f           | Vertader si el camí donat és un fitxer              |
| -r           | Vertader si el fitxer té permís de lectura          |
| -w           | Vertader si el fitxer té permís d'escriptura        |
| -x           | Vertader si el fitxer té permís d'execució          |
| -s           | Vertader si el fitxer té una mida major de 0 (no està buit) |
| -O           | Vertader si eres el propietari                      |
| -G           | Vertader si pertanys al grup propietari             |

```bash
fitxer=”copia.txt”
if [[ -e $fitxer ]]
then
  Echo “$fitxer existeix, però no sé si és un fitxer o un directori” 
fi
```

## Lectura d'un fitxer amb while

```bash
while IFS= read -r line
do
  echo "$line"
done < input_file
```

Per a llegir un fitxer línia per línia, usem l'ordre `read` amb el nom del fitxer com a argument, en aquest cas, `"input_file"`. L'ordre `read` assigna cada línia llegida a la variable `line`. El bucle `while` continua fins que s'hagen processat totes les línies del fitxer.  

Per a mantenir els espais en blanc inicials i finals de cada línia, establim el separador de camp intern (IFS) com una cadena nul·la. Aquest comportament és el predeterminat de l'ordre `read`.  

## Lectura d'un fitxer amb For

```bash
IFS=$'\n'
for line in $(cat input_file); do
  echo "$line"
done
```

En aquest cas, l'ordre `cat input_file` imprimeix el contingut del fitxer `"input_file"` en l'eixida estàndard. El bucle `for` itera sobre cada línia del fitxer, assignant cada una a la variable `line`. Després, es mostra la línia amb `echo "$line"`.  
