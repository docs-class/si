---  
title: "RAID 5 - exercicis II"  
description: "RAID 5 - exercicis. Càlcul de paritat II"  
---

**1. Calcula els blocs de paritat**

Calcula els blocs de paritat (P1, P2, P3, P4) per a les següents files de dades, assumint que cada lletra representa un bit:

| Disc 0 | Disc 1 | Disc 2 | Disc 3 |
|--------|--------|--------|--------|
| 1A2    | 3C4    | 5E6    | P1     |
| F00    | A1B    | C3D    | P2     |

**2. Simulació de fallada de disc:**

Ara, imagina que el Disc 1 falla. Com es recuperaria la informació d'aquest disc utilitzant la paritat?

Utilitzant les dades de l'exercici anterior i la paritat calculada, recupera els blocs de dades del Disc 1 assumint que el Disc 1 ha fallat.