#!/bin/bash
# =============================================================================
# Скрипт сборки Noteall Invest презентации для деплоя на presentations.noteall.ru
# Результат: папка /app/deploy-noteall-invest/ с готовыми статическими файлами
# =============================================================================

set -e

DEPLOY_DIR="/app/deploy-noteall-invest"
FRONTEND_DIR="/app/frontend"
BASE_PATH="/invest"

echo "=== Сборка Noteall Invest для деплоя на presentations.noteall.ru${BASE_PATH} ==="

# 1. Очистка предыдущей сборки
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# 2. Сохраняем оригинальные файлы
cp "$FRONTEND_DIR/src/App.js" "$FRONTEND_DIR/src/App.js.bak"
cp "$FRONTEND_DIR/.env" "$FRONTEND_DIR/.env.bak"

# 3. Создаём специальный App.js только для Noteall Invest презентации
cat > "$FRONTEND_DIR/src/App.js" << 'APPEOF'
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteAllInvestPresentation from "@/pages/NoteAllInvestPresentation";

function App() {
  return (
    <BrowserRouter basename="/invest">
      <Routes>
        <Route path="/" element={<NoteAllInvestPresentation />} />
        <Route path="*" element={<NoteAllInvestPresentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
APPEOF

# 4. Настраиваем .env для продакшн-билда
cat > "$FRONTEND_DIR/.env" << ENVEOF
REACT_APP_BACKEND_URL=
PUBLIC_URL=${BASE_PATH}
ENVEOF

# 5. Собираем билд
echo ">>> Запуск сборки..."
cd "$FRONTEND_DIR"
npx craco build 2>&1

# 6. Копируем результат в deploy-папку
cp -r "$FRONTEND_DIR/build/"* "$DEPLOY_DIR/"

# 7. Восстанавливаем оригинальные файлы
mv "$FRONTEND_DIR/src/App.js.bak" "$FRONTEND_DIR/src/App.js"
mv "$FRONTEND_DIR/.env.bak" "$FRONTEND_DIR/.env"

# 8. Инжектируем OG-теги в index.html
OG_TAGS='<meta property="og:title" content="Noteall — Инвестиционная презентация" />\n<meta property="og:description" content="AI-сервис, который превращает встречи и видео в структурированные данные" />\n<meta property="og:image" content="https://presentations.noteall.ru/invest/images/og-noteall-invest.jpg" />\n<meta property="og:url" content="https://presentations.noteall.ru/invest/" />\n<meta property="og:type" content="website" />\n<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:title" content="Noteall — Инвестиционная презентация" />\n<meta name="twitter:description" content="AI-сервис, который превращает встречи и видео в структурированные данные" />\n<meta name="twitter:image" content="https://presentations.noteall.ru/invest/images/og-noteall-invest.jpg" />'

sed -i "s|<meta name=\"theme-color\"|${OG_TAGS}\n<meta name=\"theme-color\"|" "$DEPLOY_DIR/index.html"
sed -i 's|<title>.*</title>|<title>Noteall — Инвестиционная презентация</title>|' "$DEPLOY_DIR/index.html"
echo ">>> OG-теги добавлены в index.html"

# 9. Создаём архив для удобной передачи
cd /app
tar -czf /app/noteall-invest-deploy.tar.gz -C "$DEPLOY_DIR" .

echo ""
echo "=== Сборка завершена ==="
echo "Папка:  $DEPLOY_DIR"
echo "Архив:  /app/noteall-invest-deploy.tar.gz"
echo ""
echo "Следующий шаг: Save to GitHub, затем на сервере:"
echo "  sudo cp -r /tmp/Presentations/deploy-noteall-invest/* /var/www/presentations/invest/"
