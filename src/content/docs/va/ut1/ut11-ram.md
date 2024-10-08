---
title: "Memòria RAM"
description: "Memòria RAM"
---

La **memòria RAM** (Random Access Memory) és una memòria d'accés ràpid i volàtil que emmagatzema temporalment dades i instruccions que el processador necessita mentre s'executen programes o aplicacions.

## Característiques clau
1. **Volàtil**: Perd el seu contingut en apagar l'ordinador.
2. **Accés ràpid**: És molt més ràpida que les unitats d'emmagatzematge com discos durs o SSD.
3. **Funció principal**: Emmagatzema dades i instruccions temporalment perquè el processador puga accedir a elles ràpidament, millorant el rendiment del sistema.

## Factor forma

El factor de forma de la RAM DDR es refereix a la seua grandària física i disposició de pins, sent comunament **DIMM** per a ordinadors de sobretaula i **SO-DIMM** per a portàtils i dispositius compactes.

![Factor Form](https://hardzone.es/app/uploads-hardzone.es/2022/11/formato-memoria-ram-dimm-sodimm.jpg)

## **Tipus de RAM**

### **DRAM (Dynamic RAM)**
   - **Descripció**: La memòria RAM dinàmica emmagatzema les dades en condensadors, que han de ser constantment refrescats per a mantindre la informació.
   - **Ús**: És el tipus de RAM més comú en ordinadors i dispositius mòbils.
   - **Tipus derivats**:
     - **SDRAM (Synchronous DRAM)**: Sincronitzada amb el rellotge del sistema, la qual cosa millora la seua eficiència.
     - **DDR (Double Data Rate SDRAM)**: Evolució de la SDRAM que transfereix dades en ambdós flancs del cicle de rellotge, duplicant la taxa de transferència.

#### 1.1. DDR (Double Data Rate)

| Tipo de RAM  | Año de Lanzamiento | Velocidad de Reloj | Transferencia de Datos (MT/s) | Velocidad de Transferencia | Voltaje  | Pines |
|--------------|-----------------|---------------------------|------------------------------|---------------------------|----------|------|
| **DDR**      | 2000            | 100 - 200                 | 200 - 400                    | 1,6 - 3,2 GB/s            | 2,5V     | 184  |
| **DDR2**     | 2003            | 266 - 533                 | 533 - 1066                   | 4,2 - 8,5 GB/s            | 1,8V     | 240  |
| **DDR3**     | 2007            | 533 - 1066                | 1066 - 2133                  | 8,5 - 17 GB/s             | 1,5V     | 240  |
| **DDR4**     | 2014            | 1066 - 1600               | 2133 - 3200                  | 17 - 25,6 GB/s            | 1,2V     | 288  |
| **DDR5**     | 2020            | 2400 - 4200               | 4800 - 8400                  | 38,4 - 67,2 GB/s          | 

![DDR Family](https://hardzone.es/app/uploads-hardzone.es/2019/12/ddr3-ddr4-ddr5-esquema.jpg)

#### 1.2. LPDDR (Low Power DDR)
   - **Descripció**: És una variant de la memòria DDR dissenyada per a dispositius mòbils i portàtils.
   - **Avantatge**: Optimitzada per a consumir menys energia, la qual cosa és ideal per a millorar la durada de la bateria en dispositius mòbils.
   - **Versions**: Similar a DDR, existeixen LPDDR2, LPDDR3, LPDDR4 i la més recent **LPDDR5**, cadascuna millorant en velocitat i eficiència energètica.

#### 1.3. GDDR (Graphics DDR)
   - **Descripció**: És una versió especialitzada de DDR dissenyada específicament per a **targetes gràfiques**.
   - **Ús**: Utilitzada en GPUs (targetes gràfiques) a causa dels seus alts requisits d'ample de banda.
   - **Versions**: Similar a DDR, s'actualitza amb versions com **GDDR5**, **GDDR6**, oferint major rendiment gràfic.

### **SRAM (Static RAM)**
   - **Descripció**: No necessita ser refrescada constantment com la DRAM, per la qual cosa és més ràpida, però també més cara i consumeix més espai.
   - **Ús**: S'utilitza principalment en la CMOS del BIOS i en les memòries cau (caché) de CPU i GPU.

## Canals

Els canals de memòria RAM són les "autopistes" que connecten el processador amb la memòria, permetent l'intercanvi de dades. Més canals signifiquen més ample de banda i, per tant, un rendiment més ràpid, especialment en tasques intensives com jocs o edició de vídeo.

- Single Channel: Un mòdul de RAM actiu, menor rendiment.
- Dual Channel: Dos mòduls treballant en paral·lel, duplicant l'ample de banda.
- Quad Channel: Quatre mòduls, maximitza l'ample de banda, usat en servidors.

Més canals milloren el rendiment, especialment en tasques que requereixen molt accés a la memòria.

## Freqüències

Les **freqüències de la RAM** es refereixen a la velocitat a la qual la memòria pot llegir i escriure dades. Es mesuren en **MHz** (megahercios), i afecten directament el rendiment del sistema.

#### Característiques
1. **Freqüència base**: Indica quants cicles per segon pot manejar la RAM. Per exemple, una RAM de **3200 MHz** pot realitzar 3,2 mil milions de cicles per segon.
2. **Rendiment**: Com més alta siga la freqüència, més ràpid pot transferir dades la RAM, cosa que millora el rendiment en tasques intensives, com jocs, edició de vídeo i multitarea.
3. **Latència**: A major freqüència, pot augmentar la latència (el temps que triga a accedir a les dades), però en general, freqüències més altes compensen amb major ample de banda.
4. **Compatibilitat**: La velocitat màxima de la RAM està limitada per la **placa base** i el **processador**. És important que aquests components suporten la freqüència de la RAM instal·lada.
5. **Overclocking**: Algunes RAM permeten augmentar les seues freqüències per damunt de les especificades, millorant el rendiment (encara que pot requerir ajustos en la BIOS/UEFI).

#### **Exemple de Càlcul de transferencia**
Suposem una RAM DDR4 amb les següents característiques:

- **Freqüència de Rellotge**: 3200 MHz  
- **Nombre de Bits**: 64 bits (bus de dades de la RAM)  
- **Quantitat de Canals**: 2 (Dual Channel)  


<div style="text-align: center; font-weight: bold;">
Tasa de Transferència (MB/s) = 3200 MHz × 64 bits × 2 canals / 8 = 51,200 MB/s = 51,2 GB/s
</div>

Això significa que la taxa de transferència d’aquesta RAM és de **51,2 GB/s**.


## Ampliació

### Característiques Principals de CUDIMM

1. **Integritat de Senyal Millorada**: Afegeix un controlador de rellotge (CKD) per regenerar la senyal de rellotge i garantir estabilitat.
2. **Compatibilitat**: Compatible amb plataformes DDR5 actuals.
3. **Velocitats de Transferència**: Permet aconseguir velocitats superiors a DDR5-6400, arribant fins a 9.200 MT/s.
4. **Aplicació**: Ideal per a equips d’escriptori d’alt rendiment.
5. **Primers Mòduls**: Fabricats per V-Color, amb kits de fins a 48 GB i velocitats des de 6.400 MT/s a 9.200 MT/s.

### Característiques Principals de CAMM2 i LPCAMM2

1. **CAMM2**:
   - Dissenyat per a sistemes d’escriptori i servidors.
   - Ocupa fins a un 60% menys d’espai que l’estàndard anterior.
   - Suporta configuració Dual Channel en un únic mòdul.
   - Reducció del consum d'energia fins a un 40% i millora de latències.

2. **LPCAMM2**:
   - Orientat a portàtils, amb un disseny compacte.
   - Capacitats de 64 GB, 96 GB i 128 GB segons densitat de la DRAM.
   - Compatible amb els requisits d'eficiència energètica de la Unió Europea.

   Per a més detalls, visita [este enllaç](https://hardzone.es/tutoriales/componentes/memoria-ram-camm2-lpcamm2/).

:::tip[Vídeos]
- [Dual Channel](https://www.youtube.com/watch?v=BIZccTdh7jg)
- [Com influeix la latència i la freqüència en la memòria RAM?](https://www.youtube.com/watch?v=cKdAqnQL7mY)
:::
