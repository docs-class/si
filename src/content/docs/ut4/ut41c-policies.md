---
title: "Políticas de Seguridad - Linux"
description: "Monitoreo y políticas de seguridad en sistemas Linux y Windows."
---

## 1. Seguridad en Linux

### Política de Cuentas y Contraseñas en Ubuntu

| **Elemento**               | **Descripción**                                                                                                                                                  |
|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Complejidad de Contraseña** | Se puede utilizar **libpam-pwquality** para asegurar que las contraseñas incluyan letras mayúsculas, minúsculas, números y caracteres especiales.             |
| **Longitud Mínima**         | Las contraseñas deben tener como mínimo **8 caracteres**; se puede modificar la longitud mínima en el archivo de configuración ubicado en **`/etc/security/pwquality.conf`**.         |
| **Caducidad**              | Las contraseñas pueden caducar mediante la configuración en el archivo **`/etc/login.defs`**, típicamente de **60 a 90 días**.                           |
| **Bloqueo de Cuenta**      | Ubuntu permite el bloqueo de cuentas tras varios intentos fallidos mediante **fail2ban** o configuraciones en PAM, normalmente después de **3 a 10 intentos**.  |
| **Historial de Contraseñas** | Se puede configurar PAM para restringir el uso de las últimas **5 a 10** contraseñas anteriores, usando **`/etc/pam.d/common-password`** para añadir la opción `remember`.                                       |
| **Requerimiento de Autenticación** | Se puede habilitar la autenticación de dos factores (2FA) usando herramientas como **Google Authenticator** o **Duo**. Para configurar, se puede editar **`/etc/ssh/sshd_config`**.              |

### Políticas de Administración de Cuentas

| **Política**                            | **Descripción**                                                                                                                                                  |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Acceso a la Cuenta**                 | Se controla a través de grupos y roles, gestionando permisos en archivos como **`/etc/group`** y **`/etc/sudoers`** para determinar quién tiene acceso.           |
| **Políticas de Auditoría**             | Se recomienda el uso de **auditd**, configurando su archivo de configuración en **`/etc/audit/auditd.conf`** para registrar eventos y actividades.                |

### Políticas de Seguridad del Sistema

| **Política**                            | **Descripción**                                                                                                                                                  |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Firewall de Ubuntu**                 | El firewall se gestiona a través de **UFW (Uncomplicated Firewall)**, permitiendo establecer reglas de acceso desde la terminal, configurando archivos en **`/etc/default/ufw`**. |
| **Control de Acceso**                  | Los permisos de acceso se gestionan mediante **chmod** y **chown**, y también se pueden configurar listas de control de acceso con **setfacl** si es necesario. |

### Políticas de Configuración del Sistema

| **Política**                            | **Descripción**                                                                                                                                                  |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Actualizaciones Automáticas**         | Se pueden gestionar las actualizaciones automáticas editando el archivo de configuración en **`/etc/apt/apt.conf.d/20auto-upgrades`**.                           |
| **Política de Inicio de Sesión**       | Los parámetros de inicio de sesión se configuran generalmente en **`/etc/lightdm/lightdm.conf`** o en el archivo de configuración de su gestor de inicio específico. |

### Políticas de Uso de Recursos

| **Política**                            | **Descripción**                                                                                                                                                  |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Uso de Aplicaciones**                 | Puede gestionarse mediante el sistema de paquetes **APT** y restricciones establecidas en **`/etc/apt/sources.list`**.                                         |
| **Restricciones de Hardware**           | Se pueden implementar mediante configuraciones en **udev** y su correspondiente archivo de reglas ubicado en **`/etc/udev/rules.d/`**, para controlar el uso de dispositivos de hardware. |

### Visor de Eventos

#### Logs de Autenticación
  ```bash
  /var/log/auth.log (Debian/Ubuntu) o /var/log/secure (Red Hat)
  ```

#### Gnome System Log (Gráfico)

![Gnome system Log](https://blogs.gnome.org/johannes/files/2009/03/logview-filter.png)

```bash
sudo apt install gnome-system-log
```
