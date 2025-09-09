---
title: "GPU"
description: "La tarjeta gráfica"
---

La GPU (**Graphics Processing Unit**) es el procesador dedicado a manejar y acelerar tareas gráficas, como el procesamiento de imágenes, videos y gráficos 3D. Aunque su función principal es renderizar gráficos, también se utiliza en otros tipos de procesamiento paralelo intensivo, como inteligencia artificial y computación científica.

![Tarjeta Gráfica](https://i.blogs.es/332cf8/screenshot_3638/1366_2000.webp)

### Características clave de una GPU:
1. **Arquitectura paralela**: A diferencia de la CPU, que está diseñada para procesar unas pocas tareas rápidamente, la GPU está optimizada para ejecutar miles de pequeñas tareas de forma simultánea, ideal para renderizado de gráficos.
2. **Memoria dedicada (VRAM)**: La mayoría de las GPUs tienen su propia memoria RAM (VRAM), que almacena los datos gráficos para acceso rápido. Las tarjetas de gama alta suelen tener más VRAM, mejorando su rendimiento en tareas de alta demanda.
3. **Cores o núcleos CUDA/Stream**: Las GPUs tienen miles de núcleos más pequeños que los de una CPU, lo que les permite procesar muchas operaciones en paralelo. En Nvidia se llaman núcleos **CUDA** y en AMD **Stream Processors**.
4. **Uso en gaming**: En los videojuegos, las GPUs son responsables del renderizado de gráficos complejos en tiempo real, como texturas, sombras y luces.
5. **Uso en tareas de cálculo**: Además de gráficos, las GPUs se utilizan para tareas como **machine learning**, **minería de criptomonedas** y **simulaciones** científicas, ya que pueden manejar grandes volúmenes de datos en paralelo de manera eficiente.
6. **Ray Tracing**: Las GPUs modernas soportan tecnologías avanzadas como el **ray tracing**, que simula cómo la luz interactúa con los objetos, mejorando la calidad gráfica en juegos y aplicaciones de diseño.


Existen varios tipos de **memoria gráfica** que se utilizan en las **tarjetas gráficas** (GPU). Estas memorias están diseñadas para almacenar datos gráficos como texturas, modelos 3D, y realizar tareas de renderizado de manera rápida y eficiente.
![GPU sobre placa](https://i.blogs.es/0ba60b/screenshot_3639/1366_2000.webp)
### Principales tipos de memoria gráfica:

1. **VRAM (Video RAM)**:
   - Es un tipo de memoria que se encuentra en las GPUs y está dedicada al almacenamiento de datos gráficos.
   - Funciona como un buffer entre la GPU y la pantalla, proporcionando acceso rápido a los datos visuales.

2. **GDDR (Graphics Double Data Rate)**:
   - Es una variante de la memoria DDR, diseñada específicamente para tarjetas gráficas.
   - **Versiones comunes**:
     - **GDDR6**: El estándar actual en muchas GPUs modernas, con mayor rendimiento y eficiencia energética que GDDR5.
     - **GDDR6X**: Utilizada en algunas GPUs de gama alta, como la Nvidia RTX 3000, ofrece mayor velocidad y rendimiento.

3. **HBM (High Bandwidth Memory)**:
   - Es un tipo de memoria de alto ancho de banda y baja latencia, diseñada para GPUs de alto rendimiento.
   - **HBM2**: Versión mejorada que ofrece aún más ancho de banda, usada en GPUs de estaciones de trabajo y algunos modelos de gama alta como las series Radeon de AMD.

4. **DDR/DDR2/DDR3/DDR4/DDR5/LPDDR(Low Power DDR)**:
   - En los procesadores que incorporan la unidad gráfica, se usa la del sistema.

### Conectores de alimentación para tarjetas gráficas

1. **Conector PCIe de 6 pines**:
   - Proporciona hasta **75W**.
   - Usado en tarjetas gráficas de gama media.

2. **Conector PCIe de 8 pines**:
   - Proporciona hasta **150W**.
   - Común en tarjetas gráficas de gama alta.

3. **Conector PCIe de 12 pines**:
   - Introducido por Nvidia para las RTX 3000.
   - Proporciona hasta **300W**.

4. **Conector PCIe de 16 pines (12+4 pines)**:
   - Usado en GPUs recientes como las RTX 4000.
   - Proporciona hasta **600W**.



![cableado GPU](../../../../assets/ut1/GPU-Power-Cables.jpg)

:::caution[activitad]
Practicum II
:::