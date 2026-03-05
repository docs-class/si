---
title: "DNS"
description: "DNS"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

### El Propósito del DNS: Nombres frente a Números
En el mundo de las redes, las computadoras y otros dispositivos se comunican e identifican entre sí mediante **direcciones IP**, que son cadenas de números. Sin embargo, los seres humanos están acostumbrados a usar nombres para identificar lugares o cosas. El DNS fue diseñado para cerrar esta brecha de comunicación al resolver los nombres de dominio en números específicos que las computadoras puedan entender. Aunque un usuario podría ingresar directamente la dirección IP de un sitio web para acceder a él, el DNS evita la necesidad de memorizar millones de direcciones numéricas complejas.

### El DNS como una Guía Telefónica
El funcionamiento del DNS es comparable al de una **guía telefónica**. Cuando una persona desea encontrar un número de teléfono, busca primero el nombre en la guía para obtener el número correspondiente; de la misma manera, cuando se escribe un nombre de dominio en el navegador, el servidor DNS busca en su base de datos para encontrar la dirección IP que coincida con ese nombre. Una vez que se resuelve el nombre, la computadora puede comunicarse con el servidor web del sitio solicitado y recuperar la página.

### El Servidor de Resolución (Resolver)
Cuando se inicia una búsqueda y el sistema operativo no encuentra la dirección IP en su memoria caché local, envía la consulta al **servidor de resolución**, que suele ser proporcionado por el ISP (Proveedor de Servicios de Internet). El resolutor verifica su propia memoria caché y, si no encuentra la información, comienza a consultar otros niveles de la jerarquía DNS para localizar la dirección IP correcta.

### La Jerarquía de Servidores: Raíz, TLD y Autorizados
El proceso de resolución implica una estructura jerárquica de servidores especializados:
*   **Servidores Raíz:** Constituyen la parte superior de la jerarquía DNS; existen 13 conjuntos de estos servidores operados por diversas organizaciones en todo el mundo. Su función no es conocer la IP final, sino dirigir al resolutor hacia el servidor de dominio de nivel superior adecuado.
*   **Servidores de Dominio de Nivel Superior (TLD):** Estos servidores almacenan información para extensiones específicas como **.com, .net o .org**. Por ejemplo, el servidor TLD para .com dirigirá al resolutor hacia el servidor responsable de ese dominio específico.
*   **Servidores de Nombres Autorizados:** Son la autoridad final y los responsables de conocer toda la información sobre un dominio, incluida su dirección IP. Cuando este servidor recibe la consulta, responde con la dirección IP exacta al resolutor.

### Optimización mediante Memoria Caché
Una vez que el servidor de resolución obtiene la dirección IP del servidor autorizado, la entrega a la computadora del usuario para que pueda cargar el sitio web. Es fundamental destacar que el resolutor **almacena esta dirección en su memoria caché**. Esto permite que, ante futuras consultas para el mismo dominio, el sistema responda rápidamente sin tener que repetir todo el proceso de búsqueda a través de la jerarquía de servidores.



:::tip[5.3.2. Sistema de nombres de dominio - DNS]
[DNS - PowerCert Animated Videos](https://www.youtube.com/watch?v=mpQZVYPuDGU)
:::