---
title: "Sistemas de ficheros"
description: "Sistemas de ficheros"
---

### Comparativa de Sistemas de Archivos NTFS, EXT4 y HFS+

| Característica                      | NTFS (Windows)                                                               | EXT4 (Linux)                                                                   | HFS+ (macOS)                                                           |
| ----------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Journaling**                      | Sí                                                                           | Sí, con journaling mejorado respecto a EXT3                                    | Sí                                                                     |
| **Tamaño máximo de archivo**        | 16 TB                                                                        | 16 TB                                                                          | 8 EB                                                                   |
| **Tamaño máximo de volumen**        | 256 TB                                                                       | 1 Exabyte (EB)                                                                 | 8 EB                                                                   |
| **Rendimiento**                     | Óptimo en discos SSD y HDD de gran capacidad                                 | Rendimiento optimizado para acceso simultáneo                                  | Diseñado para dispositivos Apple con optimización para hardware propio |
| **Compatibilidad con USB/Pendrive** | Sí, exFAT y FAT32 para menor compatibilidad                                  | EXT4 (Linux), FAT32 o exFAT para compatibilidad con Windows                    | HFS+, FAT32, exFAT                                                     |

