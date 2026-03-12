---
title: "Ejercicios UT5"
description: "Ejercicios de redes"
pagefind: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

## 5.1. Introducción a la red

**1.** ¿Qué es un servidor? ¿En qué se diferencia de un equipo de escritorio?

**2.** Indica qué tipo de servidor se encarga de cada una de estas funciones:

| Función | Tipo de servidor |
|---|---|
| Aloja páginas web y las entrega al navegador | |
| Asigna direcciones IP automáticas a los equipos de la red | |
| Traduce nombres de dominio a direcciones IP | |
| Gestiona el envío y recepción de correo electrónico | |
| Permite ejecutar varias máquinas virtuales sobre un mismo hardware | |

**3.** Explica qué es la memoria RAM ECC y por qué es importante en los servidores.

**4.** ¿Qué ventaja tiene el almacenamiento RAID en un servidor frente a un disco duro simple?

**5.** Clasifica cada una de estas redes según su alcance (PAN, LAN, MAN, WAN):

| Escenario | Tipo de red |
|---|---|
| La red de tu casa con el router, el PC y el móvil | |
| La red que conecta las distintas sucursales de un banco a nivel nacional | |
| La conexión Bluetooth entre tu móvil y unos auriculares | |
| La red que cubre todos los edificios de un campus universitario de la ciudad | |

---

## 5.2. Interconexión de sistemas en red

**6.** ¿Cuántos bits tiene una dirección IPv4? ¿Cuántos octetos la componen?

**7.** Dada la dirección IP `172.16.5.10` con máscara `255.255.0.0`:
- ¿A qué clase pertenece?
- ¿Cuál es el identificador de red?
- ¿Cuál es el identificador de host?

**8.** Convierte las siguientes máscaras de notación decimal a notación CIDR:

| Máscara decimal | Notación CIDR |
|---|---|
| 255.0.0.0 | |
| 255.255.0.0 | |
| 255.255.255.0 | |
| 255.255.255.128 | |

**9.** ¿Qué función tiene la puerta de enlace predeterminada (default gateway)? ¿Qué ocurre si no está configurada correctamente?

**10.** Explica el papel del protocolo ARP en la comunicación entre equipos de la misma red.

**11.** ¿Cuál es la diferencia entre una IP pública y una IP privada? ¿Para qué sirve NAT?

**12.** Indica si las siguientes direcciones son públicas o privadas:

| Dirección IP | Pública / Privada |
|---|---|
| 192.168.1.50 | |
| 8.8.8.8 | |
| 10.0.0.1 | |
| 172.20.5.3 | |
| 1.1.1.1 | |

**13.** ¿Qué es un puerto de red? ¿Cuál es el rango total de puertos disponibles?

**14.** Relaciona cada puerto con su servicio:

| Puerto | Servicio |
|---|---|
| 80 | |
| 443 | |
| 21 | |
| 22 | |
| 25 | |
| 53 | |

**15.** ¿Para qué sirve el comando `netstat`? Escribe el comando que muestra todas las conexiones activas con sus puertos.

**16.** Explica la diferencia entre los puertos conocidos (0-1023), registrados (1024-49151) y dinámicos (49152-65535).

---

## 5.3. Servicios de red

**17.** ¿Qué problema resuelve el protocolo DHCP? Describe brevemente su funcionamiento.

**18.** ¿Qué es un "arrendamiento" (lease) de IP? ¿Qué ocurre cuando caduca?

**19.** ¿En qué se diferencia una reserva DHCP de una IP estática? ¿Para qué dispositivos se suelen configurar reservas?

**20.** Ordena los pasos del proceso de resolución DNS:

- El servidor autorizado responde con la dirección IP.
- El usuario escribe `www.ejemplo.com` en el navegador.
- El resolutor consulta al servidor raíz.
- El navegador carga la página web.
- El servidor TLD dirige al servidor autorizado del dominio.
- El SO consulta al servidor de resolución (resolutor).

**21.** ¿Por qué el DNS utiliza caché? ¿Qué ventaja aporta?

---

## 5.4. Subnetting & SSH

**22.** Una empresa dispone de la red `10.0.0.0/8`. Necesita dividirla en **8 subredes**.
- ¿Cuántos bits adicionales se necesitan?
- ¿Cuál será la nueva máscara?
- ¿Cuántos hosts utilizables tendrá cada subred?

**23.** Dada la red `192.168.10.0/24`, divídela en **4 subredes** e indica para cada una:
- Dirección de red
- Primer host utilizable
- Último host utilizable
- Dirección de broadcast

**24.** Dada la dirección `172.16.50.200/20`:
- ¿A qué subred pertenece?
- ¿Cuál es la dirección de broadcast de esa subred?

**25.** Una organización necesita 500 hosts en una subred. ¿Cuál es la máscara mínima que satisface ese requisito? Indícala en notación CIDR y decimal.

**26.** ¿Qué significa SSH y para qué se utiliza?

**27.** ¿Qué puerto utiliza SSH por defecto? ¿Por qué se recomienda cambiarlo?

**28.** ¿Qué es el *tunneling* o *port forwarding* en SSH? Pon un ejemplo de uso.

**29.** Escribe el comando SSH para conectarte al servidor `192.168.1.10` con el usuario `admin` usando el puerto `2222`.

**30.** ¿Qué diferencia hay entre autenticación SSH por contraseña y por clave pública/privada? ¿Cuál es más segura y por qué?
