---
title: "Introducción al terminal Windows"
description: "Introducción al terminal Windows"
---
## 1.Cómo abrir el terminal de PowerShell

1. **Desde el Menú de Inicio**:
   - Haz clic en el botón de Inicio o presiona la tecla de Windows.
   - Escribe "PowerShell" y selecciona **Windows PowerShell** o **PowerShell** (también puedes elegir **PowerShell (x86)** si necesitas la versión de 32 bits).

2. **Desde el Explorador de Archivos**:
   - Navega a cualquier carpeta.
   - Haz clic en la barra de direcciones, escribe `powershell` y presiona **Enter**.

3. **Con acceso rápido (Windows 10 y Windows 11)**:
   - Presiona **Win + X** y selecciona **Windows PowerShell** o **Windows Terminal** (que incluye PowerShell y otros shells como el símbolo del sistema o WSL).

### Cómo actualizar PowerShell a la última versión

1. **Instalación a través de Microsoft Store**
2. **Uso de Winget**:
   - Abre **PowerShell** con permisos de administrador.
   - Ejecuta el siguiente comando:
     ```powershell frame="none"
     winget install --id Microsoft.Powershell --source winget
     ```
   - Esto descargará e instalará la última versión disponible de PowerShell.

### Verificar la Versión de PowerShell

Para confirmar la versión actual, ejecuta el siguiente comando en PowerShell:
```powershell frame="none"
$PSVersionTable.PSVersion
```

## 2. **Navegación y Exploración de Directorios**

- **Ver el directorio actual**:  
  ```powershell frame="none"
  Get-Location  # Alias: pwd (equivalente en Linux: pwd)
  ```

- **Cambiar de directorio**:  
  ```powershell frame="none"
  Set-Location -Path "C:\Ruta\Directorio"  # Alias: cd (equivalente en Linux: cd)
  ```

- **Listar archivos y directorios**:  
  ```powershell frame="none"
  Get-ChildItem  # Alias: ls, dir (equivalente en Linux: ls)
  ```

### 2. **Gestión de Directorios**

- **Crear un nuevo directorio**:  
  ```powershell frame="none"
  New-Item -Path "C:\Ruta\NuevoDirectorio" -ItemType Directory  # Alias: mkdir (equivalente en Linux: mkdir)
  ```

- **Eliminar un directorio**:  
  ```powershell frame="none"
  Remove-Item -Path "C:\Ruta\Directorio" -Recurse  # Alias: rm (equivalente en Linux: rm -r)
  ```

- **Copiar un directorio**:  
  ```powershell frame="none"
  Copy-Item -Path "C:\Ruta\DirectorioOrigen" -Destination "C:\Ruta\DirectorioDestino" -Recurse  # Alias: cp (equivalente en Linux: cp -r)
  ```

- **Mover o renombrar un directorio**:  
  ```powershell frame="none"
  Move-Item -Path "C:\Ruta\DirectorioOrigen" -Destination "C:\Ruta\NuevoNombre"  # Alias: mv (equivalente en Linux: mv)
  ```

### 3. **Gestión de Archivos**

- **Crear un archivo**:  
  ```powershell frame="none"
  New-Item -Path "C:\Ruta\Archivo.txt" -ItemType File  # Sin alias directo, equivalente en Linux: touch
  ```

- **Escribir en un archivo**:  
  ```powershell frame="none"
  Set-Content -Path "C:\Ruta\Archivo.txt" -Value "Texto a escribir en el archivo"  # Sin alias directo, equivalente en Linux: echo "Texto" > archivo.txt
  ```

- **Añadir texto a un archivo**:  
  ```powershell frame="none"
  Add-Content -Path "C:\Ruta\Archivo.txt" -Value "Texto adicional"  # Sin alias directo, equivalente en Linux: echo "Texto" >> archivo.txt
  ```

- **Leer el contenido de un archivo**:  
  ```powershell frame="none"
  Get-Content -Path "C:\Ruta\Archivo.txt"  # Alias: cat (equivalente en Linux: cat)
  ```

- **Copiar un archivo**:  
  ```powershell frame="none"
  Copy-Item -Path "C:\Ruta\Archivo.txt" -Destination "C:\Ruta\CopiaArchivo.txt"  # Alias: cp (equivalente en Linux: cp)
  ```

- **Mover o renombrar un archivo**:  
  ```powershell frame="none"
  Move-Item -Path "C:\Ruta\Archivo.txt" -Destination "C:\Ruta\NuevoNombre.txt"  # Alias: mv (equivalente en Linux: mv)
  ```

- **Eliminar un archivo**:  
  ```powershell frame="none"
  Remove-Item -Path "C:\Ruta\Archivo.txt"  # Alias: rm (equivalente en Linux: rm)
  ```

### 4. **Buscar Archivos**

- **Buscar archivos por nombre**:  
  ```powershell frame="none"
  Get-ChildItem -Path "C:\Ruta" -Filter "*.txt" -Recurse  # Alias: ls -r *.txt (equivalente en Linux: find o ls -R *.txt)
  ```

- **Buscar archivos por palabra clave en el contenido**:  
  ```powershell frame="none"
  Select-String -Path "C:\Ruta\*.txt" -Pattern "palabraClave"  # Sin alias directo, equivalente en Linux: grep "palabraClave" *.txt
  ```

### 5. **Comprimir y Descomprimir Archivos**

- **Comprimir un directorio o archivo**:  
  ```powershell frame="none"
  Compress-Archive -Path "C:\Ruta\Directorio" -DestinationPath "C:\Ruta\Archivo.zip"  # Sin alias directo, equivalente en Linux: zip
  ```

- **Descomprimir un archivo**:  
  ```powershell frame="none"
  Expand-Archive -Path "C:\Ruta\Archivo.zip" -DestinationPath "C:\Ruta\Directorio"  # Sin alias directo, equivalente en Linux: unzip
  ```

### 6. **Permisos y Propiedades de Archivos**

- **Ver propiedades de un archivo o directorio**:  
  ```powershell frame="none"
  Get-Item -Path "C:\Ruta\Archivo.txt" | Format-List *  # Sin alias directo, equivalente en Linux: ls -l o stat
  ```

- **Cambiar permisos** (no es un alias directo, pero puedes usar `icacls`):  
  ```powershell frame="none"
  icacls "C:\Ruta\Archivo.txt" /grant Usuario:(R)  # Equivalente en Linux: chmod
  ```

:::caution[Actividad]
Directorios
:::