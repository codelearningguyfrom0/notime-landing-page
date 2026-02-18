# Push to GitHub - Final Steps

Your project is ready! Follow these steps to back it up on GitHub:

## Step 1: Create the repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `notime-landing-page` (or any name you prefer)
3. **Description:** (optional) "Notime band landing page"
4. Choose **Public**
5. **Do NOT** check "Add a README" — your project already has files
6. Click **Create repository**

## Step 2: Connect and push

After creating the repo, GitHub will show you commands. Or run these in Terminal:

```bash
cd "/Users/kurtlau/Desktop/notime landing page"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/notime-landing-page.git

# Push your code
git push -u origin main
```

## Step 3: Authenticate

When you push, GitHub may ask you to sign in:
- **Option A:** Use a Personal Access Token instead of password
  - Go to GitHub → Settings → Developer settings → Personal access tokens
  - Generate a new token with `repo` scope
  - Use the token as your password when prompted

- **Option B:** If you have SSH set up, use the SSH URL instead:
  ```bash
  git remote set-url origin git@github.com:YOUR_USERNAME/notime-landing-page.git
  git push -u origin main
  ```

---

**Optional:** Enable GitHub Pages to host your site for free:
1. Go to your repo on GitHub
2. Settings → Pages
3. Source: Deploy from branch
4. Branch: main, folder: / (root)
5. Save — your site will be at `https://YOUR_USERNAME.github.io/notime-landing-page/`
