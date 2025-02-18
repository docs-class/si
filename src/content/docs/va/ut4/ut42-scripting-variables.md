---
title: "Variables"
description: "Variables"
---

## VARIABLES

- Són les variables que creem nosaltres i sempre van en minúscules, per diferenciar-les de les variables d'entorn que van en majúscules.
- Les variables poden començar per lletra o `_` 
  - i poden incloure lletres, números o el caràcter `_`.
- Tenim 2 tipus de variables:
  - **Locals o del shell** visibles amb `set`: En aquest cas veiem totes les variables. Feu servir el comandament amb `| less` o `grep`, perquè el fitxer és molt llarg.
  - **Globals o d'entorn** visibles amb `env`: En aquest cas només veiem les variables d'entorn.
- Per veure el valor d'una variable SEMPRE posarem `$VARIABLES`.
- Les operacions amb variables són:
  - **Assignar valor**: `variable=valor` (¡COMPTE! L'igual va sense espais).
  - **Recuperar valor**: `echo $variable` o en expressions més llargues `${variable}`.
    - Exemple: `A=Jose; echo "Hola $A, què tal?"`.
  - **Obtenir longitud (nº caràcters)**: `echo ${#variable}` (les claus són necessàries).
  - **Eliminar**: `unset variable`.
  - **Definir com a només lectura**: `readonly variable`.
- Les variables amb el mateix nom se sobrescriuen:
  ```sh  frame="none"
  cognom="López"
  cognom="Pérez"
  echo $cognom  # Pérez
  ```
- Podem concatenar valors en les variables:
  ```sh  frame="none"
  cognoms="López"
  cognoms="$cognoms Pérez"
  echo $cognoms  # López Pérez
  ```
- Les variables que creem en el script es queden en el script i no les veurem des del terminal. Aquestes variables existiran mentre s'executi el script, després deixaran d'existir.
- Si creem una variable localment, en el terminal, serà visible en la shell en la qual l'hem creat. I deixarà d'existir quan tanquem la consola.