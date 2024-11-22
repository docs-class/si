---
title: "Directoris"
description: "Directoris"
---

### **Nomenclatura i ubicació de les unitats**

| **Característica**    | **Linux**                                   | **Windows**            | **macOS**                   |
|------------------------|---------------------------------------------|------------------------|-----------------------------|
| **Nomenclatura**       | `/dev/sdXZ`, `/dev/nvmeXnYpZ`    | Lletres: `C:`, `D:`, etc. | `/dev/diskX`, `/dev/diskXsY` |
| **Sistema de fitxers** | Ext4, XFS, Btrfs, NTFS, FAT32               | NTFS, FAT32, exFAT     | APFS, HFS+, FAT32, exFAT    |
| **Ubicació**           | Muntatge en directoris                     | Lletres assignades     | Muntatge automàtic en `/Volumes` |
| **Gestió**             | Eines com `lsblk`, `fdisk`, GParted         | "Administrador de discos", `diskpart` | Utilitat de Discos, `diskutil` CLI |

### **Estructura de Directoris en Windows**

L'estructura de directoris en Windows està organitzada jeràrquicament i comença per unitats d'emmagatzematge (per exemple, **C:**, **D:**). Aquestes unitats contenen tots els fitxers i carpetes. A continuació, alguns dels directoris principals:

| **Directori**        | **Funció**                                                                |
|----------------------|---------------------------------------------------------------------------|
| `C:\`                | Directori arrel del sistema, on es troben tots els arxius principals.      |
| `C:\Program Files`    | Conté programes instal·lats (aplicacions de 64 bits).                     |
| `C:\Program Files (x86)` | Conté programes de 32 bits en sistemes de 64 bits.                    |
| `C:\Windows`         | Arxius del sistema operatiu, com el nucli i biblioteques del sistema.     |
| `C:\Users`           | Carpetes personals de cada usuari.                                        |
| `C:\Windows\System32` | Arxius essencials del sistema, incloent-hi comandes i utilitats.         |
| `C:\Temp`            | Arxius temporals del sistema.                                             |
| `C:\Windows\Temp`    | Arxius temporals utilitzats pel sistema i programes.                      |
| `C:\ProgramData`     | Arxius de configuració de programes accessibles per a tots els usuaris.   |
| `C:\Users\<Usuario>\AppData` | Configuracions locals d'aplicacions per a cada usuari.            |

### **Estructura de Directoris en Linux**

En Linux, l'estructura de directoris segueix l'estàndard **Filesystem Hierarchy Standard (FHS)** i tots els directoris parteixen de l'arrel representada per **/**. Alguns dels directoris principals són:

| **Directori** | **Funció** |
|---------------|------------|
| `/`           | Directori arrel, conté tots els altres directoris. |
| `/bin`        | Programes essencials del sistema (binàries), com comandes bàsiques (`ls`, `cp`). |
| `/boot`       | Arxius necessaris per a l'arrencada del sistema (nucli de Linux, GRUB). |
| `/dev`        | Arxius de dispositius de maquinari (discos durs, impressores, etc.). |
| `/etc`        | Arxius de configuració del sistema i programes instal·lats (configuració de xarxa, usuaris). |
| `/home`       | Directoris personals dels usuaris. |
| `/lib`        | Biblioteques compartides i mòduls necessaris per al sistema i el nucli. |
| `/media`      | Punt de muntatge per a mitjans extraïbles (discos externs, USB, CD). |
| `/mnt`        | Directori per a muntar temporalment sistemes de fitxers o discos. |
| `/opt`        | Directori per a programari addicional instal·lat opcionalment. |
| `/proc`       | Sistema de fitxers virtual amb informació sobre processos en execució i maquinari. |
| `/root`       | Directori personal de l'usuari root (superusuari). |
| `/sbin`       | Programes essencials per a l'administració del sistema (només per a administradors). |
| `/tmp`        | Directori per a arxius temporals. |
| `/usr`        | Conté aplicacions i utilitats de l'usuari (subdirectoris com `/usr/bin`, `/usr/lib`, `/usr/share`). |
| `/var`        | Arxius variables, com registres del sistema, cues de correu, etc. (`/var/log`). |

### Rutas absolutas y relativas

#### **Ruta Absoluta:**
- És la ruta completa des del directori arrel (`/` en Linux o `C:\` en Windows).

  **Exemples:**
  - **Linux:**  
    ```bash frame="none"
    /home/usuari/Documents/projecte.txt
    ```
    Comença des de l'arrel (`/`) i arriba fins a `projecte.txt`.

  - **Windows:**  
    ```cmd frame="none"
    C:\Users\Usuari\Documents\projecte.txt
    ```
    Comença des del disc (`C:\`) i arriba fins a `projecte.txt`.

#### **Ruta Relativa:**
- És la ruta des de la ubicació actual.

  **Exemples:**
  - **Linux:**  
    Si estàs en `/home/usuari` i vols accedir a `projecte.txt` en `Documents`:
    ```bash frame="none"
    Documents/projecte.txt
    ```

  - **Windows:**  
    Si estàs en `C:\Users\Usuari` i vols accedir a `projecte.txt` en `Documents`:
    ```cmd frame="none"
    Documents\projecte.txt
    ```