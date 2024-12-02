---
title: "Boot"  
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

1. Comprovació del Maquinari.
2. Notificació d'Errors.
3. Inicialització del Maquinari.
4. Transferència de Control al Bootloader.

#### Comparativa GPT vs MBR

| Característica                      | **GPT (Guid Partition Table)**             | **MBR (Master Boot Record)**              |
|-------------------------------------|-------------------------------------------|------------------------------------------|
| **Nombre màxim de particions**      | Fins a 128 particions                      | Màxim de 4 particions primàries          |
| **Capacitat màxima de particions**   | Fins a 18 ExaBytes (EB)                    | Fins a 2 TeraBytes (TB)                  |

![MBR vs GPT](https://www.qilingtech.com/img/others/mbr-vs-gpt.png)

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