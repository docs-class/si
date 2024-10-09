---
title: "RAID 5 - ejercicios con solución"
description: "RAID 5 - ejercicios. Cálculo de paradid"
---

Imagina un sistema RAID 5 con 4 discos (Disco 0, Disco 1, Disco 2, Disco 3). Cada disco almacena un bloque de datos (A, B, C, etc.). La paridad se calcula mediante la operación XOR (OR exclusivo) y se distribuye entre los discos.


**Bloques de datos:**

| Disco 0 | Disco 1 | Disco 2 | Disco 3 |
|---|---|---|---|
| A | B | C | P1 |
| D | E | F | P2 |
| G | H | I | P3 |
| J | K | L | P4 |


**1. Calcula los bloques de paridad**

| Disco 0 | Disco 1 | Disco 2 | Disco 3 |
|---|---|---|---|
| 1 | 0 | 1 | **0** |  (1 XOR 0 XOR 1 = 0)
| 0 | 1 | 1 | **0** |  (0 XOR 1 XOR 1 = 0)
| 1 | 1 | 0 | **0** |  (1 XOR 1 XOR 0 = 0)
| 0 | 0 | 1 | **1** |  (0 XOR 0 XOR 1 = 1)


**2. Simulación de fallo de disco:**

* A XOR C XOR P1 = **0** (1 XOR 1 XOR 0 = 0)
* D XOR F XOR P2 = **1** (0 XOR 1 XOR 0 = 1)
* G XOR I XOR P3 = **1** (1 XOR 0 XOR 0 = 1)
* J XOR L XOR P4 = **0** (0 XOR 1 XOR 1 = 0)
