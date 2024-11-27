---
title: "Gestión de usuarios - Linux"
description: "Gestión de usuarios- Linux"
---

## Permisos d'usuaris per a arxius i directoris en Linux

### Com veure els permisos
Utilitza el comandament `ls -l` per llistar els fitxers i veure els permisos:

```bash frame="none" ins="-rw-rw-r-- 1 sysadmin sysadmin 24 Aug 1 02:35 hello.sh"
sysadmin@localhost:~$ ls -l
-rw-rw-r-- 1 sysadmin sysadmin 24 Aug 1 02:35 hello.sh
```

### Canviar permisos de fitxers i directoris
Per modificar els permisos, utilitza el comandament `chmod`:

```bash frame="none"
chmod [SET][ACTION][PERMISSIONS] fitxer
```

- **SET**: Selecciona l'objectiu del canvi:
  - `u`: Usuari propietari.
  - `g`: Grup propietari.
  - `o`: Altres usuaris.
  - `a`: Tots els usuaris.

- **ACTION**:
  - `+`: Afegeix permisos.
  - `=`: Estableix permisos.
  - `-`: Elimina permisos.

- **PERMISSIONS**:
  - `r`: Llegir.
  - `w`: Escriure.
  - `x`: Executar.

#### Exemple:
Afegir permisos d'execució a l'usuari per a un fitxer:
```bash frame="none"
sysadmin@localhost:/Documents$ chmod u+x hello.sh
```

### Canviar la propietat d'arxius i directoris
Utilitza el comandament `chown` per canviar el propietari d'un fitxer o directori:

```bash frame="none"
chown [OPTIONS] [OWNER] fitxer
```

#### Exemple:
Canviar el propietari d'un fitxer a `root`:
```bash frame="none" ins="root"
sysadmin@localhost:/Documents$ sudo chown root hello.sh
sysadmin@localhost:/Documents$ ls -l hello.sh
-rw-rw-r-- 1 root sysadmin 112 Aug  1 02:35 hello.sh
```


:::caution[actividad]
Gestión de permisos de archivos y carpetas
:::