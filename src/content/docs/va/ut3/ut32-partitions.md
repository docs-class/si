---
title: "Particions"
description: "Particions"
---

:::note[Connexió amb el currículum]
RA: 3 - CE: d, g
:::

## Particionament de discos

El **particionament de discos** és el procés de dividir un dispositiu d'emmagatzematge físic, com un disc dur o SSD, en múltiples seccions lògiques o particions. Cada partició es comporta com una unitat independent amb el seu propi sistema de fitxers, la qual cosa permet una millor organització i gestió de les dades.

### Usos comuns del particionament de discos:
- **Instal·lació de sistemes operatius:** Permet instal·lar múltiples sistemes operatius en un únic disc físic, dedicant una partició a cadascun.
- **Còpia de seguretat i recuperació:** Facilita la creació de particions per a còpies de seguretat, simplificant la restauració en cas de fallades del sistema.
- **Seguretat i xifratge:** Millora la seguretat en aïllar dades sensibles en particions separades i permet aplicar xifratge en particions específiques.

## Eines en Windows

### Escriptori
#### Administrador de Discos (Disk Management)
   - Eina nativa de Windows.
![Disk Management](https://learn.microsoft.com/es-es/windows-server/storage/disk-management/media/disk-management.png)

#### Eines de Tercers
   - **EaseUS Partition Master**, **MiniTool Partition Wizard** i **AOMEI Partition Assistant**.
![MiniTool Partition Wizard](https://img.utdstc.com/screen/7c5/17c/7c517ce8feff600036e33c8aaba9fd2f0d38bcdfb56aed1f6ed54617f0b0e7e8:600)

### Terminal
#### DiskPart
   - Eina de línia de comandes per a discos.
     ```cmd frame="none"
     diskpart
     list disk
     select disk 0
     create partition primary size=10240
     ```
#### Windows PowerShell
   - També es poden realitzar algunes tasques relacionades amb particions utilitzant comandes en **PowerShell**:
   ```powershell frame="none"
   Get-Partition
   New-Partition -DiskNumber 1 -UseMaximumSize -AssignDriveLetter
   ```

## Eines en Linux

### Escriptori
#### GParted
   - **GParted** és una eina gràfica (EXT4, FAT32, NTFS, etc.).
![GParted](https://max.educa.madrid.org/manual/max11/fgp17.png)

### Terminal
#### parted
   - **parted** és una eina més avançada que **fdisk** i permet treballar tant amb **MBR** com amb **GPT**.
   - Permet **redimensionar particions** sense pèrdua de dades, així com **crear, eliminar i formatar**.
   - Exemple d'ús:
     ```sh frame="none"
     sudo parted /dev/sda
     (parted) mklabel gpt
     (parted) mkpart primary ext4 1MiB 20GiB
     ```

:::caution[Activitat]
Particions
:::