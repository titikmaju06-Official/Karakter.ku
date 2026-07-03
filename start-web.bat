@echo off
title Karakter.ku Web App Server
cd /d "%~dp0"

echo.
echo  ======================================================
echo    Memulai Karakter.ku Web Application Server...
echo  ======================================================
echo.

node server.js

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo  ERROR: Gagal menjalankan server web!
    echo.
    pause
    exit /b 1
)
