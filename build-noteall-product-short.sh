#!/bin/bash
# =============================================================================
# Скрипт сборки Noteall Product Short (13 слайдов, без слайда «Механики продвижения»)
# Результат: папка /app/deploy-noteall-product-short/ с готовыми статическими файлами
# Деплой: presentations.noteall.ru/product-short
# =============================================================================

set -e

DEPLOY_DIR="/app/deploy-noteall-product-short"
FRONTEND_DIR="/app/frontend"
BASE_PATH="/product-short"

echo "=== Сборка Noteall Product Short для деплоя на presentations.noteall.ru${BASE_PATH} ==="

# 1. Очистка предыдущей сборки
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# 2. Сохраняем оригинальные файлы
cp "$FRONTEND_DIR/src/App.js" "$FRONTEND_DIR/src/App.js.bak"
cp "$FRONTEND_DIR/.env" "$FRONTEND_DIR/.env.bak"

# 3. Создаём специальный App.js только для Noteall Product Short
cat > "$FRONTEND_DIR/src/App.js" << 'APPEOF'
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteAllProductPresentation from "@/pages/NoteAllProductPresentation";

function App() {
  return (
    <BrowserRouter basename="/product-short">
      <Routes>
        <Route path="/" element={<NoteAllProductPresentation excludeSlide13 />} />
        <Route path="*" element={<NoteAllProductPresentation excludeSlide13 />} />
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

# 8. Обновляем title и OG-теги в index.html
sed -i 's|<title>.*</title>|<title>Noteall — Возможности платформы</title>|' "$DEPLOY_DIR/index.html"

# Инъекция OG-тегов (тот же OG-image, что и у полной версии)
OG_TAGS='<meta property="og:type" content="website">\n<meta property="og:title" content="Noteall — AI-платформа для анализа встреч, интервью и рабочих обсуждений">\n<meta property="og:description" content="Убираем рутину между «мы поговорили» и «у нас есть готовый материал для работы». Транскрибация, анализ, структурированные артефакты.">\n<meta property="og:image" content="https://presentations.noteall.ru/product-short/images/noteall/og-noteall-product.jpg">\n<meta property="og:url" content="https://presentations.noteall.ru/product-short/">\n<meta property="og:site_name" content="Noteall">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="Noteall — Возможности платформы">\n<meta name="twitter:description" content="Транскрибация, анализ, структурированные артефакты для работы команды.">\n<meta name="twitter:image" content="https://presentations.noteall.ru/product-short/images/noteall/og-noteall-product.jpg">\n<meta name="description" content="Noteall превращает неструктурированные разговоры в рабочие документы: summary, выводы, задачи, PRD.">'
sed -i "s|</head>|${OG_TAGS}\n</head>|" "$DEPLOY_DIR/index.html"

echo ""
echo "=== Сборка завершена ==="
echo "Папка:  $DEPLOY_DIR"
echo ""
echo "Следующий шаг: Save to GitHub, затем на сервере:"
echo "  sudo cp -r /tmp/Presentations/deploy-noteall-product-short/* /var/www/presentations/product-short/"
