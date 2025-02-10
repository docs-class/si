---
title: "Usuarios"
description: "Usuarios"
---

## Comandaments:
  
| Comandament | Descripció |
|-------------|-------------|
| `id` | Permet esbrinar l'ID de l'usuari (UID) i del seu grup (GID), entre altres coses. |
| `logname` | Retorna l'usuari inicial que es va connectar al sistema. |
| `whoami` | Retorna el login de l'usuari actiu. |
| `adduser` | Permet afegir l'usuari especificat. Creació guiada. |
| `useradd` | Afegeix un usuari de manera simplificada i ràpida. No sol·licita cap dada sobre aquest usuari. Hem d'executar l'ordre `passwd nomusuari` per assignar-li una contrasenya, ja que per defecte vindria deshabilitada. A més, no generaria la carpeta vinculada a l'usuari. També permet afegir un usuari a un grup. |
| `passwd` | Permet canviar la contrasenya de l'usuari especificat. |
| `userdel` | Permet esborrar el compte de l'usuari especificat. Si posem el paràmetre `-r`, a més esborrem els fitxers associats a aquest usuari. |
| `deluser` | Eliminació d'usuaris guiada. |
| **`usermod`\*** | Ens permet modificar les dades relatives a un determinat usuari. |
| `addgroup` | Creació de grups. |
| `delgroup` | Elimina un grup del sistema. |

\* **`usermod`**:
  - **Canviar el directori assignat a l'usuari i moure la seva informació**:
    ```sh frame="none"
    sudo usermod -d /home/pepe -m nom_usuari
    ```
  - **Canviar el grup inicial de l'usuari**:
    ```sh frame="none"
    sudo usermod -g pro nom_usuari
    ```
  - **Canviar el nom d'usuari**:
    ```sh frame="none"
    sudo usermod -l nom_nou nom_antic
    ```
    Hem de tenir cura perquè, encara que hagi canviat el nom, el directori vinculat seria el mateix que tenia anteriorment.

  - **Afegir l'usuari a un grup existent en el sistema**:
    ```sh frame="none"
    sudo usermod -a -G nom_del_grup nom_usuari
    ```