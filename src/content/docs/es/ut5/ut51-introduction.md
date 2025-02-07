---
title: "Introducción a las redes"
description: "Network"
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

## 1. Componentes, tipos y conexiones de red
   - **Roles de cliente y servidor**  
     - Todos los equipos conectados a una red que participan directamente en la comunicación se clasifican como **hosts**.  
     - En redes modernas, los hosts pueden desempeñar el rol de **cliente, servidor o ambos**. 
     - El software instalado en un equipo determina el rol que desempeña.  
       - Ejemplos: _Servidor de correo electrónico, web o de archivos._
:::tip[Servidor]
[Servidor - PowerCert Animated Videos](https://www.youtube.com/watch?v=UjCDWCeHCzY) - Actividad de rellenar
:::

![LAN](https://cdn.prod.website-files.com/620d42e86cb8ec4d0839e59d/6230ee03762e4e5318c33297_61ca0988bf85585f5ccc26b5_Local-Area-Network-Diagram.jpeg)
   - **Infraestructura de red:**  
     - La infraestructura de red incluye tres categorías de componentes:  
       - **Dispositivos finales:** Computadoras, teléfonos, impresoras, etc.  
       - **Dispositivos intermedios:** Switches, routers, puntos de acceso, etc.  
       - **Medios de red:** Cables de cobre, fibra óptica, medios inalámbricos, etc.  
     - Los componentes se representan en diagramas de topología mediante íconos específicos.  

## 2. Principios de comunicación 

:::caution[Protocolos]
   - Antes de iniciar una comunicación, se establecen reglas o acuerdos, que incluyen:  
     - Método de comunicación: (cara a cara, teléfono, carta, etc.).  
     - Lenguaje común y gramática.  
     - Confirmación o acuse de recibo de los mensajes.
     - Estas reglas, conocidas como **protocolos**, deben seguirse para que los mensajes se entreguen y comprendan correctamente.  
:::
   
### Características de los protocolos de red  
 - **Formato del mensaje:** Estructura específica según el tipo de mensaje.  
 - **Tamaño del mensaje:** Dividir mensajes largos en piezas pequeñas para garantizar una transmisión fiable.  
 - **Tiempo:** Velocidad y momento de envío de los datos.  
 - **Codificación:** Conversión de datos a bits, utilizando patrones de luz, sonido o impulsos eléctricos según el medio.  
 - **Encapsulación:** Añadir encabezados con información de dirección para la entrega del mensaje.  
 
![TCP/IP Model - De GISEPROI - Trabajo propio, CC BY-SA 4.0,](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Suite_de_Protocolos_TCPIP.png/531px-Suite_de_Protocolos_TCPIP.png)

## 3. **El Protocolo de Internet (IP)**  
   - **Dirección IPv4:**  
     - Cada host necesita una dirección IPv4 para participar en internet o redes locales.  
     - La dirección IPv4 identifica lógicamente un host y debe ser única dentro de una LAN y en todo el mundo para comunicaciones remotas.  
     - Interfaces de red como tarjetas NIC (Network Interface Card) tienen estas direcciones asignadas.  
     - Cada paquete enviado a través de la red incluye una dirección de origen y de destino para garantizar su entrega correcta.  
   - **Notación binaria y decimal:**  
     - Las direcciones IPv4 tienen 32 bits divididos en cuatro octetos.  
     - Se representan comúnmente en notación decimal, como **192.168.0.1**, en lugar de binaria para facilitar la lectura.  

## 4. **IPv4 y Segmentación de Redes**

:::tip[Subneting]
[Subnet Mask - PowerCert Animated Videos](https://www.youtube.com/watch?v=s_Ntt6eTn94)
:::
   - **Estructura de las direcciones IPv4:**  
     - Las direcciones IPv4 tienen dos partes:  
       - **Red:** Identifica el segmento de red.  
       - **Host:** Identifica un dispositivo específico dentro de esa red.  
     - La máscara de subred determina la parte que corresponde a la red y al host. Por ejemplo:  
       - Dirección: **192.168.5.11**  
       - Máscara de subred: **255.255.255.0**  
       - Notación CIDR (Classless Inter-Domain Routing):  **192.168.5.11/24** 
   - **Segmentación y subredes:**  
     - Las redes grandes se subdividen en subredes más pequeñas para reducir el tráfico y mejorar el rendimiento.  
     - Subredes más pequeñas ayudan a gestionar mejor la red y aplicar políticas de seguridad.  


### **Public and private IP addresses**  

:::tip[Public & Private IP]
[Public & private IP](https://www.youtube.com/watch?v=po8ZFG0Xc4Q)
:::

- **IP privadas** (no accesibles desde Internet, definidas en **RFC 1918**):  
  - **Clase A**: 10.0.0.0 - 10.255.255.255  
  - **Clase B**: 172.16.0.0 - 172.31.255.255  
  - **Clase C**: 192.168.0.0 - 192.168.255.255  
- **IP Comerciales**
  - **Clase D i E**: Son usadas para usos comerciales y experimentales

## 5. **Dirección dinámica con DHCP (Dynamic Host Configuration Protocol)**  
   - **Asignación dinámica:**  
     - DHCP asigna automáticamente configuraciones IPv4 a dispositivos finales, eliminando la necesidad de configuraciones manuales.  
     - Las configuraciones asignadas tienen un tiempo de "préstamo" limitado y son devueltas al pool DHCP cuando el dispositivo se desconecta.  
   - **Asignación estática:**  
     - Útil para dispositivos como servidores o impresoras, cuya dirección no debe cambiar.  
     - Requiere una entrada manual de parámetros como dirección IP, máscara de subred y puerta de enlace predeterminada.  

## 6. **Puertas de enlace a otras redes**  

:::tip[Default gateway]
[Default gateway - PowerCert Animated Videos](https://www.youtube.com/watch?v=pCcJFdYNamc)
:::

   - **Routers como gateways:**  
     - Los routers conectan redes distintas y actúan como puertas de enlace.  
     - Cada interfaz de un router se conecta a una red específica y tiene asignada una dirección IPv4 única.  
     - Los hosts usan la dirección del router como puerta de enlace predeterminada para comunicarse con otras redes.  
   - **Traducción de direcciones (NAT):**  
     - El NAT permite que dispositivos con direcciones privadas accedan a redes públicas, traduciendo direcciones locales a direcciones globales.  



## 7. **Puertos**  
:::tip[Ports]
[Ports - PowerCert Animated Videos](https://www.youtube.com/watch?v=g2fT-g9PX9o)
:::
  - **Puertos de comunicación:**  
     - Los números de puerto identifican servicios específicos que utilizan protocolos como TCP y UDP.  
      - **Rango de puertos**:  
        - **Bien conocidos (0-1023)**: HTTP (80), HTTPS (443), SSH (22).  
        - **Registrados (1024-49151)**: Aplicaciones específicas.  
        - **Dinámicos (49152-65535)**: Uso temporal en conexiones cliente.  
      - **Diferencias entre TCP y UDP:**  
        - TCP es orientado a conexión y garantiza la entrega de datos.  
        - UDP es más rápido pero no garantiza la entrega.  

## 8. **Comandos de diagnóstico de red**  

| **Utilidad de prueba de red** | **Windows** | **Linux** |
|-------------------------------|-------------|-----------|
| Muestra la configuración de red | `ipconfig` | `ifconfig` o `ip addr` |
| Verifica la conectividad con otros hosts | `ping` | `ping` |
| Muestra conexiones activas | `netstat` | `netstat` o `ss` |
| Muestra la ruta hacia un destino | `tracert` | `traceroute` |
| Consulta información sobre dominios | `nslookup` | `nslookup` o `dig` |

