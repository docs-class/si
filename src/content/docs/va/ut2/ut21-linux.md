---

title: "Linux - Actualitzacions"  
description: "Configuració bàsica Linux"  
---

## Gestió d'actualitzacions

- En Linux, la gestió d'actualitzacions es realitza utilitzant gestors de paquets específics segons la distribució.
- És recomanable mantindre el sistema al dia instal·lant actualitzacions de tipus crític per a millorar la seguretat i el rendiment.

## Exemples de gestors d'actualitzacions

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

## Distribucions

Les **distribucions Linux** són versions del sistema operatiu Linux adaptades i personalitzades segons l'enfocament o les necessitats específiques de diferents usuaris o grups. Cada distribució inclou un conjunt específic de programari, configuracions predeterminades i un gestor de paquets que facilita la instal·lació i actualització de programes.

### Tipus d'usuaris vs distribucions:
- **Usuaris Principiants**: Ubuntu, Linux Mint.
- **Usuaris Avançats**: Arch Linux, Gentoo.
- **Entorns Empresarials**: CentOS, RHEL, SUSE.
- **Entorns Experimentals**: Fedora, OpenSUSE Tumbleweed.

![distros](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hxY05AVCBHC5wqXi2q81Qg.png)

Cada distribució té la seua pròpia filosofia i enfocament, fent que Linux siga una plataforma altament versàtil i adaptativa segons les necessitats de l'usuari o del projecte.

[Distribucions](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)

:::caution[activitat]  
- Busca informació sobre com gestionar actualitzacions en la teua distribució Linux de manera gràfica.
- Busca informació per a la relació GNU/Linux.
:::
