---
title: "Monitoreo y Política de Seguridad"
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

## 2. Seguridad en Windows

1. **Abre el Editor de Directivas de Grupo Local**:  
   - Presiona `Win + R`, escribe `gpedit.msc` y pulsa **Enter**.  

2. **Navega a las Directivas de Contraseña**:  
   `Configuración del equipo > Configuración de Windows > Configuración de seguridad > Directivas de cuenta > Directivas de contraseña`  

![gpedit](../../../assets/ut4/gpedit.jpg)


### Política de Cuentas y Contraseñas en Windows

| **Elemento**               | **Descripción**                                                                                                                                                  |
|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Complejidad de Contraseña** | Se requiere que las contraseñas contengan una combinación de letras mayúsculas, minúsculas, números y caracteres especiales.                                    |
| **Longitud Mínima**         | Generalmente, las contraseñas deben tener al menos **8 caracteres**, aunque se recomienda que sean más largas para mayor seguridad.                          |
| **Caducidad**              | Las contraseñas deben renovarse periódicamente, típicamente cada **60 a 90 días**, para mitigar riesgos de seguridad.                                           |
| **Bloqueo de Cuenta**      | Después de un número específico de intentos fallidos de inicio de sesión (normalmente **3 a 10**), la cuenta se bloquea por un período determinado.             |
| **Historial de Contraseñas** | Se puede configurar para que las nuevas contraseñas no sean idénticas a las anteriores, restringiendo el uso de las últimas **5 a 10** contraseñas anteriores.  |
| **Requerimiento de Autenticación** | Puede configurarse para utilizar métodos adicionales de autenticación, como la autenticación de dos factores (2FA) para mejorar la seguridad.                       |

### Políticas de Administración de Cuentas

| **Política**                            | **Descripción**                                                                                                                                                  |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Acceso a la Cuenta**                 | Controla quién puede acceder a las cuentas de usuario, permitiendo o restringiendo el acceso según grupos o roles específicos.                                    |
| **Políticas de Auditoría**             | Establece qué eventos deben ser registrados (por ejemplo, inicios de sesión exitosos y fallidos) para monitorear actividades y detectar comportamientos sospechosos. |

### Políticas de Seguridad del Sistema

| **Política**                            | **Descripción**                                                                                                                                                  |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Firewall de Windows**                 | Define reglas sobre qué aplicaciones o servicios pueden comunicar a través de la red, estableciendo una barrera de seguridad.                                  |
| **Control de Acceso**                   | Establece permisos sobre quién puede acceder a archivos, carpetas y recursos del sistema, asegurando que solo los usuarios autorizados tengan acceso.            |

### Políticas de Configuración del Sistema

| **Política**                            | **Descripción**                                                                                                                                                  |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Actualizaciones Automáticas**         | Configura la instalación automática de actualizaciones de seguridad y del sistema operativo para garantizar que todos los sistemas estén al día.                 |
| **Política de Inicio de Sesión**       | Define parámetros sobre cómo los usuarios inician sesión y qué configuraciones están disponibles en sus perfiles.                                                |

### Políticas de Uso de Recursos

| **Política**                            | **Descripción**                                                                                                                                                  |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Uso de Aplicaciones**                 | Controla qué aplicaciones pueden ser instaladas y ejecutadas en el sistema, limitando el uso de software no autorizado.                                          |
| **Restricciones de Hardware**           | Permite la configuración de dispositivos de hardware que pueden ser utilizados, eliminando riesgos de seguridad de dispositivos no autorizados.                 |

### Visor de Eventos

##### Modo gráfico
  ```powershell
  // Visor gráfico de eventos en Windows
  eventvwr.msc
  ``` 
| **Ubicación**                  | **Descripción**                                                                                             |
|-------------------------------|-------------------------------------------------------------------------------------------------------------|
| **Registro de Seguridad**     | Aquí se registran los eventos de inicio y cierre de sesión, así como intentos fallidos y cambios en las cuentas de usuario.                                                  |
| **Registro de Aplicación y Sistema** | Se registran eventos relacionados con aplicaciones y el sistema operativo, que también pueden incluir advertencias y errores relacionados con la autenticación.         |

##### Tipos de Eventos Relevantes

- **4624**: Inicio de sesión exitoso.
- **4625**: Intento de inicio de sesión fallido.
- **4740**: Bloqueo de cuenta.
- **4720**: Creación de una nueva cuenta de usuario.

![eventos en windows 11](https://somebooks.es/wp-content/uploads/2023/05/Usar-el-visor-de-eventos-en-Windows-11-007.png)


##### Modo línea de comandos
```powershell
// eventos específicos usando PowerShell:
Get-WinEvent -LogName 'Security' | Where-Object { $_.Id -eq 4624 }
Get-EventLog -LogName Security -InstanceId 4624,4625,4740,4720 -Newest 10
```

![Resultado de get-eventLog](../../../assets/ut4/ut41c-geteventsLog.png)

:::caution[actividad]
GPOs de seguridad
:::