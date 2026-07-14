<div align="center">

# ☁️ CloudflareREPO.vless

### Персональное хранилище VLESS-подписок на Cloudflare Workers

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Stars](https://img.shields.io/github/stars/svinakraft-maker/CloudflareREPO.vless?style=for-the-badge&color=blue)](https://github.com/svinakraft-maker/CloudflareREPO.vless/stargazers)

</div>

## 🎬 Демо

<div align="center">
  <img src="https://raw.githubusercontent.com/svinakraft-maker/CloudflareREPO.vless/main/video/prewiew.gif" alt="Live Demo" width="100%">
</div>


## 🚀 Готовая подписка

Просто скопируй ссылку и вставь её в свой VPN-клиент:

```
https://vless.svinakraft.workers.dev/podpiska.txt
```

<div align="center">

**⬆️ Одна ссылка — десятки рабочих серверов ⬆️**

</div>

---

## 📖 О проекте

**CloudflareREPO.vless** — это репозиторий VLESS-конфигураций, развёрнутый на Cloudflare Workers. Все файлы отдаются как обычный текст (`text/plain`), что позволяет использовать их напрямую в качестве подписок для любых VPN-клиентов.

### 🎯 Преимущества

- ⚡ **Скорость** — файлы раздаются через глобальный CDN Cloudflare
- 🌍 **Доступность** — работает там, где заблокирован GitHub
- 🔄 **Автообновление** — клиенты сами подтягивают свежие конфиги
- 🆓 **Бесплатно** — Cloudflare Workers даёт 100 000 запросов в день бесплатно
- 📱 **Универсальность** — работает во всех популярных клиентах

---

## 📱 Как подключить подписку

### 🖥 v2rayN (Windows)
1. Открой программу → **Подписки** → **Настроить подписки**
2. Нажми **Добавить** и вставь URL:
   ```
   https://vless.svinakraft.workers.dev/podpiska.txt
   ```
3. Сохрани → нажми **Обновить подписки без прокси**

### 📱 Nekobox / NekoRay (Android/PC)
1. **Профили** → **Новый профиль** → **Из URL**
2. Вставь ссылку выше → **ОК**
3. Обнови подписку через меню

### 🍎 Streisand (iOS)
1. Открой приложение → **+** → **Добавить из ссылки**
2. Вставь URL подписки → **Добавить**

### 🍎 Shadowrocket (iOS)
1. Нажми **+** в правом верхнем углу
2. Выбери **Subscribe** (Подписка)
3. Вставь ссылку → **Сохранить**

### 🤖 Hiddify (Все платформы)
1. **Add Profile** → **From URL**
2. Вставь URL → **Continue**

### 📦 Sing-box
Добавь в конфигурационный файл:
```json
{
  "providers": [{
    "type": "remote",
    "url": "https://vless.svinakraft.workers.dev/podpiska.txt",
    "update_interval": "24h"
  }]
}
```

---

**Логика работы:**
1. 📥 Пользователь запрашивает файл (например, `podpiska.txt`)
2. 🔍 Worker берёт файл из статики (`env.ASSETS`)
3. 🔄 Подменяет `Content-Type` на `text/plain`
4. 📤 Отдаёт чистый текст, готовый для парсинга VPN-клиентом

---

## 📁 Структура репозитория

```
📁 public
📄 package.json
📄 README.md
📄 worker.js
📄 wrangler.toml
```

## 🔄 Обновление подписок

Большинство клиентов обновляют подписки автоматически (обычно раз в 24 часа). 

**Ручное обновление:**
- **v2rayN:** правый клик по подписке → Обновить
- **Nekobox:** зажми подписку → Обновить
- **Streisand:** свайп вниз в разделе конфигураций
- **Hiddify:** потяни вниз для обновления

---

## ❓ Частые вопросы

**Q: Безопасно ли использовать эту подписку?**  
A: Файл содержит публичные VLESS-конфигурации. Используй на свой страх и риск.

**Q: Почему у меня не подключается?**  
A: Проверь: 1) актуальность конфигов (могли устареть), 2) корректность настроек клиента, 3) доступность Cloudflare в твоей сети.

**Q: Как часто обновляются конфиги?**  
A: По мере необходимости. Следи за обновлениями репозитория.

**Q: Могу ли я предложить свои конфиги?**  
A: Да! Открой Pull Request или Issue.

---

## ⚠️ Дисклеймер

Проект создан **в образовательных целях** для изучения работы Cloudflare Workers, HTTP-заголовков и сетевых протоколов. 

Автор не несёт ответственности за использование данного инструмента третьими лицами. Используя проект, вы соглашаетесь соблюдать законодательство вашей страны.

---

## 📄 Лицензия

Распространяется под лицензией [MIT](LICENSE).

---

<div align="center">

### ⭐ Если проект полезен — поставь звёздочку!

**Made with ❤️ by [@svinakraft-maker](https://github.com/svinakraft-maker)**

[🌐 Подписка](https://vless.svinakraft.workers.dev/podpiska.txt) • [🐛 Сообщить о проблеме](https://github.com/svinakraft-maker/CloudflareREPO.vless/issues) • [⭐ Star](https://github.com/svinakraft-maker/CloudflareREPO.vless)

</div>
