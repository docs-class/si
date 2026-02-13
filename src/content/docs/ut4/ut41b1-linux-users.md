---
title: "Usuarios"
description: "Usuarios"
---

## Comandos:
  
| Comando | Descripción |
|-------------|-------------|
| `id` | Permite averiguar el ID del usuario (UID) y de su grupo (GID), entre otras cosas. |
| `logname` | Devuelve el usuario inicial que se conectó al sistema. |
| `whoami` | Devuelve el login del usuario activo. |
| `adduser` | Permite añadir el usuario especificado. Creación guiada. |
| `useradd` | Añade un usuario de manera simplificada y rápida. No solicita ningún dato sobre este usuario. Debemos ejecutar la orden `passwd nombre_usuario` para asignarle una contraseña, ya que por defecto vendría deshabilitada. Además, no generaría la carpeta vinculada al usuario. También permite agregar un usuario a un grupo. |
| `passwd` | Permite cambiar la contraseña del usuario especificado. |
| `userdel` | Permite borrar la cuenta del usuario especificado. Si ponemos el parámetro `-r`, además borramos los archivos asociados a ese usuario. |
| `deluser` | Eliminación de usuarios guiada. |
| **`usermod`\*** | Nos permite modificar los datos relativos a un determinado usuario. |
| `addgroup` | Creación de grupos. |
| `delgroup` | Elimina un grupo del sistema. |

## useradd
- **Crear un nuevo usuario sin guía**:
  ```sh frame="none"
  sudo useradd nombre_usuario
  ```
### Opciones de `useradd`

| Opción                 | Descripción                                                    |
|------------------------|----------------------------------------------------------------|
| `-m`                   | Crear el directorio home del usuario (`/home/usuario`).        |
| `-d /ruta/al/home`     | Especificar un directorio home personalizado.                  |
| `-s /bin/bash`         | Definir la shell de inicio de sesión (por defecto `/bin/sh`).  |
| `-c "Nombre Completo"` | Añadir un comentario (usualmente el nombre completo).          |
| `-G grupo1,grupo2`     | Añadir el usuario a grupos suplementarios.                     |
| `-u UID`               | Asignar un ID de usuario específico.                           |
| `-g GID`               | Establecer el ID del grupo principal.                          |
| `-e AAAA-MM-DD`        | Expirar la cuenta en la fecha indicada.                        |
| `-L`                   | Bloquear la cuenta (impide el inicio de sesión).               |
| `-U`                   | Crear un grupo de usuarios con el mismo nombre que el usuario. |

#### Ejemplo de creación de un nuevo usuario con opciones avanzadas

```sh frame="none"
 sudo useradd \
    -m \
    -d /home/julia \
    -s /bin/zsh \
    -c "Julia Pérez, Analista de datos" \
    -G audio,video,developers,sudo \
    -e 2027-12-31 \
    -L \
    -U \
    julia
```
  - **Desbloquear usuario y establecer contraseña**:
```sh frame="none"
    sudo usermod -U julia      # quita el bloqueo de la cuenta
    sudo passwd -u julia       # opcional: asegura que la contraseña no esté marcada como bloqueada
    passwd julia               # establece una nueva contraseña para el usuario
```

## **`usermod`**:
  - **Cambiar el directorio asignado al usuario y mover su información**:
    ```sh frame="none"
    sudo usermod -d /home/directorio_nuevo -m nombre_usuario
    ```
  - **Cambiar el grupo inicial del usuario**:
    ```sh frame="none"
    sudo usermod -g pro nombre_usuario
    ```
  - **Cambiar el nombre de usuario**:
    ```sh frame="none"
    sudo usermod -l nombre_nuevo nombre_antiguo
    ```
    Debemos tener cuidado porque, aunque haya cambiado el nombre, el directorio vinculado sería el mismo que tenía anteriormente.
  - **Añadir el usuario a un grupo existente en el sistema**:
    ```sh frame="none"
    sudo usermod -a -G nuevo_grupo nombre_usuario
    ```