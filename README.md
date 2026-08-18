# ALTERA — AI Products & Creative Systems

Главный лендинг ALTERA: хиро-блок, витрина проектов, раздел «Подход» и контакты.
Без фреймворков и сборки — три файла: `index.html`, `style.css`, `favicon.svg`.

Рабочий адрес: https://vladimir-ing.github.io/ALTERA/

## Где живёт проект

Проект существует в двух местах, и они должны совпадать:

| Где | Что это |
|---|---|
| `C:\Users\PC\Documents\CLADE\ОБУЧЕНИЕ\ALTERA\ALTERA_Lending` | рабочая папка на компьютере |
| https://github.com/Vladimir-ing/ALTERA | GitHub, отсюда собирается живой сайт |

**Правило: любая правка должна попасть в оба места.** Живой сайт
`vladimir-ing.github.io/ALTERA` собирается из ветки `main` на GitHub — правка,
сделанная только в папке на компьютере, на сайт не попадёт. А правка, сделанная
только на GitHub, пропадёт из папки, и в следующий раз её легко затереть.

### Забрать изменения с GitHub в папку

```bash
cd "C:\Users\PC\Documents\CLADE\ОБУЧЕНИЕ\ALTERA\ALTERA_Lending"
git pull
```

Если папка пустая или в ней нет `.git`, забери проект целиком:

```bash
cd "C:\Users\PC\Documents\CLADE\ОБУЧЕНИЕ\ALTERA"
git clone https://github.com/Vladimir-ing/ALTERA.git ALTERA_Lending
```

Имя папки на компьютере (`ALTERA_Lending`) отличается от имени репозитория
(`ALTERA`) — поэтому в команде `clone` имя папки указано в конце явно.

### Отправить изменения из папки на GitHub

```bash
git add .
git commit -m "коротко, что изменил"
git push
```

Через минуту-две после `push` в `main` живой сайт обновится сам.

### Если правки пришли в отдельной ветке

Когда работа приходит не в `main`, а в ветке, сначала влей её через
**Merge pull request** на GitHub, и только потом делай `git pull` в папке —
иначе `git pull` принесёт старую версию `main` без этих правок.

## Что править

**`index.html`**
- `<title>` и `<meta name="description">` — заголовок вкладки и текст в поиске
- `og:title`, `og:description`, `og:url` — превью для соцсетей
- Хиро-блок — крупный текст на первом экране
- Секция `#projects` — карточки проектов: заголовок, описание, ссылка
- Секция `#approach` — блок «Подход»
- Футер `#contact` — Telegram, WhatsApp, копирайт

**`style.css`** — вся вёрстка и адаптив. Цвета и размеры собраны в переменных
`:root` в начале файла.

**`favicon.svg`** — иконка вкладки.

## Витрина проектов

Карточки в секции `#projects` — это и есть витрина наработок ALTERA. Каждая
карточка выглядит так:

```html
<a class="project-card purple" href="АДРЕС" target="_blank" rel="noreferrer">
  <div class="project-meta"><span>03</span><span class="live"><i></i> LIVE</span></div>
  <div class="project-main"><p>КОРОТКАЯ ПОДПИСЬ</p><h3>НАЗВАНИЕ</h3><span class="project-arrow">&#8599;</span></div>
  <p class="project-description">Одно-два предложения о продукте.</p><div class="project-line"></div>
</a>
```

Цвет свечения задаётся вторым классом: `blue`, `pink`, `purple`, `cyan`, `orange`.
Номера карточек (`01`, `02`, `03`) идут по порядку.

Добавлять карточки руками не обязательно — в корневой папке
`C:\Users\PC\Documents\CLADE\ОБУЧЕНИЕ\ALTERA` лежит скрипт `add-project.ps1`.
Он показывает, какие проекты уже выведены на лендинг, какие ещё нет, и вставляет
новую карточку с правильной разметкой и номером. Подробности — в файле
`ОБНОВЛЕНИЕ-САЙТОВ.md` там же.

## Ссылки на другие проекты

Карточки в секции `#projects` ведут на соседние сайты:

| Проект | Адрес |
|---|---|
| Base AI Platform | https://vladimir-ing.github.io/Base_AI_platform/ |
| ALTERA Photo Studio | https://vladimir-ing.github.io/ALTERA-Photo-Studio/ |

Если один из них переедет — поправь `href` в `index.html`.

## Проверить перед публикацией

- Открой `index.html` двойным кликом и пролистай на узком окне — вёрстка не должна ломаться.
- GitHub Pages чувствителен к регистру в путях, Windows — нет. Имена файлов только строчными.
- После `push` подожди 1–2 минуты и обнови живой сайт с `Ctrl+F5`.

## Публикация на GitHub Pages

Настроено в **Settings → Pages**: источник — ветка `main`, папка `/ (root)`.
Дальше любой `git push` в `main` обновляет сайт автоматически.
