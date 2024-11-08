---

title: "Instalación"  
description: "SSOO - Instalación"  
---

## Fases de la Instalación
- **Fase 0**: Análisis de requisitos.
- **Fase 1**: Obtención y copia del programa de almacenamiento.
- **Fase 2**: Configuración de parámetros principales (particionado y arranque).
- **Fase 3**: Configuración de parámetros importantes.

## Fase 0 - Prerrequisitos de Plataforma
- **Compatibilidad de hardware y SO**: Comprobar que el SO es compatible con el hardware y los requisitos de las aplicaciones.
- **Manual del fabricante**: Utilizar manuales de fabricante y de responsables del SO para la instalación.

## Fase 1 - Obtención del Sistema Operativo
- **Formatos**: Los sistemas operativos se pueden obtener en formato ISO o incluso DVD.
- **Herramientas**: Microsoft utiliza la herramienta "Media Creation Tool" para generar los medios de instalación.

## Fase 2 - Proceso de Instalación

:::note[sistemas de archivos y particiones]
**Conexión con el currículo: RA: 3 - CE: a, d**

> Un **sistema de ficheros** es la estructura que permite organizar, almacenar y gestionar los archivos en un dispositivo de almacenamiento. En **Windows**, el sistema de ficheros principal es **NTFS**, mientras que en **Linux** se usa principalmente **ext4**.

> Las **particiones de disco** dividen un disco duro en secciones lógicas para organizar y gestionar el almacenamiento de manera eficiente.
:::

### Creación de Particiones - Windows

| Nombre o Punto de Montaje  | Tamaño          | Descripción                            |
|----------------------------|-----------------|----------------------------------------|
| Sistema                    | 500 MB          | Partición para archivos del sistema    |
| Recuperación               | 450 MB          | Partición de recuperación del sistema  |
| Unidad C:                  | Espacio restante| Espacio principal para el sistema operativo y los archivos del usuario |

### Creación de Particiones - Linux

| Nombre o Punto de Montaje | Tamaño          | Descripción                           |
|---------------------------|-----------------|---------------------------------------|
| efi                       | 1 GB            | Partición para información EFI        |
| swap                      | Memoria RAM x2  | Partición de intercambio de memoria   |
| /                         | Resto           | Espacio para el resto del equipo      |


:::tip[Glosario]
- La partición **EFI** se utiliza para almacenar los archivos del cargador de arranque necesarios para iniciar el sistema operativo, especialmente en sistemas modernos que utilizan _UEFI_ (Unified Extensible Firmware Interface). Esta partición se encarga de gestionar el arranque seguro y proporciona una capa adicional de seguridad y flexibilidad comparada con el antiguo BIOS.

- La **swap** es una partición del disco duro dedicada a actuar como una extensión de la memoria RAM física del sistema. Cuando la RAM se llena, el sistema operativo utiliza la swap para almacenar temporalmente datos que de otro modo estarían en la memoria principal, permitiendo que el sistema funcione de manera más eficiente en situaciones de _alta demanda_.
:::

## Fase 3 - Parametrización Inicial
- Configuración de usuario administrador
- Actualizaciones
- Revisión de drivers
- Conexión a red
- Cambios estéticos.

:::caution[Actividad]
Prerrequisitos y obtención de medios
:::