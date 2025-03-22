---
title: "Proxmox"
---

Per a les pràctiques necessitarem un Servidor de Windows (WS) i un Windows 10 pro (W10). W10 serà una màquina virtual en el teu ordinador. Mentre que WS estarà virtualitzat en un servidor [Proxmox](https://pve.proxmox.com/wiki/Main_Page)

## Accés a Windows Server

1. **Accés a la interfície web de Proxmox**:
   - Obri el teu navegador web i dirigeix-te a la URL: 192.232.22.1:4444
   - Introdueix les credencials d'usuari: 
     - **Usuari**: usuX (X = número d'usuari assignat)
     - **Contrasenya**: xxxxxxxx

2. **Accés a la màquina virtual**:
   - En el node3, localitza la màquina virtual a la qual desitges accedir.
   - Selecciona la màquina virtual i ves a la pestanya **Consola**.

3. **Ús de SPICE**:
   - En la pestanya de Consola, selecciona **SPICE** com el tipus de consola.
    ![SPICE](https://pve.proxmox.com/mediawiki/images/thumb/e/e0/Screen-start-spice-viewer.png/600px-Screen-start-spice-viewer.png)
   - Si no tens el client SPICE instal·lat (Virt-viewer), Proxmox et proporcionarà un enllaç per a descarregar-lo. Instal·la'l en la teua màquina amb Windows Server.
   - Una vegada instal·lat, fes clic en el botó **Connectar** per a obrir la consola SPICE i accedir a la màquina virtual.
     - El fitxer de connexió que genera és d'un únic ús. S'ha de generar un altre en cas de tancar sessió o finestra.
