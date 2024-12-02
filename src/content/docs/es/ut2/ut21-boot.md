---
title: "Boot"
description: "BOOT"
---

## Proceso de arranque de un PC

#### El proceso de arranque de la BIOS:

1. Se enciende.
2. Autocomprobación de encendido ([POST](#post-power-on-self-test)).
3. Carga el BIOS.
4. Identifica el dispositivo de arranque.
5. La BIOS detecta el código almacenado en el sector MBR.
6. El MBR carga el código del sector de arranque de la partición activa.
7. El sector de arranque carga y ejecuta el cargador de arranque.

#### El proceso de arranque de la UEFI:

1. Se enciende.
2. El gestor de arranque en la UEFI comprueba la configuración de arranque.
3. El gestor de arranque se carga en la memoria y ejecuta el cargador del sistema operativo o el núcleo del sistema operativo.

#### POST (Power-On Self Test)

El **POST** (Power-On Self Test) es la primera fase del arranque de un ordenador. Se trata de una serie de pruebas que el sistema realiza automáticamente para verificar que los componentes de hardware esenciales funcionan correctamente antes de cargar el sistema operativo. A continuación, se describen los pasos principales del POST:

1. Comprobación del Hardware.
2. Notificación de Errores.
3. Inicialización del Hardware.
4. Entrega de Control al Bootloader.

#### Comparativa GPT vs MBR

| Característica                      | **GPT (Guid Partition Table)**               | **MBR (Master Boot Record)**              |
|-------------------------------------|---------------------------------------------|------------------------------------------|
| **Número máximo de particiones**    | Hasta 128 particiones                       | Máximo de 4 particiones primarias        |
| **Capacidad máxima de particiones** | Hasta 18 ExaBytes (EB)                      | Hasta 2 TeraBytes (TB)                   |

![MBR vs GPT](https://www.qilingtech.com/img/others/mbr-vs-gpt.png)

## Gestores de arranque
Tienen la función de gestionar y seleccionar el sistema operativo que el usuario desea iniciar.

#### BOOTMGR (Windows Boot Manager)

**BOOTMGR** es el gestor de arranque utilizado en sistemas operativos Windows modernos (a partir de Windows Vista, 7, 8, 10 y 11). Se encarga de gestionar el proceso de arranque del sistema operativo, permitiendo la selección de diferentes sistemas operativos instalados en el equipo.

- Utiliza el archivo `BCD` (Boot Configuration Data) para almacenar la configuración de arranque.
- Soporta la carga de sistemas operativos basados en NT (Windows) y algunas configuraciones de sistemas operativos Linux en dual boot.

![BOOTMGR](https://cdn4.geckoandfly.com/wp-content/uploads/2019/04/multi-boot-windows.jpg)

#### GRUB2 (Grand Unified Bootloader version 2)

**GRUB2** es el gestor de arranque utilizado en la mayoría de distribuciones Linux modernas. Se trata de la versión mejorada y más potente del antiguo GRUB (GRand Unified Bootloader). GRUB2 permite gestionar el arranque de múltiples sistemas operativos, incluyendo Linux, Windows y otros.

- Puede arrancar sistemas operativos basados en Linux, Windows, BSD y más.
- Utiliza archivos de configuración que permiten añadir, eliminar y ajustar opciones de arranque (`/boot/grub/grub.cfg`).

![GRUB2](https://lignux.com/wp-content/uploads/2016/04/grub-boot-menu-live-cd.png)

![GRUB2 HYPERFLUENT](https://preview.redd.it/grub-hyperfluent-grub2-theme-v0-q9tgc9o9gdlc1.jpg?width=2618&format=pjpg&auto=webp&s=fe72808788992e567a82c210b93583f36c47fe59 "GRUB2 HYPERFLUENT")