---
title: "DHCP"
description: "DHCP"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

### Conceptos Básicos de Asignación de IP
- Cada dispositivo necesita una IP para comunicarse en la red.
- **IP estática**: el usuario la introduce manualmente (IP, máscara, gateway, DNS). Riesgo de **conflictos** si se asigna la misma IP a dos equipos.
- **IP dinámica**: el proceso es automático — el servidor DHCP se encarga de todo.

### Funcionamiento del DHCP
- El servidor **DHCP** asigna automáticamente: IP, máscara de subred, puerta de enlace y DNS.
- El equipo envía una solicitud a la red; el servidor responde con los parámetros disponibles.
- Se puede verificar la configuración asignada con `ipconfig /all` (Windows).

### El Alcance (Scope) y el Proceso de Arrendamiento
- El administrador define un **scope**: el rango de IPs que el servidor puede distribuir.
- Las IPs no son permanentes: se conceden bajo un **arrendamiento (lease)** con duración limitada (ej. 1 día o 8 horas).
- Si un equipo abandona la red sin liberar la IP, el arrendamiento vence y la dirección vuelve al pool.

### Renovación y Gestión de Direcciones
- Antes de que expire el arrendamiento, el equipo envía una solicitud de **renovación**.
- Si el equipo no renueva (está apagado o desconectado), la IP se libera automáticamente al pool.
- Esto garantiza un uso eficiente de las direcciones disponibles.

### Reservas de IP
- Permiten que un dispositivo reciba **siempre la misma IP** de forma automática.
- El servidor identifica al equipo por su **dirección MAC** y le asigna una IP fija predefinida.
- Se usan habitualmente en: **impresoras de red, servidores y routers**.

### Implementación del Servicio
- Puede ejecutarse en un **servidor dedicado** (Windows Server, Linux).
- También está integrado en la mayoría de **routers domésticos y empresariales**.

![dhcp](../../../assets/ut5/53a-dhcp.png)

:::tip[5.3.1. Protocolo de configuración dinámica de host (DHCP)]
[DHCP - PowerCert Animated Videos](https://www.youtube.com/watch?v=e6-TaH5bkjo)
:::