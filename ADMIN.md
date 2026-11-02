# Editing the website

All text, links, photos and CV files on the homepage live in `content/site.json`.
You edit them from the admin panel at **/admin** (for example `https://jasser-nahali.netlify.app/admin/`).

When you click **Publish** in the admin, it commits the change to the `main` branch on GitHub.
The host sees the new commit and redeploys the site automatically, usually within a minute.
You never need to edit code or push by hand.

## What you can edit

- Name, photo, email, phone, location, CV PDFs (EN and FR)
- Every heading, label and paragraph, in English and French
- Experience, education, skill areas, technical stack, languages and social links:
  add, remove, edit or drag to reorder
- Show or hide any section
- Page title and Google description

## One-time setup (Netlify)

The admin signs you in with your GitHub account. Netlify handles that login once you connect GitHub to it:

1. On GitHub, open **Settings → Developer settings → OAuth Apps → New OAuth App**.
   - Homepage URL: `https://jasser-nahali.netlify.app`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Create it, then generate a client secret.
2. In Netlify, open your site, then **Site configuration → Access & security → OAuth → Install provider**.
   Choose **GitHub** and paste the client ID and secret.
3. Open `/admin`, click **Login with GitHub**, and approve.

Only GitHub accounts with write access to `Jasser1920/CV-perso` can save changes.

## Editing on your computer (optional)

```bash
npx decap-server
```

Then in another terminal, from the project folder:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/admin/`. Changes are written straight to `content/site.json` on your disk.
