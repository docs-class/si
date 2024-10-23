---
title: "Opciones de recuperación"
description: "Opciones de recuperación"
---

### 1. MS Windows - Opciones de recuperación
En la [página principal de Windows "support"](https://support.microsoft.com/es-es/windows/opciones-de-recuperación-en-windows-31ce2444-7de3-818c-d626-e3b5a3024da5#WindowsVersion=Windows_11) disponemos de los posibles problemas y soluciones para cada uno de ellos.


#### Puntos de Restauración en Windows

Los puntos de restauración son como "fotos" del estado de tu sistema en un momento determinado.  Windows guarda información sobre la configuración del sistema, los archivos del sistema y el registro. Si algo va mal, como después de instalar un programa o controlador que causa problemas, puedes usar un punto de restauración para "retroceder en el tiempo" y revertir tu sistema a ese estado anterior.

![punto de restauración](https://i.blogs.es/b10e34/configurar-puntos-de-restauracion/1366_2000.webp)

**¿Cuándo se crean los puntos de restauración?**

- Automáticamente por Windows:
    - Antes de instalar actualizaciones importantes.
    - Al instalar algunos programas.
    - Periódicamente, si no se han creado otros puntos de restauración.
- Manualmente: Puedes crear un punto de restauración en cualquier momento.

**¿Cómo crear un punto de restauración?**

1. Busca "Crear un punto de restauración" en el menú inicio.
2. En la pestaña "Protección del sistema", selecciona la unidad del sistema (generalmente C:).
3. Haz clic en "Crear".
4. Escribe una descripción para identificar el punto de restauración.
5. Haz clic en "Crear" de nuevo.

**¿Cómo usar un punto de restauración?**

1. Busca "Crear un punto de restauración" en el menú inicio.
2. Haz clic en "Restaurar sistema".
3. Sigue las instrucciones en pantalla. Puedes elegir un punto de restauración recomendado o uno diferente.
4. Confirma la restauración. El equipo se reiniciará para completar el proceso.

**Recuerda:**

- Restaurar un punto no afecta a tus archivos personales, como documentos, fotos o música.
- Es recomendable crear puntos de restauración antes de realizar cambios importantes en el sistema.


### 2. Copias de seguridad del sistema Linux (Imágenes del sistema):

En Linux no existe una herramienta de "puntos de restauración" exactamente igual a la de Windows.

Herramientas como **dd**, **Clonezilla** o **Timeshift** te permiten crear una imagen completa del sistema, incluyendo el sistema operativo, las aplicaciones y tus archivos.

* **dd:** Una utilidad de línea de comandos muy potente que permite crear una copia exacta de un disco o partición. Es muy versátil, pero requiere conocimientos técnicos para usarla correctamente. Ideal para clonar discos o crear imágenes de respaldo completas.

* **Clonezilla:** Una herramienta de código abierto basada en `dd` que simplifica el proceso de clonación de discos y creación de imágenes del sistema. Ofrece una interfaz más amigable que `dd` y varias opciones para personalizar el proceso de copia de seguridad.

* **Timeshift:** Una herramienta diseñada para crear instantáneas incrementales del sistema. Esto significa que solo guarda los cambios realizados desde la última instantánea, ahorrando espacio de almacenamiento. Es ideal para revertir el sistema a un estado anterior después de una actualización o instalación problemática.

![Timeshift App](https://www.redeszone.net/app/uploads-redeszone.net/2017/10/TimeShift-Linux.png)

:::caution[actividad]
Punto de restauración
:::