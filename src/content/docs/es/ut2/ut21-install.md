---
title: "Instalación"
description: "SSOO - Instalación"
---

## Fases de la Instalación
- **Fase 0**: Análisis de requerimientos.
- **Fase 1**: Obtención y copia del programa de almacenamiento.
- **Fase 2**: Configuración de parámetros principales (particionado y arranque).
- **Fase 3**: Configuración de parámetros importantes.

## Prerrequisitos de Plataforma
- **Compatibilidad de hardware y SO**: Comprobar que el SO es compatible con el hardware y los requisitos de las aplicaciones.
- **Manual del fabricante**: Utilizar manuales de fabricante y de responsables del SO para la instalación.

## Obtención del Sistema Operativo
- **Formatos**: Los sistemas operativos se pueden obtener en formato ISO o incluso DVD.
- **Herramientas**: Microsoft usa la herramienta "Media Creation Tool" para generar los medios de instalación.

## Parametrización Inicial
- **Tareas Iniciales**: Configuración de usuario administrador, actualizaciones, revisión de drivers, conexión a red, y cambios estéticos.

Aquí te paso la versión adaptada para Windows:

---
:::note[particiones]
**Conexión con el currículo: RA: 3 - CE: d**

Las **particiones de disco** dividen un disco duro en secciones lógicas para organizar y gestionar el almacenamiento de manera eficiente. 

**Tipos de particiones**:  
1. **Primaria**: Hasta 4 particiones principales.
2. **Extendida**: Permite crear particiones lógicas adicionales.
3. **Lógica**: Almacenamiento de datos o sistemas operativos adicionales.

**Propósitos**: Organización de datos, multiboot, seguridad y recuperación de información, y optimización del rendimiento del sistema.
:::

---

## Procés d'Instal·lació - Windows

En el caso de Windows, analizaremos las fases de requisitos previos, obtención de medios (generalmente en formato **ISO** o con herramientas oficiales) y configuración de particiones.

### Creación de Particiones
El sistema solicita el número y la disposición de las particiones a configurar. **Windows** suele recomendar las siguientes:

| Nombre o Punto de Montaje | Tamaño           | Descripción                            |
|---------------------------|------------------|----------------------------------------|
| Sistema                   | 500 MB           | Partición para archivos del sistema    |
| Recuperación              | 450 MB           | Partición de recuperación del sistema  |
| Unidad C:                 | Espacio restante | Espacio principal para el sistema operativo y los archivos del usuario |

### Configuración de Usuarios
El sistema Windows requiere, al menos, la creación de una cuenta de usuario durante la instalación. Esta cuenta puede ser una cuenta local o asociada a una cuenta de Microsoft. Por defecto, se recomienda crear una **cuenta de administrador** para tener permisos completos en el sistema.

Para ejecutar software que necesite permisos de administración, se utiliza la opción de "Ejecutar como administrador".

## Procés d'Instal·lació - Linux

En el cas de Linux, analitzarem les fases de prerequisits, obtenció de mitjans (generalment en format **ISO**) i configuració de particions.

### Creació de Particions   
El sistema sol·licita el nombre i la disposició de les particions a configurar. **Linux** recomana les següents:

| Nom o Punt de muntatge | Grandària         | Descripció                        |
|------------------------|-------------------|-----------------------------------|
| efi                    | 1 GB              | Partició per a informació EFI     |
| swap                   | Memòria RAM x2    | Partició d'intercanvi de memòria  |
| /boot                  | 1 GB              | Partició d'arrencada              |
| /home                  | 50 GB             | Espai per als usuaris             |
| /                      | Resta             | Espai per a la resta de l'equip   |

:::tip[Glosario]
- La partición **EFI** es utilizada para almacenar los archivos del cargador de arranque necesarios para iniciar el sistema operativo, especialmente en sistemas modernos que utilizan _UEFI_ (Unified Extensible Firmware Interface). Esta partición se encarga de gestionar el arranque seguro y proporciona una capa adicional de seguridad y flexibilidad comparada con el antiguo BIOS.

- La **swap** es una partición del disco duro dedicada a actuar como una extensión de la memoria RAM física del sistema. Cuando la RAM se llena, el sistema operativo utiliza la swap para almacenar temporalmente datos que de otro modo estarían en la memoria principal, permitiendo que el sistema funcione de manera más eficiente en situaciones de _alta demanda_.
:::

### Configuració d'Usuaris
El sistema Linux compta, almenys, amb l'usuari **root**, però en instal·lar la versió **desktop**, es demana la configuració d'un usuari que estarà activat per a tasques d'ús i configuració.

Per a executar programari que necessite permisos d'administració, s'utilitza el comando **sudo**, afegit abans del comando a executar. Si no es poden executar ordres amb `sudo`, cal comprovar el fitxer `/etc/sudoers`.

Comando per editar sudoers:
```sh frame="none"
sudo visudo /etc/sudoers
```

:::caution[Activitat]
A2.1 - Prerequisitos y obtención de medios
:::

