---  
title: "RAID 5 - exercicis amb solució"  
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

| Disc 0 | Disc 1 | Disc 2 | Disc 3 |
|--------|--------|--------|--------|
| 1      | 0      | 1      | **0** | (1 XOR 0 XOR 1 = 0)  
| 0      | 1      | 1      | **0** | (0 XOR 1 XOR 1 = 0)  
| 1      | 1      | 0      | **0** | (1 XOR 1 XOR 0 = 0)  
| 0      | 0      | 1      | **1** | (0 XOR 0 XOR 1 = 1)  

**2. Simulació de fallada de disc:**

- A XOR C XOR P1 = **0** (1 XOR 1 XOR 0 = 0)  
- D XOR F XOR P2 = **1** (0 XOR 1 XOR 0 = 1)  
- G XOR I XOR P3 = **1** (1 XOR 0 XOR 0 = 1)  
- J XOR L XOR P4 = **0** (0 XOR 1 XOR 1 = 0)  
