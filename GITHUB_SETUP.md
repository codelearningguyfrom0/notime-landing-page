# Push to GitHub - Final Steps

Your project is ready! Use **Option A** (GitHub CLI) — it's the easiest.

---

## Option A: GitHub CLI (Recommended)

**Do this in Terminal** (not inside Cursor — gh needs to run interactively):

### Step 1: Log in to GitHub

```bash
gh auth login
```

- Choose: **GitHub.com**
- Choose: **HTTPS**
- Choose: **Login with a web browser**
- Copy the one-time code, press Enter
- In the browser, paste the code and authorize

### Step 2: Create repo and push

```bash
cd "/Users/kurtlau/Desktop/notime landing page"
./push-to-github.sh
```

Or run the command directly:

```bash
cd "/Users/kurtlau/Desktop/notime landing page"
gh repo create notime-landing-page --public --source=. --remote=origin --push
```

Done! Your repo will be at `https://github.com/YOUR_USERNAME/notime-landing-page`

---

## Option B: Manual (no CLI)

### Step 1: Create the repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `notime-landing-page`
3. Choose **Public**
4. **Do NOT** check "Add a README"
5. Click **Create repository**

### Step 2: Connect and push

```bash
cd "/Users/kurtlau/Desktop/notime landing page"
git remote add origin https://github.com/YOUR_USERNAME/notime-landing-page.git
git push -u origin main
```

### Step 3: Authenticate

Use a [Personal Access Token](https://github.com/settings/tokens) as your password when prompted.

---

**Optional:** Enable GitHub Pages to host your site for free:
1. Go to your repo on GitHub
2. Settings → Pages
3. Source: Deploy from branch
4. Branch: main, folder: / (root)
5. Save — your site will be at `https://YOUR_USERNAME.github.io/notime-landing-page/`
