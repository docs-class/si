---
title: "Terminal Linux avanzado"
description: "Terminal Linux avanzado"
---

## Wildcards (Comodines)

Las **wildcards o comodines** son caracteres especiales.
En una baraja de cartas, un comodín es una carta especial que puede representar a cualquier otra carta.
De manera similar, en informática, una wildcard es un carácter especial que puede sustituir a cualquier otro carácter.

1. **Múltiple**: creación o manipulación de varios ficheros/directorios
   ```bash
   touch file{1..100}.txt  # Crea ficheros file1.txt hasta file100.txt
   cp {hola.txt, adios.txt} ~ # Copia hola.txt y adios.txt al directorio del usuario
   mkdir -p Nivel1/Nivel2/{Nivel3/{Nivel4/Nivel5,logs,scripts},docs,data} # Crea la estructura de directorios compleja
   - Para esto hay que instalar bash si no se tiene:
      - sudo apt install bash-completion
      - echo $SHELL #comprobamos el shell actual
      - chsh -s /bin/bash #cambiamos el shell a bash
   ```

   ```markdown
   Nivel1/
   └── Nivel2/
      ├── Nivel3/
      │   ├── Nivel4/
      │   │   └── Nivel5/
      │   ├── logs/
      │   └── scripts/
      ├── docs/
      └── data/
   ```

2. **Asterisco (*)**: Representa cero o más caracteres. Es útil para buscar archivos que coincidan con un patrón específico.
   ```bash
   ls *.txt  # Lista todos los archivos que terminan en .txt
   ```

3. **Signo de interrogación (?)**: Representa un solo carácter. Es útil cuando se busca un archivo con un nombre específico pero con un carácter variable.
   ```bash
   ls file?.txt  # Lista archivos como file1.txt, file2.txt, etc.
   ```

4. **Corchetes ([ ])**: Representan un rango de caracteres. Se utiliza para buscar archivos que contengan cualquiera de los caracteres especificados dentro de los corchetes.
   ```bash
   ls file[1-3].txt  # Lista archivos como file1.txt, file2.txt, file3.txt
   ```

5. **Negación ([! ])**: Representa cualquier carácter que no esté dentro de los corchetes.
   ```bash
   ls file[!1-3].txt  # Lista archivos que no sean file1.txt, file2.txt, file3.txt
   ```

6. **Rangos de caracteres**: Puedes especificar rangos de caracteres dentro de los corchetes.
   ```bash
   ls file[a-c].txt  # Lista archivos como filea.txt, fileb.txt, filec.txt
   ```
7. **Combinación**: combina diversas opciones
   ```bash
   ls file[a-c,A-C,1-3]?.txt  # Lista ficheros como filea1.txt, fileBc.txt, filecc.txt
   ```

## **Comandos Avanzados**

| **Comando** | **Descripción**                         | **Ejemplo**               |
|-------------|-----------------------------------------|---------------------------|
| **grep**    | busca patrones en archivos.            | `grep root /etc/passwd`   |
| **sort**    | ordena las líneas de un archivo.       | `sort -f /etc/passwd`     |
| **wc**      | cuenta líneas, palabras o caracteres.  | `wc /etc/passwd`          |
| **cut**     | extrae secciones específicas.          | `cut -d':' -f1 /etc/passwd`|
| **uniq**    | elimina o muestra líneas duplicadas.   | `sort /etc/passwd \| uniq` |
| **find**    | busca archivos y directorios.          | `find /home -name "*.txt"`|
| **xargs**   | construye y ejecuta comandos.          | `find . -name "*.txt" \| xargs rm` |
| **head**    | muestra las primeras líneas.           | `head -n 10 /etc/passwd`  |
| **tail**    | muestra las últimas líneas.            | `tail -f /var/log/syslog` |
| **tee**     | divide la salida y la guarda en un archivo. | `ls \| tee lista.txt`   |
| **tr**      | traduce o elimina caracteres.          | `echo "linux" \| tr 'a-z' 'A-Z'` |
| **sed**     | edita texto en línea.                  | `sed 's/root/admin/g' /etc/passwd` |
| tar     | comprime o descomprime archivos.       | `tar -czvf archivo.tar.gz carpeta/` |

:::tip[TAR]
[tar](https://www.hostinger.es/tutoriales/como-usar-comando-tar-linux)
:::

## **Comandos de Gestión**

| **Comando** | **Descripción**                         | **Ejemplo**               |
|-------------|-----------------------------------------|---------------------------|
| chmod   | cambia los permisos de archivos.     | `chmod 755 script.sh`     |
| chown   | cambia el propietario de un archivo.   | `chown user:group archivo.txt` |
| scp     | copia archivos entre máquinas.         | `scp archivo.txt usuario@192.168.1.100:/home/usuario/` |
| rsync   | sincroniza archivos y directorios.     | `rsync -av carpeta/ usuario@192.168.1.100:/destino/` |
| **df**      | muestra el espacio en disco.           | `df -h`                   |
| **du**      | calcula el tamaño de archivos.         | `du -sh /home/usuario/`   |
| **ps**      | lista los procesos activos.            | `ps aux \| grep apache`    |
| **top**     | muestra procesos en tiempo real.       | `top`                     |
| **kill**    | termina procesos usando su PID.        | `kill 1234`               |
| fsck     | comprueba la integridad de los discos.             | `fsck /dev/sda1`                |
| mount    | monta particiones y volúmenes.                     | `mount /dev/sda1 /mnt`          |
| umount   | desmonta particiones y volúmenes.                  | `umount /mnt`                   |
| fdisk    | administra particiones del disco.                  | `fdisk /dev/sda`                |
| **ln**       | crea enlaces físicos y simbólicos.                 | `ln -s archivo_original enlace` |

:::tip[Prueba]
1. ¿Qué hace el comando `uname -a`?
2. Prueba los siguientes comandos:
   - `cat /etc/passwd | wc -l`
   - `ls -l | sort -k 5n`
  

  [Cheatshet - Terminal](https://terminaldelinux.com/terminal/cheatsheets/#chuleta-de-la-terminal-en-formato-pdf-gratis)
:::

:::caution[Actividad]
- First command date
- Linux Advanced Commands
:::