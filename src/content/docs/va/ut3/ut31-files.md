---
title: "Sistemes de fitxers"
description: "Sistemes de fitxers"
---

:::note[Connexió amb el currículum]
RA: 3 - CE: a, b, c
:::

## Sistemes d'arxius

Un sistema d'arxius és com un índex o catàleg que un sistema operatiu utilitza per a organitzar i emmagatzemar dades en un dispositiu d'emmagatzematge, com un disc dur, una unitat d'estat sòlid (SSD) o una memòria USB.

### Per què són importants?

-   **Organització:** Permeten organitzar les dades de forma jeràrquica en directoris i arxius, la qual cosa facilita la seua localització i accés.
-   **Gestió de l'espai:** Administren l'espai disponible en el dispositiu d'emmagatzematge, assignant espai als arxius i mantenint un registre de l'espai lliure.
-   **Accés a les dades:** Proporcionen mecanismes per a llegir, escriure i modificar les dades emmagatzemades en els arxius.
-   **Seguretat:** Permeten establir permisos d'accés als arxius, controlant qui pot llegir-los, escriure'ls o executar-los.

### Característiques d'un sistema d'arxius

-   **Format:** Cada sistema d'arxius té un format específic que defineix com s'organitzen les dades en el dispositiu.
-   **Compatibilitat:** Els sistemes operatius solen ser compatibles amb diversos sistemes d'arxius, però alguns són específics d'un sistema operatiu en particular.
-   **Rendiment:** El rendiment d'un sistema d'arxius pot variar en funció del seu disseny i de les operacions que es realitzen.
-   **Fiabilitat:** Un bon sistema d'arxius ha de ser fiable i protegir les dades de possibles errors o fallades.

### Comparativa de Sistemes d'Arxius NTFS, EXT4 i HFS+

| Característica                      | NTFS (Windows)                                                           | EXT4 (Linux)                                                             | HFS+ (macOS)                                                            |
| ----------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| **Compatibilitat**                  | Natiu en Windows, lectura limitada en Linux i macOS                      | Natiu en Linux, accés limitat en Windows i macOS                         | Natiu en macOS, accés limitat en Windows i Linux                        |
| **Seguretat**                       | Suport de permisos i encriptació mitjançant EFS (Encrypting File System) | Suport de permisos i journaling per a previndre pèrdua de dades          | Suport complet de permisos POSIX i journaling                           |
| **Encriptació**                     | Encriptació d'arxius i carpetes amb BitLocker                            | EncFS, eCryptfs                                                          | FileVault per a encriptació de discos                                   |
| **Journaling**                      | Sí                                                                       | Sí, amb journaling millorat respecte a EXT3                              | Sí                                                                      |
| **Compressió**                      | Compressió d'arxius i carpetes (NTFS Compression)                        | Compressió limitada, millor en Btrfs                                     | Compressió integrada en versions a partir de macOS 10.6                 |
| **Mida màxima d'arxiu**             | 16 TB                                                                    | 16 TB                                                                    | 8 EB                                                                    |
| **Mida màxima de volum**            | 256 TB                                                                   | 1 Exabyte (EB)                                                           | 8 EB                                                                    |
| **Fragmentació**                    | Requereix desfragmentació periòdica                                      | Desfragmentació dinàmica per a menor fragmentació                        | Fragmentació mínima                                                     |
| **Rendiment**                       | Òptim en discos SSD i HDD de gran capacitat                              | Rendiment optimitzat per a accés simultani                               | Dissenyat per a dispositius Apple amb optimització per a hardware propi |
| **Compatibilitat amb USB/Pendrive** | Sí, exFAT i FAT32 per a menor compatibilitat                             | EXT4 (Linux), FAT32 o exFAT per a compatibilitat amb Windows             | HFS+, FAT32, exFAT                                                      |
| **Compatibilitat amb targetes SD**  | FAT32, exFAT                                                             | EXT4, FAT32                                                              | HFS+, FAT32                                                             |
| **Utilitzat en**                    | Sistemes operatius Windows, discos durs externs, unitats USB, servidors  | Servidors, ordinadors Linux, targetes SD i emmagatzematge portàtil       | Ordinadors macOS, dispositius d'Apple                                   |
| **Recuperació d'errors**            | Sistema de registre (log) per a evitar pèrdua de dades                   | Sistema de registre i verificació d'errors per a la recuperació d'arxius | Sistemes de verificació i recuperació integrats en macOS                |

