---
title: "Network"
description: "Network"
---

## 1. **Componentes, tipos y conexiones de red**  
   - **Roles de cliente y servidor:**  
     - Todos los equipos conectados a una red que participan directamente en la comunicación se clasifican como **hosts**.  
     - En redes modernas, los hosts pueden desempeñar el rol de cliente, servidor o ambos.  
     - El software instalado en un equipo determina el rol que desempeña.  
     - Ejemplos:  
       - **Servidor de correo electrónico:** Ejecuta software de servidor de correo. Los clientes acceden al correo con software como Microsoft Outlook.  
       - **Servidor web:** Ejecuta software de servidor web. Los clientes acceden a páginas web mediante navegadores como Internet Explorer.  
       - **Servidor de archivos:** Almacena archivos corporativos y de usuario en una ubicación central. Los clientes acceden con software como el Explorador de Archivos de Windows.  

   - **Infraestructura de red:**  
     - La infraestructura de red incluye tres categorías de componentes:  
       - **Dispositivos finales:** Computadoras, teléfonos, impresoras, etc.  
       - **Dispositivos intermedios:** Switches, routers, puntos de acceso, etc.  
       - **Medios de red:** Cables de cobre, fibra óptica, medios inalámbricos, etc.  
     - Los componentes se representan en diagramas de topología mediante íconos específicos.  

## 2. **Principios de comunicación**  
   - La comunicación puede adoptar distintas formas y estilos dependiendo del contexto:  
     - Ejemplo: Una conversación informal en internet versus una entrevista de trabajo.  
   - Antes de iniciar una comunicación, se establecen reglas o acuerdos, que incluyen:  
     - Método de comunicación: (cara a cara, teléfono, carta, etc.).  
     - Lenguaje común y gramática.  
     - Confirmación o acuse de recibo de los mensajes.  
   - Estas reglas, conocidas como **protocolos**, deben seguirse para que los mensajes se entreguen y comprendan correctamente.  
   - Comparación con redes:  
     - Las computadoras también utilizan protocolos para comunicarse.  
     - En una red local, todos los dispositivos deben "hablar el mismo idioma", es decir, compartir un protocolo común.  
     - Sin protocolos compartidos, la comunicación no sería posible.  
   - Características de los protocolos de red:  
     - **Formato del mensaje:** Estructura específica según el tipo de mensaje.  
     - **Tamaño del mensaje:** Dividir mensajes largos en piezas pequeñas para garantizar una transmisión fiable.  
     - **Tiempo:** Velocidad y momento de envío de los datos.  
     - **Codificación:** Conversión de datos a bits, utilizando patrones de luz, sonido o impulsos eléctricos según el medio.  
     - **Encapsulación:** Añadir encabezados con información de dirección para la entrega del mensaje.  

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
   - **Estructura de las direcciones IPv4:**  
     - Las direcciones IPv4 tienen dos partes:  
       - **Red:** Identifica el segmento de red.  
       - **Host:** Identifica un dispositivo específico dentro de esa red.  
     - La máscara de subred determina la parte que corresponde a la red y al host. Por ejemplo:  
       - Dirección: **192.168.5.11**  
       - Máscara de subred: **255.255.255.0**  
   - **Segmentación y subredes:**  
     - Las redes grandes se subdividen en subredes más pequeñas para reducir el tráfico y mejorar el rendimiento.  
     - Subredes más pequeñas ayudan a gestionar mejor la red y aplicar políticas de seguridad.  

## 5. **Dirección dinámica con DHCP (Dynamic Host Configuration Protocol)**  
   - **Asignación dinámica:**  
     - DHCP asigna automáticamente configuraciones IPv4 a dispositivos finales, eliminando la necesidad de configuraciones manuales.  
     - Las configuraciones asignadas tienen un tiempo de "préstamo" limitado y son devueltas al pool DHCP cuando el dispositivo se desconecta.  
   - **Asignación estática:**  
     - Útil para dispositivos como servidores o impresoras, cuya dirección no debe cambiar.  
     - Requiere una entrada manual de parámetros como dirección IP, máscara de subred y puerta de enlace predeterminada.  

## 6. **Puertas de enlace a otras redes**  
   - **Routers como gateways:**  
     - Los routers conectan redes distintas y actúan como puertas de enlace.  
     - Cada interfaz de un router se conecta a una red específica y tiene asignada una dirección IPv4 única.  
     - Los hosts usan la dirección del router como puerta de enlace predeterminada para comunicarse con otras redes.  
   - **Traducción de direcciones (NAT):**  
     - El NAT permite que dispositivos con direcciones privadas accedan a redes públicas, traduciendo direcciones locales a direcciones globales.  

## 7. **TCP y UDP**  
   - **Puertos de comunicación:**  
     - Los números de puerto identifican servicios específicos que utilizan protocolos como TCP y UDP.  
     - Ejemplos:  
       - **HTTP (80)** para navegación web.  
       - **DNS (53)** para resolución de nombres.  
       - **SSH (22)** para acceso remoto seguro.  
   - **Diferencias entre TCP y UDP:**  
     - TCP es orientado a conexión y garantiza la entrega de datos.  
     - UDP es más rápido pero no garantiza la entrega.  

## 8. **Utilidades de prueba de red**  
   - **Comandos de diagnóstico:**  
     - **ipconfig:** Muestra la configuración de red.  
     - **ping:** Verifica la conectividad con otros hosts.  
     - **netstat:** Muestra conexiones activas.  
     - **tracert:** Muestra la ruta hacia un destino.  
     - **nslookup:** Consulta información sobre dominios.  
