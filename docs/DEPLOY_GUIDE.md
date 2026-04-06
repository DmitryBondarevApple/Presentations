# Деплой презентаций на presentations.noteall.ru

## Итоговая конфигурация (актуальная)

```
presentations.noteall.ru/franchcamp   →   Презентация FranchCamp
presentations.noteall.ru/emergent     →   Презентация Emergent Masterclass
presentations.noteall.ru/invest       →   Noteall Инвестиционная презентация
```

**Продакшн-URL**:
- https://presentations.noteall.ru/franchcamp
- https://presentations.noteall.ru/emergent
- https://presentations.noteall.ru/invest

---

## Почему отдельный поддомен?

Основной сайт `noteall.ru` деплоит другая команда через свой GitHub-репозиторий. При каждом деплое они пересоздают Docker-контейнер, что затирало `/presentations/`. Поддомен `presentations.noteall.ru` — полностью изолирован: свой Nginx server-блок, свои файлы, свой SSL-сертификат.

---

## Инфраструктура

| Параметр | Значение |
|---|---|
| Сервер | `185.246.220.121` (SSH: `ssh root@185.246.220.121`) |
| Docker Compose | `/opt/voice-workspace/docker-compose.yml` |
| Контейнер | `voice-workspace-frontend-1` |
| Nginx конфиг (хост) | `/etc/nginx/presentations.conf` |
| Nginx конфиг (в контейнере) | `/etc/nginx/conf.d/presentations.conf` |
| Файлы презентаций (хост) | `/var/www/presentations/` |
| Файлы презентаций (контейнер) | `/usr/share/nginx/html/presentations/` |
| SSL | Let's Encrypt: `/etc/letsencrypt/live/presentations.noteall.ru/` |
| DNS | A-запись `presentations.noteall.ru` → `185.246.220.121` (Reg.ru) |

### Архитектура

```
┌── Хост (185.246.220.121) ─────────────────────────────────────────┐
│                                                                    │
│  /var/www/presentations/                                           │
│  ├── franchcamp/     ← статические файлы FranchCamp               │
│  ├── emergent/       ← статические файлы Emergent                 │
│  └── invest/         ← статические файлы Noteall Invest           │
│       │                                                            │
│       │ volume mount (read-only)                                   │
│       ▼                                                            │
│  /etc/nginx/presentations.conf                                     │
│       │                                                            │
│       │ volume mount (read-only)                                   │
│       ▼                                                            │
│  ┌── Docker: voice-workspace-frontend-1 ────────────────────────┐  │
│  │                                                               │  │
│  │  Nginx :80/:443                                               │  │
│  │  ├── noteall.ru          → default.conf (основной сайт)       │  │
│  │  └── presentations.n.r   → presentations.conf (наши файлы)    │  │
│  │                                                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────┘
```

**Ключевой принцип**: конфиг и файлы презентаций живут на ХОСТЕ и монтируются в контейнер как volumes. Другая команда может пересоздавать контейнер сколько угодно — volumes не затираются, пока строки в `docker-compose.yml` на месте.

---

## Первоначальная настройка (пошагово)

### Шаг 1: SSL-сертификат (через DNS, без остановки сервера)

```bash
# Подключаемся к серверу
ssh root@185.246.220.121

# Запускаем certbot с DNS-валидацией
sudo certbot certonly --manual --preferred-challenges dns -d presentations.noteall.ru
```

Certbot покажет:
```
Please deploy a DNS TXT record under the name:
_acme-challenge.presentations.noteall.ru
with the following value:
xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Не нажимайте Enter!** Сначала:
1. Откройте Reg.ru → DNS-управление доменом `noteall.ru`
2. Добавьте TXT-запись:
   - Имя: `_acme-challenge.presentations`
   - Значение: то, что показал certbot
3. Подождите 1-2 минуты
4. Проверьте (в другом терминале):
   ```bash
   dig TXT _acme-challenge.presentations.noteall.ru
   ```
5. Когда запись появится — вернитесь в certbot и нажмите Enter

```bash
# Проверяем что сертификат создан
ls /etc/letsencrypt/live/presentations.noteall.ru/
# Должны быть: fullchain.pem, privkey.pem, cert.pem, chain.pem
```

### Шаг 2: Конфиг Nginx

```bash
# Копируем конфиг из репозитория (или создаём вручную)
sudo cp /path/to/presentations.conf /etc/nginx/presentations.conf
# Или, если клонировали репо:
# sudo cp /tmp/Presentations/server-config/presentations.conf /etc/nginx/presentations.conf
```

Содержимое `/etc/nginx/presentations.conf`:
```nginx
server {
    listen 80;
    server_name presentations.noteall.ru;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name presentations.noteall.ru;

    ssl_certificate /etc/letsencrypt/live/presentations.noteall.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/presentations.noteall.ru/privkey.pem;

    root /usr/share/nginx/html/presentations;
    index index.html;

    location /franchcamp/ {
        try_files $uri $uri/ /franchcamp/index.html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    location /emergent/ {
        try_files $uri $uri/ /emergent/index.html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location = / {
        return 301 https://noteall.ru;
    }
}
```

### Шаг 3: Папка с файлами

```bash
sudo mkdir -p /var/www/presentations/franchcamp
sudo mkdir -p /var/www/presentations/emergent
```

### Шаг 4: Docker Compose — добавить volumes

Отредактируйте `/opt/voice-workspace/docker-compose.yml`, в секции `frontend.volumes` добавьте **две строки**:

```yaml
services:
  frontend:
    volumes:
      - /etc/letsencrypt:/etc/letsencrypt:ro                                              # уже есть
      - /var/www/presentations:/usr/share/nginx/html/presentations:ro                     # уже есть
      - /etc/nginx/presentations.conf:/etc/nginx/conf.d/presentations.conf:ro             # ← НОВОЕ
```

> **Важно**: строка с `presentations.conf` монтирует ОДИН ФАЙЛ (не папку) в `conf.d/`. Nginx внутри контейнера автоматически подхватит его через `include /etc/nginx/conf.d/*.conf`.

### Шаг 5: Перезапуск

```bash
cd /opt/voice-workspace
docker compose up -d frontend
```

### Шаг 6: Проверка

```bash
# HTTPS должен работать
curl -I https://presentations.noteall.ru/franchcamp/
# Ожидаем: 200 OK (если файлы уже залиты) или 404 (если папка пустая)

# HTTP должен редиректить на HTTPS
curl -I http://presentations.noteall.ru/franchcamp/
# Ожидаем: 301 → https://presentations.noteall.ru/franchcamp/
```

---

## Обновление презентаций

> **ВАЖНО! Порядок действий строго обязателен. НИКОГДА не давать команды деплоя без предварительной сборки!**
>
> **ВАЖНО! На проде ВСЁ работает через DOCKER!**
> - Nginx работает ВНУТРИ контейнера `voice-workspace-frontend-1`
> - Файлы презентаций монтируются через volume: `/var/www/presentations` (хост) → `/usr/share/nginx/html/presentations` (контейнер)
> - Nginx-конфиг монтируется через volume: `/etc/nginx/presentations.conf` (хост) → `/etc/nginx/conf.d/presentations.conf` (контейнер)
> - Для перезагрузки Nginx: `sudo docker exec voice-workspace-frontend-1 nginx -s reload`
> - Для проверки конфига: `sudo docker exec voice-workspace-frontend-1 nginx -t`
> - НИКОГДА не давать команды `nginx -s reload` или `systemctl restart nginx` напрямую на хосте — они не работают!

### Шаг 1. СБОРКА (обязательно перед каждым деплоем!)

Перед деплоем ВСЕГДА пересобирать билд, даже если "ничего не менялось":

```bash
cd /app

# FranchCamp:
bash build-franchcamp.sh

# Emergent Masterclass:
bash build-emergent.sh

# Noteall Invest:
bash build-noteall-invest.sh

# Noteall One Pager:
bash build-noteall-onepager.sh
```

### Шаг 2. Сохранить в GitHub

Кнопка "Save to Github" в Emergent (репо `DmitryBondarevApple/Presentations`).

### Шаг 3. На сервере (ТОЛЬКО после шагов 1 и 2!)

Каждую команду вставлять **отдельной строкой** (не объединять через `&&`):

```
cd /tmp && rm -rf Presentations
```
```
git clone https://github.com/DmitryBondarevApple/Presentations.git
```
```
sudo cp -r /tmp/Presentations/deploy-franchcamp/* /var/www/presentations/franchcamp/
```
```
sudo cp -r /tmp/Presentations/deploy-emergent/* /var/www/presentations/emergent/
```
```
sudo cp -r /tmp/Presentations/deploy-noteall-invest/* /var/www/presentations/invest/
```
```
sudo cp -r /tmp/Presentations/deploy-noteall-onepager/* /var/www/presentations/onepager/
```
```
sudo chown -R www-data:www-data /var/www/presentations
```
```
rm -rf /tmp/Presentations
```

Перезапуск контейнера НЕ нужен — файлы подхватываются через volume mount.

---

## Добавление новой презентации

1. Создать компоненты слайдов в `frontend/src/components/{name}-slides/`
2. Создать страницу в `frontend/src/pages/{Name}Presentation.jsx`
3. Добавить роут в `App.js`
4. Создать PDF-генератор
5. Создать билд-скрипт `build-{name}.sh` с `BASE_PATH="/{name}"`
6. **Обновить Nginx-конфиг** `/etc/nginx/presentations.conf`:
   ```nginx
   location /{name}/ {
       try_files $uri $uri/ /{name}/index.html;
       add_header Cache-Control "no-cache, no-store, must-revalidate";
   }
   ```
7. Пересобрать контейнер: `cd /opt/voice-workspace && docker compose restart frontend`
8. Залить файлы: `sudo cp -r deploy-{name}/* /var/www/presentations/{name}/`

---

## Инструкция для другой команды (noteall.ru)

> **Для разработчиков основного сайта noteall.ru:**
>
> В `docker-compose.yml` есть три volume-строки для сервиса `frontend`, которые обслуживают поддомен `presentations.noteall.ru`. **Не удаляйте их**:
>
> ```yaml
> - /etc/letsencrypt:/etc/letsencrypt:ro
> - /var/www/presentations:/usr/share/nginx/html/presentations:ro
> - /etc/nginx/presentations.conf:/etc/nginx/conf.d/presentations.conf:ro
> ```
>
> Эти строки монтируют:
> 1. SSL-сертификаты (нужны и вам, и нам)
> 2. Статические файлы презентаций
> 3. Nginx-конфиг для `presentations.noteall.ru`
>
> Ваш `default.conf` обрабатывает `noteall.ru`. Наш `presentations.conf` обрабатывает `presentations.noteall.ru`. Они не пересекаются.
>
> **Если вы пересоздаёте контейнер** — volumes автоматически подхватываются при `docker compose up -d`. Файлы и конфиги не затираются.

---

## Диагностика

### Сайт не открывается

```bash
# 1. Проверить DNS
dig presentations.noteall.ru
# Ожидаем: A 185.246.220.121

# 2. Проверить сертификат
sudo ls /etc/letsencrypt/live/presentations.noteall.ru/

# 3. Проверить что конфиг примонтирован
docker exec voice-workspace-frontend-1 ls /etc/nginx/conf.d/
# Ожидаем: default.conf  presentations.conf

# 4. Проверить что файлы доступны внутри контейнера
docker exec voice-workspace-frontend-1 ls /usr/share/nginx/html/presentations/
# Ожидаем: franchcamp/  emergent/

# 5. Проверить Nginx-конфиг
docker exec voice-workspace-frontend-1 nginx -t
# Ожидаем: syntax is OK, test is successful

# 6. Проверить логи
docker logs voice-workspace-frontend-1 --tail 20
```

### После деплоя другой команды презентации пропали

```bash
# Проверить что volumes на месте в docker-compose.yml
grep -A 10 "volumes:" /opt/voice-workspace/docker-compose.yml

# Если строки удалены — добавить обратно (см. Шаг 4)
# Перезапустить: docker compose up -d frontend
```

### Обновление SSL-сертификата

```bash
# Certbot автоматически обновляет через cron/timer
# Проверить:
sudo certbot certificates
# Если нужно обновить вручную:
sudo certbot renew
docker exec voice-workspace-frontend-1 nginx -s reload
```

---

## Структура файлов в репозитории

```
github.com/DmitryBondarevApple/Presentations/
├── deploy-franchcamp/                  ← Файлы → presentations.noteall.ru/franchcamp
├── deploy-emergent/                    ← Файлы → presentations.noteall.ru/emergent
├── deploy-noteall-invest/              ← Файлы → presentations.noteall.ru/invest
├── makeusbeautiful/
│   └── company/                        ← Файлы → presentations.makeusbeautiful.ru/company
├── server-config/
│   ├── presentations.conf              ← Nginx: presentations.noteall.ru
│   └── makeusbeautiful-presentations.conf  ← Nginx: presentations.makeusbeautiful.ru
├── frontend/                           ← Исходный код
├── docs/
│   ├── DEPLOY_GUIDE.md                 ← Этот документ
│   ├── MOBILE_RESPONSIVENESS_GUIDE.md
│   └── WEB_TO_PDF_STYLE_GUIDE.md
├── build-franchcamp.sh                 ← Сборка → deploy-franchcamp/
├── build-emergent.sh                   ← Сборка → deploy-emergent/
├── build-noteall-invest.sh             ← Сборка → deploy-noteall-invest/
├── build-makeusbeautiful-company.sh    ← Сборка → makeusbeautiful/company/
└── memory/
    └── PRD.md
```

---

## Деплой на presentations.makeusbeautiful.ru

Второй поддомен для презентаций компании «Сделай красиво!». Аналогичная архитектура.

### Конфигурация

```
presentations.makeusbeautiful.ru/company   →   Презентация компании
```

### Шаг 1: DNS (Reg.ru)

Добавить A-запись:
```
presentations.makeusbeautiful.ru → <IP сервера>
```

### Шаг 2: SSL-сертификат

```bash
sudo certbot certonly --webroot -w /var/www/html -d presentations.makeusbeautiful.ru
```

### Шаг 3: Файлы и Nginx

```bash
# Создать папки
sudo mkdir -p /var/www/presentations-mb/company

# Скопировать файлы
cd /tmp && rm -rf Presentations && \
git clone https://github.com/DmitryBondarevApple/Presentations.git && \
sudo cp -r /tmp/Presentations/makeusbeautiful/company/* /var/www/presentations-mb/company/ && \
sudo chown -R www-data:www-data /var/www/presentations-mb

# Скопировать Nginx-конфиг
sudo cp /tmp/Presentations/server-config/makeusbeautiful-presentations.conf /etc/nginx/

# Добавить volumes в docker-compose.yml (раздел frontend -> volumes):
#   - /var/www/presentations-mb:/usr/share/nginx/html/presentations-mb:ro
#   - /etc/nginx/makeusbeautiful-presentations.conf:/etc/nginx/conf.d/makeusbeautiful-presentations.conf:ro
#   - /etc/letsencrypt:/etc/letsencrypt:ro  (если ещё не добавлен)

# Перезапуск
cd /opt/voice-workspace && docker compose up -d frontend
```

### Шаг 4: Проверка

```bash
curl -sI https://presentations.makeusbeautiful.ru/company/
# Ожидаем: HTTP/2 200
```

### Обновление презентации

```bash
cd /tmp && rm -rf Presentations && \
git clone https://github.com/DmitryBondarevApple/Presentations.git && \
sudo cp -r /tmp/Presentations/makeusbeautiful/company/* /var/www/presentations-mb/company/ && \
sudo chown -R www-data:www-data /var/www/presentations-mb && \
rm -rf /tmp/Presentations && \
echo "Деплой makeusbeautiful завершён!"
```
