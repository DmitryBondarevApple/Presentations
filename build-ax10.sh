#!/bin/bash
# =============================================================================
# Скрипт сборки AX10 презентации для деплоя на presentations.noteall.ru
# Результат: папка /app/deploy-ax10/ с готовыми статическими файлами
# =============================================================================

set -e

DEPLOY_DIR="/app/deploy-ax10"
FRONTEND_DIR="/app/frontend"
BASE_PATH="/ax10"

echo "=== Сборка AX10 для деплоя на presentations.noteall.ru${BASE_PATH} ==="

# 1. Очистка предыдущей сборки
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# 2. Сохраняем оригинальные файлы
cp "$FRONTEND_DIR/src/App.js" "$FRONTEND_DIR/src/App.js.bak"
cp "$FRONTEND_DIR/.env" "$FRONTEND_DIR/.env.bak"

# 3. Создаём специальный App.js только для AX10
cat > "$FRONTEND_DIR/src/App.js" << 'APPEOF'
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AX10Presentation from "@/pages/AX10Presentation";

function App() {
  return (
    <BrowserRouter basename="/ax10">
      <Routes>
        <Route path="/" element={<AX10Presentation />} />
        <Route path="*" element={<AX10Presentation />} />
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

# 8. Обновляем title в index.html
sed -i 's|<title>.*</title>|<title>AX10 — От идеи к ТЗ</title>|' "$DEPLOY_DIR/index.html"

# 9. Создаём архив
cd /app
tar -czf /app/ax10-deploy.tar.gz -C "$DEPLOY_DIR" .

echo ""
echo "=== Сборка завершена ==="
echo "Папка:  $DEPLOY_DIR"
echo "Архив:  /app/ax10-deploy.tar.gz"
echo ""
echo "ВАЖНО: Сначала пересобери билд, потом Save to GitHub!"
echo "Следующий шаг: Save to GitHub, затем на сервере:"
echo "  sudo cp -r /tmp/Presentations/deploy-ax10/* /var/www/presentations/ax10/"
