# Check for dependency
if (!(Get-Command 'magick' -ErrorAction SilentlyContinue) -and !(Get-Command 'ffmpeg' -ErrorAction SilentlyContinue)) {
    Write-Host "Error: Neither 'magick' (ImageMagick) nor 'ffmpeg' were found on your system." -ForegroundColor Red
    Write-Host "Please install one of them to proceed with WebP optimization." -ForegroundColor Yellow
    exit 1
}

$imagesDir = "public/assets/images"
$images = Get-ChildItem -Path $imagesDir -Filter "*.jpg" -Recurse
$images += Get-ChildItem -Path $imagesDir -Filter "*.png" -Recurse
$images += Get-ChildItem -Path $imagesDir -Filter "*.jpeg" -Recurse

foreach ($img in $images) {
    $webpPath = [System.IO.Path]::ChangeExtension($img.FullName, ".webp")
    if (!(Test-Path $webpPath)) {
        Write-Host "Optimizing: $($img.Name)..." -ForegroundColor Cyan
        if (Get-Command 'magick' -ErrorAction SilentlyContinue) {
            magick "$($img.FullName)" -quality 85 "$webpPath"
        } elseif (Get-Command 'ffmpeg' -ErrorAction SilentlyContinue) {
            ffmpeg -i "$($img.FullName)" -q:v 85 "$webpPath" -loglevel error
        }
    } else {
        Write-Host "Skipping: $($img.Name) (WebP already exists)" -ForegroundColor Gray
    }
}

Write-Host "Optimization complete! You should now update your <img> tags to use the .webp extension for better performance." -ForegroundColor Green
