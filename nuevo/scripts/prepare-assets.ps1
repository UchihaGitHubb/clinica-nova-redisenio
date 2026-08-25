# =============================================================
#  Preparación de recursos reales de Clínica Nova
#
#  Copia desde /original (SOLO LECTURA, nunca se modifica) hacia
#  /nuevo/public/images los recursos verificados como utilizables.
#
#  Aplica a la fotografía la corrección de color única que exige
#  docs/04-DESIGN-SYSTEM.md §17.4, en el archivo y no en CSS:
#    · saturación  −6 %   (el material se produjo para convivir
#                          con azules; sobre fondo cálido desentona)
#    · temperatura  +150 K equivalente (R ×1.02, B ×0.98)
#    · negros       +2 %   (el negro absoluto resulta duro sobre
#                          fondo cálido)
#
#  Los logotipos de terceros NO se corrigen: §16.7 exige respetar
#  los colores del aliado. Los logotipos de Nova tampoco: son marca.
#
#  Ejecutar desde /nuevo:  pwsh ./scripts/prepare-assets.ps1
# =============================================================

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path (Split-Path -Parent $root) 'original\NovaOri_files'
$out = Join-Path $root 'public\images'

if (-not (Test-Path $src)) { throw "No se encuentra el origen: $src" }

foreach ($d in 'hero', 'clinica', 'logos', 'procedimientos') {
  $p = Join-Path $out $d
  if (-not (Test-Path $p)) { New-Item -ItemType Directory -Force -Path $p | Out-Null }
}

# --- Matriz de corrección de color (§17.4) -------------------
function New-CorrectionMatrix {
  param([single]$Saturation = 0.94, [single]$WarmR = 1.02, [single]$WarmB = 0.98, [single]$BlackLift = 0.02)

  # Pesos de luminancia Rec.709
  $lr = 0.2126; $lg = 0.7152; $lb = 0.0722
  $s = $Saturation; $i = 1 - $s

  # GDI+ multiplica el color como vector fila por la matriz, de modo
  # que cada COLUMNA reúne las contribuciones a un canal de salida.
  # El ajuste de temperatura escala la columna roja y la azul.
  # PowerShell no puede pasar una matriz 2D al constructor, así que
  # se usan las propiedades MatrixIJ.
  $m = New-Object System.Drawing.Imaging.ColorMatrix
  $m.Matrix00 = ($lr * $i + $s) * $WarmR
  $m.Matrix10 = ($lg * $i) * $WarmR
  $m.Matrix20 = ($lb * $i) * $WarmR
  $m.Matrix01 = $lr * $i
  $m.Matrix11 = $lg * $i + $s
  $m.Matrix21 = $lb * $i
  $m.Matrix02 = ($lr * $i) * $WarmB
  $m.Matrix12 = ($lg * $i) * $WarmB
  $m.Matrix22 = ($lb * $i + $s) * $WarmB
  $m.Matrix33 = 1
  $m.Matrix40 = $BlackLift
  $m.Matrix41 = $BlackLift
  $m.Matrix42 = $BlackLift
  $m.Matrix44 = 1

  return $m
}

function Convert-Photo {
  param([string]$From, [string]$To, [int]$Quality = 86)

  $img = [System.Drawing.Image]::FromFile($From)
  $w = $img.Width; $h = $img.Height
  try {
    $bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    try {
      $g = [System.Drawing.Graphics]::FromImage($bmp)
      $attr = New-Object System.Drawing.Imaging.ImageAttributes
      try {
        $attr.SetColorMatrix((New-CorrectionMatrix))
        $g.PixelOffsetMode = 'HighQuality'
        $rect = New-Object System.Drawing.Rectangle(0, 0, $img.Width, $img.Height)
        $g.DrawImage($img, $rect, 0, 0, $img.Width, $img.Height, [System.Drawing.GraphicsUnit]::Pixel, $attr)
      }
      finally { $g.Dispose(); $attr.Dispose() }

      $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
      $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
      $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]$Quality)
      $bmp.Save($To, $codec, $ep)
      $ep.Dispose()
    }
    finally { $bmp.Dispose() }
  }
  finally { $img.Dispose() }

  $kb = [math]::Round((Get-Item $To).Length / 1024)
  Write-Host ("  foto     {0,-30} {1}x{2}  {3} KB" -f (Split-Path $To -Leaf), $w, $h, $kb)
}

function Resize-Png {
  param([string]$From, [string]$To, [int]$Width)

  $img = [System.Drawing.Image]::FromFile($From)
  try {
    $h = [int][math]::Round($Width * $img.Height / $img.Width)
    $bmp = New-Object System.Drawing.Bitmap($Width, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    try {
      $g = [System.Drawing.Graphics]::FromImage($bmp)
      try {
        $g.CompositingMode = 'SourceCopy'
        $g.CompositingQuality = 'HighQuality'
        $g.InterpolationMode = 'HighQualityBicubic'
        $g.SmoothingMode = 'HighQuality'
        $g.PixelOffsetMode = 'HighQuality'
        $g.DrawImage($img, 0, 0, $Width, $h)
      }
      finally { $g.Dispose() }
      Remove-BlackMatte $bmp
      $bmp.Save($To, [System.Drawing.Imaging.ImageFormat]::Png)
      Write-Host ("  logo     {0,-34} {1}x{2}  {3} KB" -f (Split-Path $To -Leaf), $Width, $h, [math]::Round((Get-Item $To).Length / 1024))
    }
    finally { $bmp.Dispose() }
  }
  finally { $img.Dispose() }
}

# Los PNG de marca de la web actual van sobre negro opaco. Sin este
# recorte, el logotipo sería un rectángulo negro sobre la cabecera
# arena y sobre el hero profundo. Solo se elimina el mate negro
# acromático: el teal de la variante en color se conserva.
function Remove-BlackMatte {
  param([System.Drawing.Bitmap]$Bitmap)

  for ($y = 0; $y -lt $Bitmap.Height; $y++) {
    for ($x = 0; $x -lt $Bitmap.Width; $x++) {
      $p = $Bitmap.GetPixel($x, $y)
      $max = [Math]::Max($p.R, [Math]::Max($p.G, $p.B))
      $min = [Math]::Min($p.R, [Math]::Min($p.G, $p.B))
      $achromatic = ($max - $min) -lt 12
      if ($achromatic -and $max -lt 28) {
        $Bitmap.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $p.R, $p.G, $p.B))
      }
    }
  }
}

Write-Host "`nFotografía — con corrección de color §17.4"

# Hero: interior de la sede. Es la única fotografía disponible sin
# pacientes ni contenido quirúrgico, y su madera cálida convive con
# la paleta arena. Los dos fondos de hero originales no están en
# /original: solo se declaraban en el CSS compilado [R02 §3.1].
Convert-Photo `
  -From (Join-Path $src 'clinica-nova-cirugia-plastica-y-estetica-en-medellin.jpg') `
  -To (Join-Path $out 'hero\sede-interior.jpg')

# Propuesta de valor: vista aérea del edificio. Sostiene el único
# diferencial de infraestructura verificable, la NOVA Torre Médica.
Convert-Photo `
  -From (Join-Path $src 'clinica-nova-cirugia-plastica-cirugia-estetica-colombia.jpg') `
  -To (Join-Path $out 'clinica\torre-medica.jpg')

# Especialistas: equipo quirúrgico. No hay retratos, y esta es la
# única fotografía real del equipo. El paciente está íntegramente
# cubierto y no hay anatomía ni instrumental a la vista.
Convert-Photo `
  -From (Join-Path $src 'cirujanos-plasticos-en-medellin-cirugia-plastica-y-estetica-colombia-clinica-nova.jpg') `
  -To (Join-Path $out 'clinica\equipo-quirurgico.jpg')

Write-Host "`nLogotipos — sin corrección de color"

# Cabecera sólida y pie. 32 px de alto → 110 px de ancho; 688 px
# cubre 2x holgadamente (§33.1).
Resize-Png `
  -From (Join-Path $src 'Perfil-para-redes_LOGO-WEB-CLINICA-NOVA.png') `
  -To (Join-Path $out 'logos\clinica-nova.png') -Width 688

# Cabecera sobre el hero. El original mide 8000 px: §33.1 exige
# reescalarlo antes de servirlo.
Resize-Png `
  -From (Join-Path $src 'Clinica-Nova_Logo-Blanco.png') `
  -To (Join-Path $out 'logos\clinica-nova-blanco.png') -Width 688

Write-Host "`nLogotipos de terceros — colores del aliado intactos (§16.7)"
Copy-Item (Join-Path $src 'logo-servicredito.png') (Join-Path $out 'logos\servicredito.png') -Force
Copy-Item (Join-Path $src 'logo-cfa.png') (Join-Path $out 'logos\cfa.png') -Force
Write-Host "  copiados servicredito.png y cfa.png"

Write-Host "`nListo.`n"
