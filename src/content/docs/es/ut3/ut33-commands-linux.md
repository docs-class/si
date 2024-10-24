---
title: "Sistemas de ficheros"
description: "Sistemas de ficheros"
---

# UT3. Introducción al Terminal en GNU/Linux I

## Índice
- Introducción a Linux
- Características
- Interfaz
- Jerarquía de directorios
- Gestión de ficheros

---

## 1. Historia

- **1969**: AT&T desarrolla el sistema operativo **UNIX**.
- **1983**: Richard Stallman inicia el proyecto **GNU** para crear un sistema operativo tipo UNIX de software libre.
- **1985**: Microsoft publica **Windows** con interfaz gráfica (GUI).
- **1991**: Linus Torvalds comienza a programar **Linux** (Linus + UNIX).
- **1992**: Se fusionan **Linux** y **GNU** para crear **GNU/Linux**.
- **2001**: Se lanza el primer sistema operativo **MAC OS X**, basado en UNIX.

---

## 2. ¿Por qué Linux?

- **Software Libre**: Puede ser usado, copiado, modificado y redistribuido.
- **Licencias GPL**: Aseguran que el software siga siendo libre.
- **Código Abierto**: Cualquiera puede ver y modificar el código.

### Distribuciones
- **Gratuitas**: Ubuntu, CentOS, Mint, Fedora, OpenSUSE.
- **De Pago**: RedHat, SUSE (se paga por el soporte, no por el software).

---

## 3. Características de Linux

- **Robusto**: Menos sensible a errores.
- **Seguro**: Menos vulnerable a virus comparado con otros sistemas.
- **Kernel**: Interactúa con el hardware, está programado en C.
- **Shell**: Ejecuta comandos (bash, sh).

---

## 4. Prompt de Linux

- El **prompt** muestra información útil como el usuario, la máquina y el directorio actual.
  - Ejemplo: `jose@ubuntu:~$`
  - `$`: Usuario sin privilegios.
  - `#`: Usuario con privilegios root.

---

## 5. Interfaz Gráfica

- **Entornos gráficos**: Gnome, KDE Plasma, Xfce, Cinnamon, Mate, LXQt.
- Puedes cambiar entre interfaz gráfica y terminal textual (instrucción `startx`).

---

## 6. Jerarquía de Ficheros

- **Rutas absolutas**: Van desde la raíz `/` hasta el directorio destino. Ejemplo: `/home/jose/Escritorio`
- **Rutas relativas**: Se basan en el directorio actual.

---

## 7. Gestión de Ficheros

### Entrada/Salida Estándar

- Los comandos siguen la estructura: `orden [-opciones] argumento1 argumento2`.
- **Entrada estándar** (stdin): Teclado.
- **Salida estándar** (stdout): Pantalla.
- **Salida de error** (stderr): Pantalla.

### Redirección

- `>` y `>>`: Redirigen la salida a un archivo.
  - Ejemplo: `ls -a > fichero.txt`
- `<`: Redirige la entrada desde un archivo.
  - Ejemplo: `wc < fichero.txt`
- **Tuberías**: Permiten que la salida de un comando se convierta en la entrada de otro.
  - Ejemplo: `cat /etc/passwd | wc -l`

---

## 8. Comandos Básicos

- `pwd`: Muestra la ruta actual.
- `cd`: Cambia de directorio.
- `ls`: Lista archivos.
- `mkdir`: Crea directorios.
- `rm`: Borra ficheros o directorios.
- `mv`: Mueve ficheros o directorios.
- `cp`: Copia ficheros o directorios.
- `uname`: Muestra información del sistema.

---

## 9. Terminal Avanzado

### grep
- Busca patrones en ficheros.
  - Ejemplo: `grep root /etc/passwd`

### sort
- Ordena las líneas de un fichero.
  - Ejemplo: `sort -f /etc/passwd`

### wc (Word Count)
- Cuenta líneas, palabras o caracteres en un fichero.
  - Ejemplo: `wc /etc/passwd`

---

## 10. Variables de Entorno

- **env**: Lista las variables de entorno.
- Ejemplo: `echo $PATH` muestra las rutas de los ejecutables del sistema.

---

## Actividades

1. ¿Qué hace el comando `uname -a`?
2. Prueba los siguientes comandos:
   - `cat /etc/passwd | wc -l`
   - `ls -l | sort -k 5n`
