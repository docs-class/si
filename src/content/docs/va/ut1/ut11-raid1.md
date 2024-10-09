---  
title: "RAID 5 - exercicis"  
description: "RAID 5 - exercicis. Càlcul de paritat"  
---

Imagina un sistema RAID 5 amb 4 discos (Disc 0, Disc 1, Disc 2, Disc 3). Cada disc emmagatzema un bloc de dades (A, B, C, etc.). La paritat es calcula mitjançant l'operació XOR (OR exclusiu) i es distribueix entre els discos.

**Blocs de dades:**

| Disc 0 | Disc 1 | Disc 2 | Disc 3 |
|--------|--------|--------|--------|
| A      | B      | C      | P1     |
| D      | E      | F      | P2     |
| G      | H      | I      | P3     |
| J      | K      | L      | P4     |

**1. Calcula els blocs de paritat**

Calcula els blocs de paritat (P1, P2, P3, P4) per a les següents files de dades, assumint que cada lletra representa un bit:

| Disc 0 | Disc 1 | Disc 2 | Disc 3 |
|--------|--------|--------|--------|
| 1      | 0      | 1      | P1     |
| 0      | 1      | 1      | P2     |
| 1      | 1      | 0      | P3     |
| 0      | 0      | 1      | P4     |

**2. Simulació de fallada de disc:**

Ara, imagina que el Disc 1 falla. Com es recuperaria la informació d'aquest disc utilitzant la paritat?

Utilitzant les dades de l'exercici anterior i la paritat calculada, recupera els blocs de dades del Disc 1 (B, E, H, K) assumint que el Disc 1 ha fallat.