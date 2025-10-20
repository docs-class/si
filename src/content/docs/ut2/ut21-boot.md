---
title: "Boot"
description: "BOOT"
---

## 1. Proceso de arranque de un SO. Gestores de arranque

El arranque del sistema operativo tiene dos fases: Arranque del hardware y Arranque del software.

### Componentes de Arranque

*   **BIOS (Basic Input Output System):** Circuito integrado con firmware que arranca el sistema y controla parámetros del hardware a bajo nivel.
*   **POST (Power-On Self Test):** Programa dentro del firmware de la BIOS que comprueba el hardware.
*   Tras el POST, la BIOS transfiere el control al medio de almacenamiento que contenga el **GESTOR DE ARRANQUE**.

:::note[Particiones y Sistemas de Ficheros]

Una **partición** es una división lógica del disco que funciona como si fuese un disco duro independiente. En cada partición se puede instalar un único sistema de archivos (formateo).

*   **Ventajas de usar particiones:** Organización de la información, eficiencia del disco, posibilidad de tener varios SOs en el mismo disco, y seguridad (el fallo de una partición no implica errores en las demás).
*   **Sistemas de ficheros:** ext, ext2, ext3, ext4 (para Linux); FAT, FAT32, NTFS (para Windows).
*   **Estructura lógica de un disco/partición:** Sector de arranque, Tabla de asignación de ficheros (FAT, índice), Directorio raíz, y la Zona de datos.

#### Tipos de Particiones (Modelo MBR)

*   **Física/Primaria:** Solo 4 por disco duro. Pueden contener sistemas operativos.
*   **Extendida/Secundaria:** Solo puede haber una por disco. No almacena datos; contiene particiones lógicas. No contiene sistema de ficheros.
*   **Lógica:** Creadas dentro de la partición extendida (máximo 23). Se pueden instalar sistemas operativos en ellas.
:::

#### Sistemas de Particionado (MBR vs GPT)

Los dos estándares más usados son MBR y GPT:

| Estándar | MBR (Master Boot Record) | GPT (Globally Unique IDentifier Partition Table) |
| :--- | :--- | :--- |
| **Uso** | Obsoleto. Usado en ordenadores con BIOS. | Sustituye a MBR. Usado en ordenadores con **UEFI**. |
| **Capacidad** | Limitada a 2 TB. | Mejora la capacidad a teóricamente 9,4 ZB. |
| **Particiones** | Utiliza particiones físicas, extendidas y lógicas. | Solo existen particiones primarias (hasta 128 en SO Microsoft). |
| **Seguridad** | Baja. | Alta: La información de la tabla de particiones está al inicio y con una copia fragmentada y repartida por todo el disco para recuperación. Comprueba el núcleo de los SOs. |

![MBR vs GPT](https://www.qilingtech.com/img/others/mbr-vs-gpt.png)


#### UEFI y BIOS

El SO es el **primer programa que se carga en la memoria RAM**.

**Proceso de carga inicial**:

1.  La BIOS/UEFI comprueba que todo está correcto.
2.  Se busca el **cargador de arranque (bootloader)** del SO.
3.  El bootloader se encuentra en el sector de arranque del disco duro o SSD.
    *   En sistemas con **BIOS**, se encuentra en el Master Boot Record (MBR).
    *   En sistemas con **UEFI**, se encuentra en la partición EFI del disco.



*   **UEFI** tiene un interfaz más amigable (admite ratón) y arranca más rápido que la BIOS.
*   En **BIOS**, el sector de arranque está en el MBR. En **UEFI**, esta información está en la GPT.
*   **Modos de arranque UEFI**:
    *   **Heredado (BIOS):** Establece compatibilidad hacia atrás con discos con esquema MBR.
    *   **UEFI:** Modo recomendado. Al instalar el SO en este modo, se crean particiones GPT.

#### Nomenclatura de Particiones

*   **Windows:** Asigna letras (C:, D:, E:, etc.). Las letras A y B se reservaban tradicionalmente para unidades lectoras extraíbles (disquetes, cintas) por herencia de MS-DOS.
*   **Linux (MBR):** Asigna una carpeta dentro de `/dev` (sda, sdb). Las particiones primarias/físicas van del 1 al 4 (sda1), y las lógicas a partir del 5 (sda5). Si existe una partición lógica (ej. sda5), implica que debe haber una partición extendida.
*   **Linux (GPT):** Las particiones solo son primarias (sda1, sda2...).

### Gestores de Arranque (Bootloaders)

Un gestor de arranque localiza la partición activa con el sistema operativo y le transfiere el control. Si hay más de un SO, muestra un menú.

#### 1. BOOTMGR (Windows Boot Manager)
Es el cargador de arranque utilizado por Microsoft Windows desde Windows Vista y Server 2012.

*   **Inconveniente:** Da muchos problemas arrancando sistemas operativos distintos de Microsoft.
*   Utiliza un almacén de datos de configuración de arranque, **BCD (Boot Configuration Data)**, que puede modificarse.
*   La modificación de opciones se realiza mediante el comando `BCDEDIT`.

![BOOTMGR](https://cdn4.geckoandfly.com/wp-content/uploads/2019/04/multi-boot-windows.jpg)


#### 2. GRUB (GNU Grand Unified Bootloader)
Viene preinstalado en la mayoría de distribuciones GNU/Linux.

![GRUB2](https://lignux.com/wp-content/uploads/2016/04/grub-boot-menu-live-cd.png)

*   Es muy potente y flexible; puede instalarse y **reconocer cualquier sistema operativo**, por lo que es el que se emplea en la práctica.
*   Puede arrancar sistemas operativos basados en Linux, Windows, BSD y más.
*   Muestra un menú gráfico para seleccionar las opciones de arranque. Si se selecciona un SO "no soportado" (no Linux), transfiere el control a su gestor de arranque propio.
*   **Archivos de configuración de GRUB 2 en Ubuntu**:
    *   `/etc/default/grub`: Gestiona el menú gráfico (tiempo de espera, selección por defecto, *password*). Se edita con privilegios de *root*.
    *   `/boot/grub/grub.cfg`: Archivo principal de configuración (formado por scripts), *no debe ser modificado directamente*.
*   Para modificar las opciones de GRUB, se edita `/etc/default/grub` y se ejecuta `update-grub`.


![GRUB2 HYPERFLUENT](https://preview.redd.it/grub-hyperfluent-grub2-theme-v0-q9tgc9o9gdlc1.jpg?width=2618&format=pjpg&auto=webp&s=fe72808788992e567a82c210b93583f36c47fe59 "GRUB2 HYPERFLUENT")


### Instalación en Sistemas Mixtos (Windows y Linux)

*   **Windows:** Requiere una partición primaria para la unidad C: y crea automáticamente una partición para el sistema (arranque).
*   **Linux:** Requiere un mínimo de 2 particiones (lógicas o primarias): el **directorio raíz** y la **memoria SWAP** (partición de intercambio). Es recomendable separar el directorio `/home` en otra partición para poder reinstalar el sistema sin perder datos.
*   **Orden de instalación mixta:** Primero se instala **Windows** (situado en el disco principal) y después **Linux**, ya que su cargador de arranque (GRUB2) es capaz de iniciar Windows, mientras que BOOTMGR no lo hace bien con otros SOs. GRUB2 sobrescribiría a BOOTMGR.
