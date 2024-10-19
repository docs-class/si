---
title: "Sistemas de ficheros"
description: "Sistemas de ficheros"
---

:::note[Connexión con el currículum]
RA: 3 - CE: a, b, c
:::

## Sistemas de archivos

Un sistema de archivos es como un índice o catálogo que un sistema operativo utiliza para organizar y almacenar datos en un dispositivo de almacenamiento, como un disco duro, una unidad de estado sólido (SSD) o una memoria USB.

### ¿Por qué son importantes?

-   **Organización:** Permiten organizar los datos de forma jerárquica en directorios y archivos, lo que facilita su localización y acceso.
-   **Gestión del espacio:** Administran el espacio disponible en el dispositivo de almacenamiento, asignando espacio a los archivos y manteniendo un registro del espacio libre.
-   **Acceso a los datos:** Proporcionan mecanismos para leer, escribir y modificar los datos almacenados en los archivos.
-   **Seguridad:** Permiten establecer permisos de acceso a los archivos, controlando quién puede leerlos, escribirlos o ejecutarlos.

### Características de un sistema de archivos

-   **Formato:** Cada sistema de archivos tiene un formato específico que define cómo se organizan los datos en el dispositivo.
-   **Compatibilidad:** Los sistemas operativos suelen ser compatibles con varios sistemas de archivos, pero algunos son específicos de un sistema operativo en particular.
-   **Rendimiento:** El rendimiento de un sistema de archivos puede variar en función de su diseño y de las operaciones que se realicen.
-   **Fiabilidad:** Un buen sistema de archivos debe ser fiable y proteger los datos de posibles errores o fallos.

### Comparativa de Sistemas de Archivos NTFS, EXT4 y HFS+

| Característica                      | NTFS (Windows)                                                               | EXT4 (Linux)                                                                   | HFS+ (macOS)                                                           |
| ----------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Compatibilidad**                  | Nativo en Windows, lectura limitada en Linux y macOS                         | Nativo en Linux, acceso limitado en Windows y macOS                            | Nativo en macOS, acceso limitado en Windows y Linux                    |
| **Seguridad**                       | Soporte de permisos y encriptación mediante EFS (Encrypting File System)     | Soporte de permisos y journaling para prevenir pérdida de datos                | Soporte completo de permisos POSIX y journaling                        |
| **Encriptación**                    | Encriptación de archivos y carpetas con BitLocker                            | EncFS, eCryptfs                                                                | FileVault para encriptación de discos                                  |
| **Journaling**                      | Sí                                                                           | Sí, con journaling mejorado respecto a EXT3                                    | Sí                                                                     |
| **Compresión**                      | Compresión de archivos y carpetas (NTFS Compression)                         | Compresión limitada, mejor en Btrfs                                            | Compresión integrada en versiones a partir de macOS 10.6               |
| **Tamaño máximo de archivo**        | 16 TB                                                                        | 16 TB                                                                          | 8 EB                                                                   |
| **Tamaño máximo de volumen**        | 256 TB                                                                       | 1 Exabyte (EB)                                                                 | 8 EB                                                                   |
| **Fragmentación**                   | Requiere desfragmentación periódica                                          | Defragmentación dinámica para menor fragmentación                              | Fragmentación mínima                                                   |
| **Rendimiento**                     | Óptimo en discos SSD y HDD de gran capacidad                                 | Rendimiento optimizado para acceso simultáneo                                  | Diseñado para dispositivos Apple con optimización para hardware propio |
| **Compatibilidad con USB/Pendrive** | Sí, exFAT y FAT32 para menor compatibilidad                                  | EXT4 (Linux), FAT32 o exFAT para compatibilidad con Windows                    | HFS+, FAT32, exFAT                                                     |
| **Compatibilidad con tarjetas SD**  | FAT32, exFAT                                                                 | EXT4, FAT32                                                                    | HFS+, FAT32                                                            |
| **Utilizado en**                    | Sistemas operativos Windows, discos duros externos, unidades USB, servidores | Servidores, ordenadores Linux, tarjetas SD y almacenamiento portátil           | Ordenadores macOS, dispositivos de Apple                               |
| **Recuperación de errores**         | Sistema de registro (log) para evitar pérdida de datos                       | Sistema de registro y verificación de errores para la recuperación de archivos | Sistemas de verificación y recuperación integrados en macOS            |
