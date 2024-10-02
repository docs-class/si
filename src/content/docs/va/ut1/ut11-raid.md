---
title: "RAID"
description: "Redundant Array of Inexpensive Disks (RAID)"
---

**RAID** (Redundant Array of Independent Disks) és una tecnologia que permet combinar diversos discos durs en una única unitat lògica per a millorar la **tolerància a fallades**, el **rendiment**, o ambdues. RAID pot configurar-se a través de maquinari dedicat o mitjançant programari, i s'utilitza comunament en servidors, estacions de treball i sistemes d'emmagatzematge massiu.

### **Principals nivells de RAID i exemples típics:**

---

### **1. RAID 0 (Striping)**

RAID 0 distribueix les dades equitativament entre dos o més discos sense redundància. Ofereix **millors velocitats de lectura i escriptura**, però si un dels discos falla, es perden totes les dades, ja que no hi ha tolerància a fallades.

- **Avantatge**: Velocitat d'accés incrementada.
- **Desavantatge**: No hi ha redundància; si falla un disc, es perden les dades.
- **Ús típic**: Gaming, edició de vídeo, quan la velocitat és prioritària i la pèrdua de dades no és crítica.

![RAID 0](https://www.prepressure.com/images/raid-level-0-striping.svg)

---

### **2. RAID 1 (Mirroring)**

RAID 1 duplica les dades en dos o més discos. Si un dels discos falla, les dades poden recuperar-se dels discos restants. Aquest nivell de RAID ofereix una **alta disponibilitat** de les dades, però l'espai d'emmagatzematge és la meitat del total, ja que tot es duplica.

- **Avantatge**: Alta tolerància a fallades; si un disc falla, les dades encara estan segures.
- **Desavantatge**: No millora el rendiment; només duplica les dades.
- **Ús típic**: Servidors on la seguretat de les dades és essencial (per exemple, bases de dades).

![RAID 1](https://www.prepressure.com/images/raid-level-1-mirroring.svg)

---

### **3. RAID 5 (Striping amb Paritat)**

RAID 5 utilitza **striping** juntament amb **paritat**, distribuint les dades i la informació de paritat entre tres o més discos. Si un disc falla, les dades es poden reconstruir utilitzant la informació de paritat emmagatzemada en els discos restants. RAID 5 proporciona un equilibri entre **rendiment, capacitat i redundància**.

- **Avantatge**: Tolerància a fallades; millor rendiment de lectura i escriptura.
- **Desavantatge**: Es perd l'equivalent a l'espai d'un disc per a emmagatzemar la paritat.
- **Ús típic**: Servidors d'arxius i sistemes NAS on es requereixen tant velocitat com redundància.

![RAID 5](https://www.prepressure.com/images/raid-level-5-striping-with-parity.svg)

---

### **4. RAID 6 (Striping amb Doble Paritat)**

RAID 6 és similar a RAID 5, però emmagatzema **dos blocs de paritat** en lloc d'un, la qual cosa permet la **fallada de fins a dos discos** sense pèrdua de dades. Això millora la seguretat, però a costa d'un poc de rendiment addicional.

- **Avantatge**: Major tolerància a fallades que RAID 5; pot suportar la pèrdua de dos discos.
- **Desavantatge**: Menor rendiment en escriptura i major sobrecàrrega d'emmagatzematge.
- **Ús típic**: Sistemes empresarials crítics on la redundància és crucial.

![RAID 6](https://www.prepressure.com/images/raid-level-6-striping-with-dual-parity.svg)

---

### **5. RAID 10 (1+0, Mirroring + Striping)**

RAID 10 combina les característiques de RAID 1 i RAID 0. Primer, les dades es dupliquen (RAID 1) i després es divideixen (RAID 0). Aquest nivell proporciona un **equilibri òptim entre redundància i rendiment**, però requereix almenys quatre discos i es perd el 50% de l'espai d'emmagatzematge total a causa de la duplicació.

- **Avantatge**: Alta velocitat i redundància; pot suportar múltiples fallades de discos.
- **Desavantatge**: Alt cost a causa de la duplicació de dades.
- **Ús típic**: Bases de dades transaccionals, aplicacions que requereixen alt rendiment i disponibilitat.

![RAID 10](https://www.prepressure.com/images/raid-level-1-and-0-striping-mirroring.svg)

### **Càlcul de paridad en RAID 5**

Suposem que tenim tres discs en un RAID 5 (Disc A, Disc B i Disc C). Les dades es distribueixen de la següent manera:

- **Bloc de dades en Disc A:** 1010  
- **Bloc de dades en Disc B:** 1100  
- **Paritat emmagatzemada en Disc C:** 0110 (resultat de 1010 XOR 1100)

Si el **Disc A** falla, es pot calcular el contingut perdut aplicant XOR als blocs del Disc B i la paritat en el Disc C:

- **Recuperació de Disc A:** 1100 XOR 0110 = 1010 (dades originals del Disc A)

![XOR Gate](https://www.analog.com/en/_/media/analog/en/design-center/glossary/xor-gate-symbol.jpg?rev=b3d6c2e239cd4f6eba77eacf0b65be9c)