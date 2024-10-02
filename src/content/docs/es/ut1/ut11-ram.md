---
title: "Memoria RAM"
description: "Memoria RAM"
---

La **memoria RAM** (Random Access Memory) es una memoria de acceso rápido y volátil que almacena temporalmente datos e instrucciones que el procesador necesita mientras se ejecutan programas o aplicaciones.

## Características clave
1. **Volátil**: Pierde su contenido al apagar el ordenador.
2. **Acceso rápido**: Es mucho más rápida que las unidades de almacenamiento como discos duros o SSDs.
3. **Función principal**: Almacena datos e instrucciones temporalmente para que el procesador acceda a ellos rápidamente, mejorando el rendimiento del sistema.

## **Tipos de RAM**

### **DRAM (Dynamic RAM)**
   - **Descripción**: La memoria RAM dinámica almacena los datos en condensadores, que deben ser constantemente refrescados para mantener la información.
   - **Uso**: Es el tipo de RAM más común en ordenadores y dispositivos móviles.
   - **Tipos derivados**:
     - **SDRAM (Synchronous DRAM)**: Sincronizada con el reloj del sistema, lo que mejora su eficiencia.
     - **DDR (Double Data Rate SDRAM)**: Evolución de la SDRAM que transfiere datos en ambos flancos del ciclo de reloj, duplicando la tasa de transferencia.
#### 1.1. DDR (Double Data Rate)

| Tipus de RAM | Any de Lançament | Velocitat de Rellotge | Transferència de Dades (MT/s) | Velocitat de Transferència | Voltatge | Pins |
|--------------|-----------------|----------------------|------------------------------|---------------------------|----------|------|
| **DDR**      | 2000            | 100 - 200 MHz        | 200 - 400 MT/s               | 1,6 - 3,2 GB/s            | 2,5V     | 184  |
| **DDR2**     | 2003            | 200 - 533 MHz        | 400 - 1066 MT/s              | 3,2 - 8,5 GB/s            | 1,8V     | 240  |
| **DDR3**     | 2007            | 400 - 1066 MHz       | 800 - 2133 MT/s              | 6,4 - 17 GB/s             | 1,5V     | 240  |
| **DDR4**     | 2014            | 800 - 1600 MHz       | 1600 - 3200 MT/s             | 12,8 - 25,6 GB/s          | 1,2V     | 288  |
| **DDR5**     | 2020            | 1600 - 3200 MHz      | 3200 - 6400 MT/s             | 25,6 - 51,2 GB/s          | 1,1V     | 288  |


#### 1.2. LPDDR (Low Power DDR)
   - **Descripción**: Es una variante de la memoria DDR diseñada para dispositivos móviles y portátiles.
   - **Ventaja**: Optimizada para consumir menos energía, lo que es ideal para mejorar la duración de la batería en dispositivos móviles.
   - **Versiones**: Similar a DDR, existen LPDDR2, LPDDR3, LPDDR4 y la más reciente **LPDDR5**, cada una mejorando en velocidad y eficiencia energética.

#### 1.3. GDDR (Graphics DDR)
   - **Descripción**: Es una versión especializada de DDR diseñada específicamente para **tarjetas gráficas**.
   - **Uso**: Utilizada en GPUs (tarjetas gráficas) debido a sus altos requisitos de ancho de banda.
   - **Versiones**: Similar a DDR, se actualiza con versiones como **GDDR5**, **GDDR6**, ofreciendo mayor rendimiento gráfico.

### **SRAM (Static RAM)**
   - **Descripción**: No necesita refrescarse constantemente como la DRAM, por lo que es más rápida, pero también más cara y consume más espacio.
   - **Uso**: Se utiliza principalmente en la CMOS de la BIOS y en las cachés de CPU y GPU.

## Canales

Los canales de memoria RAM son las "autopistas" que conectan el procesador con la memoria, permitiendo el intercambio de datos. Más canales significan más ancho de banda y, por lo tanto, un rendimiento más rápido, especialmente en tareas intensivas como juegos o edición de video.

- Single Channel: Un módulo de RAM activo, menor rendimiento.
- Dual Channel: Dos módulos trabajando en paralelo, duplicando el ancho de banda.
- Quad Channel: Cuatro módulos, maximiza el ancho de banda, usado en servidores.

Más canales mejoran el rendimiento, especialmente en tareas que requieren mucho acceso a la memoria.

## Frecuencias

Las **frecuencias de la RAM** se refieren a la velocidad a la que la memoria puede leer y escribir datos. Se mide en **MHz** (megahercios), y afecta directamente el rendimiento del sistema.

#### Características
1. **Frecuencia base**: Indica cuántos ciclos por segundo puede manejar la RAM. Por ejemplo, una RAM de **3200 MHz** puede realizar 3.2 mil millones de ciclos por segundo.
2. **Rendimiento**: Cuanto mayor sea la frecuencia, más rápido puede transferir datos la RAM, lo que mejora el rendimiento en tareas intensivas, como juegos, edición de video y multitarea.
3. **Latencia**: A mayor frecuencia, puede aumentar la latencia (el tiempo que tarda en acceder a los datos), pero en general, frecuencias más altas compensan con mayor ancho de banda.
4. **Compatibilidad**: La velocidad máxima de la RAM está limitada por la **placa base** y el **procesador**. Es importante que estos componentes soporten la frecuencia de la RAM instalada.
5. **Overclocking**: Algunas RAM permiten aumentar sus frecuencias por encima de las especificadas, mejorando el rendimiento (aunque puede requerir ajustes en la BIOS/UEFI).


#### **Ejemplo de Cálculo de transferencia**
Supongamos una RAM DDR4 con las siguientes características:

- **Frecuencia de Reloj**: 3200 MHz  
- **Número de Bits**: 64 bits (bus de datos de la RAM)  
- **Cantidad de Canales**: 2 (Dual Channel)  

<div style="text-align: center; font-weight: bold;">
Tasa de Transferencia (MB/s) = 3200 MHz × 64 bits × 2 canales / 8 = 51,200 MB/s = 51,2 GB/s
</div>

Esto significa que la tasa de transferencia de esta RAM es de **51,2 GB/s**.

:::tip[Videos]
- [Dual Channel](https://www.youtube.com/watch?v=BIZccTdh7jg)

- [¿Cómo influye la latencia y la frecuencia en la memoria RAM?](https://www.youtube.com/watch?v=cKdAqnQL7mY)
:::