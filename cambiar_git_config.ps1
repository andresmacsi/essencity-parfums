Write-Host "Cambiando configuración de Git..." -ForegroundColor Green
git config user.name "andresmacsi"
git config user.email "andresmacsi@gmail.com"
Write-Host "Configuración actualizada:" -ForegroundColor Green
Write-Host "Nombre de usuario: $(git config user.name)" -ForegroundColor Cyan
Write-Host "Correo electrónico: $(git config user.email)" -ForegroundColor Cyan
Write-Host "Presiona cualquier tecla para continuar..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
