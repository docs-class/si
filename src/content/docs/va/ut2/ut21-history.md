---
title: "Història"
description: "Història"
---

## 1. Història

- **1969**: AT&T desenvolupa el sistema operatiu **UNIX**.
- **1983**: Richard Stallman inicia el projecte **GNU** per a crear un sistema operatiu tipus UNIX de programari lliure.
- **1985**: Microsoft publica **Windows** amb interfície gràfica (GUI).
- **1991**: Linus Torvalds comença a programar **Linux** (Linus + UNIX).
- **1992**: Es fusionen **Linux** i **GNU** per a crear **GNU/Linux**.
- **2001**: Es llança el primer sistema operatiu **MAC OS X**, basat en UNIX.

## 2. Linux

- **Programari Lliure**: Pot ser usat, copiat, modificat i redistribuït.
- **Llicències GPL**: Asseguren que el programari continue sent lliure.
- **Codi Obert**: Qualsevol pot veure i modificar el codi.

### Distribucions
- **Gratuïtes**: Ubuntu, CentOS, Mint, Fedora, OpenSUSE.
- **De Pagament**: RedHat, SUSE (es paga pel suport, no pel programari).

### Característiques de Linux

- **Robust**: Menys sensible als errors.
- **Segur**: Menys vulnerable a virus comparat amb altres sistemes.
- **Kernel**: Interactua amb el maquinari, està programat en C.
- **Shell**: Executa comandes (bash, sh).

### Interfície Gràfica

- **Entorns gràfics**: Gnome, KDE Plasma, Xfce, Cinnamon, Mate, LXQt.
- Pots canviar entre interfície gràfica i terminal textual (instrucció `startx`).

### Jerarquia de Fitxers

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

Ací tens l'equivalent per a **Windows**:

## 3. Windows

- **Programari Comercial**: Es paga per una llicència per a usar el sistema operatiu.
- **Codi Tancat**: No està disponible per al públic, no es pot modificar ni redistribuir.
- **PowerShell**: Eina avançada de línia de comandes per a l'administració del sistema.

### Jerarquia d'Arxius de Windows

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