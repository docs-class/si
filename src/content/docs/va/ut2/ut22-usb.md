---
title: "Mitjans d'Instal·lació"
description: "Creació de Mitjans d'Instal·lació per a Sistemes Operatius"
---

En el procés d'instal·lació o recuperació de sistemes operatius se sol utilitzar USB per a allotjar les imatges ISO amb el sistema desitjat. Per a això, utilitzem diferents eines que ens possibiliten l'arrancada des d'aquests dispositius.

### **1. Rufus**

**Rufus** és una eina lleugera i gratuïta que permet crear unitats USB arrencables amb sistemes operatius de forma ràpida i senzilla. És compatible amb **Windows** i permet preparar mitjans per a sistemes Windows, Linux i altres. Rufus destaca per ser fàcil d'usar, oferir múltiples opcions de personalització del procés de creació, i ser capaç de formatar i configurar USBs amb el format necessari per arrencar des de BIOS o UEFI.

![Rufus Screenshot](https://www.muycomputer.com/wp-content/uploads/2024/01/Rufus_4.4_2.jpg)

### **2. Windows Media Creation Tool**
L'eina oficial de Microsoft, **Media Creation Tool**, s'utilitza per a crear un USB d'instal·lació amb **Windows 10 o 11**. Només funciona per a Windows i permet descarregar la ISO oficial i copiar-la en una unitat USB. L'eina és molt senzilla i està dissenyada per a oferir una forma directa de crear mitjans d'instal·lació, assegurant que l'usuari té una còpia oficial del sistema operatiu.

![Media Creation Tool](https://i.pcmag.com/imagery/articles/03QnHC6QB3gY2bDJffjcQfT-17..v1633982627.jpg)

### **3. Ventoy**
**Ventoy** és una eina innovadora que permet crear un USB arrencable on pots emmagatzemar múltiples **ISOs**. En lloc de copiar una única ISO cada vegada, Ventoy prepara la unitat perquè puga arrencar des de qualsevol ISO que copies en ella, oferint una gran flexibilitat per a qui necessita instal·lar diferents sistemes operatius o versions. És compatible amb **Windows, Linux i BSD**, i es destaca per la seua senzillesa i capacitat de crear un "multiboot".

![Ventoy Screenshot](https://i.ytimg.com/vi/2ArBuQMsk9U/maxresdefault.jpg)

### **4. Balena Etcher**
**Balena Etcher** és una eina popular i multiplataforma (disponible per a **Windows, macOS i Linux**) per a crear unitats USB arrencables o gravar sistemes operatius en targetes SD, especialment utilitzada en projectes com **Raspberry Pi**. La seua interfície senzilla i el seu procés de tres passos (seleccionar la imatge, seleccionar el mitjà i gravar) la fan accessible per a usuaris amb pocs coneixements tècnics, assegurant que es minimitzen els errors durant el procés de gravat.

![Balena Etcher Screenshot](https://img.utdstc.com/screen/482/355/482355a38061f7f7e2c94a1f556c847a550c4c647ecaedc5ceb3237d15b64f91:600)

## Comprovació d'imatges

Es pot realitzar una comprovació de la integritat d'un arxiu descarregat, assegurant que no haja sigut modificat o corromput durant la transferència.

Juntament amb els arxius ISO, sol haver-hi uns codis MD5, SHA1/256/512

#### Com verificar amb SHA1:

1. **Linux** o **macOS**:

   ```sh frame="none"
   sha1sum nom_de_l'arxiu.iso
   ```

2. **Windows** (PowerShell):

   ```powershell frame="none"
   Get-FileHash -Algorithm SHA1 nom_de_l'arxiu.iso
   ```

#### Com verificar amb MD5:

1. **Linux** o **macOS**:

   ```sh frame="none"
   md5sum nom_de_l'arxiu.iso
   ```

2. **Windows** (PowerShell):

   ```powershell frame="none"
   Get-FileHash -Algorithm MD5 nom_de_l'arxiu.iso
   ```

- Reemplaça `nom_de_l'arxiu.iso` amb el nom real de l'arxiu descarregat i compara el hash generat amb el proporcionat.

### **Comparativa entre SHA1, MD5 i SHA512**:

| **Algorisme** | **Longitud del Hash** | **Seguretat Actual**      | **Ús Recomanat**                  |
|---------------|-----------------------|---------------------------|-----------------------------------|
| **SHA1** Secure Hash Algorithm 1     | 160 bits (40 dígits) | Vulnerable (no recomanat) | Verificació d'arxius no crítics   |
| **MD5** Message Digest Algorithm 5      | 128 bits (32 dígits) | Vulnerable (no recomanat) | Proves d'integritat bàsiques      |
| **SHA512** Secure Hash Algorithm 512   | 512 bits              | Molt segur                | Instal·lació de sistemes operatius, arxius crítics |

:::tip[Ampliació]
- [Generar i comprovar codi hash](https://geekland.eu/como-generar-y-verificar-el-hash-de-archivos-en-linux/)
:::

:::caution[Activitat]
Creació de `USB Bootable`
:::