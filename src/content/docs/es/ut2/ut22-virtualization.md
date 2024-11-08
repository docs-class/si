---

title: "Virtualización"
description: "Virtualización e Instalación de Sistemas Operativos"

---

:::note[Conexión con el currículo]
RA: 2 - CE: d, e, f, g, h, i
:::

Es una tecnología que permite crear una versión virtual de un componente de hardware o software, como un servidor, un sistema operativo, un dispositivo de almacenamiento o una red. 

## 1. Tipos de Virtualización

- **Virtualización de Plataforma**: Su objetivo es ofrecer un sistema informático virtual.
  - **Hipervisor Tipo 1**: Se instala directamente sobre el hardware, también conocido como "bare metal".
  - **Hipervisor Tipo 2**: Se instala como una aplicación en el sistema operativo anfitrión, también conocido como hipervisor alojado.
- **Virtualización de Aplicaciones**: Ofrece un entorno virtual para aplicaciones, independientemente del hardware y sistema operativo.

:::tip
[Virtualization - EN](https://www.youtube.com/watch?v=UBVVq-xz5i0)
:::

### 1.1 Virtualización de Plataforma

- **VMWARE**: La más utilizada en entornos empresariales.
- **Microsoft Hyper-V**: [Hyper-V](https://learn.microsoft.com/es-es/virtualization/hyper-v-on-windows/about/)
- **Oracle VirtualBox**: Más utilizado en entornos educativos.
- **QEMU**: Herramienta libre.

### 1.2 Virtualización de Entornos de Aplicaciones

- **Docker**: Herramienta de creación y gestión de contenedores de aplicación.
- **Kubernetes**: Herramienta de coordinación de contenedores Docker.

:::tip
[Docker?](https://m.youtube.com/watch?v=Uu49ID0NBRQ)
:::

## 2. Microsoft Hyper-V vs WSL vs Azure

- **Microsoft Hyper-V**: Herramienta de virtualización integrada en sistemas Pro de Microsoft.
- **WSL (Windows Subsystem Linux)**: Permite instalar y ejecutar aplicaciones Linux.
- **Azure Virtualization**: Posibilidad de implementar máquinas virtuales en la nube, con acceso mediante RDP.

:::caution[Actividad]
Instalaciones
:::
