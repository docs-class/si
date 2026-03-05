---
title: "Tipos de redes"
description: "Network Types"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

## 1. Tipos de redes

En su forma más básica, una **red** consiste en computadoras conectadas entre sí para intercambiar información. Estas conexiones pueden realizarse mediante **cables o de forma inalámbrica**.

#### Clasificación de Redes según su Alcance
| Tipo de Red | Descripción                                                                 |
|-------------|-----------------------------------------------------------------------------|
| **PAN**     | **Red de Área Personal**: Red de corto alcance utilizada para conectar dispositivos personales (ej. teléfonos, computadoras, tablets). Generalmente se utiliza para compartir información entre dispositivos cercanos. |
| **LAN**     | **Red de Área Local**: Conecta dispositivos dentro de un área geográfica limitada, como una oficina o un hogar. Permite la comunicación y el intercambio de recursos entre equipos cercanos. |
| **MAN**     | **Red de Área Metropolitana**: Cubre una área más amplia que una LAN, como una ciudad. Se utiliza para conectar múltiples LANs dentro de una misma área geográfica. |
| **WAN**     | **Red de Área Amplia**: Conecta redes que están geográficamente dispersas, a menudo en diferentes ciudades o países. Es utilizada por organizaciones grandes para interconectar sus distintas sedes. |
| **VPN**     | **Red Privada Virtual**: Proporciona una conexión segura y encriptada sobre una red pública, permitiendo a los usuarios acceder a recursos como si estuvieran en una red local. |

![Network dimension](../../../assets/ut5/51a-network_dimension_300x310.png)

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
