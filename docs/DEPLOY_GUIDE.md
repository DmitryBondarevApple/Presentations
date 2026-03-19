# Деплой FranchCamp на noteall.ru

## Что получается в итоге

```
noteall.ru/presentations/franchcamp   →   Презентация FranchCamp
noteall.ru/presentations/franchcamp/   →   То же самое
noteall.ru/*                           →   Существующий сайт (без изменений)
```

---

## Шаг 1. Скачать архив

Файл `franchcamp-deploy.tar.gz` (2.7 MB) уже собран и лежит в корне проекта.

Скачайте его через интерфейс Emergent (кнопка "Download") или скопируйте с сервера.

---

## Шаг 2. Загрузить на сервер noteall.ru

```bash
# С вашего компьютера — передать архив на сервер
scp franchcamp-deploy.tar.gz user@noteall.ru:/tmp/
```

---

## Шаг 3. Развернуть файлы на сервере

```bash
# Подключиться к серверу
ssh user@noteall.ru

# Создать директорию для презентаций
sudo mkdir -p /var/www/presentations/franchcamp

# Распаковать архив
sudo tar -xzf /tmp/franchcamp-deploy.tar.gz -C /var/www/presentations/franchcamp

# Установить правильные права
sudo chown -R www-data:www-data /var/www/presentations
sudo chmod -R 755 /var/www/presentations

# Проверить файлы
ls -la /var/www/presentations/franchcamp/
# Должны быть: index.html, static/, fonts/, asset-manifest.json
```

---

## Шаг 4. Настроить Nginx

Откройте конфигурацию Nginx для noteall.ru:

```bash
# Обычно один из этих путей:
sudo nano /etc/nginx/sites-available/noteall.ru
# или
sudo nano /etc/nginx/conf.d/noteall.conf
```

**Добавьте этот блок ВНУТРИ существующего `server { }`, ПЕРЕД основным `location /`:**

```nginx
    # === Презентации (статические страницы) ===
    location /presentations/franchcamp {
        alias /var/www/presentations/franchcamp;
        index index.html;
        try_files $uri $uri/ /presentations/franchcamp/index.html;

        # Кэширование статических ресурсов (JS/CSS содержат хэш в имени)
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
```

### Как это выглядит в контексте всего файла:

```nginx
server {
    listen 443 ssl;
    server_name noteall.ru;

    # ... существующие SSL-настройки ...

    # ↓↓↓ ДОБАВИТЬ ЭТОТ БЛОК ↓↓↓
    location /presentations/franchcamp {
        alias /var/www/presentations/franchcamp;
        index index.html;
        try_files $uri $uri/ /presentations/franchcamp/index.html;

        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
    # ↑↑↑ КОНЕЦ БЛОКА ↑↑↑

    # ... существующий location / для основного сайта ...
    location / {
        # ... текущая конфигурация noteall.ru ...
    }
}
```

---

## Шаг 5. Проверить и применить конфигурацию

```bash
# Проверить синтаксис Nginx (обязательно!)
sudo nginx -t

# Если вывод: "syntax is ok" и "test is successful" — применить:
sudo systemctl reload nginx

# Если ошибка — исправить конфигурацию и повторить nginx -t
```

---

## Шаг 6. Проверить результат

Откройте в браузере:
```
https://noteall.ru/presentations/franchcamp
```

Должна загрузиться презентация FranchCamp. Проверьте:
- [ ] Слайды переключаются стрелками
- [ ] Свайп работает на мобильном
- [ ] PDF генерируется и скачивается
- [ ] Основной сайт noteall.ru работает как прежде

---

## Диагностика проблем

### Белая страница
```bash
# Проверить, что файлы на месте
ls -la /var/www/presentations/franchcamp/
ls -la /var/www/presentations/franchcamp/static/js/

# Посмотреть логи Nginx
sudo tail -20 /var/log/nginx/error.log
```

### 404 на статические файлы (JS/CSS)
Убедитесь, что используете `alias`, а не `root` в конфигурации Nginx.
```nginx
# ПРАВИЛЬНО
location /presentations/franchcamp {
    alias /var/www/presentations/franchcamp;

# НЕПРАВИЛЬНО (будет искать файлы в /var/www/.../presentations/franchcamp/)
location /presentations/franchcamp {
    root /var/www/presentations/franchcamp;
```

### Сайт noteall.ru перестал работать
```bash
# Откатить изменения — удалить добавленный location-блок
sudo nano /etc/nginx/sites-available/noteall.ru
sudo nginx -t
sudo systemctl reload nginx
```

---

## Добавление новых презентаций в будущем

Чтобы добавить ещё одну презентацию (например, `rostelecom`):

1. Собрать билд с `BASE_PATH="/presentations/rostelecom"` (отредактировать скрипт `build-franchcamp.sh`)
2. Загрузить в `/var/www/presentations/rostelecom/`
3. Добавить аналогичный `location`-блок в Nginx

```nginx
    location /presentations/rostelecom {
        alias /var/www/presentations/rostelecom;
        index index.html;
        try_files $uri $uri/ /presentations/rostelecom/index.html;
    }
```

---

## Структура файлов на сервере

```
/var/www/presentations/
└── franchcamp/
    ├── index.html              ← Точка входа
    ├── asset-manifest.json
    ├── fonts/
    │   └── Inter-*.ttf         ← Шрифты для PDF
    └── static/
        ├── css/
        │   └── main.*.css      ← Стили (хэш в имени)
        └── js/
            └── main.*.js       ← Приложение (хэш в имени)
```

Общий размер: ~2.7 MB.
