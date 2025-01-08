---
title: "Terminal Linux"
description: "Introducció al terminal"
---

## Conceptes bàsics
:::tip[WSL]
> **/home/USUARIO-LINUX/** # Carpeta personal en Linux
>
> **/mnt/c/Users/USUARIO-HOST/** # Carpeta personal en HOST (Windows)
:::

### Prompt de Linux

- El **prompt** mostra informació útil com l'usuari, la màquina i el directori actual.
  - Exemple: `antonio@ubuntu:~$`
  - `$`: Usuari sense privilegis.
  - `#`: Usuari amb privilegis root.

### **Ordres i Entrada/Eixida Estàndard**

1. Les ordres en Linux són **paraules reservades** utilitzades pel sistema operatiu per executar programes a través d'un terminal o línia de comandes.

   - **Sintaxi general:**
     ``` frame="none"
     ordre [-opcions] argument1 argument2
     ```
   - **Agrupació d'opcions:**
     ``` frame="none"
     ls -l -a = ls -la
     ```
![ls command](../../../../assets/ut3/ls-command.png)

2. **Diferenciació entre majúscules i minúscules:**
   En Linux, **les majúscules i minúscules són diferents**, per la qual cosa has de parar atenció en escriure les ordres.

### **Entrada i Eixida Estàndard en Linux**

Tot programa en Linux treballa amb tres tipus de fluxos principals:

- **Entrada estàndard** (stdin): Teclat.
- **Eixida estàndard** (stdout): Pantalla.
- **Eixida d'error** (stderr): Pantalla.

### Redirecció, concatenació i ajuda

- `>` i `>>`: Redirigeixen l'eixida a un fitxer.
  - Exemple: `ls -a > fitxer.txt`
- `<`: Redirigeix l'entrada des d'un fitxer.
  - Exemple: `wc < fitxer.txt`
- **Tubs**: Permeten que l'eixida d'una ordre es convertisca en l'entrada d'una altra.
  - ordre1 \| ordre2 \| ordre3  
  - Exemple: `cat /etc/passwd \| wc -l`

- **Concatenació**: Executa ordres de manera seqüencial sense relació:  
  - ordre1 && ordre2 && ordreN  
  - Exemple: `cat /etc/passwd && cat /etc/group`
- **Ajuda sobre Ordres**
  - **man**: Mostra una pàgina d'ajuda completa.  
    - `man pwd`  
  - **help**: Proporciona ajuda ràpida.  
    - `pwd --help`  

## **Ordres**

### **Ordres Bàsiques**

| **Ordre**   | **Descripció**                                     | **Exemple**                     |
|-------------|----------------------------------------------------|----------------------------------|
| **pwd**     | mostra la ruta actual.                            | `pwd`                           |
| **cd**      | canvia de directori.                              | `cd /home/usuari`               |
| **ls**      | llista fitxers.                                   | `ls -l`                         |
| **mkdir**   | crea directoris.                                  | `mkdir nova_carpeta`            |
| **rm**      | esborra fitxers o directoris.                     | `rm fitxer.txt`                 |
| **mv**      | mou fitxers o directoris.                         | `mv fitxer.txt carpeta/`        |
| **cp**      | copia fitxers o directoris.                       | `cp fitxer.txt copia.txt`       |
| **uname**   | mostra informació del sistema.                    | `uname -a`                      |
| **shutdown**| apaga o reinicia l'equip.                         | `shutdown now` o `shutdown -r`  |
| **clear**   | neteja la pantalla del terminal.                  | `clear`                         |
| **date**    | mostra la data i hora del sistema.                | `date`                          |
| **cal**     | mostra el calendari del mes o any indicat.        | `cal 2024`                      |
| **who**     | mostra qui està connectat al sistema.             | `who`                           |

:::caution[Activitat]
- Estructura de directoris en Linux
:::