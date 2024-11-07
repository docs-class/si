---
title: "Còpies de seguretat i automatització"
description: "Còpies de seguretat i automatització"
---

:::note[Connexió amb el currículum]
RA: 3 - CE: e, f, g
:::

## 1. Introducció a les Còpies de Seguretat
  Una còpia de seguretat és una còpia de les dades importants d'un sistema informàtic que es realitza amb l'objectiu de:
    
  - **Recuperació de dades** (en cas de pèrdua o dany)
  - **Continuïtat del negoci**
  - **Protecció contra ransomware**
    - El ransomware xifra les dades i exigeix un rescat per a la seua recuperació
  - **Compliment legal**
    - En alguns sectors, les empreses estan obligades per llei a realitzar còpies de seguretat de certes dades

### Tipus de còpies de seguretat
- **Completa**: Es copia tota la informació.
- **Incremental**: Només es copien les dades modificades des de l'última còpia.
- **Diferencial**: Es copien els canvis realitzats des de l'última còpia completa.

### Mètodes d'emmagatzematge
- Emmagatzematge local (discos durs externs, NAS).
- Emmagatzematge al núvol (Google Drive, Dropbox, Amazon S3).

## Realització de Còpies de Seguretat
   - **Eines per a realitzar còpies de seguretat**:
     - **Windows Backup / historial d'arxius**: Eina nativa en sistemes Windows.
     - **Time Machine** (MacOS): Sistema de còpia de seguretat automàtic.
     - **Duplicati** i **Veeam Backup**: Programari de còpies de seguretat per a Windows, Linux i MacOS.
     - **rsync**: Comanda per a fer còpies de seguretat en Linux.
![Timeshift App](https://www.redeszone.net/app/uploads-redeszone.net/2017/10/TimeShift-Linux.png)
---

## 2. Planificació i Automatització de Tasques
   - La planificació de tasques és un procés que serveix per a organitzar i gestionar el temps de manera eficient. Consisteix a identificar i programar les tasques que s'han de realitzar

### Programació de tasques en el sistema operatiu

- **Windows**: El "**[Programador de tasques](../ut32-wintasks)**" permet automatitzar tasques com l'execució de programes, l'enviament de correus electrònics o la realització de còpies de seguretat.
- **Linux**: **Cron** és una eina que permet programar l'execució de comandes o scripts en moments específics. Per a inici de sessió existeix l'automatització del propi sistema amb [aplicacions d'inici](../ut32-linuxtasks)

:::tip
[crontab guru](https://crontab.guru)
:::

### Scripts

- **Bash** (Linux): Permet automatitzar tasques en sistemes Linux, com la gestió d'arxius, la configuració del sistema o l'execució de programes.

- **PowerShell** (Windows): Similar a Bash, però per a Windows. Permet automatitzar tasques administratives i de gestió del sistema.

:::caution[Activitat]
Còpies de seguretat i automatització
:::