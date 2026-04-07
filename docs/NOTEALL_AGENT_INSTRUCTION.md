# ВАЖНО: Инструкция для агента, работающего с основным сервисом noteall.ru

## Не удаляй эти volume mounts!

В файле `/opt/voice-workspace/docker-compose.yml` в секции `frontend.volumes` 
присутствуют volume mounts для поддомена `presentations.noteall.ru`:

```yaml
services:
  frontend:
    volumes:
      - /etc/letsencrypt:/etc/letsencrypt:ro
      - /var/www/presentations:/usr/share/nginx/html/presentations:ro        # presentations.noteall.ru
      - /etc/nginx/presentations.conf:/etc/nginx/conf.d/presentations.conf:ro # presentations.noteall.ru
```

### Что это делает
- Монтирует статические файлы презентаций (AX10, FranchCamp, Emergent, NoteAll Invest, One Pager)
- Монтирует Nginx-конфиг для поддомена `presentations.noteall.ru`
- Оба маунта **read-only** (`ro`) — не влияют на основной сервис `noteall.ru`

### Правила
1. **НЕ удаляй** эти два volume mount при деплое основного сервиса
2. **НЕ модифицируй** файл `/etc/nginx/presentations.conf` на хосте
3. **НЕ трогай** содержимое `/var/www/presentations/` на хосте
4. Эти маунты не конфликтуют с основным сайтом noteall.ru — они обслуживают только поддомен

### Если нужно пересобрать контейнер
При `docker compose up -d --build frontend` эти volumes подхватятся автоматически.
Убедись, что строки выше остались в docker-compose.yml.

### Контакт
Презентации управляются из отдельного репозитория: `DmitryBondarevApple/Presentations`
