---
title: Processador
description: Processador d'un Sistema Informàtic
---

En analitzar un processador (CPU), hi ha diversos factors clau que has de tindre en compte per a comprendre el seu rendiment i com s'adapta a les teues necessitats. Ací et resumisc els aspectes més importants que has de saber:

### 1. **Freqüència de Rellotge (Clock Speed)**

- La freqüència dels processadors es mesura en **gigaherços (GHz)**, que representen milers de milions de cicles per segon. Un processador de **3,5 GHz**, per exemple, executa **3.500 milions de cicles cada segon**.

- Com més gran és la freqüència en GHz, més ràpid pot executar operacions, encara que això no sempre implica un major rendiment general (depén d'altres factors com l'arquitectura del processador i l'eficiència energètica).

![Monitor CPU W11](../../../../assets/ut1/cpuMonitor.png)
Monitor CPU de Windows 11. (ctrl + majúscules + esc)

### 2. **Nombre de Nuclis (Cores)**
   - Un nucli és una unitat de processament independent dins del processador.
   - Com més nuclis tinga un processador, més tasques o fils pot manejar simultàniament. Processadors amb múltiples nuclis (dual-core, quad-core, octa-core, etc.) són millors per a la multitarea i aplicacions que requereixen processament paral·lel.
   
   :::note
   Amb el llançament dels processadors Intel Core de 12ª Generació (Alder Lake), Intel va fer un gran pas avant en aquesta filosofia, presentant dos tipus diferents de nuclis dins d'un mateix processador:

   - Els P-Cores es diuen així perquè la P prové de Performance, rendiment en anglès.
   - Els E-Cores es diuen així perquè la E prové de Efficiency, eficiència en anglès.
   - LP E-Core, que seria un nucli d'ultra-baix consum. Aquest disseny seria similar als processadors ARM, els quals també tenen tres tipus de nuclis.
   :::

### 3. **Nombre de Fils (Threads)**
   - Els fils són les unitats més xicotetes que gestionen les tasques dins d'un nucli. Alguns processadors tenen tecnologia de **multithreading** (com **Hyper-Threading** d'Intel) que permet a un nucli manejar més d'un fil simultàniament.
   - Més fils permeten un millor rendiment en aplicacions multitarea i tasques que es beneficien del paral·lelisme, com edició de vídeo o renderitzat 3D.

:::danger[FYI]
Només els P-core tenen fils.
:::

### 4. **Memòria Cau (Caché)**
   - La caché és una memòria molt ràpida integrada en la CPU per a emmagatzemar dades i instruccions d'ús freqüent.
   - **Tipus**: 
     - **L1**: Petita i ultraràpida, propera als nuclis.
     - **L2**: Un poc més gran i més lenta que L1.
     - **L3**: Compartida entre tots els nuclis, més lenta però de major capacitat.
   - La caché ajuda a accelerar l'accés a dades i redueix la necessitat d'acudir a la RAM per a obtindre informació, millorant el rendiment general.

   ![Caches L1, L2, L3](../../../../assets/ut1/caches.png) 

### 5. **Arquitectura del Processador**
   - Es refereix al disseny i estructura interna del processador. Les arquitectures més comunes inclouen **x86** i **ARM**.
   - Les arquitectures més modernes i eficients (com **x86-64** o **ARMv8**) permeten un millor rendiment i menor consum d'energia.

### 6. **Procés de Fabricació (Tecnologia de fabricació)**
   - El tamany dels transistors dins d'un xip, mesurat en **nanòmetres (nm)**.
   - A menor tamany dels transistors (per exemple, 7 nm o 5 nm), major densitat de transistors, la qual cosa significa un processador més eficient i de millor rendiment. Això redueix el consum energètic i genera menys calor.

### 7. **Potència Tèrmica de Disseny (TDP - Thermal Design Power)**
   - Mesurada en watts, indica la quantitat de calor que el processador dissipa sota càrrega màxima.
   - Un TDP més alt implica major consum d'energia i la necessitat de millors solucions de refrigeració. És rellevant per a saber quin tipus de sistema de refrigeració necessitaràs.

### 8. **Suport d'Instruccions**
   - Els processadors moderns suporten conjunts d'instruccions especials com **SSE**, **AVX**, **NEON** (en ARM), que acceleren tasques específiques, com gràfics, càlculs científics o xifrat.
   - Açò pot millorar considerablement el rendiment en aplicacions que aprofiten aquestes instruccions.

### 9. **Compatibilitat amb Memòria RAM**
   - Els processadors estan dissenyats per a treballar amb certs tipus i velocitats de memòria RAM (per exemple, **DDR4**, **DDR5**).
   - Com més ràpida i avançada siga la memòria RAM que suporta, millor serà el rendiment en tasques intensives en memòria.

### 10. **GPU Integrada (iGPU)**
   - Alguns processadors tenen una **Unitat de Processament Gràfic** integrada, cosa que permet gestionar gràfics sense necessitat d'una targeta gràfica dedicada.
   - Per a tasques lleugeres com la navegació web, ofimàtica i reproducció de vídeo, una GPU integrada pot ser suficient, però per a tasques intensives com gaming o renderitzat, és preferible una GPU dedicada.

### 11. **Overclocking**
   - Alguns processadors permeten **overclocking**, la qual cosa significa que pots augmentar manualment la seua velocitat de rellotge per damunt de les especificacions de fàbrica.
   - Si eres un usuari avançat que busca exprimir el màxim rendiment, l'overclocking pot ser una opció. No obstant això, genera més calor i pot requerir refrigeració addicional.

### 12. **Fabricant (AMD vs Intel)**
   - Els dos principals fabricants de processadors per a PCs d'escriptori i portàtils són **Intel** i **AMD**.
   - AMD ha guanyat terreny en els últims anys amb els seus processadors Ryzen, que ofereixen una excel·lent relació qualitat-preu, mentre que Intel continua sent competitiu amb els seus processadors d'alt rendiment, especialment en tasques de mononucli.

![Processador AMD i Intel](../../../../assets/ut1/procesador.jpg) 

### 13. **Integració**
   - Des de la unió del North Bridge i South Bridge en el que es coneix ara com a Chipset, el processador ha integrat els controladors de Memòria Principal i PCI-express.
   - Una evolució important en l'arquitectura dels sistemes informàtics que ha tingut un impacte significatiu en el rendiment i l'eficiència dels ordinadors moderns: **Reducció de la Latència** i **Augment de l'Ample de Banda**.

:::tip[Ampliació]
[AMD and Interl processors naming](https://www.youtube.com/watch?v=ELJxau5qaQI)
[Hiper Threading](https://www.youtube.com/watch?v=lrT9Bl0MCXQ)
:::