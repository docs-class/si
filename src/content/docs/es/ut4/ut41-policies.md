---
title: "Política de cuentas y contraseñas"
description: "Account & password policies"
---

## Seguridad de cuentas de usuario 
  - Configurar cuentas con privilegios mínimos necesarios.  
  - Deshabilitar cuentas inactivas o no utilizadas.  
  - Utilizar autenticación multifactor para añadir una capa adicional de seguridad.  
  - Registrar y monitorear accesos para detectar actividades sospechosas.  
  ```bash
  /var/log/auth.log (Debian/Ubuntu) o /var/log/secure (Red Hat)
  ```

## Seguridad de contraseñas  
  - Implementar contraseñas fuertes (longitud mínima, combinación de letras, números y caracteres especiales).
  ```bash
    # /etc/security/pwquality.conf
    minlen = 12
    minclass = 3
  ```
  - Prohibir el uso de contraseñas comunes o fácilmente adivinables.
    - sudo apt install libpam-cracklib
  ```
  password requisite pam_cracklib.so retry=3 minlen=12 difok=3
  ```
  - Cambiar contraseñas periódicamente y evitar la reutilización. 
  ```bash title="/etc/login.defs"
      # /etc/login.defs
      PASS_MAX_DAYS 90
      PASS_MIN_DAYS 7
      INACTIVE 30
  ```
  - Almacenar contraseñas de forma segura utilizando técnicas de hash y cifrado.  

:::note[Windows]
1. **Abre el Editor de Directivas de Grupo Local**:  
   - Presiona `Win + R`, escribe `secpol.msc` y pulsa **Enter**.  

2. **Navega a las Directivas de Contraseña**:  
   `Configuración del equipo > Configuración de Windows > Configuración de seguridad > Directivas de cuenta > Directivas de contraseña`  
:::