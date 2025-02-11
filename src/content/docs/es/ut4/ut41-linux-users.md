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

\* **`usermod`**:
  - **Cambiar el directorio asignado al usuario y mover su información**:
    ```sh frame="none"
    sudo usermod -d /home/directoriio_nuevo -m nombre_usuario
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