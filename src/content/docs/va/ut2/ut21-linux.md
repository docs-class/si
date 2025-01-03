---
title: "Linux - Actualitzacions"  
description: "Configuració bàsica Linux"  
---

## Gestió d'actualitzacions

- En Linux, la gestió d'actualitzacions es realitza utilitzant gestors de paquets específics segons la distribució.
- És recomanable mantindre el sistema al dia instal·lant actualitzacions de tipus crític per a millorar la seguretat i el rendiment.

## Distribucions - "Distros"

Les **distribucions Linux** són versions del sistema operatiu Linux adaptades i personalitzades segons l'enfocament o les necessitats específiques de diferents usuaris o grups. Cada distribució inclou un conjunt específic de programari, configuracions predeterminades i un gestor de paquets que facilita la instal·lació i actualització de programes.

Les distros de Linux són desenvolupades, empaquetades i mantingudes per empreses o per entusiastes amb un objectiu concret. En general, es mantenen baix llicència GNU, amb opcions de pagament.

### Tipus d'usuaris vs distribucions:
- **Usuaris Principiants**: Ubuntu, Linux Mint.
- **Usuaris Avançats**: Arch Linux, Gentoo.
- **Entorns Empresarials**: CentOS, RHEL, SUSE.
- **Entorns Experimentals**: Fedora, OpenSUSE Tumbleweed.

![distros](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hxY05AVCBHC5wqXi2q81Qg.png)

Cada distribució té la seua pròpia filosofia i enfocament, fent que Linux siga una plataforma altament versàtil i adaptativa segons les necessitats de l'usuari o del projecte.

[Distribucions](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)

## Mètodes d'Instal·lació/actualitzacions

1. **Tenda gràfica online** (varia segons la distro) Ej: Ubuntu Software en Ubuntu o Discover en KDE
2. **Repositoris**: Servidors de paquets, accessibles a través d'un gestor de paquets com `apt` per a Debian.
3. **Descàrrega directa**: Des del lloc web del fabricant, normalment en formats `.tgz`, `.deb` o `.rpm`.

#### Comandos d'APT

APT és el sistema de gestió de paquets per a distribucions basades en Debian, i facilita la instal·lació i administració de programari.

- `apt update`: Actualitza la llista de paquets dels repositoris configurats en el sistema per a tindre la informació més recent.
- `apt install <paquet>`: Instal·la el paquet especificat i les seues dependències.
- `apt upgrade`: Actualitza tots els paquets del sistema a les versions més recents.
- `apt show <paquet>`: Mostra informació detallada sobre un paquet, com la seua versió, descripció i dependències.
- `apt list --installed`: Llista els paquets instal·lats en el sistema.
- `apt edit-sources`: Permet editar el fitxer de fonts dels repositoris per a afegir o modificar repositoris.
- `apt-get --purge remove <paquet>`: Elimina un paquet junt amb els seus fitxers de configuració.

- **APT** (Advanced Package Tool) per a distribucions basades en Debian/Ubuntu.
    ```sh frame="none"
    sudo apt update && sudo apt upgrade
    ```
- **DNF** per a Fedora.
    ```sh frame="none"
    sudo dnf update
    ```
- **YUM** per a CentOS/RHEL.
    ```sh frame="none"
    sudo yum update
    ```
- **Pacman** per a Arch Linux.
    ```sh frame="none"
    sudo pacman -Syu
    ```
#### Tipus de repositoris
- **Main**: Programari oficial recolzat per Canonical.
- **Restricted**: Programari tancat, drivers amb suport limitat.
- **Universe**: Mantingut per la comunitat, sense suport oficial.
- **Multiverse**: Programari amb llicències restrictives, sense suport.

El repositori **Main** recolzat per **Canonical** és específic de les distribucions **basades en Ubuntu**, ja que **Canonical** és l'empresa que desenvolupa i recolza **Ubuntu**.

:::danger[aclaració]
Cada distribució té el seu propi sistema de gestió de repositoris i la seua política de suport, que pot variar significativament segons la filosofia i objectius de la distribució.

- En **Debian**, per exemple, existeixen repositoris com **Main**, **Contrib** i **Non-Free**, però la major part del programari en **Main** és mantingut per la comunitat sense el suport d'una empresa com Canonical.
- En **Fedora**, els repositoris oficials són recolzats i mantinguts per la **comunitat Fedora** amb el suport de **Red Hat**.
- En **openSUSE**, el repositori **OSS (Open Source Software)** conté programari lliure, mentre que la comunitat manté altres repositoris addicionals.
:::
  
:::tip[Enllaços]  
  - [Vídeo introductori Linux - en](https://www.youtube.com/watch?v=UUJ0dFpj1-M&t=19s)
:::

:::caution[Activitat]
Controladors
:::