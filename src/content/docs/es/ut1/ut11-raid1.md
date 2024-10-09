---
title: "RAID 5 - ejercicios"
description: "RAID 5 - ejercicios. Cálculo de paridad"
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

Calcula los bloques de paridad (P1, P2, P3, P4) para las siguientes filas de datos, asumiendo que cada letra representa un bit:

| Disco 0 | Disco 1 | Disco 2 | Disco 3 |
|---|---|---|---|
| 1 | 0 | 1 | P1 |
| 0 | 1 | 1 | P2 |
| 1 | 1 | 0 | P3 |
| 0 | 0 | 1 | P4 |

**2. Simulación de fallo de disco:**

Ahora, imagina que el Disco 1 falla.  ¿Cómo se recuperaría la información de ese disco utilizando la paridad?

Utilizando los datos del ejercicio anterior y la paridad calculada, recupera los bloques de datos del Disco 1 (B, E, H, K)  asumiendo que el Disco 1 ha fallado.

