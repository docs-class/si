---
title: "Proxmox"
---

Para las prácticas necesitaremos un Servidor de Windows (WS) y un Windows 10 pro (W10). W10 será una máquina virtual en tu ordenador. Mientras que WS estará virtualizado en un servidor [Proxmox](https://pve.proxmox.com/wiki/Main_Page)

## Acceso a Windows Server

1. **Acceso a la interfaz web de Proxmox**:
   - Abre tu navegador web y dirígete a la URL: 192.232.22.1:4444
   - Introduce las credenciales de usuario: 
     - **Usuario**: usuX (X = número de usuario asignado)
     - **Contraseña**: xxxxxxxx

2. **Acceso a la máquina virtual**:
   - En el nodo3, localiza la máquina virtual a la que deseas acceder.
   - Selecciona la máquina virtual y ve a la pestaña **Consola**.

3. **Uso de SPICE**:
   - En la pestaña de Consola, selecciona **SPICE** como el tipo de consola.
    ![SPICE](https://pve.proxmox.com/mediawiki/images/thumb/e/e0/Screen-start-spice-viewer.png/600px-Screen-start-spice-viewer.png)
   - Si no tienes el cliente SPICE instalado (Virt-viewer), Proxmox te proporcionará un enlace para descargarlo. Instálalo en tu máquina con Windows Server.
   - Una vez instalado, haz clic en el botón **Conectar** para abrir la consola SPICE y acceder a la máquina virtual.
     - El fichero de conexión que genera es de un único uso. Se debe generar otro en caso de cerrar sesión o ventana.
