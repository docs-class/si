---  
title: "Introducció a les xarxes"  
description: "Xarxa"  
---  

:::note[Connexió amb el currículum]  
**5. Interconnecta sistemes en xarxa configurant dispositius i protocols.**    

a) S'ha configurat el protocol TCP/IP.  
b) S'han configurat xarxes d'àrea local cablejades.  
c) S'han configurat xarxes d'àrea local sense fil.  
d) S'han utilitzat dispositius d'interconnexió de xarxes.  
e) S'ha configurat l'accés a xarxes d'àrea extensa.  
f) S'han gestionat ports de comunicacions.  
g) S'ha verificat el funcionament de la xarxa mitjançant l'ús d'ordres i eines bàsiques.  
h) S'han aplicat protocols segurs de comunicacions.  
:::  

## 1. Components, tipus i connexions de xarxa  
   - **Rols de client i servidor**  
     - Tots els equips connectats a una xarxa que participen directament en la comunicació es classifiquen com a **hosts**.  
     - En xarxes modernes, els hosts poden exercir el rol de **client, servidor o els dos**.  
     - El programari instal·lat en un equip determina el rol que exerceix.  
       - Exemples: _Servidor de correu electrònic, web o d’arxius._  

:::tip[Servidor]  
[Servidor - PowerCert Animated Videos](https://www.youtube.com/watch?v=UjCDWCeHCzY) + Activitat d'omplir  
:::   

![LAN](https://cdn.prod.website-files.com/620d42e86cb8ec4d0839e59d/6230ee03762e4e5318c33297_61ca0988bf85585f5ccc26b5_Local-Area-Network-Diagram.jpeg)  
   - **Infraestructura de xarxa:**  
     - La infraestructura de xarxa inclou tres categories de components:  
       - **Dispositius finals:** Ordinadors, telèfons, impressores, etc.  
       - **Dispositius intermedis:** Switchos, routers, punts d'accés, etc.  
       - **Mitjans de xarxa:** Cables de coure, fibra òptica, mitjans sense fil, etc.  
     - Els components es representen en diagrames de topologia mitjançant icones específiques.  

## 2. TCP/IP

:::caution[Principis de comunicació]  
   - Abans d'iniciar una comunicació, s'estableixen regles o acords, que inclouen:  
     - Mètode de comunicació: (cara a cara, telèfon, carta, etc.).  
     - Llenguatge comú i gramàtica.  
     - Confirmació o acusament de recepció dels missatges.  
     - Aquestes regles, conegudes com a **protocols**, han de seguir-se perquè els missatges es lliuren i s’entenguen correctament.  
:::  

### El Protocol de Control de Transmissió (TCP)  

El **Protocol de Control de Transmissió (TCP)** és un protocol de transport que garanteix una comunicació fiable entre dispositius en xarxes IP. Proporciona una connexió orientada a flux, garantint que les dades s’envien i es reben de manera íntegra i ordenada.  


### El Protocol d’Internet (IP)  
   - **Adreça IPv4:**  
     - Cada host necessita una adreça IPv4 per participar en internet o xarxes locals.  
     - L’adreça IPv4 identifica lògicament un host i ha de ser única dins d'una LAN i a tot el món per a comunicacions remotes.  
     - Interfícies de xarxa com targetes NIC (Network Interface Card) tenen aquestes adreces assignades.  
     - Cada paquet enviat a través de la xarxa inclou una adreça d'origen i de destinació per garantir el seu lliurament correcte.  
   - **Notació binària i decimal:**  
     - Les adreces IPv4 tenen 32 bits dividits en quatre octets.  
     - Es representen comunament en notació decimal, com **192.168.0.1**, en lloc de binària per facilitar la lectura.  

## 3. **IPv4 i Segmentació de Xarxes**  

:::tip[Subneting]
[Subnet Mask - PowerCert Animated Videos](https://www.youtube.com/watch?v=s_Ntt6eTn94)
:::

   - **Estructura de les adreces IPv4:**  
     - Les adreces IPv4 tenen dues parts:  
       - **Xarxa:** Identifica el segment de xarxa.  
       - **Host:** Identifica un dispositiu específic dins d'aquesta xarxa.  
     - La màscara de subxarxa determina la part que correspon a la xarxa i a l'host. Per exemple:  
       - Adreça: **192.168.5.11**  
       - Màscara de subxarxa: **255.255.255.0**  
       - Notació CIDR (Classless Inter-Domain Routing):  **192.168.5.11/24** 
   - **Segmentació i subxarxes:**  
     - Les xarxes grans es subdivideixen en subxarxes més xicotetes per reduir el trànsit i millorar el rendiment.  
     - Subxarxes més xicotetes ajuden a gestionar millor la xarxa i aplicar polítiques de seguretat.  

### **Adreces IP públiques i privades**  

:::tip[Public & Private IP]
[Public & private IP](https://www.youtube.com/watch?v=po8ZFG0Xc4Q)
:::

- **IP privades** (no accessibles des d'Internet, definides en **RFC 1918**):  
  - **Classe A**: 10.0.0.0 - 10.255.255.255  
  - **Classe B**: 172.16.0.0 - 172.31.255.255  
  - **Classe C**: 192.168.0.0 - 192.168.255.255  

- **IP Comercials**
  - **Classe D i E**: Són usades per a usos comercials i experimentals 

## 4. **Passarel·les a altres xarxes**  

:::tip[Default gateway]
[Default gateway - PowerCert Animated Videos](https://www.youtube.com/watch?v=pCcJFdYNamc)
:::

   - **Routers com a gateways:**  
     - Els routers connecten xarxes distintes i actuen com a passarel·les.  
     - Cada interfície d'un router es connecta a una xarxa específica i té assignada una adreça IPv4 única.  
     - Els hosts usen l’adreça del router com a passarel·la predeterminada per comunicar-se amb altres xarxes.  
   - **Traducció d’adreces (NAT):**  
     - El NAT permet que dispositius amb adreces privades accedisquen a xarxes públiques, traduint adreces locals a adreces globals.  

## 5. **Ports**  

:::tip[Ports]
[Ports - PowerCert Animated Videos](https://www.youtube.com/watch?v=g2fT-g9PX9o)
:::
  - **Ports de comunicació:**  
     - Els números de port identifiquen serveis específics que utilitzen protocols com TCP i UDP.  
      - **Rang de ports**:  
        - **Ben coneguts (0-1023)**: HTTP (80), HTTPS (443), SSH (22).  
        - **Registrats (1024-49151)**: Aplicacions específiques.  
        - **Dinàmics (49152-65535)**: Ús temporal en connexions client.  
      - **Diferències entre TCP i UDP:**  
        - TCP és orientat a connexió i garanteix el lliurament de dades.  
        - UDP és més ràpid però no garanteix el lliurament.  

## 6. **Ordres de diagnòstic de xarxa**  
| **Utilitat de prova de xarxa** | **Windows** | **Linux** |
|-------------------------------|-------------|-----------|
| Mostra la configuració de xarxa | `ipconfig` | `ifconfig` o `ip addr` |
| Verifica la connectivitat amb altres hosts | `ping` | `ping` |
| Mostra connexions actives | `netstat` | `netstat` o `ss` |