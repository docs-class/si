---
title: "RAID 5 - ejercicios con solución II"
description: "RAID 5 - ejercicios. Cálculo de paridad II"
---

**1. Calcula los bloques de paridad**

| Disco 0 | Disco 1 | Disco 2 | Disco 3 |
|---|---|---|---|
| 1A2 | 3C4 | 5E6 | **780** | 
| F00 | A1B | C3D | **926** | 


**2. Simulación de fallo de disco:**

- 1A2 XOR 5E6 XOR 6C4 = **3C4** (1A2 XOR 5E6 XOR 6C4 = 3C4)
- F00 XOR C3D XOR A1B = **A1B** (F00 XOR C3D XOR A1B = A1B)
