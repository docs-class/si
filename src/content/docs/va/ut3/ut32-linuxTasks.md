---
title: "Automatització Linux"
description: "Automatització Linux"
---

1. **Crea un script** que obri la carpeta i fes-lo executable:
   - Pots usar el botó dret sobre l'escriptori i executar "obrir en un terminal" 
      ```bash title="Terminal"
      mkdir ~/Desktop/TASQUES_DEL_DIA
      nano ~/Desktop/TASQUES_DEL_DIA/obrir_tasques.sh
      ```
   - i escriu el següent script:
     ```bash title="LXQt"
      #!/bin/bash
      pcmanfm-qt ~/Desktop/TASQUES_DEL_DIA
      #pcmanfm-qt és el comandament per obrir l'explorador de fitxers predeterminat de lubuntu. Aquest pot variar segons distribució.
     ```
   - Guarda el fitxer i fes-lo executable:
     ```bash
     1. Per sortir en nano: ctrl+x
     2. Per confirmar en nano: `s o S`
     3. Per fer executable: chmod +x ~/Desktop/TASQUES_DEL_DIA/obrir_tasques.sh
     ```

2. **Afegeix l'script a les aplicacions d'inici**:
   - Al menú d'aplicacions del teu sistema, busca "Aplicacions a l'inici" o "Aplicacions d'inici".
  ![linux boot apps](../../../../assets/ut3/linuxTask1.png)
   - Fes clic a **Afegir**.
  ![linux boot apps 2](../../../../assets/ut3/linuxTask2.png) 
   - A **Nom**, escriu "Obrir Tasques del Dia".
   - A **Comandament**, selecciona l'script (`/ruta/on/has/guardat/obrir_tasques.sh`).
   - Fes clic a **Afegir** o **Guardar**.