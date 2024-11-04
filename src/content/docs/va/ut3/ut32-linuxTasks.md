---
title: "Automatització Linux"
description: "Automatització Linux"
---

1. **Crea un script** que òbriga la carpeta i fes-lo executable:
   - Obri un editor de text (com **Gedit**, **nano**, etc.) i escriu el següent script:
     ```bash title="LXQt"
     #!/bin/bash
     pcmanfm-qt ~/Desktop/TASQUES_DEL_DIA
     ```
   - Guarda l'arxiu amb el nom `obrir_tasques.sh` en una ubicació de la teua preferència i fes-lo executable:
     ```bash
     chmod +x /ruta/on/has/guardat/obrir_tasques.sh
     ```

2. **Afig l'script a les aplicacions d'inici**:
   - En el menú d'aplicacions del teu sistema, busca "Aplicacions a l'inici" o "Aplicacions d'inici".
  ![linux boot apps](../../../../assets/ut3/linuxTask1.png)
   - Fes clic en **Afig**.
  ![linux boot apps 2](../../../../assets/ut3/linuxTask2.png)
   - En **Nom**, escriu "Obrir Tasques del Dia".
   - En **Comanda**, selecciona l'script (`/ruta/on/has/guardat/obrir_tasques.sh`).
   - Fes clic en **Afig** o **Guardar**.

