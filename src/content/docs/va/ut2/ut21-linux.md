---
title: "GNU/Linux"  
description: "GNU/Linux" 
---

**GNU** y **Linux** son componentes esenciales en muchos sistemas operativos de código abierto, pero desempeñan roles distintos:

- **GNU**: Es un proyecto iniciado en 1983 por Richard Stallman con el objetivo de desarrollar un sistema operativo libre similar a Unix. GNU proporciona herramientas y aplicaciones fundamentales, como compiladores, editores de texto y utilidades del sistema, que permiten la interacción del usuario con el sistema operativo.

- **Linux**: Es el núcleo (kernel) del sistema operativo, desarrollado por Linus Torvalds en 1991. El núcleo gestiona los recursos del hardware y permite la comunicación entre el software y el hardware, siendo responsable de tareas como la gestión de procesos, memoria y dispositivos. 

> La combinación del núcleo Linux con las herramientas y aplicaciones de GNU da lugar a un sistema operativo completo, comúnmente denominado **GNU/Linux**. Este término reconoce la contribución de ambos proyectos en la creación de un sistema operativo funcional y libre.

Es importante destacar que, aunque el término "Linux" se utiliza frecuentemente para referirse al sistema operativo completo, técnicamente se refiere solo al núcleo. Por ello, el uso de "GNU/Linux" es más preciso al referirse al sistema operativo en su totalidad.


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

:::tip
[Distribucions](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)
:::

## Mètodes d'Instal·lació/actualitzacions

1. **Tenda gràfica online** (varia segons la distro) Ej: Ubuntu Software en Ubuntu o Discover en KDE
2. **Repositoris**: Servidors de paquets, accessibles a través d'un gestor de paquets com `apt` per a Debian.
3. **Descàrrega directa**: Des del lloc web del fabricant, normalment en formats `.tgz`, `.deb` o `.rpm`.

## Mètodes d'instal·lació de programari en Linux

En els sistemes operatius Linux, existeixen diversos mètodes per a instal·lar programari, cadascun adaptat a diferents necessitats i preferències. A continuació, es detallen els principals mètodes:

1. **Gestors de paquets tradicionals:**
    - **APT (Advanced Package Tool):** Utilitzat en distribucions basades en Debian, com Ubuntu i Linux Mint. Permet instal·lar paquets `.deb` des dels repositoris oficials mitjançant comandes com `sudo apt install nom-del-paquet`.
    - **YUM/DNF:** Emprats en distribucions basades en Red Hat, com Fedora i CentOS. Faciliten la instal·lació de paquets `.rpm` amb comandes com `sudo dnf install nom-del-paquet`.
    - **Pacman:** Propi d'Arch Linux i les seues derivades, gestiona paquets amb comandes com `sudo pacman -S nom-del-paquet`.

2. **Gestors de paquets universals:**
    - **Snap:** Desenvolupat per Canonical, permet instal·lar aplicacions empaquetades amb totes les seues dependències, funcionant en múltiples distribucions. S'instal·la amb `sudo snap install nom-del-paquet`.
    - **Flatpak:** Ofereix una plataforma per a distribuir aplicacions en diverses distribucions, executant-les en entorns aïllats. S'utilitza amb `flatpak install nom-del-paquet`.
    - **AppImage:** Proporciona aplicacions portàtils que no requereixen instal·lació; basta amb descarregar l'arxiu `.AppImage`, atorgar-li permisos d'execució i executar-lo directament.

3. **Compilació des del codi font:**
    - Algunes aplicacions es distribueixen en forma de codi font. Per a instal·lar-les, es descarreguen els arxius font, es descomprimeixen i es compilen utilitzant comandes com `./configure`, `make` i `sudo make install`. Este mètode ofereix flexibilitat, però requereix coneixements tècnics i pot ser més complex.

4. **Tendes d'aplicacions gràfiques:**
    - **Centre de Programari d'Ubuntu:** Proporciona una interfície gràfica per a buscar i instal·lar aplicacions en Ubuntu.
    - **GNOME Software:** Disponible en entorns d'escriptori GNOME, permet gestionar aplicacions de manera visual.
    - **Discover:** Utilitzat en entorns KDE Plasma, facilita la instal·lació de programari mitjançant una interfície amigable.

Cada mètode té els seus avantatges i desavantatges. Els gestors de paquets tradicionals ofereixen una integració més estreta amb el sistema, mentre que els gestors universals proporcionen aplicacions aïllades i actualitzades. L'elecció del mètode dependrà de les necessitats específiques i de l'entorn de treball de l'usuari.

#### Comandos d'APT

APT és el sistema de gestió de paquets per a distribucions basades en Debian, i facilita la instal·lació i administració de programari.

- `apt update`: Actualitza la llista de paquets dels repositoris configurats en el sistema per a tindre la informació més recent.
- `apt install <paquet>`: Instal·la el paquet especificat i les seues dependències.
- `apt upgrade`: Actualitza tots els paquets del sistema a les versions més recents.
- `apt show <paquet>`: Mostra informació detallada sobre un paquet, com la seua versió, descripció i dependències.
- `apt list --installed`: Llista els paquets instal·lats en el sistema.
- `apt edit-sources`: Permet editar el fitxer de fonts dels repositoris per a afegir o modificar repositoris.
- `apt-get --purge remove <paquet>`: Elimina un paquet junt amb els seus fitxers de configuració.

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