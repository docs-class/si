---

title: "Virtualización"
description: "Virtualización e Instalación de Sistemas Operativos"

---

:::note[Conexión con el currículo]
RA: 2 - CE: d, e, f, g, h, i
:::

## **INTRODUCCIÓN A LA VIRTUALIZACIÓN DE SISTEMAS**

:::tip
[Virtualization](https://www.youtube.com/watch?v=UBVVq-xz5i0)
:::

**¿Qué significa Virtualización?**  
Es una tecnología que permite crear una versión virtual de un componente de hardware o software, como un servidor, un sistema operativo, un dispositivo de almacenamiento o una red. 

Esto permite ejecutar múltiples sistemas operativos o aplicaciones en un solo servidor físico, proporcionando un uso más eficiente de los recursos, independencia del hardware y flexibilidad para gestionar y distribuir estos recursos según las necesidades.

**Usos de la Virtualización**

- Para entornos formativos.
- Para entornos de pruebas.
- Para economizar.
  - Instalaciones complejas o puntuales.

### 1. Tipos de Virtualización

- **Virtualización de Plataforma**: Su objetivo es ofrecer un sistema informático virtual.
  - **Hipervisor Tipo 1**: Se instala directamente sobre el hardware, también conocido como "bare metal".
  - **Hipervisor Tipo 2**: Se instala como una aplicación en el sistema operativo anfitrión, también conocido como hipervisor alojado.
- **Virtualización de Aplicaciones**: Ofrece un entorno virtual para aplicaciones, independientemente del hardware y sistema operativo.
- **Virtualización de Recursos**: Ofrece un recurso con características virtuales de cara al servicio (ejemplo: RAM/RAID).

### 2. Soluciones de Virtualización

###### **Plataformas Comerciales**

- **VMWARE**: La más utilizada en entornos empresariales.
- **Microsoft Hyper-V**: [Hyper-V](https://learn.microsoft.com/es-es/virtualization/hyper-v-on-windows/about/)
- **Oracle VirtualBox**: Más utilizado en entornos educativos.
- **QEMU**: Herramienta libre.

###### **Virtualización de Entornos de Aplicaciones**

- **Docker**: Herramienta de creación y gestión de contenedores de aplicación.
- **Kubernetes**: Herramienta de coordinación de contenedores Docker.

###### **Máquinas Virtuales vs Contenedores**

![VM vs Contenedores](https://wac-cdn.atlassian.com/dam/jcr:92adde69-f728-4cfc-8bab-ba391c25ae58/SWTM-2060_Diagram_Containers_VirtualMachines_v03.png?cdnVersion=2314)

| Característica           | Máquinas Virtuales                          | Contenedores                                    |
|--------------------------|--------------------------------------------|-------------------------------------------------|
| **Aislamiento**          | Ofrecen un fuerte aislamiento, ya que cada VM incluye un sistema operativo completo. | Menor aislamiento, comparten el kernel del sistema operativo host. |
| **Consumo de Recursos**  | Requieren más recursos, ya que incluyen un sistema operativo completo. | Son más ligeros, solo contienen las aplicaciones y sus dependencias. |
| **Velocidad de Inicio**  | Más lentas al arrancar debido a la necesidad de iniciar un sistema operativo completo. | Muy rápidas de iniciar, ya que se comparten muchas funcionalidades del sistema operativo. |
| **Flexibilidad**         | Compatibles con una amplia variedad de sistemas operativos, diferentes entre sí. | Limitados al sistema operativo del host (aunque se pueden ejecutar aplicaciones distintas). |
| **Eficiencia**           | Menos eficientes en el uso de recursos por el sistema operativo completo que requieren. | Muy eficientes, ya que utilizan menos recursos al compartir el sistema operativo. |
| **Seguridad**            | Aislamiento completo entre VM, proporciona más seguridad contra vulnerabilidades. | Menor seguridad debido al uso del mismo kernel, posibles ataques que afecten a todos los contenedores. |
| **Escalabilidad**        | Menos escalables debido a la cantidad de recursos que se necesitan por cada instancia. | Más escalables, perfectos para un entorno donde se necesitan desplegar rápidamente muchas instancias. |
| **Portabilidad**         | Portables, pero dependen de la compatibilidad del hipervisor. | Alta portabilidad, los contenedores se pueden mover fácilmente a diferentes hosts compatibles con Docker o similar. |
| **Casos de Uso**         | Buena opción para entornos con múltiples sistemas operativos. | Ideal para microservicios y entornos de desarrollo rápidos. |

### 3. Microsoft Hyper-V vs WSL vs Azure

- **Microsoft Hyper-V**: Herramienta de virtualización integrada en sistemas Pro de Microsoft.
- **WSL (Windows Subsystem Linux)**: Permite instalar y ejecutar aplicaciones Linux.
- **Azure Virtualization**: Posibilidad de implementar máquinas virtuales en la nube, con acceso mediante RDP.

:::caution[Actividad]
Instalaciones
:::
