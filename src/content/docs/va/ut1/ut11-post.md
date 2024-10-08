---
title: "POST"
description: "POST - Arrancada"
---

![Boot Sequence](https://miro.medium.com/v2/resize:fit:753/1*wjWc0sSBV1VWRr374WHm7g.jpeg)

## Arrancada d'un Ordinador: POST (Power-On Self Test)

El **POST** (Power-On Self Test) és la primera fase de l'arrancada d'un ordinador. Es tracta d'una sèrie de proves que el sistema realitza automàticament per a verificar que els components de maquinari essencials funcionen correctament abans de carregar el sistema operatiu. A continuació, es descriuen els passos principals del POST:

1. **Comprovació del Maquinari**:
   - Verifica la integritat de la memòria RAM.
   - Revisa la presència i el funcionament de la CPU.
   - Detecta dispositius d'emmagatzematge (discos durs, SSD, unitats òptiques).
   - Identifica i revisa la targeta gràfica i altres dispositius d'expansió.

2. **Notificació d'Errors**:
   - Si es detecta algun problema, el POST emet senyals acústiques (pitits) o mostra codis d'error en la pantalla. Cada combinació de pitits indica un error específic (p. ex.: memòria defectuosa, error en la CPU, etc.).

3. **Inicialització del Maquinari**:
   - Configura els dispositius bàsics perquè puguen interactuar correctament.
   - Revisa la taula de configuració del BIOS per a confirmar que tots els dispositius estan en els slots o ports correctes.

4. **Transferència de Control al Bootloader**:
   - Si tot el maquinari funciona correctament, el POST entrega el control al **bootloader** (programa encarregat de carregar el sistema operatiu).
   - El bootloader inicia el procés de càrrega del sistema operatiu des del disc dur o altre mitjà d'arrancada.

![POST](https://estudiotecnosoft.wordpress.com/wp-content/uploads/2018/09/1200px-post_p5kpl.jpg)

:::tip[Ampliació]
[WHY POST - EN](https://scot-comp.co.uk/understanding-computer-post-codes-guide/)
:::