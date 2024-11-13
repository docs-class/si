---
title: "Introducció al terminal Windows"
description: "Introducció al terminal Windows"
---

## 1. Com obrir el terminal de PowerShell

1. **Des del Menú d'Inici**:
   - Fes clic en el botó d'Inici o prem la tecla de Windows.
   - Escriu "PowerShell" i selecciona **Windows PowerShell** o **PowerShell** (també pots triar **PowerShell (x86)** si necessites la versió de 32 bits).

2. **Des de l'Explorador de Fitxers**:
   - Navega a qualsevol carpeta.
   - Fes clic en la barra de direccions, escriu `powershell` i prem **Enter**.

3. **Amb accés ràpid (Windows 10 i Windows 11)**:
   - Prem **Win + X** i selecciona **Windows PowerShell** o **Windows Terminal** (que inclou PowerShell i altres shells com el símbol del sistema o WSL).

### Com actualitzar PowerShell a l'última versió

1. **Instal·lació a través de Microsoft Store**
2. **Ús de Winget**:
   - Obri **PowerShell** amb permisos d'administrador.
   - Executa el següent comandament:
     ```powershell frame="none"
     winget install --id Microsoft.Powershell --source winget
     ```
   - Això descarregarà i instal·larà l'última versió disponible de PowerShell.

### Verificar la Versió de PowerShell

Per confirmar la versió actual, executa el següent comandament en PowerShell:
```powershell frame="none"
$PSVersionTable.PSVersion
```

## 2. **Navegació i Exploració de Directoris**

- **Veure el directori actual**:  
  ```powershell frame="none"
  Get-Location  # Alias: pwd (equivalent en Linux: pwd)
  ```

- **Canviar de directori**:  
  ```powershell frame="none"
  Set-Location -Path "C:\Ruta\Directori"  # Alias: cd (equivalent en Linux: cd)
  ```

- **Llistar fitxers i directoris**:  
  ```powershell frame="none"
  Get-ChildItem  # Alias: ls, dir (equivalent en Linux: ls)
  ```

### 2. **Gestió de Directoris**

- **Crear un nou directori**:  
  ```powershell frame="none"
  New-Item -Path "C:\Ruta\NouDirectori" -ItemType Directory  # Alias: mkdir (equivalent en Linux: mkdir)
  ```

- **Eliminar un directori**:  
  ```powershell frame="none"
  Remove-Item -Path "C:\Ruta\Directori" -Recurse  # Alias: rm (equivalent en Linux: rm -r)
  ```

- **Copiar un directori**:  
  ```powershell frame="none"
  Copy-Item -Path "C:\Ruta\DirectoriOrigen" -Destination "C:\Ruta\DirectoriDestí" -Recurse  # Alias: cp (equivalent en Linux: cp -r)
  ```

- **Moure o renombrar un directori**:  
  ```powershell frame="none"
  Move-Item -Path "C:\Ruta\DirectoriOrigen" -Destination "C:\Ruta\NouNom"  # Alias: mv (equivalent en Linux: mv)
  ```

### 3. **Gestió de Fitxers**

- **Crear un fitxer**:  
  ```powershell frame="none"
  New-Item -Path "C:\Ruta\Fitxer.txt" -ItemType File  # Sense alias directe, equivalent en Linux: touch
  ```

- **Escriure en un fitxer**:  
  ```powershell frame="none"
  Set-Content -Path "C:\Ruta\Fitxer.txt" -Value "Text a escriure en el fitxer"  # Sense alias directe, equivalent en Linux: echo "Text" > fitxer.txt
  ```

- **Afegir text a un fitxer**:  
  ```powershell frame="none"
  Add-Content -Path "C:\Ruta\Fitxer.txt" -Value "Text addicional"  # Sense alias directe, equivalent en Linux: echo "Text" >> fitxer.txt
  ```

- **Llegir el contingut d'un fitxer**:  
  ```powershell frame="none"
  Get-Content -Path "C:\Ruta\Fitxer.txt"  # Alias: cat (equivalent en Linux: cat)
  ```

- **Copiar un fitxer**:  
  ```powershell frame="none"
  Copy-Item -Path "C:\Ruta\Fitxer.txt" -Destination "C:\Ruta\CopiaFitxer.txt"  # Alias: cp (equivalent en Linux: cp)
  ```

- **Moure o renombrar un fitxer**:  
  ```powershell frame="none"
  Move-Item -Path "C:\Ruta\Fitxer.txt" -Destination "C:\Ruta\NouNom.txt"  # Alias: mv (equivalent en Linux: mv)
  ```

- **Eliminar un fitxer**:  
  ```powershell frame="none"
  Remove-Item -Path "C:\Ruta\Fitxer.txt"  # Alias: rm (equivalent en Linux: rm)
  ```

### 4. **Cercar Fitxers**

- **Cercar fitxers per nom**:  
  ```powershell frame="none"
  Get-ChildItem -Path "C:\Ruta" -Filter "*.txt" -Recurse  # Alias: ls -r *.txt (equivalent en Linux: find o ls -R *.txt)
  ```

- **Cercar fitxers per paraula clau en el contingut**:  
  ```powershell frame="none"
  Select-String -Path "C:\Ruta\*.txt" -Pattern "paraulaClau"  # Sense alias directe, equivalent en Linux: grep "paraulaClau" *.txt
  ```

### 5. **Comprimir i Descomprimir Fitxers**

- **Comprimir un directori o fitxer**:  
  ```powershell frame="none"
  Compress-Archive -Path "C:\Ruta\Directori" -DestinationPath "C:\Ruta\Fitxer.zip"  # Sense alias directe, equivalent en Linux: zip
  ```

- **Descomprimir un fitxer**:  
  ```powershell frame="none"
  Expand-Archive -Path "C:\Ruta\Fitxer.zip" -DestinationPath "C:\Ruta\Directori"  # Sense alias directe, equivalent en Linux: unzip
  ```

### 6. **Permisos i Propietats de Fitxers**

- **Veure propietats d'un fitxer o directori**:  
  ```powershell frame="none"
  Get-Item -Path "C:\Ruta\Fitxer.txt" | Format-List *  # Sense alias directe, equivalent en Linux: ls -l o stat
  ```

- **Canviar permisos** (no és un alias directe, però pots usar `icacls`):  
  ```powershell frame="none"
  icacls "C:\Ruta\Fitxer.txt" /grant Usuari:(R)  # Equivalent en Linux: chmod
  ```

:::caution[Activitat]
Directoris
:::