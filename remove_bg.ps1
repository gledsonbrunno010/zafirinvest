Add-Type -AssemblyName System.Drawing

$sourcePath = "$PSScriptRoot\src\assets\logo-zafir-nano-pro.png"
$destPath = "$PSScriptRoot\src\assets\logo-zafir-final.png"

# Check if source exists
if (-not (Test-Path $sourcePath)) {
    Write-Error "File not found: $sourcePath"
    exit 1
}

$bmp = [System.Drawing.Bitmap]::FromFile($sourcePath)
$width = $bmp.Width
$height = $bmp.Height

# Create a new bitmap for the output with Alpha capability
$outBmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($outBmp)
$g.DrawImage($bmp, 0, 0, $width, $height)
$g.Dispose()

# Get background colors from corners
$bg1 = $outBmp.GetPixel(0, 0)
# Sample a bit further for checkerboard
$bg2 = $outBmp.GetPixel(20, 0) # Assuming 20px offset hits the other color

Write-Host "BG1: $bg1"
Write-Host "BG2: $bg2"

$tolerance = 30 # value between 0-255

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $p = $outBmp.GetPixel($x, $y)
        
        # Calculate distance to BG1
        $d1 = [Math]::Sqrt([Math]::Pow($p.R - $bg1.R, 2) + [Math]::Pow($p.G - $bg1.G, 2) + [Math]::Pow($p.B - $bg1.B, 2))
        
        # Calculate distance to BG2
        $d2 = [Math]::Sqrt([Math]::Pow($p.R - $bg2.R, 2) + [Math]::Pow($p.G - $bg2.G, 2) + [Math]::Pow($p.B - $bg2.B, 2))
        
        if ($d1 -lt $tolerance -or $d2 -lt $tolerance) {
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        }
    }
    if ($y % 100 -eq 0) { Write-Host "Processed row $y..." }
}

$outBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$outBmp.Dispose()
$bmp.Dispose()

Write-Host "Done! Saved to $destPath"
