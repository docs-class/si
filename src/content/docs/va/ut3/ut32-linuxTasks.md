---
title: "Automatització Linux"  
description: "Automatització Linux"  
---

1. Crea una carpeta **TASQUES_DEL_DIA**  
2. **Crea un script** que òbriga la carpeta i fes-lo executable:
   - Obri un editor de text (com **Gedit**, **nano**, etc.)
   - Pots fer clic dret sobre l'escriptori i executar "obre en un terminal"  
      ```bash title="Terminal"  
      nano ~/Escriptori/TASQUES_DEL_DIA  
      ```
   - i escriu el següent script:
      ```bash title="LXQt"  
      #!/bin/bash  
      pcmanfm-qt ~/Escriptori/TASQUES_DEL_DIA  
      ```
   - Guarda el fitxer amb el nom `obrir_tasques.sh` en una ubicació de la teua preferència i fes-lo executable:  
      ```bash  
      1. Per eixir en nano: ctrl+x  
      2. Per confirmar en nano: `s o S`  
      3. Per fer executable: chmod +x /ruta/on/has/guardat/obrir_tasques.sh  
      ```

3. **Afig l’script a les aplicacions d'inici**:
   - En el menú d'aplicacions del teu sistema, cerca "Aplicacions a l'inici" o "Aplicacions d'inici".  
   ![linux boot apps](../../../../assets/ut3/linuxTask1.png)  
   - Fes clic en **Afig**.  
   ![linux boot apps 2](../../../../assets/ut3/linuxTask2.png)  
   - En **Nom**, escriu "Obrir Tasques del Dia".  
   - En **Comandament**, selecciona l’script (`/ruta/on/has/guardat/obrir_tasques.sh`).  
   - Fes clic en **Afig** o **Guarda**.