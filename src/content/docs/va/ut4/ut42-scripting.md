---

title: "Scripting"
description: "Scripting"

---

:::note[Connexió amb el currículum]
RA: 4 - CE: e, f, g, h
:::

### Què és un script?

Un script en Linux és una llista d'ordres (comandes) que s'executen seqüencialment. Encara que no necessiten una extensió específica, és comú usar `.sh` per identificar-los fàcilment. Els scripts permeten automatitzar tasques, com comprimir logs i esborrar arxius antics.

### El meu primer script

1. Crea un arxiu anomenat `mi_primer_script.sh` i obri'l amb nano.
2. Afegeix la línia inicial:
   ```sh  frame="none"
   #!/bin/bash
   ```
3. Escriu la comanda `echo` seguida de "Hola Mundo":
   ```sh  frame="none"
   echo "Hola Mundo"
   ```
4. Guarda l'arxiu i ix de nano.

### Executar un script en Linux

Per executar el script, usa:
```sh  frame="none"
./mi_primer_script.sh
```
o
```sh  frame="none"
bash mi_primer_script.sh
```
Si no funciona, assegura't de donar-li permisos d'execució:
```sh  frame="none"
chmod u+x mi_primer_script.sh
```

:::danger[Consideracions]
- El script s'ha d'executar des de la mateixa carpeta on està el fitxer, si no haurem de posar la ruta absoluta.
- El script continua executant-se encara que hi hagi un error.
- Si posem un `exit` en el script, aquest sortirà de l'execució encara que hi hagi més comandes darrere. L'ordre `exit` permet finalitzar un script especificant el codi de sortida. Si no fem ús de `exit`, el resultat d'un script serà el de **l'última ordre que s'ha executat en el script**.
- `$?` mostra el valor del resultat de l'últim que he executat, indicant si ha estat correcte o no. Per conveni, el valor 0 indicarà que ha finalitzat correctament i un valor diferent de 0 que no ha finalitzat correctament.
  - Si OK `$? = 0`
  - Si NOK `$? != 0`
:::