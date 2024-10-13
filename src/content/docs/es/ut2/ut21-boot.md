---
title: "SS.OO. Boot"
description: "SSOO BOOT"
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

1. **Comprobación del Hardware**:
   - Verifica la integridad de la memoria RAM.
   - Revisa la presencia y funcionamiento de la CPU.
   - Detecta dispositivos de almacenamiento (discos duros, SSD, unidades ópticas).
   - Identifica y revisa la tarjeta gráfica y otros dispositivos de expansión.

2. **Notificación de Errores**:
   - Si se detecta algún problema, el POST emite señales acústicas (pitidos) o muestra códigos de error en la pantalla. Cada combinación de pitidos indica un fallo específico (ej.: memoria defectuosa, fallo en la CPU, etc.).

3. **Inicialización del Hardware**:
   - Configura los dispositivos básicos para que puedan interactuar correctamente.
   - Revisa la tabla de configuración del BIOS para confirmar que todos los dispositivos están en las ranuras o puertos correctos.

4. **Entrega de Control al Bootloader**:
   - Si todo el hardware funciona correctamente, el POST entrega el control al **bootloader** (programa encargado de cargar el sistema operativo).
   - El bootloader comienza el proceso de carga del sistema operativo desde el disco duro u otro medio de arranque.

![POST](https://estudiotecnosoft.wordpress.com/wp-content/uploads/2018/09/1200px-post_p5kpl.jpg)

:::tip[Ampliación]
[WHY POST - EN](https://scot-comp.co.uk/understanding-computer-post-codes-guide/)
:::

#### Comparativa GPT vs MBR

| Característica                      | **GPT (Guid Partition Table)**             | **MBR (Master Boot Record)**              |
|-------------------------------------|-------------------------------------------|------------------------------------------|
| **Número máximo de particions**      | Fins a 128 particions                      | Màxim de 4 particions primàries          |
| **Capacitat màxima de particions**   | Fins a 18 ExaBytes (EB)                    | Fins a 2 TeraBytes (TB)                  |
| **Compatibilitat amb BIOS/UEFI**     | Compatible amb UEFI i BIOS                 | Principalment compatible amb BIOS        |
| **Recuperació d’arxius**             | Informació de particions duplicada per a la recuperació | MBR guarda la informació de particions en un sol lloc |
| **Sistemes Operatius compatibles**   | Windows 7 i posteriors, Linux, macOS       | Windows XP i anteriors, Linux, alguns sistemes antics de macOS |
| **Estructura de particions**         | Utilitza CRC32 per a la verificació d’errors | Sense verificació d’errors  

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