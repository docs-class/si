---
title: "Memoria RAM"
description: "Memoria RAM"
---

La **memoria RAM** (Random Access Memory) es una memoria de acceso rápido y volátil que almacena temporalmente datos e instrucciones que el procesador necesita mientras se ejecutan programas o aplicaciones.

## Características clave
1. **Volátil**: Pierde su contenido al apagar el ordenador.
2. **Acceso rápido**: Es mucho más veloz que las unidades de almacenamiento, como discos duros o SSD.
3. **Función principal**: Almacena datos e instrucciones temporalmente para que el procesador acceda a ellos rápidamente, mejorando el rendimiento del sistema.

## Factor de forma

El factor de forma de la RAM DDR se refiere a su tamaño físico y disposición de pines, siendo comúnmente **DIMM** para ordenadores de sobremesa y **SO-DIMM** para portátiles y dispositivos compactos.

![Factor Form](https://hardzone.es/app/uploads-hardzone.es/2022/11/formato-memoria-ram-dimm-sodimm.jpg)

## **Tipos de RAM**

### **DRAM (Dynamic RAM)**
- **Descripción**: La memoria RAM dinámica almacena los datos en condensadores, que deben refrescarse constantemente para mantener la información.
- **Uso**: Es el tipo de RAM más común en ordenadores y dispositivos móviles.
- **Tipos derivados**:
  - **SDRAM (Synchronous DRAM)**: Sincronizada con el reloj del sistema, lo que mejora su eficiencia.
  - **DDR (Double Data Rate SDRAM)**: Evolución de la SDRAM que transfiere datos en ambos flancos del ciclo de reloj, duplicando la tasa de transferencia.

#### 1.1. DDR (Double Data Rate)

| Tipo de RAM | Año de lanzamiento | Frecuencia de reloj (MHz) | Transferencia de datos (MT/s) | Velocidad de transferencia | Voltaje | Nº de pines |
|--------------|--------------------|---------------------------|-------------------------------|-----------------------------|----------|-------------|
| **DDR**      | 2000               | 100 – 200                 | 200 – 400                     | 1,6 – 3,2 GB/s              | 2,5 V    | 184         |
| **DDR2**     | 2003               | 133 – 266                 | 400 – 1066                    | 3,2 – 8,5 GB/s              | 1,8 V    | 240         |
| **DDR3**     | 2007               | 400 – 1066                | 800 – 2133                    | 6,4 – 17 GB/s               | 1,5 V    | 240         |
| **DDR4**     | 2014               | 800 – 1600                | 1600 – 3200                   | 12,8 – 25,6 GB/s            | 1,2 V    | 288         |
| **DDR5**     | 2020               | 1200 – 2100               | 4800 – 8400+                  | 38,4 – 67,2 GB/s (o más)    | 1,1 V    | 288         |

:::caution[Velocidades: MHz vs MT/s]

**9.200 MT/s** significa **9.200 millones de transferencias por segundo** (*MegaTransfers per Second*).

🔹 **MT/s (MegaTransfers por segundo)** mide la **velocidad efectiva de transferencia de datos** de la memoria, **no la frecuencia real del reloj**.
En las memorias **DDR (Double Data Rate)**, se realizan **dos transferencias por ciclo de reloj** (una en cada flanco), por lo que la velocidad en MT/s es **el doble de la frecuencia base**.

### Ejemplo práctico:

Si una memoria DDR5 trabaja a **4.600 MHz** de frecuencia real:

$$
4.600\ \text{MHz} \times 2 = 9.200\ \text{MT/s}
$$

Eso significa que puede realizar **9.200 millones de transferencias de datos por segundo**.

| Concepto                  | Significado                                       | Ejemplo                  |
| ------------------------- | ------------------------------------------------- | ------------------------ |
| **MHz (frecuencia)**      | Ciclos de reloj por segundo                       | 4.600 MHz                |
| **MT/s (transferencias)** | Operaciones de transferencia de datos por segundo | 9.200 MT/s               |
| **Relación en DDR**       | 1 MHz = 2 MT/s                                    | DDR = “Double Data Rate” |
:::

![DDR Family](https://hardzone.es/app/uploads-hardzone.es/2019/12/ddr3-ddr4-ddr5-esquema.jpg)

#### 1.2. LPDDR (Low Power DDR)
- **Descripción**: Variante de la memoria DDR diseñada para dispositivos móviles y portátiles.
- **Ventaja**: Optimizada para consumir menos energía, ideal para mejorar la duración de la batería.
- **Versiones**: Existen LPDDR2, LPDDR3, LPDDR4 y la más reciente **LPDDR5**, cada una con mejoras en velocidad y eficiencia energética.

#### 1.3. GDDR (Graphics DDR)
- **Descripción**: Versión especializada de DDR diseñada específicamente para **tarjetas gráficas**.
- **Uso**: Utilizada en GPUs debido a sus altos requisitos de ancho de banda.
- **Versiones**: Se actualiza con versiones como **GDDR5** o **GDDR6**, ofreciendo mayor rendimiento gráfico.

### **SRAM (Static RAM)**
- **Descripción**: No necesita refrescarse constantemente como la DRAM, por lo que es más rápida, pero también más cara y ocupa más espacio.
- **Uso**: Se emplea principalmente en la CMOS de la BIOS y en las memorias caché de CPU y GPU.

## Canales

Los **canales de memoria RAM** son las “autopistas” que conectan el procesador con la memoria, permitiendo el intercambio de datos. Más canales significan mayor ancho de banda y, por tanto, mejor rendimiento, especialmente en tareas intensivas como juegos o edición de vídeo.


- **Single Channel**: Un módulo de RAM activo; menor rendimiento.
- **Dual Channel**: Dos módulos trabajando en paralelo; duplica el ancho de banda.
- **Triple Channel**: Tres módulos funcionando de forma coordinada; mejora el rendimiento respecto a Dual Channel, aunque fue un estándar limitado a algunas plataformas (como Intel X58).
- **Quad Channel**: Cuatro módulos; maximiza el ancho de banda, usado en estaciones de trabajo y servidores.

> Hoy en día, **Dual Channel y Quad Channel** son los más comunes, mientras que el **Triple Channel** ha caído en desuso.

## Frecuencias

Las **frecuencias de la RAM** indican la velocidad a la que la memoria puede leer y escribir datos. Se miden en **MHz** (megahercios) y afectan directamente al rendimiento del sistema.

#### Características
1. **Frecuencia base**: Indica cuántos ciclos por segundo puede manejar la RAM. Por ejemplo, una memoria de **3200 MHz** puede realizar 3,2 mil millones de ciclos por segundo.
2. **Rendimiento**: Cuanto mayor sea la frecuencia, más rápido puede transferir datos la RAM, mejorando el rendimiento en tareas exigentes.
3. **Latencia**: A mayor frecuencia puede aumentar la latencia, aunque en general las frecuencias más altas compensan con mayor ancho de banda.
4. **Compatibilidad**: La velocidad máxima de la RAM está limitada por la **placa base** y el **procesador**.
5. **Overclocking**: Algunas memorias permiten aumentar su frecuencia por encima de la especificada, lo que puede requerir ajustes en la BIOS/UEFI.

#### **Ejemplo de cálculo de transferencia**
Supongamos una RAM DDR4 con las siguientes características:

- **Frecuencia de reloj**: 3200 MHz  
- **Bus de datos**: 64 bits  
- **Número de canales**: 2 (Dual Channel)

<div style="text-align: center; font-weight: bold;">
Tasa de transferencia (MB/s) = 3200 MHz × 64 bits × 2 canales / 8 = 51.200 MB/s = 51,2 GB/s
</div>

Esto significa que la tasa de transferencia de esta RAM es de **51,2 GB/s**.

## Ampliación


:::caution[Ampliación]
- **CUDIMM (Consumer UDIMM)**: Nueva especificación de memoria RAM DDR5 que mejora la integridad de la señal y permite alcanzar velocidades superiores a DDR5-6400, llegando hasta 9.200 MT/s. Es compatible con plataformas DDR5 actuales y está orientada a equipos de sobremesa de alto rendimiento. Los primeros módulos han sido fabricados por V-Color, con kits de hasta 48 GB y velocidades entre 6.400 y 9.200 MT/s.

Para más información, visita [CUDIMM](https://hardzone.es/tutoriales/componentes/memoria-ram-cudimm/).

- **CAMM2 (Compression Attached Memory Module 2)**: Nueva especificación de memoria RAM diseñada para sistemas de sobremesa y servidores, que ocupa hasta un 60 % menos de espacio que el estándar anterior. Soporta configuración **Dual Channel** en un único módulo, reduce el consumo de energía hasta un 40 % y mejora las latencias.
- **LPCAMM2 (Low Profile CAMM2)**: Variante de CAMM2 orientada a portátiles, con un diseño compacto. Ofrece capacidades de 64 GB, 96 GB y 128 GB según la densidad de la DRAM, y es compatible con los requisitos de eficiencia energética de la Unión Europea.

Para más información, visita [CAMM2/LPCAMM2](https://hardzone.es/tutoriales/componentes/memoria-ram-camm2-lpcamm2/).

:::


:::tip[Videos]
- [Dual Channel](https://www.youtube.com/watch?v=BIZccTdh7jg)
- [¿Cómo influyen la latencia y la frecuencia en la memoria RAM?](https://www.youtube.com/watch?v=cKdAqnQL7mY)
:::
