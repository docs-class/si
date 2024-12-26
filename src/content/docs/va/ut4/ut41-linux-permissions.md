---
title: "Permisos"
description: "Permisos"
---

## Com veure els permisos
Utilitza el comandament `ls -l` per llistar els fitxers i veure els permisos:

```bash frame="none" ins="-rw-rw-r-- 1 sysadmin sysadmin 24 Aug 1 02:35 hello.sh"
sysadmin@localhost:~$ ls -l
-rw-rw-r-- 1 sysadmin sysadmin 24 Aug 1 02:35 hello.sh
```

## Canviar permisos de fitxers i directoris
Per modificar els permisos, utilitza el comandament `chmod`:

```bash frame="none"
chmod [SET][ACTION][PERMISSIONS] fitxer
```

### Sistema Octal

Els permisos en Linux es representen mitjançant tres dígits octals, cadascun dels quals pot tenir un valor de 0 a 7. Cada dígit representa els permisos per al propietari del fitxer, el grup i altres usuaris, respectivament (UGO). Els valors octals es calculen sumant els següents permisos:

- **4**: Lectura (r)
- **2**: Escriptura (w)
- **1**: Execució (x)

**Permisos 754**:
   - Propietari: Lectura, escriptura i execució (4+2+1 = 7)
   - Grup: Lectura i execució (4+1 = 5)
   - Altres: Lectura (4)

   ```bash
   chmod 754 fitxer
   ```

### Mode Simbòlic

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

### Umask

El comandament **umask** en Linux s'utilitza per establir els permisos predeterminats per als fitxers i directoris recentment creats. Aquí tens un resum:

- **Permisos Predeterminats**: Per defecte, els fitxers es creen amb permisos 666 (lectura i escriptura per a tots) i els directoris amb permisos 777 (lectura, escriptura i execució per a tots).

- **Màscara de Creació de Fitxers**: La umask defineix quins permisos s'han d'eliminar d'aquests valors predeterminats. Per exemple, una umask de 022 elimina els permisos d'escriptura per al grup i altres, resultant en permisos 644 per a fitxers i 755 per a directoris.

  -  **Càlcul de Permisos**: Per calcular els permisos finals, es resta la umask dels permisos predeterminats. Per exemple:
   - Permisos predeterminats per a fitxers: 666
   - Umask: 022
   - Permisos finals: 644 (666 - 022)

-  **Persistència**: Per fer que la umask sigui persistent, pots afegir el comandament `umask valor` en fitxers de configuració com `.bashrc` o `.profile`.

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
- Aquesta configuració s'aplicarà cada vegada que obris una nova sessió de terminal.

Perquè els canvis tinguin efecte, assegura't de recarregar el fitxer `.bashrc` amb el següent comandament:

```bash frame="none"
source ~/.bashrc
```