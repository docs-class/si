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
     - En xarxes modernes, els hosts poden exercir el rol de **client, servidor o ambdós**.  
     - El programari instal·lat en un equip determina el rol que exerceix.  
       - Exemples: _Servidor de correu electrònic, web o d’arxius._  
:::caution[Activitat]  
[Servidor - PowerCert Animated Videos](https://www.youtube.com/watch?v=UjCDWCeHCzY) - Activitat d'omplir  
:::  

![LAN](https://cdn.prod.website-files.com/620d42e86cb8ec4d0839e59d/6230ee03762e4e5318c33297_61ca0988bf85585f5ccc26b5_Local-Area-Network-Diagram.jpeg)  
   - **Infraestructura de xarxa:**  
     - La infraestructura de xarxa inclou tres categories de components:  
       - **Dispositius finals:** Ordinadors, telèfons, impressores, etc.  
       - **Dispositius intermedis:** Switchos, routers, punts d'accés, etc.  
       - **Mitjans de xarxa:** Cables de coure, fibra òptica, mitjans sense fil, etc.  
     - Els components es representen en diagrames de topologia mitjançant icones específiques.  

## 2. Principis de comunicació  

:::caution[Protocols]  
   - Abans d'iniciar una comunicació, s'estableixen regles o acords, que inclouen:  
     - Mètode de comunicació: (cara a cara, telèfon, carta, etc.).  
     - Llenguatge comú i gramàtica.  
     - Confirmació o acusament de recepció dels missatges.  
     - Aquestes regles, conegudes com a **protocols**, han de seguir-se perquè els missatges es lliuren i s’entenguen correctament.  
:::  

### Característiques dels protocols de xarxa  
 - **Format del missatge:** Estructura específica segons el tipus de missatge.  
 - **Mida del missatge:** Dividir missatges llargs en peces xicotetes per garantir una transmissió fiable.  
 - **Temps:** Velocitat i moment d'enviament de les dades.  
 - **Codificació:** Conversió de dades a bits, utilitzant patrons de llum, so o impulsos elèctrics segons el mitjà.  
 - **Encapsulació:** Afegir capçaleres amb informació d'adreça per al lliurament del missatge.  

![TCP/IP Model - De GISEPROI - Treball propi, CC BY-SA 4.0,](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Suite_de_Protocolos_TCPIP.png/531px-Suite_de_Protocolos_TCPIP.png)  

## 3. **El Protocol d’Internet (IP)**  
   - **Adreça IPv4:**  
     - Cada host necessita una adreça IPv4 per participar en internet o xarxes locals.  
     - L’adreça IPv4 identifica lògicament un host i ha de ser única dins d'una LAN i a tot el món per a comunicacions remotes.  
     - Interfícies de xarxa com targetes NIC (Network Interface Card) tenen aquestes adreces assignades.  
     - Cada paquet enviat a través de la xarxa inclou una adreça d'origen i de destinació per garantir el seu lliurament correcte.  
   - **Notació binària i decimal:**  
     - Les adreces IPv4 tenen 32 bits dividits en quatre octets.  
     - Es representen comunament en notació decimal, com **192.168.0.1**, en lloc de binària per facilitar la lectura.  

## 4. **IPv4 i Segmentació de Xarxes**  

[Subnet Mask - PowerCert Animated Videos](https://www.youtube.com/watch?v=s_Ntt6eTn94)

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
- **IP privades** (no accessibles des d'Internet, definides en **RFC 1918**):  
  - **Classe A**: 10.0.0.0 - 10.255.255.255  
  - **Classe B**: 172.16.0.0 - 172.31.255.255  
  - **Classe C**: 192.168.0.0 - 192.168.255.255  

- **IP Comercials**
  - **Classe D i E**: Són usades per a usos comercials i experimentals 

## 5. **Adreçament dinàmic amb DHCP (Dynamic Host Configuration Protocol)**  
   - **Assignació dinàmica:**  
     - DHCP assigna automàticament configuracions IPv4 a dispositius finals, eliminant la necessitat de configuracions manuals.  
     - Les configuracions assignades tenen un temps de "préstec" limitat i es tornen al pool DHCP quan el dispositiu es desconnecta.  
   - **Assignació estàtica:**  
     - Útil per a dispositius com servidors o impressores, la direcció dels quals no ha de canviar.  
     - Requereix una entrada manual de paràmetres com adreça IP, màscara de subxarxa i passarel·la predeterminada.  

## 6. **Passarel·les a altres xarxes**  
   - **Routers com a gateways:**  
     - Els routers connecten xarxes distintes i actuen com a passarel·les.  
     - Cada interfície d'un router es connecta a una xarxa específica i té assignada una adreça IPv4 única.  
     - Els hosts usen l’adreça del router com a passarel·la predeterminada per comunicar-se amb altres xarxes.  
   - **Traducció d’adreces (NAT):**  
     - El NAT permet que dispositius amb adreces privades accedisquen a xarxes públiques, traduint adreces locals a adreces globals.  

## 7. **TCP i UDP**  
  - **Ports de comunicació:**  
     - Els números de port identifiquen serveis específics que utilitzen protocols com TCP i UDP.  
      - **Rang de ports**:  
        - **Ben coneguts (0-1023)**: HTTP (80), HTTPS (443), SSH (22).  
        - **Registrats (1024-49151)**: Aplicacions específiques.  
        - **Dinàmics (49152-65535)**: Ús temporal en connexions client.  
      - **Diferències entre TCP i UDP:**  
        - TCP és orientat a connexió i garanteix el lliurament de dades.  
        - UDP és més ràpid però no garanteix el lliurament.  

## 8. **Utilitats de prova de xarxa**  
   - **Ordres de diagnòstic:**  
     - **ipconfig:** Mostra la configuració de xarxa.  
     - **ping:** Verifica la connectivitat amb altres hosts.  
     - **netstat:** Mostra connexions actives.  
     - **tracert:** Mostra la ruta cap a una destinació.  
     - **nslookup:** Consulta informació sobre dominis.  