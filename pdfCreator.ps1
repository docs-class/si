# Lista de archivos (sin extensión)
$archivos = @(
  'ut1/ut11'
  'ut1/ut11-info'
  'ut1/ut11-post'
  'ut1/ut11-arch'
  'ut1/ut11-cpu'
  'ut1/ut11-mb'
  'ut1/ut11-box'
  'ut1/ut11-ram'
  'ut1/ut11-gpu'
  'ut1/ut11-hdd'
  'ut1/ut11-interfaces'
  'ut1/ut11-raid'
  'ut1/ut11-other'
)

Set-Location C:\Users\mario\Desktop\docs\si\src\content\docs\es

# Extraer la unidad del primer archivo - CORREGIDO
$primerArchivo = (Get-Content -Path ($archivos[0] + ".md") -First 1)

# Archivo de salida
$salida = "ut1_es.md"

# Eliminar el archivo de salida si ya existe
if (Test-Path $salida) {
  Remove-Item $salida
}

# Bucle para concatenar los archivos
foreach ($archivo in $archivos) {
  Get-Content ($archivo + ".md") | Out-File -FilePath $salida -Append
  Add-Content -Path $salida -Value "`n"  # Agregar una línea vacía entre archivos
}

Write-Host "Archivo '$salida' creado con éxito."