---
title: "Terminal Windows"
description: "Introducción al terminal Windows"
---

## Introducción al terminal de PowerShell
### Cómo abrir el terminal de PowerShell 

1. Desde el Menú de Inicio
2. Desde el Explorador de Archivos
3. Con acceso rápido (Presiona **Win + X**)
### Cómo actualizar PowerShell a la última versión
```js 
winget install --id Microsoft.Powershell --source winget
```
### Verificar la Versión de PowerShell
```js
$PSVersionTable.PSVersion
```
### Estructura y uso de cmdlets
Los comandos de PowerShell, conocidos como **cmdlets**, tienen una estructura específica que facilita su uso y comprensión. Aquí te explico cómo se estructuran:

1. **Verbo-Sustantivo**: Cada cmdlet sigue la convención de nombre `Verbo-Sustantivo`. Por ejemplo, `Get-Process` (obtener proceso) o `Stop-Service` (detener servicio). Esto ayuda a entender rápidamente qué hace el cmdlet.

2. **Parámetros**: Los cmdlets pueden aceptar parámetros que modifican su comportamiento. Los parámetros se añaden después del cmdlet, separados por espacios. Por ejemplo, `Get-Process -Name "notepad"` obtiene información sobre el proceso de Notepad.

3. **Pipelines**: PowerShell permite encadenar cmdlets usando el operador `|` (pipe). Esto pasa la salida de un cmdlet como entrada a otro. Por ejemplo, `Get-Process | Where-Object {$_.CPU -gt 100}` filtra los procesos que usan más de 100 unidades de CPU.

4. **Alias**: PowerShell también soporta alias, que son nombres cortos para cmdlets. Por ejemplo, `ls` es un alias para `Get-ChildItem`.

5. **Ayuda**: Puedes obtener ayuda sobre cualquier cmdlet usando `Get-Help`. Por ejemplo, `Get-Help Get-Process` muestra información detallada sobre el cmdlet `Get-Process`.

```js
Get-Process -Name "notepad" | Stop-Process
#Este comando obtiene el proceso de Notepad y luego lo detiene.
```

## 2. **Navegación y Exploración de Directorios**

- **Ver el directorio actual**:  
  ```js
  Get-Location  # Alias: pwd (equivalente en Linux: pwd)
  ```

- **Cambiar de directorio**:  
  ```js
  Set-Location -Path "C:\Ruta\Directorio"  # Alias: cd (equivalente en Linux: cd)
  ```

- **Listar archivos y directorios**:  
  ```js
  Get-ChildItem  # Alias: ls, dir (equivalente en Linux: ls)
  ```

### 2. **Gestión de Directorios**

- **Crear un nuevo directorio**:  
  ```js
  New-Item -Path "C:\Ruta\NuevoDirectorio" -ItemType Directory  # Alias: mkdir (equivalente en Linux: mkdir)
  ```

- **Eliminar un directorio**:  
  ```js
  Remove-Item -Path "C:\Ruta\Directorio" -Recurse  # Alias: rm (equivalente en Linux: rm -r)
  ```

- **Copiar un directorio**:  
  ```js
  Copy-Item -Path "C:\Ruta\DirectorioOrigen" -Destination "C:\Ruta\DirectorioDestino" -Recurse  # Alias: cp (equivalente en Linux: cp -r)
  ```

- **Mover o renombrar un directorio**:  
  ```js
  Move-Item -Path "C:\Ruta\DirectorioOrigen" -Destination "C:\Ruta\NuevoNombre"  # Alias: mv (equivalente en Linux: mv)
  ```

### 3. **Gestión de Archivos**

- **Crear un archivo**:  
  ```js
  New-Item -Path "C:\Ruta\Archivo.txt" -ItemType File  # Sin alias directo, equivalente en Linux: touch
  ```

- **Escribir en un archivo**:  
  ```js
  Set-Content -Path "C:\Ruta\Archivo.txt" -Value "Texto a escribir en el archivo"  # Sin alias directo, equivalente en Linux: echo "Texto" > archivo.txt
  ```

- **Añadir texto a un archivo**:  
  ```js
  Add-Content -Path "C:\Ruta\Archivo.txt" -Value "Texto adicional"  # Sin alias directo, equivalente en Linux: echo "Texto" >> archivo.txt
  ```

- **Leer el contenido de un archivo**:  
  ```js
  Get-Content -Path "C:\Ruta\Archivo.txt"  # Alias: cat (equivalente en Linux: cat)
  ```

- **Copiar un archivo**:  
  ```js
  Copy-Item -Path "C:\Ruta\Archivo.txt" -Destination "C:\Ruta\CopiaArchivo.txt"  # Alias: cp (equivalente en Linux: cp)
  ```

- **Mover o renombrar un archivo**:  
  ```js
  Move-Item -Path "C:\Ruta\Archivo.txt" -Destination "C:\Ruta\NuevoNombre.txt"  # Alias: mv (equivalente en Linux: mv)
  ```

- **Eliminar un archivo**:  
  ```js
  Remove-Item -Path "C:\Ruta\Archivo.txt"  # Alias: rm (equivalente en Linux: rm)
  ```

### 4. **Buscar Archivos**

- **Buscar archivos por nombre**:  
  ```js
  Get-ChildItem -Path "C:\Ruta" -Filter "*.txt" -Recurse  # Alias: ls -r *.txt (equivalente en Linux: find o ls -R *.txt)
  ```

- **Buscar archivos por palabra clave en el contenido**:  
  ```js
  Select-String -Path "C:\Ruta\*.txt" -Pattern "palabraClave"  # Sin alias directo, equivalente en Linux: grep "palabraClave" *.txt
  ```

### 5. **Comprimir y Descomprimir Archivos**

- **Comprimir un directorio o archivo**:  
  ```js
  Compress-Archive -Path "C:\Ruta\Directorio" -DestinationPath "C:\Ruta\Archivo.zip"  # Sin alias directo, equivalente en Linux: zip
  ```

- **Descomprimir un archivo**:  
  ```js
  Expand-Archive -Path "C:\Ruta\Archivo.zip" -DestinationPath "C:\Ruta\Directorio"  # Sin alias directo, equivalente en Linux: unzip
  ```

### 6. **Permisos y Propiedades de Archivos**

- **Ver propiedades de un archivo o directorio**:  
  ```js
  Get-Item -Path "C:\Ruta\Archivo.txt" | Format-List *  # Sin alias directo, equivalente en Linux: ls -l o stat
  ```

- **Cambiar permisos** (no es un alias directo, pero puedes usar `icacls`):  
  ```js
  icacls "C:\Ruta\Archivo.txt" /grant Usuario:(R)  # Equivalente en Linux: chmod
  ```

:::caution[Actividad]
Directorios
:::