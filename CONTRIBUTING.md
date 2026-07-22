# Contributing / راهنمای مشارکت

<p align="center">
  <b>فارسی</b> · <a href="#english">English</a>
</p>

---

## فارسی

از اینکه به جامعه ملحق شدید ممنونیم. این قوانین کمک می‌کنن با حدود ۶۰+ نفر، ریپو مرتب بمونه و ریویو ساده‌تر باشه.

### چطور مشارکت کنید

1. **یک نفر = یک پوشه** — بسازید: `Members/<github-username>/`
2. **یک هفته = یک پوشه** — مثلاً `Members/<github-username>/Week-01/` (شماره هفته با `Problems/` یکی باشه)
3. **README کوتاه** — ترجیحاً از [`Templates/Solution-README.md`](./Templates/Solution-README.md) استفاده کنید
4. **Pull Request باز کنید** — بگید کدوم هفته رو حل کردید و با چه زبانی

### جریان پیشنهادی (Git)

```text
1. git pull
2. کارتون رو فقط داخل Members/<username>/ انجام بدید
3. git add / commit
4. Push و Pull Request
```

اگر به ریپو دسترسی مستقیم ندارید: Fork → تغییرات → Pull Request به همین ریپو.

### انجام بدید / انجام ندید

| انجام بدید | انجام ندید |
| --- | --- |
| فقط داخل پوشه خودتون تغییر بدید | فایل/پوشه بقیه رو دست نزنید |
| به سوال داخل `Problems/` رجوع کنید | ساختار ریپو رو بدون هماهنگی عوض نکنید |
| پیام کامیت واضح بنویسید | فایل‌های غیرمرتبط، باینری، یا secret نذارید |
| در ریویو محترمانه باشید | روش بقیه رو تمسخر نکنید |

### عنوان Pull Request

مثال‌ها:

- `feat(soohimi): Week-01 Fizz Buzz`
- `fix(sara): Week-01 Fizz Buzz`

ترجیحاً هر PR مربوط به **یک هفته** باشه تا ریویو سریع‌تر انجام بشه.

### اضافه کردن سوال جدید (فقط ادمین)

```text
Problems/YYYY/Week-XX-Problem-Name/
  README.md      # از Templates/Problem-README.md
  assets/        # در صورت نیاز
```

### سوال دارید؟

از قالب‌های Issue داخل `.github/ISSUE_TEMPLATE/` استفاده کنید، یا داخل گروه بپرسید.

---

<a id="english"></a>

## English

Thanks for joining. These rules keep the repo tidy for 60+ members and make reviews easier.

### How to contribute

1. **One person = one folder** — Create `Members/<github-username>/`
2. **One week = one folder** — e.g. `Members/<github-username>/Week-01/` (week number must match `Problems/`)
3. **Short README** — Prefer [`Templates/Solution-README.md`](./Templates/Solution-README.md)
4. **Open a Pull Request** — Say which week you solved and which language you used

### Suggested Git flow

```text
1. git pull
2. Work only under Members/<username>/
3. git add / commit
4. Push and open a Pull Request
```

If you don’t have direct write access: Fork → change → PR into this repo.

### Do / Don’t

| Do | Don’t |
| --- | --- |
| Change only your own member folder | Edit other members’ files |
| Reference the problem under `Problems/` | Change repo structure without discussion |
| Write clear commit messages | Commit unrelated files, binaries, or secrets |
| Be respectful in reviews | Mock other people’s approaches |

### Pull request titles

Examples:

- `feat(soohimi): Week-01 Fizz Buzz`
- `fix(sara): Week-01 Fizz Buzz`

Prefer **one week per PR** when possible.

### Adding a new weekly problem (admins)

```text
Problems/YYYY/Week-XX-Problem-Name/
  README.md      # from Templates/Problem-README.md
  assets/        # if needed
```

### Questions?

Use the issue templates under `.github/ISSUE_TEMPLATE/`, or ask in the group chat.
