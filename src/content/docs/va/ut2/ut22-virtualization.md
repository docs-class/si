---
title: "Virtualització"
description: "Virtualització i Instal·lació de Sistemes Operatius"
---

:::note[Connexió amb el currículum]
RA: 2 - CE: d, e, f, g, h, i
:::

## **INTRODUCCIÓ A LA VIRTUALITZACIÓ DE SISTEMES**

:::tip
[Virtualization](https://www.youtube.com/watch?v=UBVVq-xz5i0)
:::

**¿Qué significa Virtualització?**  
És una tecnologia que permet crear una versió virtual d'un component de hardware o software, com un servidor, un sistema operatiu, un dispositiu d'emmagatzematge o una xarxa. 

Això permet executar múltiples sistemes operatius o aplicacions en un sol servidor físic, proporcionant un ús més eficient dels recursos, independència del maquinari i flexibilitat per a gestionar i distribuir aquests recursos segons les necessitats.

**Usos de la Virtualització**

- Per a entorns formatius.
- Per a entorns de proves.
- Per a economitzar.
  - Instal·lacions complexes o puntuals.

### 1. Tipus de Virtualització

- **Virtualització de Plataforma**: El seu objectiu és oferir un sistema informàtic virtual.
  - **Hipervisor Tipus 1**: S'instal·la directament sobre el maquinari, també conegut com a "bare metal".
  - **Hipervisor Tipus 2**: S'instal·la com una aplicació al sistema operatiu amfitrió, també conegut com a hipervisor allotjat.
- **Virtualització d'Aplicacions**: Ofereix un entorn virtual per a aplicacions, independentment del hardware i sistema operatiu.
- **Virtualització de Recursos**: Ofereix un recurs amb característiques virtuals de cara al servei (exemple: RAM/RAID).


### 2. Solucions de Virtualització

###### **Plataformes Comercials**

- **VMWARE**: La més utilitzada en entorns empresarials.
- **Microsoft Hyper-V**: [Hyper-V](https://learn.microsoft.com/es-es/virtualization/hyper-v-on-windows/about/)
- **Oracle VirtualBox**: Més utilitzat en entorns educatius.
- **QEMU**: Eina lliure.

###### **Virtualització d'Entorns d'Aplicacions**

- **Docker**: Eina de creació i gestió de contenidors d'aplicació.
- **Kubernetes**: Eina de coordinació de contenidors Docker.

###### **Màquines Virtuals vs Contenidors**

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




### 3. VirtualBox

#### On aconseguir VirtualBox

- Solució disponible de manera gratuïta del fabricant Oracle en la llicència més bàsica.  
  [VirtualBox](https://www.virtualbox.org)

#### Avantatges de VirtualBox

- Ús molt senzill i intuïtiu.
- Rendiment adequat en la majoria de dispositius actuals.
- És multiplataforma.
- Opció de llicència lliure, sense cost.

#### Conceptes Particulars

- **Guest Additions**: Conjunt de drivers que milloren la interacció.
  - **Instal·lació**
    - **1.**: Obtenció de l'arxiu ISO en el web del fabricant.
    - **2.**: Inserció en el dispositiu òptic.
    - **3.**: Executar l'opció "Inserir guest additions" des del menú "Dispositius".
    - **4.**: Reiniciar.
    - **5.**: Activar serveis com l'ús del Portapapers o la funció "Arrossegar i Soltar".
- **Disco VDI**: Format específic per a màquines virtuals VirtualBox amb funcions avançades.
- **Carpetes Compartides**: Possibilitat de crear una carpeta compartida amb el sistema operatiu amfitrió.
- **Snapshots**: Captures d'estat i exportació de màquines virtuals en format OVA.

### 4. Microsoft Hyper-V vs WSL vs Azure

- **Microsoft Hyper-V**: Eina de virtualització integrada en sistemes Pro de Microsoft.
- **WSL (Windows Subsystem Linux)**: Permet instal·lar i executar aplicacions Linux.
- **Azure Virtualization**: Possibilitat d'implementar màquines virtuals al núvol, amb accés mitjançant RDP.

:::caution[activitat]
Instalacions
:::