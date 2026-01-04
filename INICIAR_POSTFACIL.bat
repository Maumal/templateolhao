@echo off
echo ========================================
echo    POSTFACIL - Iniciando...
echo ========================================
echo.
echo Abrindo o PostFacil no seu navegador...
echo (Nao feche esta janela enquanto estiver usando)
echo.

:: Verifica se Python está instalado
python --version >nul 2>&1
if %errorlevel% == 0 (
    start http://localhost:8000
    python -m http.server 8000
    goto :end
)

python3 --version >nul 2>&1
if %errorlevel% == 0 (
    start http://localhost:8000
    python3 -m http.server 8000
    goto :end
)

:: Se não tem Python, abre direto (pode ter limitações)
echo AVISO: Python nao encontrado.
echo Abrindo direto no navegador (algumas funcoes podem nao funcionar)
echo.
echo Para melhor experiencia, instale Python: https://python.org
echo.
start index.html
pause

:end
