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

- **SET**: Selecciona el objetivo del cambio:
  - `u`: Usuario propietario.
  - `g`: Grupo propietario.
  - `o`: Otros usuarios.
  - `a`: Todos los usuarios.

- **ACTION**:
  - `+`: Añade permisos.
  - `=`: Establece permisos.
  - `-`: Elimina permisos.

- **PERMISSIONS**:
  - `r`: Leer.
  - `w`: Escribir.
  - `x`: Ejecutar.

#### Ejemplo:
Añadir permisos de ejecución al usuario para un archivo:
```bash frame="none"
sysadmin@localhost:/Documents$ chmod u+x hello.sh
```

### Cambiar la propiedad de archivos y directorios
Utiliza el comando `chown` para cambiar el propietario de un archivo o directorio:

```bash frame="none"
chown [OPTIONS] [OWNER] archivo
```

#### Ejemplo:
Cambiar el propietario de un archivo a `root`:
```bash frame="none" ins="root"
sysadmin@localhost:/Documents$ sudo chown root hello.sh
sysadmin@localhost:/Documents$ ls -l hello.sh
-rw-rw-r-- 1 root sysadmin 112 Aug  1 02:35 hello.sh
```

:::caution[actividad]
Gestión de permisos de archivos y carpetas
:::

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
