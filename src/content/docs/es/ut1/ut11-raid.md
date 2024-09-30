---
title: "RAID"
description: "Redundant Array of Inexpensive Disks (RAID)"
---

**RAID** (Redundant Array of Independent Disks) es una tecnología que permite combinar varios discos duros en una única unidad lógica para mejorar la **tolerancia a fallos**, el **rendimiento**, o ambas. RAID puede configurarse a través de hardware dedicado o mediante software, y se usa comúnmente en servidores, estaciones de trabajo y sistemas de almacenamiento masivo.

### **Principales niveles de RAID y ejemplos típicos:**

---

### **1. RAID 0 (Striping)**

RAID 0 distribuye los datos equitativamente entre dos o más discos sin redundancia. Ofrece **mejores velocidades de lectura y escritura**, pero si uno de los discos falla, se pierden todos los datos, ya que no hay tolerancia a fallos.

- **Ventaja**: Velocidad de acceso incrementada.
- **Desventaja**: No hay redundancia; si falla un disco, los datos se pierden.
- **Uso típico**: Gaming, edición de video, cuando la velocidad es prioritaria y la pérdida de datos no es crítica.

![RAID 0](https://www.prepressure.com/images/raid-level-0-striping.svg)


### **2. RAID 1 (Mirroring)**

RAID 1 duplica los datos en dos o más discos. Si uno de los discos falla, los datos pueden recuperarse de los discos restantes. Este nivel de RAID ofrece una **alta disponibilidad** de los datos, pero el espacio de almacenamiento es la mitad del total, ya que todo se duplica.

- **Ventaja**: Alta tolerancia a fallos; si un disco falla, los datos aún están seguros.
- **Desventaja**: No mejora el rendimiento; solo duplica los datos.
- **Uso típico**: Servidores donde la seguridad de los datos es esencial (por ejemplo, bases de datos).

![RAID 1](https://www.prepressure.com/images/raid-level-1-mirroring.svg)



### **3. RAID 5 (Striping with Parity)**

RAID 5 utiliza **striping** junto con **paridad**, distribuyendo los datos y la información de paridad entre tres o más discos. Si un disco falla, los datos se pueden reconstruir utilizando la información de paridad almacenada en los discos restantes. RAID 5 proporciona un equilibrio entre **rendimiento, capacidad y redundancia**.

- **Ventaja**: Tolerancia a fallos; mayor rendimiento de lectura y escritura.
- **Desventaja**: Se pierde el equivalente al espacio de un disco para almacenar la paridad.
- **Uso típico**: Servidores de archivo y sistemas NAS donde se requieren tanto velocidad como redundancia.

![RAID 5](https://www.prepressure.com/images/raid-level-5-striping-with-parity.svg)



### **4. RAID 6 (Striping with Double Parity)**

RAID 6 es similar a RAID 5, pero almacena **dos bloques de paridad** en lugar de uno, lo que permite la **falla de hasta dos discos** sin pérdida de datos. Esto mejora la seguridad, pero a costa de un poco de rendimiento adicional.

- **Ventaja**: Mayor tolerancia a fallos que RAID 5; puede soportar la pérdida de dos discos.
- **Desventaja**: Menor rendimiento en escritura y mayor sobrecarga de almacenamiento.
- **Uso típico**: Sistemas empresariales críticos donde la redundancia es crucial.

![RAID 6](https://www.prepressure.com/images/raid-level-6-striping-with-dual-parity.svg)



### **5. RAID 10 (1+0, Mirroring + Striping)**

RAID 10 combina las características de RAID 1 y RAID 0. Primero, los datos se duplican (RAID 1) y luego se dividen (RAID 0). Este nivel proporciona un **equilibrio óptimo entre redundancia y rendimiento**, pero requiere al menos cuatro discos y pierde el 50% del espacio de almacenamiento total debido a la duplicación.

- **Ventaja**: Alta velocidad y redundancia; puede soportar múltiples fallos de discos.
- **Desventaja**: Alto coste debido a la duplicación de datos.
- **Uso típico**: Bases de datos transaccionales, aplicaciones que requieren alto rendimiento y disponibilidad.

![RAID 10](https://www.prepressure.com/images/raid-level-1-and-0-striping-mirroring.svg)