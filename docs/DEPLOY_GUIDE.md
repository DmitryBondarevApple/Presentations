# Деплой презентаций на noteall.ru

## Итоговая конфигурация (актуальная)

```
noteall.ru/presentations/franchcamp   →   Презентация FranchCamp
noteall.ru/presentations/emergent     →   Презентация Emergent Masterclass
noteall.ru/*                           →   Основной сайт Noteall (без изменений)
```

**Продакшн-URL**:
- https://noteall.ru/presentations/franchcamp
- https://noteall.ru/presentations/emergent

---

## Инфраструктура сервера

| Параметр | Значение |
|---|---|
| Сервер | `noteall.ru` (SSH: `ssh root@noteall.ru`) |
| Хостнейм | `hiplet-69004` |
| Docker Compose | `/opt/voice-workspace/docker-compose.yml` |
| Контейнер frontend | `voice-workspace-frontend-1` |
| Nginx конфиг (внутри контейнера) | `/etc/nginx/conf.d/default.conf` |
| Порты | `80:80`, `443:443` |
| SSL сертификат | Let's Encrypt (`/etc/letsencrypt/live/noteall.ru/`) |
| Файлы презентаций (хост) | `/var/www/presentations/` |
| Файлы презентаций (в контейнере) | `/usr/share/nginx/html/presentations/` |

### Архитектура

```
┌── Хост (hiplet-69004) ──────────────────────────────────────────┐
│                                                                  │
│  /var/www/presentations/franchcamp/  ← статические файлы         │
│       │                                                          │
│       │ (volume mount, read-only)                                │
│       ▼                                                          │
│  ┌── Docker: voice-workspace-frontend-1 ──────────────────────┐  │
│  │                                                             │  │
│  │  Nginx :80/:443                                             │  │
│  │  ├── /presentations/*  → /usr/share/nginx/html/pres...      │  │
│  │  ├── /api/*            → proxy to host:8001 (backend)       │  │
│  │  └── /*                → /usr/share/nginx/html/ (React SPA) │  │
│  │                                                             │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌── Docker: voice-workspace-backend-1 ───────────────────────┐  │
│  │  Backend API :8001 (network_mode: host)                     │  │
│  └─────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Docker Compose (актуальная конфигурация)

Файл: `/opt/voice-workspace/docker-compose.yml`

```yaml
services:
  backend:
    build: ./backend
    restart: always
    env_file: ./backend/.env
    network_mode: host

  frontend:
    build:
      context: ./frontend
      args:
        REACT_APP_BACKEND_URL: https://noteall.ru
        CACHEBUST: ${CACHEBUST:-1}
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /etc/letsencrypt:/etc/letsencrypt:ro
      - /var/www/presentations:/usr/share/nginx/html/presentations:ro   # ← Презентации
    extra_hosts:
      - "host.docker.internal:host-gateway"
```

**Ключевая строка** — volume mount для презентаций:
```yaml
- /var/www/presentations:/usr/share/nginx/html/presentations:ro
```

Nginx-конфиг внутри контейнера НЕ модифицировался. Существующий `try_files $uri $uri/ /index.html` находит файлы по прямому пути через volume.

---

## Nginx конфиг (внутри контейнера, без изменений)

```nginx
server {
    listen 80;
    server_name noteall.ru www.noteall.ru;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name noteall.ru www.noteall.ru;

    ssl_certificate /etc/letsencrypt/live/noteall.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/noteall.ru/privkey.pem;

    root /usr/share/nginx/html;
    index index.html;

    location /api/ {
        proxy_pass http://host.docker.internal:8001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_read_timeout 300s;
        client_max_body_size 100M;
    }

    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
    }
}
```

---

## Сборка и деплой: пошаговая инструкция

### Первоначальная настройка (выполнена)

Это нужно было сделать один раз:
1. Добавить volume в `docker-compose.yml`
2. Создать `/var/www/presentations/` на хосте
3. Перезапустить контейнер: `cd /opt/voice-workspace && docker compose up -d frontend`

### Обновление презентаций

При любых изменениях в презентациях:

**1. Сборка (в Emergent или локально):**
```bash
cd /app
# FranchCamp:
bash build-franchcamp.sh
# Emergent Masterclass:
bash build-emergent.sh
```

**2. Сохранить в GitHub** (кнопка "Save to Github" в Emergent)

**3. На сервере noteall.ru:**
```bash
cd /tmp
rm -rf Presentations
git clone https://github.com/DmitryBondarevApple/Presentations.git

# FranchCamp:
sudo cp -r /tmp/Presentations/deploy-franchcamp/* /var/www/presentations/franchcamp/

# Emergent Masterclass:
sudo mkdir -p /var/www/presentations/emergent
sudo cp -r /tmp/Presentations/deploy-emergent/* /var/www/presentations/emergent/

sudo chown -R www-data:www-data /var/www/presentations
rm -rf /tmp/Presentations
```

Перезапуск Docker **не нужен** — файлы обновляются через volume мгновенно.

---

## Мета-теги (SEO и превью ссылок)

Настроены в `frontend/public/index.html` и попадают в билд:

```html
<title>Hop.Agency — AI для франчайзеров</title>
<meta name="description" content="AI-обучение для франчайзеров — Hop.Agency × FranchCamp" />
```

При отправке ссылки в мессенджерах отображается:
- **Заголовок**: Hop.Agency — AI для франчайзеров
- **Описание**: AI-обучение для франчайзеров — Hop.Agency × FranchCamp

> **Кэш превью**: WhatsApp/Telegram кэшируют превью. После обновления мета-тегов добавьте `?v=2` к URL для сброса кэша.

---

## Добавление новых презентаций

Чтобы добавить ещё одну презентацию (например, `rostelecom`):

**1. Изменить `BASE_PATH` в скрипте сборки:**
```bash
# В build-franchcamp.sh заменить:
BASE_PATH="/presentations/rostelecom"
DEPLOY_DIR="/app/deploy-rostelecom"
```

**2. Собрать и загрузить на сервер:**
```bash
sudo mkdir -p /var/www/presentations/rostelecom
sudo cp -r /tmp/Presentations/deploy-rostelecom/* /var/www/presentations/rostelecom/
```

Nginx-конфиг и Docker менять **не нужно** — volume монтирует всю папку `/var/www/presentations/`.

Новая презентация сразу доступна по адресу: `https://noteall.ru/presentations/rostelecom`

---

## Структура файлов

### На хосте (noteall.ru)
```
/var/www/presentations/
└── franchcamp/
    ├── index.html              ← Точка входа (title, description, PostHog)
    ├── asset-manifest.json
    ├── fonts/
    │   └── Inter-*.ttf         ← Шрифты для генерации PDF
    └── static/
        ├── css/
        │   └── main.*.css      ← Стили (хэш в имени файла)
        └── js/
            └── main.*.js       ← React-приложение (хэш в имени)
```

### В GitHub-репозитории
```
github.com/DmitryBondarevApple/Presentations/
├── deploy-franchcamp/          ← Готовые файлы для деплоя FranchCamp
├── deploy-emergent/            ← Готовые файлы для деплоя Emergent Masterclass
├── frontend/                   ← Исходный код
├── docs/
│   ├── DEPLOY_GUIDE.md         ← Этот документ
│   ├── MOBILE_RESPONSIVENESS_GUIDE.md
│   └── WEB_TO_PDF_STYLE_GUIDE.md
├── build-franchcamp.sh         ← Скрипт сборки FranchCamp
├── build-emergent.sh           ← Скрипт сборки Emergent Masterclass
└── memory/
    └── PRD.md
```

---

## Диагностика проблем

### Белая страница
```bash
# Файлы на месте?
docker exec voice-workspace-frontend-1 ls /usr/share/nginx/html/presentations/franchcamp/

# Логи Nginx
docker exec voice-workspace-frontend-1 tail -20 /var/log/nginx/error.log
```

### Старые мета-теги в превью
WhatsApp/Telegram кэшируют OG-данные. Решения:
- Подождать ~30 минут
- Отправить ссылку с `?v=2`
- Использовать [Telegram URL Debug](https://t.me/webpagebot) для сброса кэша

### Презентация не обновляется после cp
Браузер кэширует `index.html`. Решения:
- Ctrl+Shift+R (жёсткое обновление)
- JS/CSS файлы имеют хэш в имени — они обновляются автоматически

### Docker контейнер перезапустился и файлы пропали
Volume mount (`/var/www/presentations`) на хосте — файлы **не теряются** при перезапуске контейнера. Если пропали — проверьте `docker-compose.yml` на наличие строки volume.
