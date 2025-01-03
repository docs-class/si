---  
title: "Particions"  
description: "Particions"  
---

:::note[Connexió amb el currículum]
RA: 3 - CE: d, g
:::

## Accions Comunes  
1. **Crear particions**: Dividir el disc en diferents seccions lògiques, cosa que permet organitzar l'emmagatzematge de dades i, en alguns casos, instal·lar diversos sistemes operatius.  
2. **Eliminar particions**: Alliberar l'espai ocupat per una partició per al seu ús futur. Això és útil si ja no es necessita una partició específica.  
3. **Redimensionar particions**: Augmentar o reduir la mida d'una partició sense perdre dades (depèn de les eines i precaucions). És comú quan es necessita més espai en una partició específica.  
4. **Formatar particions**: Aplicar un sistema de fitxers com NTFS, FAT32, EXT4, etc., per preparar la partició per emmagatzemar dades.  
5. **Convertir tipus de partició**: Canviar entre particions primàries, esteses o lògiques.  
6. **Muntar/Desmuntar particions**: Assignar una lletra d'unitat o punt de muntatge per accedir a la partició, o desmuntar-la per evitar l'accés.  
7. **Verificar la integritat**: Escanejar una partició per comprovar i corregir errors en el sistema de fitxers.  

## Eines en Windows  

1. **Administrador de Discos (Disk Management)**  
   - Eina nativa de Windows  
![Disk Management](https://learn.microsoft.com/es-es/windows-server/storage/disk-management/media/disk-management.png)  

2. **DiskPart**  
   - Eina de línia d'ordres de Discos.  
     ```cmd frame="none"  
     diskpart  
     list disk  
     select disk 0  
     create partition primary size=10240  
     ```  
3. **Windows PowerShell**  
   - També es poden realitzar algunes tasques relacionades amb particions usant ordres en **PowerShell**:  
   ```powershell frame="none"  
   Get-Partition  
   New-Partition -DiskNumber 1 -UseMaximumSize -AssignDriveLetter  
   ```  

4. **Eines de Tercers**  
   - **EaseUS Partition Master**, **MiniTool Partition Wizard** i **AOMEI Partition Assistant** són eines que ofereixen una interfície amigable i funcions avançades, com:  
     - **Redimensionar particions sense pèrdua de dades**.  
     - **Clonar particions** per fer còpies de seguretat de la informació.  
     - **Migrar el sistema operatiu** a un altre disc.  
![MiniTool Partition Wizard](https://img.utdstc.com/screen/7c5/17c/7c517ce8feff600036e33c8aaba9fd2f0d38bcdfb56aed1f6ed54617f0b0e7e8:600)  

## Eines en Linux  

1. **GParted**  
   - **GParted** és una eina gràfica (EXT4, FAT32, NTFS, etc.)  
![GParted](https://max.educa.madrid.org/manual/max11/fgp17.png)  
2. **fdisk**  
   - **fdisk** és una eina de línia d'ordres (MBR):  
     - Exemple d'ús:  
     ```sh frame="none"  
     sudo fdisk /dev/sda  
     ```  
     Després es poden utilitzar ordres com `n` per crear una nova partició o `d` per eliminar una partició.  

3. **parted**  
   - **parted** és una eina més avançada que **fdisk** i permet treballar tant amb **MBR** com amb **GPT**.  
   - Permet **redimensionar particions** sense pèrdua de dades, així com **crear, eliminar i formatar**.  
   - Exemple d'ús:  
     ```sh frame="none"  
     sudo parted /dev/sda  
     (parted) mklabel gpt  
     (parted) mkpart primary ext4 1MiB 20GiB  
     ```  

4. **cfdisk**  
   - **cfdisk** és una eina de línia d'ordres  
   - Permet **crear, eliminar, canviar el tipus** de partició i treballar d'una forma més visual que `fdisk`.  

5. **GNOME Disks (Discos)**  
   - Eina gràfica nativa en entorns d'escriptori GNOME.  
   - Permet **crear i eliminar particions**, **formatar** amb diferents sistemes de fitxers i **configurar opcions de muntatge**.  
![Gnome Disks](https://apps.gnome.org/assets/screenshots/org.gnome.DiskUtility/disks-main.png)  
6. **mkfs (Make File System)**  
   - **mkfs** s'utilitza per **formatar** una partició amb un sistema de fitxers específic.  
   - Exemple d'ús per crear un sistema de fitxers EXT4:  
   ```sh frame="none"  
   sudo mkfs.ext4 /dev/sda1  
   ```  

:::caution[Activitat]  
Particions  
:::