#!/bin/bash
# =============================================================================
# Скрипт сборки Emergent Masterclass презентации для деплоя на noteall.ru
# Результат: папка /app/deploy-emergent/ с готовыми статическими файлами
# =============================================================================

set -e

DEPLOY_DIR="/app/deploy-emergent"
FRONTEND_DIR="/app/frontend"
BASE_PATH="/presentations/emergent"

echo "=== Сборка Emergent Masterclass для деплоя на noteall.ru${BASE_PATH} ==="

# 1. Очистка предыдущей сборки
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# 2. Сохраняем оригинальные файлы
cp "$FRONTEND_DIR/src/App.js" "$FRONTEND_DIR/src/App.js.bak"
cp "$FRONTEND_DIR/.env" "$FRONTEND_DIR/.env.bak"

# 3. Создаём специальный App.js только для Emergent презентации
cat > "$FRONTEND_DIR/src/App.js" << 'APPEOF'
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmergentPresentation from "@/pages/EmergentPresentation";

function App() {
  return (
    <BrowserRouter basename="/presentations/emergent">
      <Routes>
        <Route path="/" element={<EmergentPresentation />} />
        <Route path="*" element={<EmergentPresentation />} />
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

# 8. Создаём архив для удобной передачи
cd /app
tar -czf /app/emergent-deploy.tar.gz -C "$DEPLOY_DIR" .

echo ""
echo "=== Сборка завершена ==="
echo "Папка:  $DEPLOY_DIR"
echo "Архив:  /app/emergent-deploy.tar.gz"
echo ""
echo "Следующий шаг: скачайте архив и следуйте инструкции в docs/DEPLOY_GUIDE.md"
echo "На сервере: sudo cp -r /tmp/Presentations/deploy-emergent/* /var/www/presentations/emergent/"
