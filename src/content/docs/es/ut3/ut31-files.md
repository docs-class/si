Aquí tienes las tablas con las modificaciones solicitadas:

             |

### Comparativa de Sistemes de Fitxers

| Característica                      | **Windows**             | **Linux**                | **macOS**                |
|-------------------------------------|------------------------|-------------------------|-------------------------|
| **Sistema de fitxers principal**    | **NTFS**, exFAT        | **EXT4**, Btrfs, XFS    | **HFS+**, APFS          |
| **Compatibilitat amb USB/Pendrive** | exFAT, FAT32           | **EXT4** (per dispositius Linux) | **HFS+**, FAT32       |
| **Compatibilitat amb targetes SD**  | FAT32, exFAT           | **EXT4**, FAT32         | **HFS+**, FAT32         |
| **Compatibilitat d’instal·lació**   | Només **NTFS** i exFAT | **EXT4**, XFS, Btrfs, FAT32 | **HFS+**, APFS         |
| **Suport de permisos**              | Sí                     | Sí                      | Sí                      |
| **Suport de compressió**            | Només **NTFS**         | **EXT4**, Btrfs         | **HFS+**, APFS          |
| **Encriptació integrada**           | BitLocker (només **NTFS**) | EncFS, eCryptfs         | FileVault (**HFS+**)    |

### Comparativa de Sistemas de Archivos NTFS, EXT4 y HFS+

| Característica                     | **NTFS** (Windows)                                                         | **EXT4** (Linux)                                                         | **HFS+** (macOS)                                                         |
|------------------------------------|---------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|
| **Compatibilidad**                 | Nativo en Windows, lectura limitada en Linux y macOS                      | Nativo en Linux, acceso limitado en Windows y macOS                      | Nativo en macOS, acceso limitado en Windows y Linux                      |
| **Seguridad**                      | Soporte de permisos y encriptación mediante EFS (Encrypting File System)  | Soporte de permisos y journaling para prevenir pérdida de datos          | Soporte completo de permisos POSIX y journaling                         |
| **Encriptación**                   | Encriptación de archivos y carpetas con BitLocker                         | EncFS, eCryptfs                                                          | FileVault para encriptación de discos                                    |
| **Journaling**                     | Sí                                                                        | Sí, con journaling mejorado respecto a EXT3                              | Sí                                                                        |
| **Compresión**                     | Compresión de archivos y carpetas (NTFS Compression)                      | Compresión limitada, mejor en Btrfs                                      | Compresión integrada en versiones a partir de macOS 10.6                 |
| **Tamaño máximo de archivo**       | 16 TB                                                                     | 16 TB                                                                    | 8 EB                                                                     |
| **Tamaño máximo de volumen**       | 256 TB                                                                    | 1 Exabyte (EB)                                                           | 8 EB                                                                     |
| **Fragmentación**                  | Requiere desfragmentación periódica                                       | Defragmentación dinámica para menor fragmentación                        | Fragmentación mínima                                                    |
| **Rendimiento**                    | Óptimo en discos SSD y HDD de gran capacidad                              | Rendimiento optimizado para acceso simultáneo                            | Diseñado para dispositivos Apple con optimización para hardware propio   |
| **Compatibilidad con USB/Pendrive**| Sí, exFAT y FAT32 para menor compatibilidad                               | EXT4 (Linux), FAT32 o exFAT per compatibilitat amb Windows                | HFS+, FAT32, exFAT                                                      |
| **Compatibilidad amb targetes SD** | FAT32, exFAT                                                              | EXT4, FAT32                                                              | HFS+, FAT32                                                              |
| **Utilitzat en**                   | Sistemes operatius Windows, discos durs externs, unitats USB, servidors   | Servidors, ordinadors Linux, targetes SD i emmagatzematge portàtil       | Ordinadors macOS, dispositius d’Apple                                    |
| **Recuperació d'errors**           | Sistema de registre (log) per a evitar pèrdua de dades                    | Sistema de registre i verificació d’errors per a la recuperació de fitxers | Sistemes de verificació i recuperació integrats en macOS                |
