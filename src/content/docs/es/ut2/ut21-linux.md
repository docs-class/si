---
title: "Linux - Actualizaciones"  
description: "Configuración básica Linux"  
---

## Gestión de actualizaciones

- En Linux, la gestión de actualizaciones se realiza utilizando gestores de paquetes específicos según la distribución.
- Es recomendable mantener el sistema al día instalando actualizaciones de tipo crítico para mejorar la seguridad y el rendimiento.

## Distribuciones - "Distros"

Las **distribuciones Linux** son versiones del sistema operativo Linux adaptadas y personalizadas según el enfoque o las necesidades específicas de diferentes usuarios o grupos. Cada distribución incluye un conjunto específico de software, configuraciones predeterminadas y un gestor de paquetes que facilita la instalación y actualización de programas.

Las distros de Linux son desarrolladas, empaquetadas y mantenidas por empresas o por entusiastas con un objetivo concreto. Por lo general, se mantienen bajo licencia GNU, con opciones de pago.

### Tipos de usuarios vs distribuciones:
- **Usuarios Principiantes**: Ubuntu, Linux Mint.
- **Usuarios Avanzados**: Arch Linux, Gentoo.
- **Entornos Empresariales**: CentOS, RHEL, SUSE.
- **Entornos Experimentales**: Fedora, OpenSUSE Tumbleweed.

![distros](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hxY05AVCBHC5wqXi2q81Qg.png)

Cada distribución tiene su propia filosofía y enfoque, haciendo que Linux sea una plataforma altamente versátil y adaptativa según las necesidades del usuario o del proyecto.

[Dsitribuciones](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)

## Ejemplos de gestores de actualizaciones

- **APT** (Advanced Package Tool) para distribuciones basadas en Debian/Ubuntu.
    ```sh frame="none"
    sudo apt update && sudo apt upgrade
    ```
- **DNF** para Fedora.
    ```sh frame="none"
    sudo dnf update
    ```
- **YUM** para CentOS/RHEL.
    ```sh frame="none"
    sudo yum update
    ```
- **Pacman** para Arch Linux.
    ```sh frame="none"
    sudo pacman -Syu
    ```
    
:::caution[actividad]  
- Busca información sobre cómo gestionar actualizaciones en tu distribución Linux de manera gráfica.
- Busca información para la relación GNU/Linux
  - [Enlace a vídeo introductorio Linux - en](https://www.youtube.com/watch?v=UUJ0dFpj1-M&t=19s)
:::