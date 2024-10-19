---
title: "Directorios"
description: "Directorios"
---

### **Estructura de Directorios en Windows**

La estructura de directorios en Windows está organizada jerárquicamente y empieza por unidades de almacenamiento (por ejemplo, **C:**, **D:**). Estas unidades contienen todos los archivos y carpetas. A continuación, algunos de los directorios principales:

- **C:\\**: Es la unidad de disco principal donde generalmente se instala el sistema operativo.
- **C:\Windows**: Contiene los archivos necesarios para el funcionamiento del sistema operativo.
- **C:\Program Files**: Directorio donde se instalan los programas y aplicaciones del sistema. Las versiones de 64 bits también incluyen una carpeta llamada **C:\Program Files (x86)**.
- **C:\Users**: Almacena las carpetas personales de cada usuario, como documentos, imágenes, y configuraciones de cada perfil.
- **C:\Temp**: Directorio temporal donde se almacenan archivos de uso temporal, útil para ciertas operaciones del sistema.
- **C:\System32**: Es una subcarpeta de **C:\Windows** que contiene archivos del sistema y bibliotecas esenciales para el funcionamiento del sistema operativo.

![windows folder estructure](https://www.aulaclic.es/googledrive/graficos/guardar_desplegado.gif)

### **Estructura de Directorios en Linux**

En Linux, la estructura de directorios sigue el estándar **Filesystem Hierarchy Standard (FHS)** y todos los directorios parten de la raíz representada por **/**. Algunos de los directorios principales son:

- **/** (Raíz): Directorio raíz que contiene todos los demás directorios del sistema.
- **/bin**: Contiene archivos ejecutables esenciales para el funcionamiento del sistema, como comandos básicos (`ls`, `cp`, etc.).
- **/boot**: Almacena los archivos necesarios para el arranque del sistema, como el kernel.
- **/etc**: Contiene archivos de configuración del sistema y de los programas instalados.
- **/home**: Directorio de los usuarios. Cada usuario tiene una subcarpeta donde guarda sus archivos personales, como **/home/usuario**.
- **/usr**: Contiene aplicaciones y utilidades del sistema que no son fundamentales para el arranque, incluyendo ejecutables, bibliotecas y archivos de documentación.
- **/var**: Almacena archivos que cambian con frecuencia, como registros del sistema (**/var/log**) y colas de impresión.
- **/tmp**: Directorio temporal donde se almacenan archivos que solo son necesarios por un corto periodo de tiempo.
- **/root**: Carpeta del superusuario (root). Es similar a **/home**, pero específicamente para el usuario root.
- **/dev**: Contiene los archivos de dispositivos, que permiten al sistema interactuar con hardware, como discos o periféricos.

