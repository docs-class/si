---
title: "Xarxa"
description: "Xarxa"
---

## 1. **Components, tipus i connexions de xarxa**  
   - **Rols de client i servidor:**  
     - Tots els equips connectats a una xarxa que participen directament en la comunicació es classifiquen com a **hosts**.  
     - En xarxes modernes, els hosts poden exercir el rol de client, servidor o ambdós.  
     - El programari instal·lat en un equip determina el rol que exerceix.  
     - Exemples:  
       - **Servidor de correu electrònic:** Executa programari de servidor de correu. Els clients accedeixen al correu amb programari com Microsoft Outlook.  
       - **Servidor web:** Executa programari de servidor web. Els clients accedeixen a pàgines web mitjançant navegadors com Internet Explorer.  
       - **Servidor de fitxers:** Emmagatzema fitxers corporatius i d'usuari en una ubicació central. Els clients accedeixen amb programari com l'Explorador de Fitxers de Windows.  

   - **Infraestructura de xarxa:**  
     - La infraestructura de xarxa inclou tres categories de components:  
       - **Dispositius finals:** Ordinadors, telèfons, impressores, etc.  
       - **Dispositius intermedis:** Switches, routers, punts d'accés, etc.  
       - **Mitjans de xarxa:** Cables de coure, fibra òptica, mitjans sense fils, etc.  
     - Els components es representen en diagrames de topologia mitjançant icones específiques.  

## 2. **Principis de comunicació**  
   - La comunicació pot adoptar diferents formes i estils depenent del context:  
     - Exemple: Una conversa informal a internet versus una entrevista de treball.  
   - Abans d'iniciar una comunicació, s'estableixen regles o acords, que inclouen:  
     - Mètode de comunicació: (cara a cara, telèfon, carta, etc.).  
     - Llenguatge comú i gramàtica.  
     - Confirmació o acusament de recepció dels missatges.  
   - Aquestes regles, conegudes com a **protocols**, han de seguir-se perquè els missatges es lliuren i comprenguen correctament.  
   - Comparació amb xarxes:  
     - Els ordinadors també utilitzen protocols per a comunicar-se.  
     - En una xarxa local, tots els dispositius han de "parlar el mateix idioma", és a dir, compartir un protocol comú.  
     - Sense protocols compartits, la comunicació no seria possible.  
   - Característiques dels protocols de xarxa:  
     - **Format del missatge:** Estructura específica segons el tipus de missatge.  
     - **Mida del missatge:** Dividir missatges llargs en peces petites per a garantir una transmissió fiable.  
     - **Temps:** Velocitat i moment d'enviament de les dades.  
     - **Codificació:** Conversió de dades a bits, utilitzant patrons de llum, so o impulsos elèctrics segons el mitjà.  
     - **Encapsulació:** Afegir encapçalaments amb informació d'adreça per al lliurament del missatge.

## 3. **El Protocol d'Internet (IP)**  
   - **Adreça IPv4:**  
     - Cada host necessita una adreça IPv4 per a participar en internet o xarxes locals.  
     - L'adreça IPv4 identifica lògicament un host i ha de ser única dins d'una LAN i a tot el món per a comunicacions remotes.  
     - Les interfícies de xarxa com les targetes NIC (Network Interface Card) tenen aquestes adreces assignades.  
     - Cada paquet enviat a través de la xarxa inclou una adreça d'origen i de destinació per a garantir la seua entrega correcta.  
   - **Notació binària i decimal:**  
     - Les adreces IPv4 tenen 32 bits dividits en quatre octets.  
     - Es representen comunament en notació decimal, com **192.168.0.1**, en lloc de binària per a facilitar la lectura.  

## 4. **IPv4 i segmentació de xarxes**  
   - **Estructura de les adreces IPv4:**  
     - Les adreces IPv4 tenen dues parts:  
       - **Xarxa:** Identifica el segment de xarxa.  
       - **Host:** Identifica un dispositiu específic dins d'eixa xarxa.  
     - La màscara de subxarxa determina la part que correspon a la xarxa i al host. Per exemple:  
       - Adreça: **192.168.5.11**  
       - Màscara de subxarxa: **255.255.255.0**  
   - **Segmentació i subxarxes:**  
     - Les xarxes grans es subdivideixen en subxarxes més xicotetes per a reduir el trànsit i millorar el rendiment.  
     - Les subxarxes més xicotetes ajuden a gestionar millor la xarxa i a aplicar polítiques de seguretat.  

## 5. **Adreçament dinàmic amb DHCP (Dynamic Host Configuration Protocol)**  
   - **Assignació dinàmica:**  
     - DHCP assigna automàticament configuracions IPv4 als dispositius finals, eliminant la necessitat de configuracions manuals.  
     - Les configuracions assignades tenen un temps de "lloguer" limitat i es tornen al pool DHCP quan el dispositiu es desconnecta.  
   - **Assignació estàtica:**  
     - Útil per a dispositius com servidors o impressores, la direcció dels quals no hauria de canviar.  
     - Requereix una entrada manual de paràmetres com l'adreça IP, la màscara de subxarxa i la porta d'enllaç predeterminada.  

## 6. **Portes d'enllaç a altres xarxes**  
   - **Routers com a gateways:**  
     - Els routers connecten xarxes distintes i actuen com a portes d'enllaç.  
     - Cada interfície d'un router es connecta a una xarxa específica i té assignada una adreça IPv4 única.  
     - Els hosts utilitzen l'adreça del router com a porta d'enllaç predeterminada per a comunicar-se amb altres xarxes.  
   - **Traducció d'adreces (NAT):**  
     - El NAT permet que dispositius amb adreces privades accedisquen a xarxes públiques, traduint adreces locals a adreces globals.  

## 7. **TCP i UDP**  
   - **Ports de comunicació:**  
     - Els números de port identifiquen serveis específics que utilitzen protocols com TCP i UDP.  
     - Exemples:  
       - **HTTP (80)** per a navegació web.  
       - **DNS (53)** per a resolució de noms.  
       - **SSH (22)** per a accés remot segur.  
   - **Diferències entre TCP i UDP:**  
     - TCP és orientat a connexió i garanteix l'entrega de dades.  
     - UDP és més ràpid però no garanteix l'entrega.  

## 8. **Utilitats de prova de xarxa**  
   - **Comandes de diagnòstic:**  
     - **ipconfig:** Mostra la configuració de xarxa.  
     - **ping:** Verifica la connectivitat amb altres hosts.  
     - **netstat:** Mostra connexions actives.  
     - **tracert:** Mostra la ruta cap a una destinació.  
     - **nslookup:** Consulta informació sobre dominis.  
