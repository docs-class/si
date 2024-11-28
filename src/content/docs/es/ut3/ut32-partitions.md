---
title: "Particiones"
description: "Particiones"
---

:::note[Connexión con el currículum]
RA: 3 - CE: d, g
:::

##  Particionamiento de discos

El **particionamiento de discos** es el proceso de dividir un dispositivo de almacenamiento físico, como un disco duro o SSD, en múltiples secciones lógicas o particiones. Cada partición se comporta como una unidad independiente con su propio sistema de archivos, lo que permite una mejor organización y gestión de los datos.

### Usos comunes del particionamiento de discos:
- **Instalación de sistemas operativos:** Permite instalar múltiples sistemas operativos en un solo disco físico, dedicando una partición a cada uno.
- **Copia de seguridad y recuperación:** Facilita la creación de particiones para copias de seguridad, simplificando la restauración en caso de fallos del sistema.
- **Seguridad y cifrado:** Mejora la seguridad al aislar datos sensibles en particiones separadas y permite aplicar cifrado en particiones específicas.


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
   - **EaseUS Partition Master**, **MiniTool Partition Wizard**, y **AOMEI Partition Assistant**
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
