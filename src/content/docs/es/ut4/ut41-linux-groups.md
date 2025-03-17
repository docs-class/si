---
title: "Propietario y grupos"
description: "Grupos y propietario"
---
## Cambio de la propietario/grupo de archivos y directorios
### Propietario
```bash frame="none"
chown [OPTIONS] [OWNER] archivo / dir
```
Cambiar el propietario de un archivo a `root`:
```bash frame="none" ins="root"
sysadmin@localhost:/Documents$ sudo chown root hello.sh
sysadmin@localhost:/Documents$ ls -l hello.sh
-rw-rw-r-- 1 root sysadmin 112 Aug  1 02:35 hello.sh
```

### Grupo
  ```bash frame="none"
  chgrp (grupo o GID) fich1 [fich2 fich3 …..]
  ```
- No se modificarán los permisos para los ficheros ni su ubicación.
- El parámetro `-R` cambia la propiedad de forma recursiva.

### Propietario y Grupo
- Podemos cambiar usuario y grupo con la misma orden:
```bash frame="none"
chown usuario:grupo fich1 [fich2 fich3 …]
```

:::caution[actividad]
Gestión de permisos de archivos y carpetas
:::