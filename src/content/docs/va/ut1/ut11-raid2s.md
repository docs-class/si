---  
title: "RAID 5 - exercicis amb solució II"  
description: "RAID 5 - exercicis. Càlcul de paritat II"  
---

**1. Calcula els blocs de paritat**

| Disco 0 | Disco 1 | Disco 2 | Disco 3 |
|---|---|---|---|
| 1A2 | 3C4 | 5E6 | **780** | 
| F00 | A1B | C3D | **926** | 

**2. Simulació de fallada de disc:**

- 1A2 XOR 5E6 XOR 780 = **3C4** (1A2 XOR 5E6 XOR 780 = 3C4)
- F00 XOR C3D XOR 926 = **A1B** (F00 XOR C3D XOR 926 = A1B)
