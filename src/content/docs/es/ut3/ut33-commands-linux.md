---
title: "Introducción al terminal Linux"
description: "Introducción al terminal Linux"
---

# UT3. Introducción al Terminal en GNU/Linux I

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
