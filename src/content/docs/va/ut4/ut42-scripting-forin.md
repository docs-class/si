---
title: "FOR IN"  
description: "Scripting - FOR IN"  
---

Un bucle **for in** en bash és una estructura de control (de repetició) que permet executar un conjunt de comandos repetidament per a cada element en una llista o un rang de valors.

```bash
#!/bin/bash
for variable in llista
do
  instruccions
done
```
:::note[Aclaracions]
- La variable pren en cada iteració un dels valors que hi ha en la llista, de manera ordenada.
- Es pot utilitzar com a llista l'eixida d'una ordre.
- **Compte!** La variable en el for va sense el $ perquè sobrescrivim el valor en cada iteració, no volem mostrar-lo.
- La variable llista sí que va amb $ perquè volem llegir el valor en cada iteració.
:::

### Exemple 1 - llista

```bash
#!/bin/bash
for variable in “1 2 3 4 Hola Adéu”
do
  echo valor: $variable 
done
```

:::tip[Separador]

Podem canviar el separador per defecte (espai).

- IFS és una variable d'entorn.
- Salt de línia IFS=$’\n’ 
- Tabulador IFS=$’\t’
:::

### Exemple 2 - canvi de separador i comandament com a entrada

```bash
#!/bin/bash
IFS=$'\n'
for variable in `ls -l | tr -s ' ' | head -n2 | tail –n1 | cut -d ' ' `
do
  FitxerOriginal=$variable
  echo $FitxerOriginal
  NouFitxer=`echo $FitxerOriginal | tr ' ' '_'` echo $NouFitxer
done
```
:::note[Aclaracions]
- A més de canviar el separador per defecte, podem eliminar els espais dels noms dels fitxers.
- En aquest cas ho fem només per a la línia 2, si volem que recòrrega tot el ls –l, llevem la part de head –n2 en avant.
- Veiem que l'ordre es pot convertir en la llista que recòrre la variable.
- **-f 9-** aquesta opció del cut significa que et quedes des del camp 9 del fitxer fins al final.
:::

### Exemple 3 - arguments

```js
#!/bin/bash
for número in $*
do
  echo “ARGUMENT: $número” 
done
```