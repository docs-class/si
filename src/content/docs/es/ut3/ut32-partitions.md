---
title: "Particiones"
description: "Particiones"
---

:::note[Connexión con el currículum]
RA: 3 - CE: d, g
:::

## Acciones Comunes
1. **Crear Particiones**: Dividir el disco en diferentes secciones lógicas, lo cual permite organizar el almacenamiento de datos y, en algunos casos, instalar varios sistemas operativos.
2. **Eliminar Particiones**: Liberar el espacio ocupado por una partición para su uso futuro. Esto es útil si ya no se necesita una partición específica.
3. **Redimensionar Particiones**: Aumentar o reducir el tamaño de una partición sin perder datos (depende de las herramientas y precauciones). Es común cuando se necesita más espacio en una partición específica.
4. **Formatear Particiones**: Aplicar un sistema de archivos como NTFS, FAT32, EXT4, etc., para preparar la partición para almacenar datos.
5. **Convertir Tipos de Partición**: Cambiar entre particiones primarias, extendidas o lógicas.
6. **Montar/Desmontar Particiones**: Asignar una letra de unidad o punto de montaje para acceder a la partición, o desmontar para evitar acceso.
7. **Verificar la Integridad**: Escanear una partición para comprobar y corregir errores en el sistema de archivos.

## Herramientas en Windows

1. **Administrador de Discos (Disk Management)**
   - Herramienta nativa de Windows
![Disk Management](https://learn.microsoft.com/es-es/windows-server/storage/disk-management/media/disk-management.png)

2. **DiskPart**
   - Herramienta de línea de comandos de Discos.
     ```cmd frame="none"
     diskpart
     list disk
     select disk 0
     create partition primary size=10240
     ```
3. **Windows PowerShell**
   - También se pueden realizar algunas tareas relacionadas con particiones usando comandos en **PowerShell**:
   ```powershell frame="none"
   Get-Partition
   New-Partition -DiskNumber 1 -UseMaximumSize -AssignDriveLetter
   ```

4. **Herramientas de Terceros**
   - **EaseUS Partition Master**, **MiniTool Partition Wizard**, y **AOMEI Partition Assistant** son herramientas que ofrecen una interfaz amigable y funciones avanzadas, como:
     - **Redimensionar particiones sin pérdida de datos**.
     - **Clonar particiones** para respaldar información.
     - **Migrar el sistema operativo** a otro disco.
![MiniTool Partition Wizard](https://img.utdstc.com/screen/7c5/17c/7c517ce8feff600036e33c8aaba9fd2f0d38bcdfb56aed1f6ed54617f0b0e7e8:600)
## Herramientas en Linux

1. **GParted**
   - **GParted** es una herramienta gráfica (EXT4, FAT32, NTFS, etc.)
![GParted](https://max.educa.madrid.org/manual/max11/fgp17.png)
2. **fdisk**
   - **fdisk** es una herramienta de línea de comandos (MBR):
     - Ejemplo de uso:
     ```sh frame="none"
     sudo fdisk /dev/sda
     ```
     Luego se pueden utilizar comandos como `n` para crear una nueva partición o `d` para eliminar una partición.

3. **parted**
   - **parted** es una herramienta más avanzada que **fdisk** y permite trabajar tanto con **MBR** como con **GPT**.
   - Permite **redimensionar particiones** sin pérdida de datos, así como **crear, eliminar, y formatear**.
   - Ejemplo de uso:
     ```sh frame="none"
     sudo parted /dev/sda
     (parted) mklabel gpt
     (parted) mkpart primary ext4 1MiB 20GiB
     ```

4. **cfdisk**
   - **cfdisk** es una herramienta de línea de comandos
   - Permite **crear, eliminar, cambiar el tipo** de partición y trabajar de una forma más visual que `fdisk`.

5. **GNOME Disks (Discos)**
   - Herramienta gráfica nativa en entornos de escritorio GNOME.
   - Permite **crear y eliminar particiones**, **formatear** con diferentes sistemas de archivos y **configurar opciones de montaje**.
![Gnome Disks](https://apps.gnome.org/assets/screenshots/org.gnome.DiskUtility/disks-main.png)
6. **mkfs (Make File System)**
   - **mkfs** se utiliza para **formatear** una partición con un sistema de archivos específico.
   - Ejemplo de uso para crear un sistema de archivos EXT4:
   ```sh frame="none"
   sudo mkfs.ext4 /dev/sda1
   ```

:::caution[Actividad]
Particiones
:::
