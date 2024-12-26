---
title: "Usuarios y ficheros de configuración"
description: "Usuarios y ficheros de configuración"
---

## Tipo de usuarios y ficehros de configuración

### Tipus de usuaris
- **Root**: (0). Usuari amb tots els permisos.
- **Sistema**: (1-999). Usuaris ocults associats a aplicacions o kernel.
- **Normals**: (>1000). Resta d’usuaris.

### Archivos de configuración
- **/etc/passwd**. Archivo principal.
- **/etc/shadow**. Archivo donde se mantienen las contraseñas.
- **/etc/group**. Archivo donde se asocian usuarios y grupos.

```bash  title="/etc/passwd"
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
...
polkitd:x:990:990:User for polkitd:/:/usr/sbin/nologin
profesor:x:1000:1000:,,,:/home/profesor:/bin/bash

```

1. **Nombre de usuario**: El nombre de la cuenta de usuario.
2. **Contraseña**: Históricamente, aquí se almacenaba la contraseña encriptada, pero ahora generalmente contiene una `x` y las contraseñas se almacenan en `/etc/shadow`.
3. **UID (User ID)**: El identificador único del usuario.
4. **GID (Group ID)**: El identificador del grupo principal al que pertenece el usuario.
5. **GECOS**: Un campo que suele contener información adicional sobre el usuario, como el nombre completo, número de teléfono, etc.
6. **Directorio de inicio**: La ruta al directorio de inicio del usuario.
7. **Shell**: El intérprete de comandos que se ejecuta cuando el usuario inicia sesión.


```bash  title="/etc/shadow"
root:*:19993:0:99999:7:::
daemon:*:19993:0:99999:7:::
bin:*:19993:0:99999:7:::
sys:*:19993:0:99999:7:::
...
polkitd:!*:19993::::::
profesor:$y$j9T$TpmOAfr8WB8605QUHuH.1/$dtMUrLIFbC.ft1eYR8hhxAgFNSb.brMXOFxMCXecrqY2:20034:0:99999:7:::
```

1. **Nombre de usuario**: El nombre de la cuenta de usuario.
2. **Contraseña encriptada**: La contraseña del usuario encriptada. Si el campo contiene un asterisco (`*`) o una exclamación (`!`), la cuenta está deshabilitada.
3. **Fecha del último cambio de contraseña**: El número de días desde el 1 de enero de 1970 hasta la última vez que se cambió la contraseña.
4. **Días para cambiar la contraseña**: El número mínimo de días que deben pasar antes de que el usuario pueda cambiar su contraseña nuevamente.
5. **Días antes de que se requiera un cambio de contraseña**: El número máximo de días que puede pasar antes de que se requiera un cambio de contraseña.
6. **Días de advertencia antes de la expiración**: El número de días antes de que la contraseña expire en los que el usuario recibirá una advertencia.
7. **Días de gracia después de la expiración**: El número de días después de que la contraseña haya expirado durante los cuales el usuario aún puede iniciar sesión.
8. **Fecha de expiración de la cuenta**: El número de días desde el 1 de enero de 1970 después del cual la cuenta se deshabilitará.
9. **Campo reservado**: Actualmente no se utiliza, pero está reservado para uso futuro.

```bash  title="/etc/group"
root:x:0:
daemon:x:1:
bin:x:2:
sys:x:3:
...
profesor:x:1000:
```
1. **Nombre del grupo**: El nombre del grupo.
2. **Contraseña**: Generalmente contiene una `x`, indicando que las contraseñas de los grupos se almacenan en `/etc/gshadow`.
3. **GID (Group ID)**: El identificador único del grupo.
4. **Lista de miembros**: Una lista de nombres de usuarios que pertenecen al grupo, separados por comas.
