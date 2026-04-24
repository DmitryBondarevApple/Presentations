#!/bin/bash
# =============================================================================
# Скрипт сборки Noteall x Первый Бит презентации
# Результат: папка /app/deploy-perviy-bit/ с готовыми статическими файлами
# Деплой: presentations.noteall.ru/perviy-bit
# =============================================================================

set -e

DEPLOY_DIR="/app/deploy-perviy-bit"
FRONTEND_DIR="/app/frontend"
BASE_PATH="/perviy-bit"

echo "=== Сборка Perviy Bit для деплоя на presentations.noteall.ru${BASE_PATH} ==="

# 1. Очистка предыдущей сборки
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# 2. Сохраняем оригинальные файлы
cp "$FRONTEND_DIR/src/App.js" "$FRONTEND_DIR/src/App.js.bak"
cp "$FRONTEND_DIR/.env" "$FRONTEND_DIR/.env.bak"

# 3. Создаём специальный App.js
cat > "$FRONTEND_DIR/src/App.js" << 'APPEOF'
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PerviyBitPresentation from "@/pages/PerviyBitPresentation";

function App() {
  return (
    <BrowserRouter basename="/perviy-bit">
      <Routes>
        <Route path="/" element={<PerviyBitPresentation />} />
        <Route path="*" element={<PerviyBitPresentation />} />
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
sed -i 's|<title>.*</title>|<title>Noteall x Первый Бит — Автоматизация пресейла</title>|' "$DEPLOY_DIR/index.html"

OG_TAGS='<meta property="og:type" content="website">\n<meta property="og:title" content="Noteall x Первый Бит — Автоматизация пресейла для 1С-доработок">\n<meta property="og:description" content="От интервью с клиентом — к готовому ТЗ и коммерческому предложению. Сквозной pipeline автоматизации пресейла.">\n<meta property="og:image" content="https://presentations.noteall.ru/perviy-bit/images/noteall/og-noteall-product.jpg">\n<meta property="og:url" content="https://presentations.noteall.ru/perviy-bit/">\n<meta property="og:site_name" content="Noteall">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="Noteall x Первый Бит — Автоматизация пресейла">\n<meta name="twitter:description" content="От интервью с клиентом — к готовому ТЗ и коммерческому предложению.">\n<meta name="twitter:image" content="https://presentations.noteall.ru/perviy-bit/images/noteall/og-noteall-product.jpg">\n<meta name="description" content="Noteall автоматизирует пресейл для 1С-доработок: от записи интервью до готового ТЗ и КП.">'
sed -i "s|</head>|${OG_TAGS}\n</head>|" "$DEPLOY_DIR/index.html"

echo ""
echo "=== Сборка завершена ==="
echo "Папка:  $DEPLOY_DIR"
echo ""
echo "Следующий шаг: Save to GitHub, затем на сервере:"
echo "  sudo cp -r /tmp/Presentations/deploy-perviy-bit/* /var/www/presentations/perviy-bit/"
