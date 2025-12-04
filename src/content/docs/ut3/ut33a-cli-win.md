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

## Tabla de Comandos de Consola

### 🧭 Navegación y Exploración de Directorios

| Tarea | **`CMD (MS-DOS)`** | **`PowerShell`** | **`Alias de PowerShell`** |
| :--- | :--- | :--- | :--- |
| **Mostrar directorio actual** | **`cd`** | **`Get-Location`** | **`gl`, `pwd`** |
| Ejemplo | `cd` | `Get-Location` | `pwd` |
| **Cambiar directorio** | **`cd [ruta]`** | **`Set-Location [ruta]`** | **`sl`, `cd`** |
| Ejemplo | `cd C:\Users\Admin` | `Set-Location C:\Datos` | `cd \` |
| **Listar contenido del directorio** | **`dir`** | **`Get-ChildItem`** | **`gci`, `ls`, `dir`** |
| Ejemplo | `dir /p` (página a página) | `Get-ChildItem -Force` (incluir ocultos) | `ls` |

### 📁 Gestión de Directorios

| Tarea | **`CMD (MS-DOS)`** | **`PowerShell`** | **`Alias de PowerShell`** |
| :--- | :--- | :--- | :--- |
| **Crear nuevo directorio** | **`mkdir [nombre]`** | **`New-Item -ItemType Directory -Name [nombre]`** | **`md`, `ni`** |
| Ejemplo | `mkdir ProyectosFP` | `New-Item -ItemType Directory -Name 'Backup Mayo'` | `md Clientes` |
| **Eliminar directorio (vacío)** | **`rmdir [nombre]`** | **`Remove-Item [nombre]`** | **`ri`, `rd`** |
| Ejemplo | `rmdir Temp` | `Remove-Item Temp` | `rd Fotos` |
| **Eliminar directorio (con contenido)** | **`rmdir /s [nombre]`** | **`Remove-Item -Recurse [nombre]`** | **`ri`** |
| Ejemplo | `rmdir /s Logs` | `Remove-Item -Recurse Logs` | `ri -Recurse Logs` |

### 📄 Gestión de Archivos

| Tarea | **`CMD (MS-DOS)`** | **`PowerShell`** | **`Alias de PowerShell`** |
| :--- | :--- | :--- | :--- |
| **Crear archivo vacío** | **`type nul > [nombre.ext]`** | **`New-Item -ItemType File -Name [nombre.ext]`** | **`ni`** |
| Ejemplo | `type nul > readme.txt` | `New-Item -ItemType File -Name 'config.ini'` | `ni test.log` |
| **Copiar archivo** | **`copy [origen] [destino]`** | **`Copy-Item [origen] [destino]`** | **`cpi`, `cp`** |
| Ejemplo | `copy informe.pdf D:\` | `Copy-Item informe.pdf D:\` | `cp hosts c:\temp` |
| **Mover/Renombrar archivo** | **`move [origen] [destino]`** | **`Move-Item [origen] [destino]`** | **`mi`, `mv`** |
| Ejemplo | `move doc.txt informe.txt` | `Move-Item doc.txt informe.txt` | `mv doc.txt informe.txt` |
| **Eliminar archivo** | **`del [nombre.ext]`** | **`Remove-Item [nombre.ext]`** | **`ri`, `del`** |
| Ejemplo | `del temporal.tmp` | `Remove-Item temporal.tmp` | `del *.bak` |
| **Mostrar contenido de un archivo** | **`type [nombre.ext]`** | **`Get-Content [nombre.ext]`** | **`gc`, `cat`** |
| Ejemplo | `type error.log` | `Get-Content error.log -Tail 5` | `cat error.log` |

### 🔎 Búsqueda de Archivos y Texto

| Tarea | **`CMD (MS-DOS)`** | **`PowerShell`** | **`Alias de PowerShell`** |
| :--- | :--- | :--- | :--- |
| **Buscar texto en archivo** | **`find "[texto]" [archivo]`** | **`Select-String -Pattern "[texto]" -Path [archivo]`** | **`sls`** |
| Ejemplo | `find "error" log.txt` | `Select-String -Pattern "error" -Path log.txt` | `sls "red" *.log` |
| **Buscar Archivo por nombre** | *No aplica un comando simple* | **`Get-ChildItem -Filter "[patrón]"`** | **`gci -fi "[patrón]"`** |
| Ejemplo | *N/A* | `Get-ChildItem -Filter *.pdf` | `gci -fi *.pdf` |

¡Absolutamente! El comando **`attrib`** es clave para entender las propiedades básicas de los archivos en CMD, algo que deben dominar.

Aquí tienes la tabla ajustada para enfocarse en **`attrib`** y una breve explicación de los valores que maneja, que son los atributos básicos del sistema de archivos.

### 🔒 Atributos y Propiedades de Archivos (Windows)

| Tarea | **`CMD (MS-DOS)`** | **`PowerShell`** | **`Alias de PowerShell`** |
| :--- | :--- | :--- | :--- |
| **Mostrar/Modificar Atributos** | **`attrib [+-][R\|H]`** | **`Get-ItemProperty`** | **`gip`** |
| Ejemplo Mostrar | `attrib informe.pdf` | `(Get-Item informe.pdf).Attributes` | `gip informe.pdf` |
| Ejemplo Modificar | `attrib +R +H informe.pdf` | `(Get-Item informe.pdf).IsReadOnly = $true` |  `(gip informe.pdf).IsReadOnly = $true` |

* **Sintaxis:** Se usa el signo **`+`** para establecer el atributo y **`-`** para quitarlo.
* **Ejemplo:** Para hacer un archivo oculto y de solo lectura: `attrib +H +R archivo.txt`
