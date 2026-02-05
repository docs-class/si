---  
title: "Protocolo SSH"  
description: "Protocolo SSH"  
---  

## **SSH (Secure Shell)**  
   - SSH o Secure Shell es un protocolo de conexión que permite establecer una relación directa entre dos máquinas de manera cifrada.  

:::tip[Enlaces]  
[ssh academy](https://www.ssh.com/academy/ssh)  
:::  

### **Conexión remota SSH**  
  - Para establecer una comunicación cifrada SSH debemos:  
    - Instalar y/o activar el servicio SSH en el servidor (**OpenSSH**).  
    - Contar con un cliente SSH: **Powershell**, **Putty**, entre otros.  
    - El puerto de conexión estándar es el **22**, pero es muy recomendable cambiarlo (>1024).  

#### **Tunneling**  
  - El **tunneling** es una técnica utilizada para conectar con un servidor remoto mediante SSH usando diferentes puertos de conexión.  
  - Su objetivo habitual es **evitar** sistemas de seguridad basados en puertos.  
  - En este caso hablaremos de **local port forwarding**.  
