---
title: "Puertos"
description: "Puertos"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

### ¿Qué es un Puerto?
Un puerto no es una conexión física, sino una **conexión lógica** que utilizan los programas y servicios para intercambiar información. Su función principal es determinar específicamente qué programa o servicio en una computadora o servidor se va a utilizar, ya sea para abrir una página web, acceder al correo electrónico o transferir archivos. Cada puerto se identifica con un número único en un rango que va desde el **0 hasta el 65535**.

### Relación entre Dirección IP y Puerto
La dirección IP y el número de puerto trabajan en conjunto para el intercambio de datos en una red. Mientras que la **dirección IP** funciona como un identificador numérico que determina la ubicación de un dispositivo o servidor, el **número de puerto** determina el servicio o programa específico dentro de ese servidor que el usuario desea emplear. Por ejemplo, al visitar un sitio web, la IP ubica el servidor y el puerto dirige la solicitud al servicio web correspondiente.

### Categorías de Puertos
Los más de 65,000 números de puerto disponibles están regulados por la Autoridad de Números Asignados en Internet y se dividen en tres grandes grupos:
*   **Puertos del sistema o conocidos (0 al 1023):** Son los puertos comunes que se utilizan diariamente para servicios estándar. En esta categoría se encuentran el puerto **80** (HTTP para páginas web no seguras), el **443** (HTTPS para páginas web seguras), el **21** (FTP para transferencia de archivos) y el **25** (correo electrónico).
*   **Puertos de usuario o registrados (1024 al 49151):** Estos pueden ser registrados por empresas y desarrolladores para servicios particulares.
*   **Puertos dinámicos o privados (49152 al 65535):** Son utilizados por el lado del cliente (tu computadora). El equipo se asigna temporalmente uno de estos números durante una sesión de comunicación para conectarse a un servidor.

### Interacción Cliente-Servidor
Generalmente, los servidores utilizan los puertos conocidos o registrados para "escuchar" y aceptar conexiones entrantes. Por otro lado, los clientes utilizan los puertos dinámicos para iniciar esas conexiones. Es importante destacar que una computadora personal también puede actuar como servidor si tiene configurados servicios (como un sitio web o FTP) que acepten conexiones en los puertos 80 o 21.

### Herramientas de Visualización
Para observar la actividad de los puertos y las conexiones de red actuales en un sistema, se utiliza la herramienta de línea de comandos llamada **netstat**. Al ejecutar comandos como `netstat -n` o `netstat -an`, el usuario puede visualizar tanto su dirección IP local con el puerto dinámico asignado, como la dirección IP externa del servidor al que está conectado con su respectivo puerto de servicio.

:::tip[5.2.4. Puertos]
[Ports - PowerCert Animated Videos](https://www.youtube.com/watch?v=g2fT-g9PX9o)
:::
