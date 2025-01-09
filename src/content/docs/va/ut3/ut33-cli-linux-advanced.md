---
title: "Terminal Linux avançat"
description: "Terminal Linux avançat"
---

### Wildcards (Comodins)

Les **wildcards o comodins** són caràcters especials.
En una baralla de cartes, un comodí és una carta especial que pot representar qualsevol altra carta.
De manera similar, en informàtica, una wildcard és un caràcter especial que pot substituir qualsevol altre caràcter.

1. **Múltiple**: creació o manipulació de diversos fitxers
   ```bash
   touch file{1..100}.txt  # Crea fitxers file1.txt fins a file100.txt
   cp {hola.txt, adios.txt} ~ # Copia hola.txt i adios.txt al directori del usuari
   ```

2. **Asterisc (*)**: Representa zero o més caràcters. És útil per a buscar fitxers que coincidisquen amb un patró específic.
   ```bash
   ls *.txt  # Llista tots els fitxers que acaben en .txt
   ```

3. **Signe d'interrogació (?)**: Representa un sol caràcter. És útil quan es busca un fitxer amb un nom específic però amb un caràcter variable.
   ```bash
   ls file?.txt  # Llista fitxers com file1.txt, file2.txt, etc.
   ```

4. **Claudàtors ([ ])**: Representen un rang de caràcters. S'utilitza per a buscar fitxers que continguen qualsevol dels caràcters especificats dins dels claudàtors.
   ```bash
   ls file[1-3].txt  # Llista fitxers com file1.txt, file2.txt, file3.txt
   ```

5. **Negació ([! ])**: Representa qualsevol caràcter que no estiga dins dels claudàtors.
   ```bash
   ls file[!1-3].txt  # Llista fitxers que no siguen file1.txt, file2.txt, file3.txt
   ```

6. **Rangs de caràcters**: Pots especificar rangs de caràcters dins dels claudàtors.
   ```bash
   ls file[a-c].txt  # Llista fitxers com filea.txt, fileb.txt, filec.txt
   ```

7. **Combinació**: combina diverses opcions
   ```bash
   ls file[a-c,a-C,1-3]?.txt  # Llista fitxers com filea1.txt, fileBc.txt, filecc.txt
   ```

### **Comandes Avançades**

| **Comanda** | **Descripció**                         | **Exemple**               |
|-------------|----------------------------------------|---------------------------|
| **grep**    | busca patrons en fitxers.              | `grep root /etc/passwd`   |
| **sort**    | ordena les línies d'un fitxer.         | `sort -f /etc/passwd`     |
| **wc**      | compta línies, paraules o caràcters.   | `wc /etc/passwd`          |
| **cut**     | extreu seccions específiques.          | `cut -d':' -f1 /etc/passwd`|
| **uniq**    | elimina o mostra línies duplicades.    | `sort /etc/passwd \| uniq`|
| **find**    | busca fitxers i directoris.            | `find /home -name "*.txt"`|
| **xargs**   | construeix i executa comandes.         | `find . -name "*.txt" \| xargs rm` |
| **head**    | mostra les primeres línies.            | `head -n 10 /etc/passwd`  |
| **tail**    | mostra les últimes línies.             | `tail -f /var/log/syslog` |
| **tee**     | divideix l'eixida i la guarda en un fitxer. | `ls \| tee llista.txt`   |
| **tr**      | tradueix o elimina caràcters.          | `echo "linux" \| tr 'a-z' 'A-Z'` |
| **sed**     | edita text en línia.                   | `sed 's/root/admin/g' /etc/passwd` |
| **tar**     | comprimeix o descomprimeix fitxers.    | `tar -czvf fitxer.tar.gz carpeta/` |

:::tip[TAR]
tar
:::

## **Comandes de Gestió**

| **Comanda** | **Descripció**                         | **Exemple**               |
|-------------|----------------------------------------|---------------------------|
| **chmod**   | canvia els permisos de fitxers.        | `chmod 755 script.sh`     |
| **chown**   | canvia el propietari d'un fitxer.      | `chown user:group fitxer.txt` |
| **scp**     | copia fitxers entre màquines.          | `scp fitxer.txt usuari@192.168.1.100:/home/usuari/` |
| **rsync**   | sincronitza fitxers i directoris.      | `rsync -av carpeta/ usuari@192.168.1.100:/destí/` |
| **df**      | mostra l'espai en disc.                | `df -h`                   |
| **du**      | calcula la mida de fitxers.            | `du -sh /home/usuari/`    |
| **ps**      | llista els processos actius.           | `ps aux \| grep apache`   |
| **top**     | mostra processos en temps real.        | `top`                     |
| **kill**    | acaba processos usant el seu PID.      | `kill 1234`               |
| **df**      | mostra l'estat del disc.               | `df -h`                   |
| **fsck**    | comprova la integritat dels discos.    | `fsck /dev/sda1`          |
| **mount**   | munta particions i volums.             | `mount /dev/sda1 /mnt`    |
| **umount**  | desmunta particions i volums.          | `umount /mnt`             |
| **fdisk**   | administra particions del disc.        | `fdisk /dev/sda`          |
| **ln**      | crea enllaços físics i simbòlics.      | `ln -s fitxer_original enllaç` |

:::tip[Prova]
1. Què fa l'ordre `uname -a`?
2. Prova les ordres següents:
   - `cat /etc/passwd \| wc -l`
   - `ls -l \| sort -k 5n`

  [Cheatshet - Terminal](https://terminaldelinux.com/terminal/cheatsheets/#chuleta-de-la-terminal-en-formato-pdf-gratis)
:::