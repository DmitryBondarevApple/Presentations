#!/bin/bash
# =============================================================================
# Скрипт сборки «Сделай красиво!» LIGHT версия
# Результат: папка /app/makeusbeautiful/company-light/
# Деплой: presentations.makeusbeautiful.ru/company-light
# =============================================================================

set -e

DEPLOY_DIR="/app/makeusbeautiful/company-light"
FRONTEND_DIR="/app/frontend"
BASE_PATH="/company-light"

echo "=== Сборка «Сделай красиво!» LIGHT для деплоя ==="

rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

cp "$FRONTEND_DIR/src/App.js" "$FRONTEND_DIR/src/App.js.bak"
cp "$FRONTEND_DIR/.env" "$FRONTEND_DIR/.env.bak"

cat > "$FRONTEND_DIR/src/App.js" << 'APPEOF'
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MakeUsBeautifulPresentation from "@/pages/MakeUsBeautifulPresentation";

function App() {
  return (
    <BrowserRouter basename="/company-light">
      <Routes>
        <Route path="/" element={<MakeUsBeautifulPresentation light />} />
        <Route path="*" element={<MakeUsBeautifulPresentation light />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
APPEOF

cat > "$FRONTEND_DIR/.env" << ENVEOF
REACT_APP_BACKEND_URL=
PUBLIC_URL=${BASE_PATH}
ENVEOF

echo ">>> Запуск сборки..."
cd "$FRONTEND_DIR"
npx craco build 2>&1

cp -r "$FRONTEND_DIR/build/"* "$DEPLOY_DIR/"

mv "$FRONTEND_DIR/src/App.js.bak" "$FRONTEND_DIR/src/App.js"
mv "$FRONTEND_DIR/.env.bak" "$FRONTEND_DIR/.env"

sed -i 's|<title>.*</title>|<title>Сделай красиво! — Сезонный декор под ключ</title>|' "$DEPLOY_DIR/index.html"

echo ""
echo "=== Сборка завершена ==="
echo "Папка:  $DEPLOY_DIR"
echo ""
echo "Следующий шаг: Save to GitHub, затем на сервере:"
echo "  sudo cp -r /tmp/Presentations/makeusbeautiful/company-light/* /var/www/presentations-mb/company-light/"
