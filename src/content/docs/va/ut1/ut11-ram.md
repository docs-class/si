---
title: "Memòria RAM"
description: "Memòria RAM"
---

La **memòria RAM** (Random Access Memory) és una memòria d'accés ràpid i volàtil que emmagatzema temporalment dades i instruccions que el processador necessita mentre s'executen programes o aplicacions.

## Característiques clau
1. **Volàtil**: Perd el seu contingut en apagar l'ordinador.
2. **Accés ràpid**: És molt més ràpida que les unitats d'emmagatzematge com discos durs o SSD.
3. **Funció principal**: Emmagatzema dades i instruccions temporalment perquè el processador puga accedir a elles ràpidament, millorant el rendiment del sistema.

## **Tipus de RAM**

### **DRAM (Dynamic RAM)**
   - **Descripció**: La memòria RAM dinàmica emmagatzema les dades en condensadors, que han de ser constantment refrescats per a mantindre la informació.
   - **Ús**: És el tipus de RAM més comú en ordinadors i dispositius mòbils.
   - **Tipus derivats**:
     - **SDRAM (Synchronous DRAM)**: Sincronitzada amb el rellotge del sistema, la qual cosa millora la seua eficiència.
     - **DDR (Double Data Rate SDRAM)**: Evolució de la SDRAM que transfereix dades en ambdós flancs del cicle de rellotge, duplicant la taxa de transferència.

#### 1.1. DDR (Double Data Rate)
   - **DDR**: Primera versió de la memòria DDR, duplicava la velocitat de la SDRAM.
   - **DDR2**: Major velocitat de transferència i menor consum energètic que DDR.
   - **DDR3**: Augmenta la velocitat i redueix encara més el consum d'energia en comparació amb DDR2.
   - **DDR4**: Major rendiment, capacitat i menor consum energètic, comú en PCs moderns.
   - **DDR5**: La versió més recent, amb major ample de banda, capacitat, i eficiència energètica.

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

:::tip[Vídeos]
- [Dual Channel](https://www.youtube.com/watch?v=BIZccTdh7jg)
- [Com influeix la latència i la freqüència en la memòria RAM?](https://www.youtube.com/watch?v=cKdAqnQL7mY)
:::
