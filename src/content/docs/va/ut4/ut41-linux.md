---
title: "Gestió d'usuaris - Linux"
description: "Gestió d'usuaris- Linux"
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

:::caution[activitat]
Gestió de permisos d'arxius i carpetes
:::

### Umask

El comandament **umask** en Linux s'utilitza per establir els permisos predeterminats per als arxius i directoris acabats de crear. Ací tens un resum:

- **Permisos Predeterminats**: Per defecte, els arxius es creen amb permisos 666 (lectura i escriptura per a tots) i els directoris amb permisos 777 (lectura, escriptura i execució per a tots).

- **Màscara de Creació d'Arxius**: La umask defineix quins permisos s'han d'eliminar d'aquests valors predeterminats. Per exemple, una umask de 022 elimina els permisos d'escriptura per al grup i altres, resultant en permisos 644 per a arxius i 755 per a directoris.

  -  **Càlcul de Permisos**: Per calcular els permisos finals, es resta la umask dels permisos predeterminats. Per exemple:
   - Permisos predeterminats per a arxius: 666
   - Umask: 022
   - Permisos finals: 644 (666 - 022)

-  **Persistència**: Per fer que la umask siga persistent, pots afegir el comandament `umask valor` en arxius de configuració com `.bashrc` o `.profile`.

#### Exemple d'arxiu `.bashrc`

```bash
# .bashrc

# Configuració de la umask
umask 027

# Altres configuracions i àlies
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
...
```

- Els arxius nous tindran permisos 640 i els directoris nous tindran permisos 750. 
- Aquesta configuració s'aplicarà cada vegada que obris una nova sessió de terminal.

Perquè els canvis tinguen efecte, assegura't de recarregar l'arxiu `.bashrc` amb el següent comandament:

```bash frame="none"
source ~/.bashrc
```