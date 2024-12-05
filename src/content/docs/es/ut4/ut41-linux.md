---
title: "Gestión de usuarios - Linux"
description: "Gestión de usuarios- Linux"
---

## Permisos de usuarios para archivos y directorios en Linux

### Cómo ver los permisos
Utiliza el comando `ls -l` para listar los archivos y ver los permisos:

```bash frame="none" ins="-rw-rw-r-- 1 sysadmin sysadmin 24 Aug 1 02:35 hello.sh"
sysadmin@localhost:~$ ls -l
-rw-rw-r-- 1 sysadmin sysadmin 24 Aug 1 02:35 hello.sh
```

### Cambiar permisos de archivos y directorios
Para modificar los permisos, utiliza el comando `chmod`:

```bash frame="none"
chmod [SET][ACTION][PERMISSIONS] archivo
```

| **SET**       | **Acción**          | **Permisos** |
|---------------|---------------------|--------------|
| **u**: Usuario propietario | **+**: Añade permisos | **r**: Leer |
| **g**: Grupo propietario   | **=**: Establece permisos | **w**: Escribir |
| **o**: Otros usuarios      | **-**: Elimina permisos | **x**: Ejecutar |
| **a**: Todos los usuarios  |                     |              |


```bash frame="none"
# Añadir permisos (+)
chmod u+x archivo.txt  # Añade el permiso de ejecución para el usuario
chmod ug+r archivo.txt  # Añade el permiso de lectura para el usuario y el grupo

# Establecer permisos (=)
chmod u=rw archivo.txt  # Establece los permisos de lectura y escritura para el usuario
chmod uo=r archivo.txt  # Establece el permiso de lectura para el usuario y otros usuarios

# Eliminar permisos (-)
chmod u-w archivo.txt  # Elimina el permiso de escritura para el usuario
chmod go-w archivo.txt  # Elimina el permiso de escritura para el grupo y otros usuarios
```

### Cambiar la propietario/grupo de archivos y directorios
#### Propietario
```bash frame="none"
chown [OPTIONS] [OWNER] archivo
```
Cambiar el propietario de un archivo a `root`:
```bash frame="none" ins="root"
sysadmin@localhost:/Documents$ sudo chown root hello.sh
sysadmin@localhost:/Documents$ ls -l hello.sh
-rw-rw-r-- 1 root sysadmin 112 Aug  1 02:35 hello.sh
```

#### Grupo
  ```bash frame="none"
  chgrp grupo o GID fich1 [fich2 fich3 …..]
  ```
- No se modificarán los permisos para los ficheros ni su ubicación.
- El parámetro `-R` cambia la propiedad de forma recursiva.

#### Propietario y Grupo
- Podemos cambiar usuario y grupo con la misma orden:
  ```bash frame="none"
  chown usuario:grupo fich1 [fich2 fich3 …]
  ```

### Umask

El comando **umask** en Linux se utiliza para establecer los permisos predeterminados para los archivos y directorios recién creados. Aquí tienes un resumen:

- **Permisos Predeterminados**: Por defecto, los archivos se crean con permisos 666 (lectura y escritura para todos) y los directorios con permisos 777 (lectura, escritura y ejecución para todos).

- **Máscara de Creación de Archivos**: La umask define qué permisos se deben eliminar de estos valores predeterminados. Por ejemplo, una umask de 022 elimina los permisos de escritura para el grupo y otros, resultando en permisos 644 para archivos y 755 para directorios.

  -  **Cálculo de Permisos**: Para calcular los permisos finales, se resta la umask de los permisos predeterminados. Por ejemplo:
   - Permisos predeterminados para archivos: 666
   - Umask: 022
   - Permisos finales: 644 (666 - 022)

-  **Persistencia**: Para hacer que la umask sea persistente, puedes agregar el comando `umask valor` en archivos de configuración como `.bashrc` o `.profile`.

#### Ejemplo de archivo `.bashrc`

```bash
# .bashrc

# Configuración de la umask
umask 027

# Otras configuraciones y alias
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
...
```

- Los archivos nuevos tendrán permisos 640 y los directorios nuevos tendrán permisos 750. 
- Esta configuración se aplicará cada vez que abras una nueva sesión de terminal.

Para que los cambios surtan efecto, asegúrate de recargar el archivo `.bashrc` con el siguiente comando:

```bash frame="none"
source ~/.bashrc
```

:::caution[actividad]
Gestión de permisos de archivos y carpetas
:::