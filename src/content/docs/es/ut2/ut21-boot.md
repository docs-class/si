---
title: "SS.OO. Boot"
description: "SSOO BOOT"
---

## Gestores de arranque
Tienen la función de gestionar y seleccionar el sistema operativo que el usuario desea iniciar.

### BOOTMGR (Windows Boot Manager)

**BOOTMGR** es el gestor de arranque utilizado en sistemas operativos Windows modernos (a partir de Windows Vista, 7, 8, 10 y 11). Se encarga de gestionar el proceso de arranque del sistema operativo, permitiendo la selección de diferentes sistemas operativos instalados en el equipo.

- Utiliza el archivo `BCD` (Boot Configuration Data) para almacenar la configuración de arranque.
- Soporta la carga de sistemas operativos basados en NT (Windows) y algunas configuraciones de sistemas operativos Linux en dual boot.

![BOOTMGR](https://cdn4.geckoandfly.com/wp-content/uploads/2019/04/multi-boot-windows.jpg)

### GRUB2 (Grand Unified Bootloader version 2)

**GRUB2** es el gestor de arranque utilizado en la mayoría de distribuciones Linux modernas. Se trata de la versión mejorada y más potente del antiguo GRUB (GRand Unified Bootloader). GRUB2 permite gestionar el arranque de múltiples sistemas operativos, incluyendo Linux, Windows y otros.

- Puede arrancar sistemas operativos basados en Linux, Windows, BSD y más.
- Utiliza archivos de configuración que permiten añadir, eliminar y ajustar opciones de arranque (`/boot/grub/grub.cfg`).

![GRUB2](https://lignux.com/wp-content/uploads/2016/04/grub-boot-menu-live-cd.png)

![GRUB2 HYPERFLUENT](https://preview.redd.it/grub-hyperfluent-grub2-theme-v0-q9tgc9o9gdlc1.jpg?width=2618&format=pjpg&auto=webp&s=fe72808788992e567a82c210b93583f36c47fe59 "GRUB2 HYPERFLUENT")