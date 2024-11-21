---
title: "Linux - Comandaments avançats"
description: "Linux - Comandaments avançats"
---

## ls -l
![ls command](https://detailed.wordpress.com/wp-content/uploads/2017/10/ls-command3.jpg)

## **Cerca de patrons: `grep`**

`grep [opcions] <patró> [fitxers]`

#### **Opcions més comunes:**
- **`-c`**: Retorna el nombre de línies que contenen el patró.
- **`-i`**: Ignora les diferències entre majúscules i minúscules.
- **`-v`**: Retorna les línies que **no contenen** el patró.
- **`-r`**: Cerca en un directori de manera recursiva.
- **`-n`**: Imprimeix el número de cada línia que coincideix.
- **`-e`**: Permet cercar diversos patrons en una mateixa consulta.
- **`-x`**: Requereix que tota la línia coincideixi amb el patró.
- **`-w`**: Cerca exactament aquest patró (prové de *word*).

:::note[Exemples]
- `grep root /etc/passwd`: Cerca totes les línies que contenen el patró `root` en el fitxer `/etc/passwd`.
- `grep -i error /var/log/syslog`: Cerca el terme `error`, ignorant majúscules i minúscules, en el fitxer `/var/log/syslog`.
- `grep -r "main" ./proyectos`: Cerca el patró `main` de manera recursiva en el directori `./proyectos`.
- `grep -n "usuario" usuarios.txt`: Cerca el patró `usuario` en el fitxer `usuarios.txt` i imprimeix el número de les línies coincidents.
:::

## **Ordenar dades: `sort`**

`sort [opcions] [fitxers]`

#### **Opcions més comunes:**
- **`-r`**: Ordena en ordre invers (descendent).
- **`-n`**: Ordena numèricament (en lloc d'alfabèticament).
- **`-k`**: Especifica la columna per la qual ordenar.
- **`-u`**: Elimina línies duplicades en el resultat.
- **`-o`**: Desa el resultat en un fitxer (sobreescriu l'arxiu especificat).
- **`-t`**: Defineix un delimitador personalitzat per separar camps.
- **`-b`**: Ignora els espais inicials a l'ordenar.

:::note[Exemples]
- `sort nombres.txt`: Ordena alfabèticament les línies del fitxer `nombres.txt`.
- `sort -r datos.txt`: Ordena les línies del fitxer `datos.txt` en ordre invers (descendent).
- `sort -n -k 2 puntuaciones.txt`: Ordena el fitxer `puntuaciones.txt` numèricament segons la **segona columna**.
- `sort -t: -k 1 usuarios.csv`: Ordena el fitxer `usuarios.csv` per la **primera columna**, utilitzant `:` com a delimitador de camps.
:::

## **Visualitzar parts d'un fitxer: `head` i `tail`**

`head [opcions] [fitxers]`  
`tail [opcions] [fitxers]`

#### **Opcions més comunes:**
- **`-n [nombre]`**: Especifica el nombre de línies a mostrar (per defecte són 10).
- **`-c [nombre]`**: Mostra el nombre de bytes especificats.
- **`-f`** *(només `tail`)*: Continua mostrant en temps real noves línies afegides al fitxer.

:::note[`head`]
- `head archivo.txt`: Mostra les primeres 10 línies de `archivo.txt`.
- `head -n 5 archivo.txt`: Mostra les primeres 5 línies de `archivo.txt`.
- `head -c 20 archivo.txt`: Mostra els primers 20 bytes del fitxer `archivo.txt`.
:::

:::note[`tail`]
- `tail archivo.txt`: Mostra les últimes 10 línies de `archivo.txt`.
- `tail -n 15 archivo.txt`: Mostra les últimes 15 línies de `archivo.txt`.
- `tail -f log.txt`: Continua mostrant en temps real les noves línies que s'afegeixin al fitxer `log.txt`.
:::

## **Comptar línies, paraules i caràcters: `wc`**

`wc [opcions] [fitxers]`

#### **Opcions més comunes:**
- **`-l`**: Compta només el nombre de línies.
- **`-w`**: Compta només el nombre de paraules.
- **`-c`**: Compta només el nombre de bytes (mida del fitxer).
- **`-m`**: Compta el nombre de caràcters (inclosos els espais).
- **`-L`**: Mostra la longitud de la línia més llarga.

:::note[Exemples]
- `wc archivo.txt`: Mostra el nombre total de línies, paraules i bytes del fitxer `archivo.txt`.
- `wc -l archivo.txt`: Compta únicament les línies del fitxer `archivo.txt`.
- `wc -w texto.txt`: Compta les paraules contingudes en el fitxer `texto.txt`.
- `wc -c datos.csv`: Mostra la mida en bytes del fitxer `datos.csv`.
- `wc -L script.sh`: Mostra la longitud de la línia més llarga al fitxer `script.sh`.
:::

:::caution[Activitat]
- Linux avançat
:::