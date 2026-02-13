# XIMI'S AUTO REPAIR – Deployment Guide

## GitHub Pages (Hosting)

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repo (e.g. `ximis-repair`)
3. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ximis-repair.git
   git branch -M main
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

### 2. Update Homepage URL

Edit `frontend/package.json` and replace the placeholder:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/ximis-repair"
```

Use your GitHub username and actual repo name.  
If the repo is `ximis-repair`, the URL will be:  
`https://YOUR_USERNAME.github.io/ximis-repair`

### 3. Install Dependencies & Deploy

```bash
cd frontend
yarn install
yarn deploy
```

This will:

- Build the React app
- Copy `index.html` to `404.html` (for SPA routing)
- Push the `build/` folder to the `gh-pages` branch

### 4. Enable GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Source**, choose **Deploy from a branch**
3. Select branch: `gh-pages`, folder: `/ (root)`
4. Save

The site will be available at:

`https://YOUR_USERNAME.github.io/ximis-repair`

---

## Custom Domain with Squarespace

### Option A: Domain Only (Recommended)

Use Squarespace Domains to register or connect a custom domain and point it to GitHub Pages.

1. **In Squarespace**
   - Register or add your domain (e.g. `ximisautorepair.com`)
   - Go to **Settings** → **Domains** → select your domain

2. **Configure DNS**
   - Add A records:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add CNAME for `www` → `YOUR_USERNAME.github.io`

3. **In GitHub**
   - Repo → **Settings** → **Pages**
   - Under **Custom domain**, enter `ximisautorepair.com`
   - Enable **Enforce HTTPS**

4. **Update `homepage` in package.json**

   Change:

   ```json
   "homepage": "https://ximisautorepair.com"
   ```

   Rebuild and redeploy:

   ```bash
   cd frontend && yarn build && yarn deploy
   ```

### Option B: Squarespace Site + External Link

If you later build a full site on Squarespace:

- Keep the React app on GitHub Pages
- Add a **Link** or **External URL** in Squarespace pointing to the GitHub Pages URL, or
- Use Squarespace **Code Block** or **Custom Code** to embed or redirect

---

## Deployment Checklist

- [ ] Create GitHub repo and push code
- [ ] Update `homepage` in `frontend/package.json` with GitHub Pages URL
- [ ] Run `yarn deploy` in the frontend folder
- [ ] Enable GitHub Pages (Settings → Pages)
- [ ] (Optional) Add custom domain in Squarespace and update DNS
- [ ] (Optional) Update `homepage` to custom domain and redeploy

---

## Notes

- **Backend:** This setup deploys only the frontend. The backend (`backend/server.py`) is not included; it needs separate hosting (e.g. Railway, Render) if used.
- **Local development:** `yarn start` still runs locally without the base path.
- **Repo name:** If the repo is not `ximis-repair`, update both the `homepage` URL and your GitHub Pages source branch accordingly.
