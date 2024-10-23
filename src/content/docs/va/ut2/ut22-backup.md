---
title: "Opcions de recuperació"
description: "Opcions de recuperació"
---

### 1. MS Windows - Opcions de recuperació

En la [pàgina principal de Windows "support"](https://support.microsoft.com/es-es/windows/opciones-de-recuperación-en-windows-31ce2444-7de3-818c-d626-e3b5a3024da5#WindowsVersion=Windows_11) disposem dels possibles problemes i solucions per a cadascun d'ells.


#### Punts de Restauració en Windows

Els punts de restauració són com "fotos" de l'estat del teu sistema en un moment determinat. Windows guarda informació sobre la configuració del sistema, els arxius del sistema i el registre. Si alguna cosa va malament, com després d'instal·lar un programa o controlador que causa problemes, pots usar un punt de restauració per a "retrocedir en el temps" i revertir el teu sistema a eixe estat anterior.

![punto de restauración](https://i.blogs.es/b10e34/configurar-puntos-de-restauracion/1366_2000.webp)

**Quan es creen els punts de restauració?**

- Automàticament per Windows:
    - Abans d'instal·lar actualitzacions importants.
    - En instal·lar alguns programes.
    - Periòdicament, si no s'han creat altres punts de restauració.
- Manualment: Pots crear un punt de restauració en qualsevol moment.

**Com crear un punt de restauració?**

1. Busca "Crear un punt de restauració" en el menú inici.
2. En la pestanya "Protecció del sistema", selecciona la unitat del sistema (generalment C:).
3. Fes clic en "Crear".
4. Escriu una descripció per a identificar el punt de restauració.
5. Fes clic en "Crear" de nou.

**Com usar un punt de restauració?**

1. Busca "Crear un punt de restauració" en el menú inici.
2. Fes clic en "Restaurar sistema".
3. Segueix les instruccions en pantalla. Pots triar un punt de restauració recomanat o un diferent.
4. Confirma la restauració. L'equip es reiniciarà per a completar el procés.

**Recorda:**

- Restaurar un punt no afecta els teus arxius personals, com documents, fotos o música.
- És recomanable crear punts de restauració abans de realitzar canvis importants en el sistema.


### 2. Còpies de seguretat del sistema Linux (Imatges del sistema):

En Linux no existix una ferramenta de "punts de restauració" exactament igual a la de Windows.

Ferramentes com **dd**, **Clonezilla** o **Timeshift** et permeten crear una imatge completa del sistema, incloent el sistema operatiu, les aplicacions i els teus arxius.

* **dd:** Una utilitat de línia d'ordres molt potent que permet crear una còpia exacta d'un disc o partició. És molt versàtil, però requerix coneixements tècnics per a usar-la correctament. Ideal per a clonar discos o crear imatges de respatller completes.

* **Clonezilla:** Una ferramenta de codi obert basada en `dd` que simplifica el procés de clonació de discos i creació d'imatges del sistema. Oferix una interfície més amigable que `dd` i diverses opcions per a personalitzar el procés de còpia de seguretat.

* **Timeshift:** Una ferramenta dissenyada per a crear instantànies incrementals del sistema. Açò significa que només guarda els canvis realitzats des de l'última instantània, estalviant espai d'emmagatzematge. És ideal per a revertir el sistema a un estat anterior després d'una actualització o instal·lació problemàtica.

![Timeshift App](https://www.redeszone.net/app/uploads-redeszone.net/2017/10/TimeShift-Linux.png)

:::caution[activitat]
Punt de restauració
:::
