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

## **SCP (Secure Copy Protocol)**  

**SCP (Secure Copy Protocol)** es un protocolo que permite transferir archivos de manera segura entre un cliente y un servidor a través de SSH.  

### **Características**  
- Usa **SSH** para cifrar datos y autenticación.  
- Permite copiar archivos y directorios entre sistemas remotos y locales.  
- Mantiene permisos y atributos de los archivos.  

```bash 
scp [opciones] origen destino
```  

**Copiar un archivo de local a remoto**  
   ```bash 
   scp archivo.txt usuario@servidor:/ruta/destino/
   ```  

### **Alternativa moderna**  
Se recomienda **rsync** en lugar de SCP, ya que permite transferencias más eficientes y seguras.  

## **RSYNC**  

`rsync` es una alternativa mejorada a `scp`, ya que permite **sincronización incremental**, lo que reduce el tiempo y el uso de ancho de banda.  

### **Ventajas sobre SCP**  
✅ Transferencia incremental (solo copia cambios)  
✅ Más rápido y eficiente  
✅ Soporta exclusión de archivos (`--exclude`)  
✅ Mantiene permisos y propiedades de archivos  

### **Sintaxis básica**  
```bash title="hi"
rsync [opciones] -e "ssh -p PUERTO" origen destino
```  

1. **Copiar un archivo de local a remoto**  
   ```bash 
   rsync -avz -e "ssh" archivo.txt usuario@servidor:/ruta/destino/
   ```  

2. **Copiar un archivo de remoto a local**  
   ```bash 
   rsync -avz -e "ssh" usuario@servidor:/ruta/origen/archivo.txt /ruta/local/
   ```  

3. **Copiar un directorio completo**  
   ```bash 
   rsync -avz -e "ssh" carpeta/ usuario@servidor:/ruta/destino/
   ```  

4. **Usar un puerto SSH específico**  
   ```bash 
   rsync -avz -e "ssh -p 2222" archivo.txt usuario@servidor:/ruta/destino/
   ```  

5. **Eliminar archivos en destino que no están en origen**  
   ```bash 
   rsync -avz --delete -e "ssh" carpeta/ usuario@servidor:/ruta/destino/
   ```  

