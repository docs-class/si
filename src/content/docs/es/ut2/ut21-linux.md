---
title: "GNU/Linux"  
description: "GNU/Linux"
---

## Gestión de actualizaciones

- En Linux, la gestión de actualizaciones se realiza utilizando gestores de paquetes específicos según la distribución.
- Es recomendable mantener el sistema al día instalando actualizaciones de tipo crítico para mejorar la seguridad y el rendimiento.

## Distribuciones - "Distros"

Las **distribuciones Linux** son versiones del sistema operativo Linux adaptadas y personalizadas según el enfoque o las necesidades específicas de diferentes usuarios o grupos. Cada distribución incluye un conjunto específico de software, configuraciones predeterminadas y un gestor de paquetes que facilita la instalación y actualización de programas.

Las distros de Linux son desarrolladas, empaquetadas y mantenidas por empresas o por entusiastas con un objetivo concreto. Por lo general, se mantienen bajo licencia GNU, con opciones de pago.

### Tipos de usuarios vs distribuciones:

![distros](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hxY05AVCBHC5wqXi2q81Qg.png)

Cada distribución tiene su propia filosofía y enfoque, haciendo que Linux sea una plataforma altamente versátil y adaptativa según las necesidades del usuario o del proyecto.

:::tip
[Dsitribuciones](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)
:::

## Métodos de Instalación/actualizaciones

1. **Repositorios**: Servidores de paquetes, accedidos a través de un gestor de paquetes.
   1. **Gestores de paquetes tradicionales**
    - **APT (Advanced Package Tool):** Utilizado en distribuciones basadas en Debian, como Ubuntu y Linux Mint. Permite instalar paquetes `.deb` desde los repositorios oficiales mediante comandos como `sudo apt install nombre-del-paquete`.
    - **YUM/DNF:** Empleados en distribuciones basadas en Red Hat, como Fedora y CentOS. Facilitan la instalación de paquetes `.rpm` con comandos como `sudo dnf install nombre-del-paquete`.
    - **Pacman:** Propio de Arch Linux y sus derivadas, gestiona paquetes con comandos como `sudo pacman -S nombre-del-paquete`.

   2. **Gestores de paquetes universales**
    - **Snap:** Desarrollado por Canonical, permite instalar aplicaciones empaquetadas con todas sus dependencias, funcionando en múltiples distribuciones. Se instala con `sudo snap install nombre-del-paquete`.
    - **Flatpak:** Ofrece una plataforma para distribuir aplicaciones en diversas distribuciones, ejecutándolas en entornos aislados. Se utiliza con `flatpak install nombre-del-paquete`.
    - **AppImage:** Proporciona aplicaciones portátiles que no requieren instalación; basta con descargar el archivo `.AppImage`, otorgarle permisos de ejecución y ejecutarlo directamente.

2. **Compilación desde el código fuente:**
    - Algunas aplicaciones se distribuyen en forma de código fuente. Para instalarlas, se descargan los archivos fuente, se descomprimen y se compilan utilizando comandos como `./configure`, `make` y `sudo make install`. Este método ofrece flexibilidad, pero requiere conocimientos técnicos y puede ser más complejo.

3. **Tiendas de aplicaciones gráficas:**
    - **Centro de Software de Ubuntu:** Proporciona una interfaz gráfica para buscar e instalar aplicaciones en Ubuntu.
    - **GNOME Software:** Disponible en entornos de escritorio GNOME, permite gestionar aplicaciones de manera visual.
    - **Discover:** Utilizado en entornos KDE Plasma, facilita la instalación de software mediante una interfaz amigable.

#### Comandos de APT

APT es el sistema de gestión de paquetes para distribuciones basadas en Debian, y facilita la instalación y administración de software.

- `apt update`: Actualiza la lista de paquetes de los repositorios configurados en el sistema para que el gestor tenga la información más reciente.
- `apt install <paquete>`: Instala el paquete especificado y sus dependencias.
- `apt upgrade`: Actualiza todos los paquetes del sistema a las versiones más recientes.
- `apt show <paquete>`: Muestra información detallada sobre un paquete, como su versión, descripción y dependencias.
- `apt list --installed`: Lista los paquetes que están instalados en el sistema.
- `apt edit-sources`: Permite editar el archivo de fuentes de los repositorios para añadir o modificar repositorios.
- `apt-get --purge remove <paquete>`: Elimina un paquete junto con sus archivos de configuración.

#### Tipos de repositorios
- **Main**: Software oficial respaldado por Canonical.
- **Restricted**: Software cerrado, drivers con soporte limitado.
- **Universe**: Mantenido por la comunidad, sin soporte oficial.
- **Multiverse**: Software con licencias restrictivas, sin soporte.
  
El repositorio **Main** respaldado por **Canonical** es específico de las distribuciones **basadas en Ubuntu**, ya que **Canonical** es la empresa que desarrolla y respalda **Ubuntu**. 

:::danger[aclaración]
Cada distribución tiene su propio sistema de gestión de repositorios y su política de respaldo, que puede variar significativamente según la filosofía y objetivos de la distribución.

- En **Debian**, por ejemplo, existen repositorios como **Main**, **Contrib** y **Non-Free**, pero la mayoría del software en **Main** es mantenido por la comunidad sin el respaldo de una empresa como Canonical.
- En **Fedora**, los repositorios oficiales son respaldados y mantenidos por la **comunidad Fedora** con el soporte de **Red Hat**.
- En **openSUSE**, el repositorio **OSS (Open Source Software)** contiene software libre, mientras que la comunidad mantiene otros repositorios adicionales.
:::
  
:::tip[Enlaces]  
  - [Vídeo introductorio Linux - en](https://www.youtube.com/watch?v=UUJ0dFpj1-M&t=19s)
:::
