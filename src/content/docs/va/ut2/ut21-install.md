---

title: "Instal·lació"  
description: "SSOO - Instal·lació"  
---

## Fases de la Instal·lació
- **Fase 0**: Anàlisi de requisits.
- **Fase 1**: Obtenció i còpia del programa d'emmagatzematge.
- **Fase 2**: Configuració de paràmetres principals (particionat i arrencada).
- **Fase 3**: Configuració de paràmetres importants.

## Prerrequisits de Plataforma
- **Compatibilitat de maquinari i SO**: Comprovar que el SO és compatible amb el maquinari i els requisits de les aplicacions.
- **Manual del fabricant**: Utilitzar manuals de fabricant i de responsables del SO per a la instal·lació.

## Obtenció del Sistema Operatiu
- **Formats**: Els sistemes operatius es poden obtenir en format ISO o fins i tot DVD.
- **Eines**: Microsoft utilitza l'eina "Media Creation Tool" per generar els mitjans d'instal·lació.

## Parametrització Inicial
- **Tasques Inicials**: Configuració d'usuari administrador, actualitzacions, revisió de drivers, connexió a xarxa i canvis estètics.

Aquí tens la versió adaptada per a Windows:

---

:::note[particions]
**Connexió amb el currículum: RA: 3 - CE: d**

Les **particions de disc** divideixen un disc dur en seccions lògiques per organitzar i gestionar l'emmagatzematge de manera eficient. 

**Tipus de particions**:  
1. **Primària**: Fins a 4 particions principals.
2. **Estesa**: Permet crear particions lògiques addicionals.
3. **Lògica**: Emmagatzematge de dades o sistemes operatius addicionals.

**Propòsits**: Organització de dades, multiboot, seguretat i recuperació d'informació, i optimització del rendiment del sistema.
:::

---

## Procés d'Instal·lació - Windows

En el cas de Windows, analitzarem les fases de requisits previs, obtenció de mitjans (generalment en format **ISO** o amb eines oficials) i configuració de particions.

### Creació de Particions
El sistema sol·licita el nombre i la disposició de les particions a configurar. **Windows** sol recomanar les següents:

| Nom o Punt de Muntatge  | Grandària        | Descripció                            |
|-------------------------|------------------|---------------------------------------|
| Sistema                 | 500 MB           | Partició per als arxius del sistema   |
| Recuperació             | 450 MB           | Partició de recuperació del sistema   |
| Unitat C:               | Espai restant    | Espai principal per al sistema operatiu i els arxius de l'usuari |

### Configuració d'Usuaris
El sistema Windows requereix, almenys, la creació d'un compte d'usuari durant la instal·lació. Aquest compte pot ser un compte local o associat a un compte de Microsoft. Per defecte, es recomana crear un **compte d'administrador** per tenir permisos complets en el sistema.

Per executar programari que necessiti permisos d'administració, s'utilitza l'opció de "Executar com a administrador".

## Procés d'Instal·lació - Linux

En el cas de Linux, analitzarem les fases de prerequisits, obtenció de mitjans (generalment en format **ISO**) i configuració de particions.

### Creació de Particions   
El sistema sol·licita el nombre i la disposició de les particions a configurar. **Linux** recomana les següents:

| Nom o Punt de Muntatge | Grandària         | Descripció                        |
|------------------------|-------------------|-----------------------------------|
| efi                    | 1 GB              | Partició per a informació EFI     |
| swap                   | Memòria RAM x2    | Partició d'intercanvi de memòria  |
| /boot                  | 1 GB              | Partició d'arrencada              |
| /home                  | 50 GB             | Espai per als usuaris             |
| /                      | Resta             | Espai per a la resta de l'equip   |

Aquí tienes la traducción al valenciano:

:::tip[Glossari]
- La partició **EFI** s'utilitza per emmagatzemar els fitxers del carregador d'arrencada necessaris per iniciar el sistema operatiu, especialment en sistemes moderns que utilitzen _UEFI_ (Unified Extensible Firmware Interface). Aquesta partició s'encarrega de gestionar l'arrencada segura i proporciona una capa addicional de seguretat i flexibilitat comparada amb l'antic BIOS.

- La **swap** és una partició del disc dur dedicada a actuar com una extensió de la memòria RAM física del sistema. Quan la RAM s'omple, el sistema operatiu utilitza la swap per emmagatzemar temporalment dades que d'una altra manera estarien en la memòria principal, permetent que el sistema funcione de manera més eficient en situacions d'_alta demanda_.
:::

### Configuració d'Usuaris
El sistema Linux compta, almenys, amb l'usuari **root**, però en instal·lar la versió **desktop**, es demana la configuració d'un usuari que estarà activat per a tasques d'ús i configuració.

:::caution[Activitat]
A2.1 - Prerequisits i obtenció de mitjans
:::