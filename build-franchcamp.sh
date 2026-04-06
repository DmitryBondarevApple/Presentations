#!/bin/bash
# =============================================================================
# Скрипт сборки FranchCamp презентации для деплоя на noteall.ru
# Результат: папка /app/deploy-franchcamp/ с готовыми статическими файлами
# =============================================================================

set -e

DEPLOY_DIR="/app/deploy-franchcamp"
FRONTEND_DIR="/app/frontend"
BASE_PATH="/franchcamp"

echo "=== Сборка FranchCamp для деплоя на presentations.noteall.ru${BASE_PATH} ==="

# 1. Очистка предыдущей сборки
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# 2. Сохраняем оригинальные файлы
cp "$FRONTEND_DIR/src/App.js" "$FRONTEND_DIR/src/App.js.bak"
cp "$FRONTEND_DIR/.env" "$FRONTEND_DIR/.env.bak"

# 3. Создаём специальный App.js только для FranchCamp
cat > "$FRONTEND_DIR/src/App.js" << 'APPEOF'
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FranchCampPresentation from "@/pages/FranchCampPresentation";

function App() {
  return (
    <BrowserRouter basename="/franchcamp">
      <Routes>
        <Route path="/" element={<FranchCampPresentation />} />
        <Route path="*" element={<FranchCampPresentation />} />
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
OG_TAGS='<meta property="og:title" content="Hop.Agency — FranchCamp" />\n<meta property="og:description" content="ИИ как часть пакета для франчайзи" />\n<meta property="og:image" content="https://presentations.noteall.ru/franchcamp/images/og-franchcamp.jpg" />\n<meta property="og:url" content="https://presentations.noteall.ru/franchcamp/" />\n<meta property="og:type" content="website" />\n<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:title" content="Hop.Agency — FranchCamp" />\n<meta name="twitter:description" content="ИИ как часть пакета для франчайзи" />\n<meta name="twitter:image" content="https://presentations.noteall.ru/franchcamp/images/og-franchcamp.jpg" />'

sed -i "s|<meta name=\"theme-color\"|${OG_TAGS}\n<meta name=\"theme-color\"|" "$DEPLOY_DIR/index.html"
sed -i 's|<title>.*</title>|<title>Hop.Agency — FranchCamp</title>|' "$DEPLOY_DIR/index.html"
echo ">>> OG-теги добавлены в index.html"

# 9. Создаём архив для удобной передачи
cd /app
tar -czf /app/franchcamp-deploy.tar.gz -C "$DEPLOY_DIR" .

echo ""
echo "=== Сборка завершена ==="
echo "Папка:  $DEPLOY_DIR"
echo "Архив:  /app/franchcamp-deploy.tar.gz"
echo ""
echo "Следующий шаг: скачайте архив и следуйте инструкции в docs/DEPLOY_GUIDE.md"
