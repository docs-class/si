---
title: "POST"
description: "POST - Arranque"
---

## Arranque de un Ordenador: POST (Power-On Self Test)

El **POST** (Power-On Self Test) es la primera fase del arranque de un ordenador. Se trata de una serie de pruebas que el sistema realiza automáticamente para verificar que los componentes de hardware esenciales funcionan correctamente antes de cargar el sistema operativo. A continuación, se describen los pasos principales del POST:

1. **Comprobación del Hardware**:
   - Verifica la integridad de la memoria RAM.
   - Revisa la presencia y funcionamiento de la CPU.
   - Detecta dispositivos de almacenamiento (discos duros, SSD, unidades ópticas).
   - Identifica y revisa la tarjeta gráfica y otros dispositivos de expansión.

2. **Notificación de Errores**:
   - Si se detecta algún problema, el POST emite señales acústicas (pitidos) o muestra códigos de error en la pantalla. Cada combinación de pitidos indica un fallo específico (ej.: memoria defectuosa, fallo en la CPU, etc.).

3. **Inicialización del Hardware**:
   - Configura los dispositivos básicos para que puedan interactuar correctamente.
   - Revisa la tabla de configuración del BIOS para confirmar que todos los dispositivos están en las ranuras o puertos correctos.

4. **Entrega de Control al Bootloader**:
   - Si todo el hardware funciona correctamente, el POST entrega el control al **bootloader** (programa encargado de cargar el sistema operativo).
   - El bootloader comienza el proceso de carga del sistema operativo desde el disco duro u otro medio de arranque.

![POST](https://estudiotecnosoft.wordpress.com/wp-content/uploads/2018/09/1200px-post_p5kpl.jpg)
