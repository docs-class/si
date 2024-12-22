---
title: "Introducción al terminal"
description: "Introducción al terminal"
---
## Conceptos básicos
:::tip[WSL]
> **/home/USUARIO-LINUX/** # Carpeta personal en Linux
>
> **/mnt/c/Users/USUARIO-HOST/** # Carpeta personal en HOST (Windows)
:::

### Prompt de Linux

- El **prompt** muestra información útil como el usuario, la máquina y el directorio actual.
  - Ejemplo: `antonio@ubuntu:~$`
  - `$`: Usuario sin privilegios.
  - `#`: Usuario con privilegios root.

### **Comandos y Entrada/Salida Estándar**

1. Los comandos en Linux son **palabras reservadas** utilizadas por el sistema operativo para ejecutar programas a través de una terminal o línea de comandos.

   - **Sintaxis general:**
     ``` frame="none"
     orden [-opciones] argumento1 argumento2
     ```
   - **Agrupación de opciones:**
     ``` frame="none"
     ls -l -a = ls -la
     ```
![ls command](../../../../assets/ut3/ls-command.png)

1. **Diferenciación entre mayúsculas y minúsculas:**
   En Linux, **las mayúsculas y minúsculas son diferentes**, por lo que debes prestar atención al escribir los comandos.

### **Entrada y Salida Estándar en Linux**

Todo programa en Linux trabaja con tres tipos de flujos principales:

- **Entrada estándar** (stdin): Teclado.
- **Salida estándar** (stdout): Pantalla.
- **Salida de error** (stderr): Pantalla.

### Redirección, contatenación y ayuda

- `>` y `>>`: Redirigen la salida a un archivo.
  - Ejemplo: `ls -a > fichero.txt`
- `<`: Redirige la entrada desde un archivo.
  - Ejemplo: `wc < fichero.txt`
- **Tuberías**: Permiten que la salida de un comando se convierta en la entrada de otro.
  - comando1 | comando2 | comando3  
  - Ejemplo: `cat /etc/passwd | wc -l`

- **Concatenación**: Ejecuta comandos de forma secuencial sin relación:  
  - comando1 && comando2 && comandoN  
  - Ejemplo: `cat /etc/passwd && cat /etc/groups`
- **Ayuda sobre Comandos**
  - **man**: Muestra una página de ayuda completa.  
    - `man pwd`  
  - **help**: Proporciona ayuda rápida.  
    - `pwd --help`  


## **Comandos**
### **Comandos Básicos**

| **Comando** | **Descripción**                         | **Ejemplo**               |
|-------------|-----------------------------------------|---------------------------|
| **pwd**     | muestra la ruta actual.                | `pwd`                     |
| **cd**      | cambia de directorio.                  | `cd /home/usuario`        |
| **ls**      | lista archivos.                        | `ls -l`                   |
| **mkdir**   | crea directorios.                      | `mkdir nueva_carpeta`     |
| **rm**      | borra ficheros o directorios.          | `rm archivo.txt`          |
| **mv**      | mueve ficheros o directorios.          | `mv archivo.txt carpeta/` |
| **cp**      | copia ficheros o directorios.          | `cp archivo.txt copia.txt`|
| **uname**   | muestra información del sistema.       | `uname -a`                |
| **shutdown** | apaga o reinicia el equipo.                        | `shutdown now` o `shutdown -r`  |
| **clear**    | limpia la pantalla del terminal.                   | `clear`                         |
| **date**     | muestra la fecha y hora del sistema.               | `date`                          |
| **cal**      | muestra el calendario del mes o año indicado.      | `cal 2024`                      |
| **who**      | muestra quién está conectado al sistema.           | `who`                           |

:::caution[Actividad]
- Estructura de directorios en Linux
:::

### **Comandos Avanzados**

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
| **tar**     | comprime o descomprime archivos.       | `tar -czvf archivo.tar.gz carpeta/` |

:::tip[TAR]
[tar](https://www.hostinger.es/tutoriales/como-usar-comando-tar-linux)
:::

### Variables de Entorno

| **Comando** | **Descripción**                              | **Ejemplo**                              |
|-------------|----------------------------------------------|------------------------------------------|
| **env**     | lista todas las variables de entorno.        | `env`                                    |
| **echo**    | muestra el valor de una variable de entorno. | `echo $PATH` (muestra rutas de ejecutables) |
| **export**  | define o modifica una variable de entorno.   | `export MI_VARIABLE="valor"`             |
| **unset**   | elimina una variable de entorno.             | `unset MI_VARIABLE`                      |
| **printenv**| muestra el valor de una variable específica. | `printenv HOME`                          |

## **Comandos de Gestión**

| **Comando** | **Descripción**                         | **Ejemplo**               |
|-------------|-----------------------------------------|---------------------------|
| **chmod**   | cambia los permisos de archivos.       | `chmod 755 script.sh`     |
| **chown**   | cambia el propietario de un archivo.   | `chown user:group archivo.txt` |
| **scp**     | copia archivos entre máquinas.         | `scp archivo.txt usuario@192.168.1.100:/home/usuario/` |
| **rsync**   | sincroniza archivos y directorios.     | `rsync -av carpeta/ usuario@192.168.1.100:/destino/` |
| **df**      | muestra el espacio en disco.           | `df -h`                   |
| **du**      | calcula el tamaño de archivos.         | `du -sh /home/usuario/`   |
| **ps**      | lista los procesos activos.            | `ps aux \| grep apache`    |
| **top**     | muestra procesos en tiempo real.       | `top`                     |
| **kill**    | termina procesos usando su PID.        | `kill 1234`               |
| **df**       | muestra el estado del disco.                       | `df -h`                         |
| **fsck**     | comprueba la integridad de los discos.             | `fsck /dev/sda1`                |
| **mount**    | monta particiones y volúmenes.                     | `mount /dev/sda1 /mnt`          |
| **umount**   | desmonta particiones y volúmenes.                  | `umount /mnt`                   |
| **fdisk**    | administra particiones del disco.                  | `fdisk /dev/sda`                |
| **ln**       | crea enlaces físicos y simbólicos.                 | `ln -s archivo_original enlace` |

:::tip[Prueba]
1. ¿Qué hace el comando `uname -a`?
2. Prueba los siguientes comandos:
   - `cat /etc/passwd | wc -l`
   - `ls -l | sort -k 5n`
  

  [Cheatshet - Terminal](https://terminaldelinux.com/terminal/cheatsheets/#chuleta-de-la-terminal-en-formato-pdf-gratis)
:::