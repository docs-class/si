---
title: "Política de comptes i contrasenyes"
description: "Polítiques de comptes i contrasenyes"
---

## Seguretat de comptes d'usuari 
  - Configurar comptes amb privilegis mínims necessaris.  
  - Deshabilitar comptes inactius o no utilitzats.  
  - Utilitzar autenticació multifactor per afegir una capa addicional de seguretat.  
  - Registrar i monitoritzar accessos per detectar activitats sospitoses.  
  ```bash
  /var/log/auth.log (Debian/Ubuntu) o /var/log/secure (Red Hat)
  ```

## Seguretat de contrasenyes  
  - Implementar contrasenyes fortes (longitud mínima, combinació de lletres, números i caràcters especials).
  ```bash
    # /etc/security/pwquality.conf
    minlen = 12
    minclass = 3
  ```
  - Prohibir l'ús de contrasenyes comunes o fàcilment endevinables.
    - sudo apt install libpam-cracklib
  ```
  password requisite pam_cracklib.so retry=3 minlen=12 difok=3
  ```
  - Canviar contrasenyes periòdicament i evitar la reutilització. 
  ```bash title="/etc/login.defs"
      # /etc/login.defs
      PASS_MAX_DAYS 90
      PASS_MIN_DAYS 7
      INACTIVE 30
  ```
  - Emmagatzemar contrasenyes de forma segura utilitzant tècniques de hash i xifrat.  

:::note[Windows]
1. **Obre l'Editor de Directives de Grup Local**:  
   - Prem `Win + R`, escriu `gpedit.msc` i pressiona **Enter**.  

2. **Navega a les Directives de Contrasenya**:  
   `Configuració de l'equip > Configuració de Windows > Configuració de seguretat > Directives de compte > Directives de contrasenya`  
:::