---  
title: "Protocol SSH"  
description: "Protocol SSH"  
---  

## **SSH (Secure Shell)**  
   - SSH o Secure Shell és un protocol de connexió que permet establir una relació directa entre dues màquines de manera xifrada.  

:::tip[Enllaços]  
[ssh academy](https://www.ssh.com/academy/ssh)  
:::  

### **Connexió remota SSH**  
  - Per establir una comunicació xifrada SSH hem de:  
    - Instal·lar i/o activar el servei SSH en el servidor (**OpenSSH**).  
    - Comptar amb un client SSH: **Powershell**, **Putty**, entre altres.  
    - El port de connexió estàndard és el **22**, però és molt recomanable canviar-lo (>1024).  

#### **Tunneling**  
  - El **tunneling** és una tècnica utilitzada per connectar amb un servidor remot mitjançant SSH usant diferents ports de connexió.  
  - L’objectiu habitual és **evitar** sistemes de seguretat basats en ports.  
  - En aquest cas parlarem de **local port forwarding**.  