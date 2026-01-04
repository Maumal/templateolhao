#!/bin/bash
echo "========================================"
echo "   POSTFACIL - Iniciando..."
echo "========================================"
echo ""
echo "Abrindo o PostFacil no seu navegador..."
echo "(Pressione Ctrl+C para fechar)"
echo ""

# Vai para pasta do script
cd "$(dirname "$0")"

# Abre no navegador
if command -v xdg-open &> /dev/null; then
    xdg-open http://localhost:8000 &
elif command -v open &> /dev/null; then
    open http://localhost:8000 &
fi

# Inicia servidor
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "AVISO: Python não encontrado."
    echo "Instale Python para usar o PostFácil: https://python.org"
    echo ""
    echo "Ou abra index.html diretamente (algumas funções podem não funcionar)"
fi
