---
title: "Directoris"
description: "Directoris"
---

### **Estructura de Directoris en Windows**

L'estructura de directoris en Windows està organitzada jeràrquicament i comença per unitats d'emmagatzematge (per exemple, **C:**, **D:**). Aquestes unitats contenen tots els fitxers i carpetes. A continuació, alguns dels directoris principals:

- **C:\\**: És la unitat de disc principal on generalment s'instal·la el sistema operatiu.
- **C:\Windows**: Conté els fitxers necessaris per al funcionament del sistema operatiu.
- **C:\Program Files**: Directori on s'instal·len els programes i aplicacions del sistema. Les versions de 64 bits també inclouen una carpeta anomenada **C:\Program Files (x86)**.
- **C:\Users**: Emmagatzema les carpetes personals de cada usuari, com documents, imatges, i configuracions de cada perfil.
- **C:\Temp**: Directori temporal on s'emmagatzemen fitxers d'ús temporal, útil per a certes operacions del sistema.
- **C:\System32**: És una subcarpeta de **C:\Windows** que conté fitxers del sistema i biblioteques essencials per al funcionament del sistema operatiu.

### **Estructura de Directoris en Linux**

En Linux, l'estructura de directoris segueix l'estàndard **Filesystem Hierarchy Standard (FHS)** i tots els directoris parteixen de l'arrel representada per **/**. Alguns dels directoris principals són:

- **/** (Arrel): Directori arrel que conté tots els altres directoris del sistema.
- **/bin**: Conté fitxers executables essencials per al funcionament del sistema, com comandaments bàsics (`ls`, `cp`, etc.).
- **/boot**: Emmagatzema els fitxers necessaris per a l'arrencada del sistema, com el nucli.
- **/etc**: Conté fitxers de configuració del sistema i dels programes instal·lats.
- **/home**: Directori dels usuaris. Cada usuari té una subcarpeta on guarda els seus fitxers personals, com **/home/usuari**.
- **/usr**: Conté aplicacions i utilitats del sistema que no són fonamentals per a l'arrencada, incloent executables, biblioteques i fitxers de documentació.
- **/var**: Emmagatzema fitxers que canvien freqüentment, com registres del sistema (**/var/log**) i cues d'impressió.
- **/tmp**: Directori temporal on s'emmagatzemen fitxers que només són necessaris per un curt període de temps.
- **/root**: Carpeta de l'usuari superusuari (root). És similar a **/home**, però específicament per a l'usuari root.
- **/dev**: Conté els fitxers de dispositius, que permeten al sistema interactuar amb maquinari, com discos o perifèrics.

### **Comparació**

- En **Windows**, l'estructura de directoris està dividida per **unitats d'emmagatzematge** com **C:** o **D:**, mentre que en **Linux**, tots els directoris parteixen de l'**arrel (/)**, sense particions evidents per a l'usuari (encara que internament sí que existeixen).
- Windows té carpetes com **Program Files** per a aplicacions i **Users** per a perfils, mentre que en Linux, les aplicacions es troben en **/usr** i els fitxers de l'usuari en **/home**.
- En **Linux**, la configuració del sistema es concentra en **/etc**, mentre que en **Windows**, es dispersa entre el **Registre del Sistema (Registry)** i diferents fitxers en **C:\Windows** o **C:\Users**.

Aquesta comparació mostra com cada sistema operatiu organitza de manera diferent els seus fitxers i configuracions, reflectint les seues filosofies de disseny i administració del sistema.