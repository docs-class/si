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

## **SCP (Secure Copy Protocol)**  

**SCP (Secure Copy Protocol)** és un protocol que permet transferir fitxers de manera segura entre un client i un servidor a través de SSH.  

### **Característiques**  
- Usa **SSH** per xifrar dades i autenticació.  
- Permet copiar fitxers i directoris entre sistemes remots i locals.  
- Manté permisos i atributs dels fitxers.  

```bash
scp [opcions] origen destí
```  

**Copiar un fitxer de local a remot**  
   ```bash
   scp fitxer.txt usuari@servidor:/ruta/destí/
   ```  

### **Alternativa moderna**  
Es recomana **rsync** en lloc de SCP, ja que permet transferències més eficients i segures.  

## **RSYNC**  

`rsync` és una alternativa millorada a `scp`, ja que permet **sincronització incremental**, la qual cosa redueix el temps i l’ús d’ample de banda.  

### **Avantatges sobre SCP**  
✅ Transferència incremental (només copia els canvis)  
✅ Més ràpid i eficient  
✅ Suporta exclusió de fitxers (`--exclude`)  
✅ Manté permisos i propietats dels fitxers  

### **Sintaxi bàsica**  
```bash
rsync [opcions] -e "ssh -p PORT" origen destí
```  

1. **Copiar un fitxer de local a remot**  
   ```bash
   rsync -avz -e "ssh" fitxer.txt usuari@servidor:/ruta/destí/
   ```  

2. **Copiar un fitxer de remot a local**  
   ```bash
   rsync -avz -e "ssh" usuari@servidor:/ruta/origen/fitxer.txt /ruta/local/
   ```  

3. **Copiar un directori complet**  
   ```bash
   rsync -avz -e "ssh" carpeta/ usuari@servidor:/ruta/destí/
   ```  

4. **Usar un port SSH específic**  
   ```bash
   rsync -avz -e "ssh -p 2222" fitxer.txt usuari@servidor:/ruta/destí/
   ```  

5. **Eliminar fitxers en destí que no estan en origen**  
   ```bash
   rsync -avz --delete -e "ssh" carpeta/ usuari@servidor:/ruta/destí/
   ```  