---
title: "Configuraciones y Software Necesario"
description: "Settings & software"
---

## 1. Configuraciones y Software Necesario

### Configuraciones Previas
- Administración de particionado.
- Nombres de equipo.
- Configuración de red (IP estática del servidor).
- Instalación de herramientas para el controlador de dominio.

### Software Necesario
- **Kerberos:** Autenticación de usuarios mediante tickets.
- **SAMBA:** Comunicación entre GNU/Linux y Windows.
- **NTP:** Sincronización horaria de la red.
- **Winbind:** Herramientas para integración con Windows.

## 2. Instalación y Configuración de DNS

### Introducción al Servicio DNS
- Traduce nombres de dominio en direcciones IP.
- Base de datos distribuida.
- Utiliza el protocolo TCP/IP.

### Componentes Clave
- **Espacio de nombres y registros de recursos.**
- **Servidores DNS:** Mantienen la información del dominio.
- **Traductores DNS:** Resuelven consultas externas.
- **Caché DNS:** Reduce el tráfico y mejora la velocidad.

## 3. Configuración de DHCP

### Introducción
- Asigna direcciones IP automáticamente a los clientes.
- Administración centralizada.
- Configuración sencilla y flexible.

### Componentes del Servicio DHCP
- **Ámbito:** Conjunto de direcciones IP gestionadas.
- **Exclusiones:** IP reservadas fuera del rango dinámico.
- **Reservas:** IP asignadas a dispositivos específicos.


## 4. Conexión de Clientes a un Controlador de Dominio

### Pasos para la Conexión
1. Configurar la red del cliente de acuerdo con la del controlador.
2. Asignar nombres de equipo según la nomenclatura establecida.
3. Unir el equipo al dominio.
4. Iniciar sesión con credenciales de dominio.

