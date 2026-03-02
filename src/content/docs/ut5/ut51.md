---
title: "Introducción a las redes"
description: "Network"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

:::note[Conexión con el currículum]
**5. Interconecta sistemas en red configurando dispositivos y protocolos.**	

a)	Se ha configurado el protocolo TCP/IP.  
b)	Se han configurado redes de área local cableadas.  
c)	Se han configurado redes de área local inalámbricas.  
d)	Se han utilizado dispositivos de interconexión de redes.  
e)	Se ha configurado el acceso a redes de área extensa.  
f)	Se han gestionado puertos de comunicaciones.  
g)	Se ha verificado el funcionamiento de la red mediante el uso de comandos y herramientas básicas.  
h)	Se han aplicado protocolos seguros de comunicaciones.  
:::

## 1. Introducción a la red

La **gestión y comprensión de los servidores** es un pilar fundamental en la arquitectura de sistemas, ya que estas máquinas actúan como el núcleo de la entrega de servicios en red.

#### Conceptos clave
* **Servidor:** Es una computadora dedicada que brinda servicios a otras máquinas llamadas **clientes** (como computadoras de escritorio o estaciones de trabajo).
* **Máquina centralizada:** Un servidor funciona como un punto central al que los clientes se conectan a través de Internet o una red de área local (LAN) para obtener un servicio específico.
* **Función de servidor:** Un servidor no es solo una computadora física específica; es una **función o rol** que desempeña una máquina. De hecho, una computadora de escritorio ordinaria puede configurarse para actuar como un servidor, aunque con limitaciones de rendimiento.

#### Objetivos principales
1. **Disponibilidad:** Garantizar que el sistema esté en funcionamiento las **24 horas del día, los 7 días de la semana**, ya que su fallo puede poner en peligro la operatividad de una organización.
2. **Conectividad:** Permitir que múltiples usuarios y dispositivos accedan a recursos compartidos de forma simultánea.
3. **Escalabilidad y Robustez:** Manejar grandes cargas de trabajo y miles de conexiones simultáneas mediante hardware y software especializado.

#### Hardware de Servidor vs. Escritorio
Para cumplir con sus objetivos, los servidores requieren componentes mucho más robustos que los equipos domésticos:

* **Procesadores:** Mientras que un equipo de escritorio usa series como Intel Core, los servidores utilizan procesadores como **Intel Xeon**. Estos admiten **procesamiento múltiple** (varios procesadores en una misma placa base), tienen más núcleos y una memoria caché más grande.
* **Memoria RAM ECC:** Los servidores utilizan memoria con **Código de Corrección de Errores (ECC)**. Esta tecnología detecta y corrige errores de procesamiento de datos en la RAM para evitar que el sistema se caiga.
* **Almacenamiento y RAID:** Utilizan discos duros **intercambiables en caliente** bajo una configuración **RAID**. Esto permite que, si un disco falla, se pueda reemplazar sin apagar el servidor y sin pérdida de datos.
* **Redundancia:** Incluyen componentes duplicados, como [**fuentes de alimentación redundantes**](https://www.profesionalreview.com/2022/08/06/fuente-de-alimentacion-redundante/), para asegurar que el servidor siga operando incluso si falla uno de los componentes de energía.

#### Software y Sistemas Operativos
Un servidor debe ejecutar un sistema operativo diseñado para la estabilidad y el manejo masivo de conexiones, como **Linux, Windows Server o Mac OS Server**. A diferencia de los sistemas operativos de escritorio, estos están optimizados para funcionar sin interrupciones y gestionar servicios complejos.

#### Tipos de Servidores según su Servicio

| Tipo de Servidor | Descripción |
|---|---|
| **Servidor Web** | Aloja los datos de un sitio web (código HTML, gráficos) y los entrega a los navegadores de los clientes. |
| **Servidor de Correo Electrónico** | Facilita el envío y recepción de correos mediante protocolos como **IMAP, POP y SMTP**. |
| **Servidor de Base de Datos** | Almacena datos en el *backend* que son recuperados por aplicaciones en el *front-end* mediante consultas como **SQL**. |
| **Servidor de Archivos** | Computadora que almacena archivos en carpetas compartidas para que otros clientes puedan acceder a ellos. |
| **Servidor de Impresión** | Gestiona las tareas de impresión en una red, permitiendo que múltiples usuarios compartan una impresora. |
| **Servidor de Aplicaciones** | Ejecuta aplicaciones específicas y proporciona servicios a los clientes, como servidores de juegos o servidores de correo electrónico. |
| **Servidor de Virtualización** | Permite ejecutar múltiples sistemas operativos en una sola máquina física, utilizando software como **VMware o Hyper-V**. |
| **Servidor de Nombres de Dominio (DNS)** | Traduce nombres de dominio legibles por humanos a direcciones IP numéricas que las computadoras pueden entender. |
| **Servidor de Protocolo de Configuración Dinámica de Host (DHCP)** | Asigna automáticamente direcciones IP a los dispositivos en una red. |
| **Servidor de Seguridad** | Implementa medidas de seguridad como firewalls, sistemas de detección de intrusiones y antivirus para proteger la red. |
| **Servidor de Juegos** | Proporciona servicios para juegos en línea, gestionando la comunicación entre los jugadores y el juego. |
| **Servidor de Correo** | Facilita el envío y recepción de correos electrónicos mediante protocolos como IMAP, POP y SMTP. |

:::tip[5.1.1. Servidor]
[Servidor - PowerCert Animated Videos](https://www.youtube.com/watch?v=UjCDWCeHCzY)
:::


## 2. Tipos de redes

En su forma más básica, una **red** consiste en computadoras conectadas entre sí para intercambiar información. Estas conexiones pueden realizarse mediante **cables o de forma inalámbrica**.

#### Clasificación de Redes según su Alcance
| Tipo de Red | Descripción                                                                 |
|-------------|-----------------------------------------------------------------------------|
| **PAN**     | **Red de Área Personal**: Red de corto alcance utilizada para conectar dispositivos personales (ej. teléfonos, computadoras, tablets). Generalmente se utiliza para compartir información entre dispositivos cercanos. |
| **LAN**     | **Red de Área Local**: Conecta dispositivos dentro de un área geográfica limitada, como una oficina o un hogar. Permite la comunicación y el intercambio de recursos entre equipos cercanos. |
| **MAN**     | **Red de Área Metropolitana**: Cubre una área más amplia que una LAN, como una ciudad. Se utiliza para conectar múltiples LANs dentro de una misma área geográfica. |
| **WAN**     | **Red de Área Amplia**: Conecta redes que están geográficamente dispersas, a menudo en diferentes ciudades o países. Es utilizada por organizaciones grandes para interconectar sus distintas sedes. |
| **CAN**     | **Red de Área de Campus**: Similar a una LAN, pero cubre una área más grande, como un campus universitario, interconectando múltiples edificaciones. |
| **VPN**     | **Red Privada Virtual**: Proporciona una conexión segura y encriptada sobre una red pública, permitiendo a los usuarios acceder a recursos como si estuvieran en una red local. |

## 3. Subredes (Subnetting)
Una **subred** es simplemente una división de una red más grande. Una empresa puede decidir dividir su única LAN en redes más pequeñas para separar, por ejemplo, los datos del departamento de ventas de los del departamento de servicio.

*   **El Enrutador (Router):** Es el dispositivo que divide o separa una red de otra, actuando como la entrada o puerta de acceso a cada subred.
*   **Flexibilidad:** Una organización puede crear tantas subredes como necesite dependiendo de sus requerimientos de expansión.

#### ¿Por qué crear subredes?
La segmentación de una red en subredes ofrece tres beneficios críticos para la administración de sistemas:

1.  **Manejabilidad:** Es más sencillo identificar y solucionar problemas técnicos en redes pequeñas que en una sola red masiva.
2.  **Seguridad:** Permite aplicar **reglas de seguridad independientes** para cada subred, controlando quién tiene acceso a qué datos y evitando que departamentos no autorizados vean tráfico ajeno.
3.  **Rendimiento:** Mejora el desempeño al controlar el **tráfico de difusión (broadcast)**. En una red, las transmisiones enviadas por un equipo suelen ser escuchadas por todos los demás; al usar subredes, dichas transmisiones se limitan solo a los equipos dentro de la misma división, reduciendo el tráfico innecesario.

#### Resumen de Infraestructura
| Concepto | Dispositivo Clave | Alcance |
| :--- | :--- | :--- |
| **LAN** | Switch (Conmutador) | Privado, local (edificio) |
| **WAN** | Gateway / Router | Global (Internet) |
| **Subred** | Router (Enrutador) | División lógica de una LAN |


:::tip[5.1.2. Tipos de redes]
[Tipos de redes - PowerCert Animated Videos](https://www.youtube.com/watch?v=NyZWSvSj8ek)
:::
