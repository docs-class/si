---
title: "Arrencada"  
description: "ARRENCADA"  
---

## Procés d'arrencada d'un PC

#### El procés d'arrencada de la BIOS:

1. S'encén.
2. Autocomprovació d'encés ([POST](#post-power-on-self-test)).
3. Carrega el BIOS.
4. Identifica el dispositiu d'arrencada.
5. El BIOS detecta el codi emmagatzemat al sector MBR.
6. El MBR carrega el codi del sector d'arrencada de la partició activa.
7. El sector d'arrencada carrega i executa el carregador d'arrencada.

#### El procés d'arrencada de la UEFI:

1. S'encén.
2. El gestor d'arrencada en la UEFI comprova la configuració d'arrencada.
3. El gestor d'arrencada es carrega en la memòria i executa el carregador del sistema operatiu o el nucli del sistema operatiu.

#### POST (Power-On Self Test)

El **POST** (Power-On Self Test) és la primera fase de l'arrancada d'un ordinador. Es tracta d'una sèrie de proves que el sistema realitza automàticament per a verificar que els components de maquinari essencials funcionen correctament abans de carregar el sistema operatiu. A continuació, es descriuen els passos principals del POST:

1. **Comprovació del Maquinari**:
   - Verifica la integritat de la memòria RAM.
   - Revisa la presència i el funcionament de la CPU.
   - Detecta dispositius d'emmagatzematge (discos durs, SSD, unitats òptiques).
   - Identifica i revisa la targeta gràfica i altres dispositius d'expansió.

2. **Notificació d'Errors**:
   - Si es detecta algun problema, el POST emet senyals acústiques (pitits) o mostra codis d'error en la pantalla. Cada combinació de pitits indica un error específic (p. ex.: memòria defectuosa, error en la CPU, etc.).

3. **Inicialització del Maquinari**:
   - Configura els dispositius bàsics perquè puguen interactuar correctament.
   - Revisa la taula de configuració del BIOS per a confirmar que tots els dispositius estan en els slots o ports correctes.

4. **Transferència de Control al Bootloader**:
   - Si tot el maquinari funciona correctament, el POST entrega el control al **bootloader** (programa encarregat de carregar el sistema operatiu).
   - El bootloader inicia el procés de càrrega del sistema operatiu des del disc dur o altre mitjà d'arrancada.

![POST](https://estudiotecnosoft.wordpress.com/wp-content/uploads/2018/09/1200px-post_p5kpl.jpg)

:::tip[Ampliació]
[WHY POST - EN](https://scot-comp.co.uk/understanding-computer-post-codes-guide/)
:::

#### Comparativa GPT vs MBR

:::note[particions]
**Conexió amb el currículum: RA: 3 - CE: d**


Les **particions de disc** divideixen un disc dur en seccions lògiques per organitzar i gestionar l'emmagatzematge de manera eficient.

**Tipus de particions**:  
1. **Primària**: Fins a 4 particions principals.
2. **Estesa**: Permet crear particions lògiques addicionals.
3. **Lògica**: Emmagatzematge de dades o sistemes operatius addicionals.

**Propòsits**: Organització de dades, multiboot, seguretat i recuperació d'informació, i optimització del rendiment del sistema.
:::

| Característica                      | **GPT (Guid Partition Table)**             | **MBR (Master Boot Record)**              |
|-------------------------------------|-------------------------------------------|------------------------------------------|
| **Nombre màxim de [particions](ut21-part.md)**      | Fins a 128 particions                      | Màxim de 4 particions primàries          |
| **Capacitat màxima de particions**   | Fins a 18 ExaBytes (EB)                    | Fins a 2 TeraBytes (TB)                  |
| **Compatibilitat amb BIOS/UEFI**     | Compatible amb UEFI i BIOS                 | Principalment compatible amb BIOS        |
| **Recuperació d’arxius**             | Informació de particions duplicada per a la recuperació | MBR guarda la informació de particions en un sol lloc |
| **Sistemes Operatius compatibles**   | Windows 7 i posteriors, Linux, macOS       | Windows XP i anteriors, Linux, alguns sistemes antics de macOS |
| **Estructura de particions**         | Utilitza CRC32 per a la verificació d’errors | Sense verificació d’errors  

## Gestors d'arrencada  
Tenen la funció de gestionar i seleccionar el sistema operatiu que l'usuari desitja iniciar.

#### BOOTMGR (Windows Boot Manager)

**BOOTMGR** és el gestor d'arrencada utilitzat en sistemes operatius Windows moderns (a partir de Windows Vista, 7, 8, 10 i 11). S'encarrega de gestionar el procés d'arrencada del sistema operatiu, permetent la selecció de diferents sistemes operatius instal·lats en l'equip.

- Utilitza l'arxiu `BCD` (Boot Configuration Data) per a emmagatzemar la configuració d'arrencada.
- Suporta la càrrega de sistemes operatius basats en NT (Windows) i algunes configuracions de sistemes operatius Linux en dual boot.

![BOOTMGR](https://cdn4.geckoandfly.com/wp-content/uploads/2019/04/multi-boot-windows.jpg)

#### GRUB2 (Grand Unified Bootloader version 2)

**GRUB2** és el gestor d'arrencada utilitzat en la majoria de distribucions Linux modernes. Es tracta de la versió millorada i més potent de l'antic GRUB (GRand Unified Bootloader). GRUB2 permet gestionar l'arrencada de múltiples sistemes operatius, incloent Linux, Windows i altres.

- Pot arrencar sistemes operatius basats en Linux, Windows, BSD i més.
- Utilitza arxius de configuració que permeten afegir, eliminar i ajustar opcions d'arrencada (`/boot/grub/grub.cfg`).

![GRUB2](https://lignux.com/wp-content/uploads/2016/04/grub-boot-menu-live-cd.png)

![GRUB2 HYPERFLUENT](https://preview.redd.it/grub-hyperfluent-grub2-theme-v0-q9tgc9o9gdlc1.jpg?width=2618&format=pjpg&auto=webp&s=fe72808788992e567a82c210b93583f36c47fe59 "GRUB2 HYPERFLUENT")