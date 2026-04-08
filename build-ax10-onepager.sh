#!/bin/bash
# =============================================================================
# Скрипт сборки AX10 One Pager для деплоя на presentations.noteall.ru
# ВАЖНО: ВСЕГДА пересобирать билд перед деплоем!
# =============================================================================

set -e

DEPLOY_DIR="/app/deploy-ax10-onepager"
FRONTEND_DIR="/app/frontend"
BASE_PATH="/ax10-onepager"

echo "=== Сборка AX10 One Pager для деплоя ==="

# 1. Очистка
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# 2. Бэкап оригиналов
cp "$FRONTEND_DIR/src/App.js" "$FRONTEND_DIR/src/App.js.bak"
cp "$FRONTEND_DIR/.env" "$FRONTEND_DIR/.env.bak"

# 3. Изолированный App.js
cat > "$FRONTEND_DIR/src/App.js" << 'APPEOF'
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AX10OnePager from "@/pages/AX10OnePager";

function App() {
  return (
    <BrowserRouter basename="/ax10-onepager">
      <Routes>
        <Route path="/" element={<AX10OnePager />} />
        <Route path="*" element={<AX10OnePager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
APPEOF

# 4. .env
cat > "$FRONTEND_DIR/.env" << ENVEOF
REACT_APP_BACKEND_URL=
PUBLIC_URL=${BASE_PATH}
ENVEOF

# 5. Сборка
echo ">>> Запуск сборки..."
cd "$FRONTEND_DIR"
npx craco build 2>&1

# 6. Копирование
cp -r "$FRONTEND_DIR/build/"* "$DEPLOY_DIR/"

# 7. Восстановление
mv "$FRONTEND_DIR/src/App.js.bak" "$FRONTEND_DIR/src/App.js"
mv "$FRONTEND_DIR/.env.bak" "$FRONTEND_DIR/.env"

# 8. Title и OG-теги
sed -i 's|<title>.*</title>|<title>AX10 — One Pager</title>|' "$DEPLOY_DIR/index.html"

OG_TAGS='<meta property="og:type" content="website">\n<meta property="og:title" content="AX10 — От идеи цифрового сервиса к готовому ТЗ">\n<meta property="og:description" content="Исследование, продуктовая аналитика и техническое задание — до начала разработки. Один экран — вся суть.">\n<meta property="og:image" content="https://presentations.noteall.ru/ax10-onepager/images/ax10/og-ax10-onepager.jpg">\n<meta property="og:url" content="https://presentations.noteall.ru/ax10-onepager/">\n<meta property="og:site_name" content="AX10">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="AX10 — От идеи цифрового сервиса к готовому ТЗ">\n<meta name="twitter:description" content="Исследование, аналитика и техническое задание — один экран.">\n<meta name="twitter:image" content="https://presentations.noteall.ru/ax10-onepager/images/ax10/og-ax10-onepager.jpg">\n<meta name="description" content="AX10 помогает компаниям подготовить запуск цифрового продукта: проверяем гипотезы, исследуем рынок, формируем ТЗ.">'
sed -i "s|</head>|${OG_TAGS}\n</head>|" "$DEPLOY_DIR/index.html"

echo ""
echo "=== Сборка завершена ==="
echo "Папка:  $DEPLOY_DIR"
echo ""
echo "ВАЖНО: Сначала Save to GitHub, потом на сервере:"
echo "  sudo cp -r /tmp/Presentations/deploy-ax10-onepager/* /var/www/presentations/ax10-onepager/"
