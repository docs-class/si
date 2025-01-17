---
title: "Usuaris i fitxers de configuració"
description: "Usuaris i fitxers de configuració"
---

## Tipus d'usuaris i fitxers de configuració

### Tipus d'usuaris
- **Root**: (0). Usuari amb tots els permisos.
- **Sistema**: (1-999). Usuaris ocults associats a aplicacions o kernel.
- **Normals**: (>1000). Resta d’usuaris.

### Fitxers de configuració
- **/etc/passwd**. Fitxer principal amb els usuaris del sistema.
- **/etc/shadow**. Fitxer on es mantenen les contrasenyes.
- **/etc/group**. Fitxer on s’associen usuaris i grups.

```bash  title="/etc/passwd"
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
...
polkitd:x:990:990:User for polkitd:/:/usr/sbin/nologin
profesor:x:1000:1000:,,,:/home/profesor:/bin/bash

```

1. **Nom d'usuari**: El nom del compte d'usuari.
2. **Contrasenya**: Històricament, aquí s'emmagatzemava la contrasenya encriptada, però ara generalment conté una `x` i les contrasenyes s'emmagatzemen a `/etc/shadow`.
3. **UID (User ID)**: L'identificador únic de l'usuari.
4. **GID (Group ID)**: L'identificador del grup principal al qual pertany l'usuari.
5. **GECOS**: Un camp que sol contenir informació addicional sobre l'usuari, com el nom complet, número de telèfon, etc.
6. **Directori d'inici**: La ruta al directori d'inici de l'usuari.
7. **Shell**: L'intèrpret de comandes que s'executa quan l'usuari inicia sessió.

```bash  title="/etc/shadow"
root:*:19993:0:99999:7:::
daemon:*:19993:0:99999:7:::
bin:*:19993:0:99999:7:::
sys:*:19993:0:99999:7:::
...
polkitd:!*:19993::::::
profesor:$y$j9T$TpmOAfr8WB8605QUHuH.1/$dtMUrLIFbC.ft1eYR8hhxAgFNSb.brMXOFxMCXecrqY2:20034:0:99999:7:::
```

1. **Nom d'usuari**: El nom del compte d'usuari.
2. **Contrasenya encriptada**: La contrasenya de l'usuari encriptada. Si el camp conté un asterisc (`*`) o una exclamació (`!`), el compte està deshabilitat.
3. **Data de l'últim canvi de contrasenya**: El nombre de dies des de l'1 de gener de 1970 fins a l'última vegada que es va canviar la contrasenya.
4. **Dies per canviar la contrasenya**: El nombre mínim de dies que han de passar abans que l'usuari pugui canviar la seva contrasenya novament.
5. **Dies abans que es requereixi un canvi de contrasenya**: El nombre màxim de dies que pot passar abans que es requereixi un canvi de contrasenya.
6. **Dies d'advertència abans de l'expiració**: El nombre de dies abans que la contrasenya expiri en els quals l'usuari rebrà una advertència.
7. **Dies de gràcia després de l'expiració**: El nombre de dies després que la contrasenya hagi expirat durant els quals l'usuari encara pot iniciar sessió.
8. **Data d'expiració del compte**: El nombre de dies des de l'1 de gener de 1970 després del qual el compte es deshabilitarà.
9. **Camp reservat**: Actualment no s'utilitza, però està reservat per a ús futur.

```bash  title="/etc/group"
root:x:0:
daemon:x:1:
bin:x:2:
sys:x:3:
...
profesor:x:1000:
```
1. **Nom del grup**: El nom del grup.
2. **Contrasenya**: Generalment conté una `x`, indicant que les contrasenyes dels grups s'emmagatzemen a `/etc/gshadow`.
3. **GID (Group ID)**: L'identificador únic del grup.
4. **Llista de membres**: Una llista de noms d'usuaris que pertanyen al grup, separats per comes.
