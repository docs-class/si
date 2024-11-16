---

title: "Medios de Instalación"
description: "Creación de Medios de Instalación para Sistemas Operativos"

---

En el proceso de instalación o recuperación de sistemas operativos se suele utilizar USB para alojar las imágenes ISO con el sistema deseado, para ello, usamos diferentes herramientas que nos posibilitan el arranque desde estos dispositivos. También se pueden usar para la prueba de GNU/Linux, ya que facilitan una versión de prueba, LIVE, que queda residida en la memoria principal.

### **1. Rufus**

**Rufus** es una herramienta ligera y gratuita que permite crear unidades USB arrancables con sistemas operativos de forma rápida y sencilla. Es compatible con **Windows** y permite preparar medios para sistemas Windows, Linux y otros. Rufus destaca por ser fácil de usar, ofrecer múltiples opciones de personalización del proceso de creación, y ser capaz de formatear y configurar USBs con el formato necesario para arrancar desde BIOS o UEFI.

![Rufus Screenshot](https://www.muycomputer.com/wp-content/uploads/2024/01/Rufus_4.4_2.jpg)

### **2. Windows Media Creation Tool**
La herramienta oficial de Microsoft, **Media Creation Tool**, se utiliza para crear un USB de instalación con **Windows 10 o 11**. Solo funciona para Windows y permite descargar la ISO oficial y copiarla en una unidad USB. La herramienta es muy simple y está diseñada para ofrecer una forma directa de crear medios de instalación, asegurando que el usuario tiene una copia oficial del sistema operativo.

![Media Creation Tool](https://i.pcmag.com/imagery/articles/03QnHC6QB3gY2bDJffjcQfT-17..v1633982627.jpg)

### **3. Ventoy**
**Ventoy** es una herramienta innovadora que permite crear un USB arrancable donde puedes almacenar múltiples **ISOs**. En lugar de tener que copiar una única ISO cada vez, Ventoy prepara la unidad para que pueda arrancar desde cualquier ISO que copies en ella, ofreciendo una gran flexibilidad para quienes necesitan instalar distintos sistemas operativos o versiones. Es compatible con **Windows, Linux y BSD**, y se destaca por su simplicidad y capacidad de crear un "multiboot".

![Ventoy Screenshot](https://i.ytimg.com/vi/2ArBuQMsk9U/maxresdefault.jpg)

### **4. Balena Etcher**
**Balena Etcher** es una herramienta popular y multiplataforma (disponible para **Windows, macOS y Linux**) para crear unidades USB arrancables o grabar sistemas operativos en tarjetas SD, especialmente utilizada en proyectos como **Raspberry Pi**. Su interfaz sencilla y su proceso de tres pasos (seleccionar la imagen, seleccionar el medio y grabar) la hacen accesible para usuarios con pocos conocimientos técnicos, asegurando que se minimicen los errores durante el proceso de grabado.

![Balena Etcher Screenshot](https://img.utdstc.com/screen/482/355/482355a38061f7f7e2c94a1f556c847a550c4c647ecaedc5ceb3237d15b64f91:600)


## Comprobación de imágenes

Se puede realizar una comprobación de la integridad de un archivo descargado, asegurando que no haya sido modificado o corrompido durante la transferencia.

Junto a los archivos ISO, suele haber unos códicos MD5, SHA1/256/512

#### Cómo verificar con SHA1:

1. **Linux** o **macOS**:

   ```sh frame="none"
   sha1sum nombre_del_archivo.iso
   ```

2. **Windows** (PowerShell):

   ```powershell frame="none"
   Get-FileHash -Algorithm SHA1 nombre_del_archivo.iso
   ```

#### Cómo verificar con MD5:

1. **Linux** o **macOS**:

   ```sh frame="none"
   md5sum nombre_del_archivo.iso
   ```

2. **Windows** (PowerShell):

   ```powershell frame="none"
   Get-FileHash -Algorithm MD5 nombre_del_archivo.iso
   ```

- Reemplaza `nombre_del_archivo.iso` con el nombre real del archivo descargado y compara el hash generado con el proporcionado.

### **Comparativa entre SHA1, MD5 y SHA512**:

| **Algoritmo** | **Longitud del Hash** | **Seguridad Actual**      | **Uso Recomendado**                  |
|---------------|-----------------------|---------------------------|--------------------------------------|
| **SHA1** Secure Hash Algorithm 1     | 160 bits (40 dígitos) | Vulnerable (no recomendado) | Verificación de archivos no críticos |
| **MD5** Message Digest Algorithm 5      | 128 bits (32 dígitos) | Vulnerable (no recomendado) | Pruebas de integridad básicas        |
| **SHA512** Secure Hash Algorithm 512   | 512 bits              | Muy seguro                | Instalación de sistemas operativos, archivos críticos |

:::tip[Ampliación]
- [Generar y comprobar codigo hash](https://geekland.eu/como-generar-y-verificar-el-hash-de-archivos-en-linux/)
:::

:::caution[Actividad]
Creación de `USB Bootable`
:::
