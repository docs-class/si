---
title: "Automatización Linux"
description: "Automatización Linux"
---

1. Crea una carpeta **TAREAS_DEL_DIA**
2. **Crea un script** que abra la carpeta y hazlo ejecutable:
   - Puedes usar botón derecho sobre el escritorio y ejecutar "abrir en un terminal" 
       ```bash title="Terminal"
     nano ~/Desktop/TAREAS_DEL_DÍA
     ```
   - y escribe el siguiente script:
     ```bash title="LXQt"
     #!/bin/bash
     pcmanfm-qt ~/Desktop/TAREAS_DEL_DÍA
     ```
   - Guarda el archivo con el nombre `abrir_tareas.sh` en una ubicación de tu preferencia y hazlo ejecutable:
     ```bash
     1. Para salir en nano: ctrl+x
     2. Para confirmar en nano:`s o S`
     3. Para hacer ejecutable: chmod +x /ruta/donde/guardaste/abrir_tareas.sh
     ```

1. **Agrega el script a las aplicaciones de inicio**:
   - En el menú de aplicaciones de tu sistema, busca "Aplicaciones al inicio" o "Aplicaciones de inicio".
  ![linux boot apps](../../../../assets/ut3/linuxTask1.png)
   - Haz clic en **Añadir**.
  ![linux boot apps 2](../../../../assets/ut3/linuxTask2.png) 
   - En **Nombre**, escribe "Abrir Tareas del Día".
   - En **Comando**, selecciona el script (`/ruta/donde/guardaste/abrir_tareas.sh`).
   - Haz clic en **Añadir** o **Guardar**.
