# Regenera las portadas (GBP, YouTube, Facebook, LinkedIn) con el titular del servicio a la medida.
# Sin dependencias: System.Drawing de Windows. Correr: powershell -File redes/generar-portadas.ps1
# El logo (solty-fb-perfil.png) es la fuente; el texto sale del mensaje lider de canon.json (servicio).
Add-Type -AssemblyName System.Drawing
$dir = $PSScriptRoot; $out = $PSScriptRoot
$raw = New-Object System.Drawing.Bitmap("$dir/solty-fb-perfil.png"); $logo = New-Object System.Drawing.Bitmap($raw); $raw.Dispose()
$bg = $logo.GetPixel(5,5)
$blue = [System.Drawing.Color]::FromArgb(255,58,169,235)
$grey = [System.Drawing.Color]::FromArgb(255,205,214,225)
$white = [System.Drawing.Color]::White
Write-Output ("bg " + $bg.R + "," + $bg.G + "," + $bg.B)
function Make($w,$h,$out,$logoSize,$fTitle,$fSub,$fUrl,$sub) {
  $bmp = New-Object System.Drawing.Bitmap $w,$h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'; $g.InterpolationMode = 'HighQualityBicubic'; $g.TextRenderingHint = 'AntiAliasGridFit'
  $g.Clear($bg)
  # líneas decorativas tenues a los lados
  $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(70,40,110,150)),2
  $pts = @(@(0.06,0.15),@(0.12,0.28),@(0.07,0.45),@(0.14,0.62),@(0.06,0.78))
  for($i=0;$i -lt $pts.Count-1;$i++){ $g.DrawLine($pen,[float]($pts[$i][0]*$w),[float]($pts[$i][1]*$h),[float]($pts[$i+1][0]*$w),[float]($pts[$i+1][1]*$h)); $g.DrawLine($pen,[float]((1-$pts[$i][0])*$w),[float]($pts[$i][1]*$h),[float]((1-$pts[$i+1][0])*$w),[float]($pts[$i+1][1]*$h)) }
  $fT = New-Object System.Drawing.Font 'Segoe UI',$fTitle,([System.Drawing.FontStyle]::Bold),'Pixel'
  $fS = New-Object System.Drawing.Font 'Segoe UI',$fSub,([System.Drawing.FontStyle]::Regular),'Pixel'
  $fU = New-Object System.Drawing.Font 'Segoe UI',$fUrl,([System.Drawing.FontStyle]::Bold),'Pixel'
  $sf = [System.Drawing.StringFormat]::GenericTypographic
  $wSolty = $g.MeasureString('Solty',$fT,10000,$sf).Width
  $wAI = $g.MeasureString('AI',$fT,10000,$sf).Width
  $wSub = $g.MeasureString($sub,$fS,10000,$sf).Width
  $textW = [Math]::Max($wSolty+$wAI, $wSub)
  $gap = [int]($logoSize*0.18)
  $totalW = $logoSize + $gap + $textW
  $x0 = ($w - $totalW)/2
  $y0 = ($h - $logoSize)/2
  $g.DrawImage($logo, [float]$x0, [float]$y0, [float]$logoSize, [float]$logoSize)
  $tx = $x0 + $logoSize + $gap
  $blockH = $fTitle*1.32 + $fSub*1.6 + $fUrl*1.4
  $ty = ($h - $blockH)/2 - $fTitle*0.12
  $g.DrawString('Solty',$fT,(New-Object System.Drawing.SolidBrush $white),[float]$tx,[float]$ty,$sf)
  $g.DrawString('AI',$fT,(New-Object System.Drawing.SolidBrush $blue),[float]($tx+$wSolty+$fTitle*0.1),[float]$ty,$sf)
  $ty += $fTitle*1.32
  $g.DrawString($sub,$fS,(New-Object System.Drawing.SolidBrush $grey),[float]$tx,[float]$ty,$sf)
  $ty += $fSub*1.6
  $g.DrawString('soltyai.com',$fU,(New-Object System.Drawing.SolidBrush $blue),[float]$tx,[float]$ty,$sf)
  $g.Dispose()
  $bmp.Save($out,[System.Drawing.Imaging.ImageFormat]::Png); $bmp.Dispose()
  Write-Output "ok $out"
}
$sub = 'Software a la medida para negocios colombianos.'
Make 2048 1152 "$out/solty-gbp-portada.png" 400 150 56 46 $sub
Make 2048 1152 "$out/solty-yt-banner.png" 400 150 56 46 $sub
Make 1640 624 "$out/solty-fb-portada.png" 300 110 42 36 $sub
Make 1128 191 "$out/soltyai-linkedin-banner-1128x191.png" 140 46 20 17 $sub
$logo.Dispose()
