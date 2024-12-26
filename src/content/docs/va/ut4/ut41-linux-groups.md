---
title: "Propietari i grups"
description: "Grups i propietari"
---

## Canvi del propietari/grup de fitxers i directoris
### Propietari
```bash frame="none"
chown [OPTIONS] [OWNER] fitxer
```
Canviar el propietari d'un fitxer a `root`:
```bash frame="none" ins="root"
sysadmin@localhost:/Documents$ sudo chown root hello.sh
sysadmin@localhost:/Documents$ ls -l hello.sh
-rw-rw-r-- 1 root sysadmin 112 Aug  1 02:35 hello.sh
```

### Grup
  ```bash frame="none"
  chgrp grup o GID fitx1 [fitx2 fitx3 …..]
  ```
- No es modificaran els permisos per als fitxers ni la seva ubicació.
- El paràmetre `-R` canvia la propietat de forma recursiva.

### Propietari i Grup
- Podem canviar usuari i grup amb la mateixa ordre:
```bash frame="none"
chown usuari:grup fitx1 [fitx2 fitx3 …]
```

:::caution[activitat]
Gestió de permisos de fitxers i carpetes
:::