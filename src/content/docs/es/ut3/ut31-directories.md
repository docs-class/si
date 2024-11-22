---
title: "Directorios"
description: "Directorios"
---

### **Nomenclatura y ubicación de las unidades de disco**

| **Característica**    | **Linux**                                   | **Windows**            | **macOS**                   |
|------------------------|---------------------------------------------|------------------------|-----------------------------|
| **Nomenclatura**       | `/dev/sdXZ`, `/dev/nvmeXnYpZ`   | Letras: `C:`, `D:`, etc. | `/dev/diskX`, `/dev/diskXsY` |
| **Sistema de archivos**| Ext4, XFS, Btrfs, NTFS, FAT32               | NTFS, FAT32, exFAT     | APFS, HFS+, FAT32, exFAT    |
| **Ubicación**          | Montaje en directorios                     | Letras asignadas       | Montaje automático en `/Volumes` |
| **Gestión**            | Herramientas como `lsblk`, `fdisk`, GParted | "Administrador de discos", `diskpart` | Utilidad de Discos, `diskutil` CLI |

### **Estructura de Directorios en Windows**

La estructura de directorios en Windows está organizada jerárquicamente y empieza por unidades de almacenamiento (por ejemplo, **C:**, **D:**). Estas unidades contienen todos los archivos y carpetas. A continuación, algunos de los directorios principales:

| **Directorio**   | **Función**                                                        |
|------------------|--------------------------------------------------------------------|
| `C:\`            | Directorio raíz del sistema, donde se encuentran todos los archivos principales. |
| `C:\Program Files` | Contiene programas instalados (aplicaciones de 64 bits).         |
| `C:\Program Files (x86)` | Contiene programas de 32 bits en sistemas de 64 bits.      |
| `C:\Windows`     | Archivos del sistema operativo, como el kernel y bibliotecas del sistema. |
| `C:\Users`       | Carpetas personales de cada usuario.                              |
| `C:\Windows\System32` | Archivos esenciales del sistema, incluyendo comandos y utilidades. |
| `C:\Temp`        | Archivos temporales del sistema.                                  |
| `C:\Windows\Temp` | Archivos temporales utilizados por el sistema y programas.        |
| `C:\ProgramData` | Archivos de configuración de programas accesibles a todos los usuarios. |
| `C:\Users\<Usuario>\AppData` | Configuraciones locales de aplicaciones para cada usuario. |

![windows folder estructure](https://www.aulaclic.es/googledrive/graficos/guardar_desplegado.gif)

### **Estructura de Directorios en Linux**

En Linux, la estructura de directorios sigue el estándar **Filesystem Hierarchy Standard (FHS)** y todos los directorios parten de la raíz representada por **/**. Algunos de los directorios principales son:

### Jerarquía de Ficheros

| **Directorio** | **Función** |
|----------------|-------------|
| `/`            | Directorio raíz, contiene todos los demás directorios. |
| `/bin`         | Programas esenciales del sistema (binarios), como comandos básicos (`ls`, `cp`). |
| `/boot`        | Archivos necesarios para el arranque del sistema (núcleo de Linux, GRUB). |
| `/dev`         | Archivos de dispositivos de hardware (discos duros, impresoras, etc.). |
| `/etc`         | Archivos de configuración del sistema y programas instalados (configuración de red, usuarios). |
| `/home`        | Directorios personales de los usuarios. |
| `/lib`         | Bibliotecas compartidas y módulos necesarios para el sistema y el núcleo. |
| `/media`       | Punto de montaje para medios extraíbles (discos externos, USB, CD). |
| `/mnt`         | Directorio para montar temporalmente sistemas de archivos o discos. |
| `/opt`         | Directorio para software adicional instalado opcionalmente. |
| `/proc`        | Sistema de archivos virtual con información sobre procesos en ejecución y hardware. |
| `/root`        | Directorio personal del usuario root (superusuario). |
| `/sbin`        | Programas esenciales para la administración del sistema (solo para administradores). |
| `/tmp`         | Directorio para archivos temporales. |
| `/usr`         | Contiene aplicaciones y utilidades del usuario (subdirectorios como `/usr/bin`, `/usr/lib`, `/usr/share`). |
| `/var`         | Archivos variables, como registros del sistema, colas de correo, etc. (`/var/log`). |


### Rutas absolutas y relativas

#### **Ruta Absoluta:**
- Es la ruta completa desde el directorio raíz (`/` en Linux o `C:\` en Windows).

  **Ejemplos:**
  - **Linux:**  
    ```bash frame="none"
    /home/usuario/Documentos/proyecto.txt
    ```
    Comienza desde la raíz (`/`) y llega hasta `proyecto.txt`.

  - **Windows:**  
    ```cmd frame="none"
    C:\Users\Usuario\Documents\proyecto.txt
    ```
    Comienza desde el disco (`C:\`) y llega hasta `proyecto.txt`.

#### **Ruta Relativa:**
- Es la ruta desde la ubicación actual.

  **Ejemplos:**
  - **Linux:**  
    Si estás en `/home/usuario` y quieres acceder a `proyecto.txt` en `Documentos`:
    ```bash frame="none"
    Documentos/proyecto.txt
    ```

  - **Windows:**  
    Si estás en `C:\Users\Usuario` y quieres acceder a `proyecto.txt` en `Documents`:
    ```cmd frame="none"
    Documents\proyecto.txt
    ```