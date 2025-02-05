---
title: "Terminal Windows"
description: "Introducció al terminal Windows"
---

## Introducció al terminal de PowerShell
### Com obrir el terminal de PowerShell

1. Des del Menú d'Inici
2. Des de l'Explorador de Fitxers
3. Amb accés ràpid (Prem **Win + X**)
### Com actualitzar PowerShell a l'última versió
```js 
winget install --id Microsoft.Powershell --source winget
```
### Verificar la Versió de PowerShell
```js 
$PSVersionTable.PSVersion
```
### Estructura i ús de cmdlets
Els comandos de PowerShell, coneguts com a **cmdlets**, tenen una estructura específica que facilita el seu ús i comprensió. Ací t'explique com s'estructuren:

1. **Verb-Substantiu**: Cada cmdlet segueix la convenció de nom `Verb-Substantiu`. Per exemple, `Get-Process` (obtenir procés) o `Stop-Service` (aturar servei). Això ajuda a entendre ràpidament què fa el cmdlet.

2. **Paràmetres**: Els cmdlets poden acceptar paràmetres que modifiquen el seu comportament. Els paràmetres s'afegeixen després del cmdlet, separats per espais. Per exemple, `Get-Process -Name "notepad"` obté informació sobre el procés de Notepad.

3. **Pipelines**: PowerShell permet encadenar cmdlets usant l'operador `|` (pipe). Això passa l'eixida d'un cmdlet com a entrada a un altre. Per exemple, `Get-Process | Where-Object {$_.CPU -gt 100}` filtra els processos que usen més de 100 unitats de CPU.

4. **Àlies**: PowerShell també suporta àlies, que són noms curts per a cmdlets. Per exemple, `ls` és un àlies per a `Get-ChildItem`.

5. **Ajuda**: Pots obtenir ajuda sobre qualsevol cmdlet usant `Get-Help`. Per exemple, `Get-Help Get-Process` mostra informació detallada sobre el cmdlet `Get-Process`.

```js
Get-Process -Name "notepad" | Stop-Process
#Aquest comando obté el procés de Notepad i després l'atura.
```

## 2. **Navegació i Exploració de Directoris**

- **Veure el directori actual**:  
  ```js 
  Get-Location  # Àlies: pwd (equivalent en Linux: pwd)
  ```

- **Canviar de directori**:  
  ```js 
  Set-Location -Path "C:\Ruta\Directori"  # Àlies: cd (equivalent en Linux: cd)
  ```

- **Llistar fitxers i directoris**:  
  ```js 
  Get-ChildItem  # Àlies: ls, dir (equivalent en Linux: ls)
  ```

### 2. **Gestió de Directoris**

- **Crear un nou directori**:  
  ```js 
  New-Item -Path "C:\Ruta\NouDirectori" -ItemType Directory  # Àlies: mkdir (equivalent en Linux: mkdir)
  ```

- **Eliminar un directori**:  
  ```js 
  Remove-Item -Path "C:\Ruta\Directori" -Recurse  # Àlies: rm (equivalent en Linux: rm -r)
  ```

- **Copiar un directori**:  
  ```js 
  Copy-Item -Path "C:\Ruta\DirectoriOrigen" -Destination "C:\Ruta\DirectoriDestí" -Recurse  # Àlies: cp (equivalent en Linux: cp -r)
  ```

- **Moure o renombrar un directori**:  
  ```js 
  Move-Item -Path "C:\Ruta\DirectoriOrigen" -Destination "C:\Ruta\NouNom"  # Àlies: mv (equivalent en Linux: mv)
  ```

### 3. **Gestió de Fitxers**

- **Crear un fitxer**:  
  ```js 
  New-Item -Path "C:\Ruta\Fitxer.txt" -ItemType File  # Sense àlies directe, equivalent en Linux: touch
  ```

- **Escriure en un fitxer**:  
  ```js 
  Set-Content -Path "C:\Ruta\Fitxer.txt" -Value "Text a escriure en el fitxer"  # Sense àlies directe, equivalent en Linux: echo "Text" > fitxer.txt
  ```

- **Afegir text a un fitxer**:  
  ```js 
  Add-Content -Path "C:\Ruta\Fitxer.txt" -Value "Text addicional"  # Sense àlies directe, equivalent en Linux: echo "Text" >> fitxer.txt
  ```

- **Llegir el contingut d'un fitxer**:  
  ```js 
  Get-Content -Path "C:\Ruta\Fitxer.txt"  # Àlies: cat (equivalent en Linux: cat)
  ```

- **Copiar un fitxer**:  
  ```js 
  Copy-Item -Path "C:\Ruta\Fitxer.txt" -Destination "C:\Ruta\CòpiaFitxer.txt"  # Àlies: cp (equivalent en Linux: cp)
  ```

- **Moure o renombrar un fitxer**:  
  ```js 
  Move-Item -Path "C:\Ruta\Fitxer.txt" -Destination "C:\Ruta\NouNom.txt"  # Àlies: mv (equivalent en Linux: mv)
  ```

- **Eliminar un fitxer**:  
  ```js 
  Remove-Item -Path "C:\Ruta\Fitxer.txt"  # Àlies: rm (equivalent en Linux: rm)
  ```

### 4. **Buscar Fitxers**

- **Buscar fitxers per nom**:  
  ```js 
  Get-ChildItem -Path "C:\Ruta" -Filter "*.txt" -Recurse  # Àlies: ls -r *.txt (equivalent en Linux: find o ls -R *.txt)
  ```

- **Buscar fitxers per paraula clau en el contingut**:  
  ```js 
  Select-String -Path "C:\Ruta\*.txt" -Pattern "paraulaClau"  # Sense àlies directe, equivalent en Linux: grep "paraulaClau" *.txt
  ```

### 5. **Comprimir i Descomprimir Fitxers**

- **Comprimir un directori o fitxer**:  
  ```js 
  Compress-Archive -Path "C:\Ruta\Directori" -DestinationPath "C:\Ruta\Fitxer.zip"  # Sense àlies directe, equivalent en Linux: zip
  ```

- **Descomprimir un fitxer**:  
  ```js 
  Expand-Archive -Path "C:\Ruta\Fitxer.zip" -DestinationPath "C:\Ruta\Directori"  # Sense àlies directe, equivalent en Linux: unzip
  ```

### 6. **Permisos i Propietats de Fitxers**

- **Veure propietats d'un fitxer o directori**:  
  ```js 
  Get-Item -Path "C:\Ruta\Fitxer.txt" | Format-List *  # Sense àlies directe, equivalent en Linux: ls -l o stat
  ```

- **Canviar permisos** (no és un àlies directe, però pots usar `icacls`):  
  ```js 
  icacls "C:\Ruta\Fitxer.txt" /grant Usuari:(R)  # Equivalent en Linux: chmod
  ```

:::caution[Activitat]
Directoris
:::