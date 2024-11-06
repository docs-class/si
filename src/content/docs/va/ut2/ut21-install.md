---

title: "Instal·lació"  
description: "SSOO - Instal·lació"  
---

## Fases de la instal·lació

-   **Fase 0**: Anàlisi de requisits.
-   **Fase 1**: Obtenció i còpia del programa d'emmagatzematge.
-   **Fase 2**: Configuració de paràmetres principals (particionat i arrencada).
-   **Fase 3**: Configuració de paràmetres importants.

## Fase 0 - Prerequisits de plataforma

-   **Compatibilitat de maquinari i SO**: Comprovar que el SO és compatible amb el maquinari i els requisits de les aplicacions.
-   **Manual del fabricant**: Utilitzar manuals de fabricant i de responsables del SO per a la instal·lació.

## Fase 1 - Obtenció del sistema operatiu

-   **Formats**: Els sistemes operatius es poden obtenir en format ISO o inclús DVD.
-   **Eines**: Microsoft utilitza l'eina "Media Creation Tool" per a generar els mitjans d'instal·lació.

## Fase 2 - Procés d'instal·lació

:::note[sistemes d'arxius i particions]
**Connexió amb el currículum: RA: 3 - CE: a, d**

> Un **sistema de fitxers** és l'estructura que permet organitzar, emmagatzemar i gestionar els arxius en un dispositiu d'emmagatzematge. En **Windows**, el sistema de fitxers principal és **NTFS**, mentre que en **Linux** s'usa principalment **ext4**.

Les **particions de disc** divideixen un disc dur en seccions lògiques per a organitzar i gestionar l'emmagatzematge de manera eficient.

**Tipus de particions**:

1.  **Primària**: Fins a 4 particions principals.
2.  **Estesa**: Permet crear particions lògiques addicionals.
3.  **Lògica**: Emmagatzematge de dades o sistemes operatius addicionals.

**Propòsits**: Organització de dades, multiboot, seguretat i recuperació d'informació, i optimització del rendiment del sistema.
:::

### Creació de particions - Windows

**Windows** sol recomanar les següents particions:

| Nom o punt de muntatge | Grandària        | Descripció                                 |
| ----------------------- | --------------- | ------------------------------------------- |
| Sistema                 | 500 MB          | Partició per a arxius del sistema          |
| Recuperació             | 450 MB          | Partició de recuperació del sistema        |
| Unitat C:               | Espai restant | Espai principal per al sistema i els arxius |

### Creació de particions - Linux

**Linux** recomana les següents particions:

| Nom o punt de muntatge | Grandària        | Descripció                                 |
| ----------------------- | --------------- | ------------------------------------------- |
| efi                     | 1 GB            | Partició per a informació EFI              |
| swap                    | Memòria RAM x2  | Partició d'intercanvi de memòria           |
| /boot                   | 1 GB            | Partició d'arrencada                        |
| /home                   | 50 GB           | Espai per als usuaris                      |
| /                       | Resta           | Espai per a la resta de l'equip            |

:::tip[Glossari]

-   La partició **EFI** s'utilitza per a emmagatzemar els arxius del carregador d'arrencada necessaris per a iniciar el sistema operatiu, especialment en sistemes moderns que utilitzen _UEFI_ (Unified Extensible Firmware Interface). Esta partició s'encarrega de gestionar l'arrencada segura i proporciona una capa addicional de seguretat i flexibilitat comparada amb l'antic BIOS.

-   La **swap** és una partició del disc dur dedicada a actuar com una extensió de la memòria RAM física del sistema. Quan la RAM s'ompli, el sistema operatiu utilitza la swap per a emmagatzemar temporalment dades que d'una altra manera estarien en la memòria principal, permetent que el sistema funcione de manera més eficient en situacions d'_alta demanda_.
:::

## Fase 3 - Parametrització inicial

-   Configuració d'usuari administrador
-   Actualitzacions
-   Revisió de drivers
-   Connexió a xarxa
-   Canvis estètics.

:::caution[Activitat]
Prerequisits i obtenció de mitjans
:::
