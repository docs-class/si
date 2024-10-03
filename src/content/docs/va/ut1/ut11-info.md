---
title: "Mesures de la Informació"
description: "Mesures de la Informació"
---

## Mesures de la Informació

### **Tipus de Mesures**
- Existeixen dos tipus de mesures per a la capacitat d'informació:
  1. **Sistema Internacional (SI):** Basat en unitats de 1000 en 1000.
  2. **ISO (Organització Internacional de Normalització):** Basat en unitats de 1024 en 1024.

Encara que la mesura més utilitzada en la nomenclatura és la del Sistema Internacional, els equips internament utilitzen la norma ISO. Per simplificar, s'utilitzarà el Sistema Internacional.

---

### **Mesures de la Informació segons el Sistema Internacional (SI)**

| Factor          | Valor                 | Símbol | Nom       |
|-----------------|-----------------------|--------|-----------|
| 10⁰             | 1                     | B      | Byte      |
| 10³             | 1.000                 | kB     | Kilobyte  |
| 10⁶             | 1.000.000             | MB     | Megabyte  |
| 10⁹             | 1.000.000.000         | GB     | Gigabyte  |
| 10¹²            | 1.000.000.000.000     | TB     | Terabyte  |
| 10¹⁵            | 1.000.000.000.000.000 | PB     | Petabyte  |
| 10¹⁸            | 1.000.000.000.000.000.000 | EB   | Exabyte   |
| 10²¹            | 1.000.000.000.000.000.000.000 | ZB   | Zettabyte |
| 10²⁴            | 1.000.000.000.000.000.000.000.000 | YB | Yottabyte |

---

### **Mesures de la Informació segons la Norma ISO/IEC 80000-13**

:::note
Intent de separar la nomenclatura perquè no hi haguera confusió. Poc acolliment. En algunes distribucions de Linux.
:::

| Factor          | Valor                 | Símbol | Nom        |
|-----------------|-----------------------|--------|------------|
| 2⁰              | 1                     | B      | Byte       |
| 2¹⁰             | 1.024                 | KiB    | Kibibyte   |
| 2²⁰             | 1.048.576             | MiB    | Mebibyte   |
| 2³⁰             | 1.073.741.824         | GiB    | Gibibyte   |
| 2⁴⁰             | 1.099.511.627.776     | TiB    | Tebibyte   |
| 2⁵⁰             | 1.125.899.906.842.624 | PiB    | Pebibyte   |
| 2⁶⁰             | 1.152.921.504.606.846.976 | EiB | Exbibyte   |
| 2⁷⁰             | 1.180.591.620.717.411.303.424 | ZiB | Zebibyte   |
| 2⁸⁰             | 1.208.925.819.614.629.174.706.176 | YiB | Yobibyte   |

![Uso de ISO/IEC 80000-13](https://www.linuxcompatible.org/data/publish/180/00a9a8429db7579eb6ce6a671871e1d01afc97/dc77f1c0673ee535a0a6ce860e0786b4b782cf88.jpg)

---

### **Conversió d'Unitats**
Per a convertir les unitats de mesura, s'utilitzen les següents operacions:
- **Multiplicació per 1000** en cada salt cap a unitats superiors (per exemple, de GB a TB).
- **Divisió per 1000** en cada salt cap a unitats inferiors (per exemple, de TB a GB).
- Per a convertir de bits a bytes o viceversa, s'utilitza:
  - **Multiplicació per 8** per a passar de bytes a bits.
  - **Divisió per 8** per a passar de bits a bytes.

**Exemple de Conversió:**
- Convertir les següents unitats:
  - 1 TB, 3.000 MB i 1.000.000 B

Aplicant les conversions, s'obté la següent taula de referència:

| b              | B    | KB  | MB  | GB  | TB  |
|---------------|------|-----|-----|-----|-----|
| 8.000.000.000.000 | 1.000.000.000.000 | 1.000.000.000 | 1.000.000 | 1.000 | **1** |
| 24.000.000.000       | 24.000.000.000    | 3.000.000     | **3.000**     | 3 | 0,0033 |
| 8.000.000            | **1.000.000**     | 1.000         | 1.0011    | 0,001 | 0     |

---

### **Mesures de Velocitat de Transferència**
Per a mesurar la quantitat d'informació que pot ser enviada o rebuda per unitat de temps, es diferencien les següents mesures:

- **Transferència en xarxa**: Utilitza el bit com a base i els múltiples són de 1000.
- **Transferència local**: Utilitza el byte com a base i els múltiples són de 1024 (com en l'emmagatzematge).

| Factor          | Símbol | Nom                  |
|-----------------|--------|---------------------|
| 10⁰             | b/s    | Bit per segon        |
| 10³             | Kb/s   | Kilobit per segon    |
| 10⁶             | Mb/s   | Megabit per segon    |
| 10⁹             | Gb/s   | Gigabit per segon    |
| 10¹²            | Tb/s   | Terabit per segon    |
| 10¹⁵            | Pb/s   | Petabit per segon    |
| 10¹⁸            | Eb/s   | Exabit per segon     |
| 10²¹            | Zb/s   | Zettabit per segon   |

---

| Factor          | Símbol | Nom                    |
|-----------------|--------|-----------------------|
| 2⁰              | B/s    | Byte per segon         |
| 2¹⁰             | KB/s   | Kilobyte per segon     |
| 2²⁰             | MB/s   | Megabyte per segon     |
| 2³⁰             | GB/s   | Gigabyte per segon     |
| 2⁴⁰             | TB/s   | Terabyte per segon     |
| 2⁵⁰             | PB/s   | Petabyte per segon     |
| 2⁶⁰             | EB/s   | Exabyte per segon      |
| 2⁷⁰             | ZB/s   | Zettabyte per segon    |

---

### **Taxa de Transferència Segons el Tipus de Transmissió**

| Tipus de Transmissió | Taxa de Transferència   |
|----------------------|------------------------|
| ADSL                 | ~ 2,5 Mbps (fins a 20 Mbps) |
| Fibra                | ~ 100 Mbps (300, 600, segons contracte) |
| 4G                   | ~ 300 Mbps             |
| 5G                   | ~ 10 Gbps              |
| USB 1.0              | ~ 200 KB/s             |
| USB 3.2              | ~ 1,2 GB/s             |
| ATA                  | ~ 100 MB/s             |
| SATA 3.2             | ~ 2 GB/s               |
| PCI-E v4 x16         | ~ 63 GB/s            