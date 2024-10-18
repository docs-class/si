---

title: "Instalación"  
description: "SSOO - Instalación"  
---

## Fases de la Instalación
- **Fase 0**: Análisis de requisitos.
- **Fase 1**: Obtención y copia del programa de almacenamiento.
- **Fase 2**: Configuración de parámetros principales (particionado y arranque).
- **Fase 3**: Configuración de parámetros importantes.

## Prerrequisitos de Plataforma
- **Compatibilidad de hardware y SO**: Comprobar que el SO es compatible con el hardware y los requisitos de las aplicaciones.
- **Manual del fabricante**: Utilizar manuales de fabricante y de responsables del SO para la instalación.

## Obtención del Sistema Operativo
- **Formatos**: Los sistemas operativos se pueden obtener en formato ISO o incluso DVD.
- **Herramientas**: Microsoft utiliza la herramienta "Media Creation Tool" para generar los medios de instalación.

## Parametrización Inicial
- **Tareas Iniciales**: Configuración de usuario administrador, actualizaciones, revisión de drivers, conexión a red y cambios estéticos.

:::note[sistemas de archivos y particiones]
**Conexión con el currículo: RA: 3 - CE: a, d**

> Un **sistema de ficheros** es la estructura que permite organizar, almacenar y gestionar los archivos en un dispositivo de almacenamiento. En **Windows**, el sistema de ficheros principal es **NTFS**, mientras que en **Linux** se usa principalmente **ext4**.

Las **particiones de disco** dividen un disco duro en secciones lógicas para organizar y gestionar el almacenamiento de manera eficiente.

**Tipos de particiones**:  
1. **Primaria**: Hasta 4 particiones principales.
2. **Extendida**: Permite crear particiones lógicas adicionales.
3. **Lógica**: Almacenamiento de datos o sistemas operativos adicionales.

**Propósitos**: Organización de datos, multiboot, seguridad y recuperación de información, y optimización del rendimiento del sistema.
:::

## Proceso de Instalación - Windows

En el caso de Windows, analizaremos las fases de requisitos previos, obtención de medios (generalmente en formato **ISO** o con herramientas oficiales) y configuración de particiones.

### Creación de Particiones
El sistema solicita el número y la disposición de las particiones a configurar. **Windows** suele recomendar las siguientes:

| Nombre o Punto de Montaje  | Tamaño          | Descripción                            |
|----------------------------|-----------------|----------------------------------------|
| Sistema                    | 500 MB          | Partición para archivos del sistema    |
| Recuperación               | 450 MB          | Partición de recuperación del sistema  |
| Unidad C:                  | Espacio restante| Espacio principal para el sistema operativo y los archivos del usuario |

### Configuración de Usuarios
El sistema Windows requiere, al menos, la creación de una cuenta de usuario durante la instalación. Esta cuenta puede ser una cuenta local o asociada a una cuenta de Microsoft. Por defecto, se recomienda crear una **cuenta de administrador** para tener permisos completos en el sistema.

Para ejecutar software que necesite permisos de administración, se utiliza la opción de "Ejecutar como administrador".

## Proceso de Instalación - Linux

En el caso de Linux, analizaremos las fases de prerequisitos, obtención de medios (generalmente en formato **ISO**) y configuración de particiones.

### Creación de Particiones   
El sistema solicita el número y la disposición de las particiones a configurar. **Linux** recomienda las siguientes:

| Nombre o Punto de Montaje | Tamaño          | Descripción                           |
|---------------------------|-----------------|---------------------------------------|
| efi                       | 1 GB            | Partición para información EFI        |
| swap                      | Memoria RAM x2  | Partición de intercambio de memoria   |
| /boot                     | 1 GB            | Partición de arranque                 |
| /home                     | 50 GB           | Espacio para los usuarios             |
| /                         | Resto           | Espacio para el resto del equipo      |


:::tip[Glosario]
- La partición **EFI** se utiliza para almacenar los archivos del cargador de arranque necesarios para iniciar el sistema operativo, especialmente en sistemas modernos que utilizan _UEFI_ (Unified Extensible Firmware Interface). Esta partición se encarga de gestionar el arranque seguro y proporciona una capa adicional de seguridad y flexibilidad comparada con el antiguo BIOS.

- La **swap** es una partición del disco duro dedicada a actuar como una extensión de la memoria RAM física del sistema. Cuando la RAM se llena, el sistema operativo utiliza la swap para almacenar temporalmente datos que de otro modo estarían en la memoria principal, permitiendo que el sistema funcione de manera más eficiente en situaciones de _alta demanda_.
:::

### Configuración de Usuarios
El sistema Linux cuenta, al menos, con el usuario **root**, pero al instalar la versión **desktop**, se solicita la configuración de un usuario que estará habilitado para tareas de uso y configuración.

:::caution[Actividad]
A2.1 - Prerrequisitos y obtención de medios
:::