---
title: "GNU/Linux"  
description: "GNU/Linux" 
---

**GNU** i **Linux** són components essencials en molts sistemes operatius de codi obert, però tenen rols diferents:

- **GNU**: És un projecte iniciat el 1983 per Richard Stallman amb l'objectiu de desenvolupar un sistema operatiu lliure semblant a Unix. GNU proporciona eines i aplicacions fonamentals, com compiladors, editors de text i utilitats del sistema, que permeten la interacció de l'usuari amb el sistema operatiu.

- **Linux**: És el nucli (kernel) del sistema operatiu, desenvolupat per Linus Torvalds el 1991. El nucli gestiona els recursos del maquinari i permet la comunicació entre el programari i el maquinari, essent responsable de tasques com la gestió de processos, memòria i dispositius.

> La combinació del nucli Linux amb les eines i aplicacions de GNU dóna lloc a un sistema operatiu complet, comunament anomenat **GNU/Linux**. Aquest terme reconeix la contribució d'ambdós projectes en la creació d'un sistema operatiu funcional i lliure.

És important destacar que, encara que el terme "Linux" s'utilitza freqüentment per referir-se al sistema operatiu complet, tècnicament es refereix només al nucli. Per això, l'ús de "GNU/Linux" és més precís a l'hora de referir-se al sistema operatiu en la seua totalitat.

## Gestió d'actualitzacions

- En Linux, la gestió d'actualitzacions es realitza utilitzant gestors de paquets específics segons la distribució.
- És recomanable mantindre el sistema al dia instal·lant actualitzacions de tipus crític per a millorar la seguretat i el rendiment.

## Distribucions - "Distros"

Les **distribucions Linux** són versions del sistema operatiu Linux adaptades i personalitzades segons l'enfocament o les necessitats específiques de diferents usuaris o grups. Cada distribució inclou un conjunt específic de programari, configuracions predeterminades i un gestor de paquets que facilita la instal·lació i actualització de programes.

Les distros de Linux són desenvolupades, empaquetades i mantingudes per empreses o per entusiastes amb un objectiu concret. En general, es mantenen baix llicència GNU, amb opcions de pagament.

### Tipus d'usuaris vs distribucions:

![distros](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hxY05AVCBHC5wqXi2q81Qg.png)

Cada distribució té la seua pròpia filosofia i enfocament, fent que Linux siga una plataforma altament versàtil i adaptativa segons les necessitats de l'usuari o del projecte.

:::tip
[Distribucions](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)
:::

## Mètodes d'Instal·lació/actualitzacions

1. **Tendes d'aplicacions gràfiques:**
    - **Centre de Programari d'Ubuntu:** Proporciona una interfície gràfica per a buscar i instal·lar aplicacions en Ubuntu.
    - **GNOME Software:** Disponible en entorns d'escriptori GNOME, permet gestionar aplicacions de manera visual.
    - **Discover:** Utilitzat en entorns KDE Plasma, facilita la instal·lació de programari mitjançant una interfície amigable.
  
2. **Repositoris**: Servidors de paquets, accessibles a través d'un gestor de paquets.
   1. **Gestors de paquets tradicionals** 
    - **APT (Advanced Package Tool):** Utilitzat en distribucions basades en Debian, com Ubuntu i Linux Mint. Permet instal·lar paquets `.deb` des dels repositoris oficials mitjançant comandes com `sudo apt install nom-del-paquet`.
    - **YUM/DNF:** Emprats en distribucions basades en Red Hat, com Fedora i CentOS. Faciliten la instal·lació de paquets `.rpm` amb comandes com `sudo dnf install nom-del-paquet`.
    - **Pacman:** Propi d'Arch Linux i les seues derivades, gestiona paquets amb comandes com `sudo pacman -S nom-del-paquet`.

   2. **Gestors de paquets universals**
    - **Snap:** Desenvolupat per Canonical, permet instal·lar aplicacions empaquetades amb totes les seues dependències, funcionant en múltiples distribucions. S'instal·la amb `sudo snap install nom-del-paquet`.
    - **Flatpak:** Ofereix una plataforma per a distribuir aplicacions en diverses distribucions, executant-les en entorns aïllats. S'utilitza amb `flatpak install nom-del-paquet`.
    - **AppImage:** Proporciona aplicacions portàtils que no requereixen instal·lació; basta amb descarregar l'arxiu `.AppImage`, atorgar-li permisos d'execució i executar-lo directament.

3. **Compilació des del codi font:**
    - Algunes aplicacions es distribueixen en forma de codi font. Per a instal·lar-les, es descarreguen els arxius font, es descomprimeixen i es compilen utilitzant comandes com `./configure`, `make` i `sudo make install`. Este mètode ofereix flexibilitat, però requereix coneixements tècnics i pot ser més complex.



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
  - [Vídeo introductori Linux - es](https://www.youtube.com/watch?v=UUJ0dFpj1-M&t=19s)
  - [Testing distros on-line](https://distrosea.com/es/)
:::