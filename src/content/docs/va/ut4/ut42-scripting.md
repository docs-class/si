---

title: "Scripting"
description: "Scripting"

---

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