---
title: "Gestió d'usuaris - Linux"
description: "Gestió d'usuaris - Linux"
---

## Permisos d'usuaris per a fitxers i directoris en Linux

### Com veure els permisos
Utilitza el comandament `ls -l` per a llistar els fitxers i veure els permisos:

```bash frame="none" ins="-rw-rw-r-- 1 sysadmin sysadmin 24 Aug 1 02:35 hello.sh"
sysadmin@localhost:~$ ls -l
-rw-rw-r-- 1 sysadmin sysadmin 24 Aug 1 02:35 hello.sh
```

### Canviar permisos de fitxers i directoris
Per a modificar els permisos, utilitza el comandament `chmod`:

```bash frame="none"
chmod [SET][ACCIÓ][PERMISOS] fitxer
```

| **SET**       | **Acció**          | **Permisos** |
|---------------|---------------------|--------------|
| **u**: Usuari propietari | **+**: Afegeix permisos | **r**: Llegir |
| **g**: Grup propietari   | **=**: Estableix permisos | **w**: Escriure |
| **o**: Altres usuaris    | **-**: Elimina permisos | **x**: Executar |
| **a**: Tots els usuaris  |                     |              |


```bash frame="none"
# Afegeix permisos (+)
chmod u+x fitxer.txt  # Afegeix el permís d'execució per a l'usuari
chmod ug+r fitxer.txt  # Afegeix el permís de lectura per a l'usuari i el grup

# Estableix permisos (=)
chmod u=rw fitxer.txt  # Estableix els permisos de lectura i escriptura per a l'usuari
chmod uo=r fitxer.txt  # Estableix el permís de lectura per a l'usuari i altres usuaris

# Elimina permisos (-)
chmod u-w fitxer.txt  # Elimina el permís d'escriptura per a l'usuari
chmod go-w fitxer.txt  # Elimina el permís d'escriptura per al grup i altres usuaris
```

### Canviar el propietari/grup de fitxers i directoris
#### Propietari
```bash frame="none"
chown [OPTIONS] [OWNER] fitxer
```
Canviar el propietari d'un fitxer a `root`:
```bash frame="none" ins="root"
sysadmin@localhost:/Documents$ sudo chown root hello.sh
sysadmin@localhost:/Documents$ ls -l hello.sh
-rw-rw-r-- 1 root sysadmin 112 Aug  1 02:35 hello.sh
```

#### Grup
  ```bash frame="none"
  chgrp grup o GID fitx1 [fitx2 fitx3 …..]
  ```
- No es modificaran els permisos per als fitxers ni la seua ubicació.
- El paràmetre `-R` canvia la propietat de forma recursiva.

#### Propietari i Grup
- Podem canviar usuari i grup amb la mateixa ordre:
  ```bash frame="none"
  chown usuari:grup fitx1 [fitx2 fitx3 …]
  ```

:::caution[activitat]
Gestió de permisos de fitxers i carpetes
:::

### Umask

El comandament **umask** en Linux s'utilitza per a establir els permisos predeterminats per als fitxers i directoris acabats de crear. Ací tens un resum:

- **Permisos Predeterminats**: Per defecte, els fitxers es creen amb permisos 666 (lectura i escriptura per a tots) i els directoris amb permisos 777 (lectura, escriptura i execució per a tots).

- **Màscara de Creació de Fitxers**: La umask defineix quins permisos s'han d'eliminar d'aquests valors predeterminats. Per exemple, una umask de 022 elimina els permisos d'escriptura per al grup i altres, resultant en permisos 644 per a fitxers i 755 per a directoris.

  -  **Càlcul de Permisos**: Per a calcular els permisos finals, es resta la umask dels permisos predeterminats. Per exemple:
   - Permisos predeterminats per a fitxers: 666
   - Umask: 022
   - Permisos finals: 644 (666 - 022)

-  **Persistència**: Per a fer que la umask siga persistent, pots afegir el comandament `umask valor` en fitxers de configuració com `.bashrc` o `.profile`.

#### Exemple de fitxer `.bashrc`

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

- Els fitxers nous tindran permisos 640 i els directoris nous tindran permisos 750. 
- Aquesta configuració s'aplicarà cada vegada que òbrigues una nova sessió de terminal.

Perquè els canvis tinguen efecte, assegura't de recarregar el fitxer `.bashrc` amb el següent comandament:

```bash frame="none"
source ~/.bashrc
```