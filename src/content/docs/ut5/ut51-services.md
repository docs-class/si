---
title: "Servicios en de red"
description: "Network services"
---

## 1. Dirección dinámica con DHCP (Dynamic Host Configuration Protocol)
   - **Asignación dinámica:**  
     - DHCP asigna automáticamente configuraciones IPv4 a dispositivos finales, eliminando la necesidad de configuraciones manuales.  
     - Las configuraciones asignadas tienen un tiempo de "préstamo" limitado y son devueltas al pool DHCP cuando el dispositivo se desconecta.  
   - **Asignación estática:**  
     - Útil para dispositivos como servidores o impresoras, cuya dirección no debe cambiar.  
     - Requiere una entrada manual de parámetros como dirección IP, máscara de subred y puerta de enlace predeterminada.  

:::tip[DHCP]
[DHCP - PowerCert Animated Videos](https://www.youtube.com/watch?v=e6-TaH5bkjo)
:::

## 2. Sistema de Nombres de Dominio (DNS)

El **Sistema de Nombres de Dominio (DNS)** es esencialmente el directorio telefónico de Internet. Permite a los usuarios acceder a sitios web utilizando nombres de dominio en lugar de direcciones IP.

  **Proceso de resolución**: Cuando un usuario escribe un nombre de dominio en su navegador, el DNS traduce este nombre a una dirección IP, permitiendo al navegador localizar y cargar la página web correspondiente.

:::tip[DNS]
[DNS - PowerCert Animated Videos](https://www.youtube.com/watch?v=mpQZVYPuDGU)
:::