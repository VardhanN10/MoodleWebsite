# 🚀 Deployment Guide - Make Your Quiz Live!

## Quick Overview

Your quiz will be live at: `https://[your-username].github.io/university-quiz/`

Estimated time: **5-10 minutes**

---

## 📋 Prerequisites

- [x] GitHub account (create at https://github.com/signup if needed)
- [x] Git installed on your computer (already done!)
- [x] Quiz files ready (already done!)

---

## 🎯 Option 1: GitHub Pages (RECOMMENDED)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Fill in:
   - **Repository name**: `university-quiz` (or any name you want)
   - **Description**: "Moodle-style quiz for university master programs"
   - **Public** (select this - required for free GitHub Pages)
   - ❌ DO NOT initialize with README
3. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Open Command Prompt or PowerShell in your project folder and run these commands:

```bash
# Navigate to your project folder
cd "c:\Users\vardh\OneDrive\Desktop\Prashanth Anna"

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: University quiz system with 40 questions"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME and REPOSITORY-NAME with your actual values
git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note**: When pushing, GitHub will ask for authentication. Use your GitHub username and a **Personal Access Token** (not password).

#### Getting a Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "Quiz Deployment"
4. Select scopes: Check `repo` (full control of private repositories)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when git asks

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** (left sidebar)
4. Under "Source":
   - Select **Branch**: `main`
   - Select **Folder**: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes
7. Refresh the page - you'll see your live URL!

### 🎉 Done! Your quiz is now live!

URL: `https://[your-username].github.io/[repository-name]/`

---

## 🎯 Option 2: Netlify (Alternative - Even Easier!)

### Drag and Drop Method (No Git Required)

1. Go to https://www.netlify.com/
2. Sign up (free) with GitHub or email
3. Click "Add new site" → "Deploy manually"
4. **Drag and drop your entire project folder**
5. Wait 30 seconds
6. Your site is live!

**Advantages:**
- No git commands needed
- Instant deployment
- Custom domain support
- Automatic HTTPS

**Your Netlify URL**: `https://random-name-12345.netlify.app/`
(You can customize the name in settings)

---

## 🎯 Option 3: Vercel (Alternative)

1. Go to https://vercel.com/
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Click "Deploy"

**Your Vercel URL**: `https://university-quiz.vercel.app/`

---

## 📝 Which Option Should You Choose?

| Feature | GitHub Pages | Netlify | Vercel |
|---------|-------------|---------|--------|
| **Ease of Use** | Medium | Easiest | Easy |
| **Speed** | Fast | Fastest | Fast |
| **Free Tier** | Unlimited | Unlimited | Unlimited |
| **Custom Domain** | Yes | Yes | Yes |
| **Best For** | Developers | Quick Deploy | Modern Apps |

**My Recommendation**:
- **Netlify** if you want the easiest experience (drag & drop)
- **GitHub Pages** if you want version control and standard hosting
- **Vercel** if you might add backend features later

---

## 🔧 Troubleshooting

### Issue: Images not showing
**Solution**: Make sure image paths are relative:
```javascript
// Correct ✅
image: "images/waste/gelber-sack.jpg"

// Wrong ❌
image: "/images/waste/gelber-sack.jpg"  // Don't start with /
```

### Issue: Site shows 404
**Solution**:
- Wait 2-3 minutes after deployment
- Check repository is set to Public
- Verify GitHub Pages is enabled in Settings

### Issue: Git asks for password
**Solution**: Use Personal Access Token instead:
1. Generate token at https://github.com/settings/tokens
2. Use token as password when git asks

---

## 🎨 Adding a Custom Domain (Optional)

### If you have a domain (like `quiz.youruniversity.edu`):

**For GitHub Pages:**
1. Go to repository Settings → Pages
2. Enter your custom domain
3. Add DNS records from your domain provider:
   ```
   Type: CNAME
   Name: quiz (or @)
   Value: your-username.github.io
   ```

**For Netlify:**
1. Domain settings → Add custom domain
2. Follow the DNS instructions
3. Free SSL certificate included!

---

## 📱 Testing Your Live Site

Once deployed, test these:
- [ ] All 4 courses load correctly
- [ ] Dropdown selection works
- [ ] Questions display properly
- [ ] Navigation (Home → Courses → Quiz) works
- [ ] Results page shows correctly
- [ ] Mobile responsive (test on phone)
- [ ] Images load (if you added them)

---

## 🔄 Updating Your Site

### GitHub Pages Method:
```bash
# Make changes to your files
# Then:
git add .
git commit -m "Updated questions"
git push
# Wait 1-2 minutes for changes to go live
```

### Netlify Method:
1. Go to Netlify dashboard
2. Drag and drop updated folder
3. Changes are live instantly!

---

## 🎓 Sharing Your Quiz

Once live, share the URL with:
- Students
- University administration
- Colleagues

**Pro Tip**: Create a QR code for easy access:
- Use https://qr-code-generator.com/
- Enter your live URL
- Download and print the QR code

---

## ✅ Next Steps After Deployment

1. **Add images** (use the IMAGE_REQUIREMENTS.md guide)
2. **Test all questions** for accuracy
3. **Gather feedback** from a few students
4. **Update content** as needed
5. **Monitor usage** (optional: add Google Analytics)

---

## 🆘 Need Help?

If you encounter issues:
1. Check the console for errors (F12 in browser)
2. Verify all file paths are correct
3. Make sure all files are uploaded
4. Double-check GitHub Pages is enabled

**Common URLs to check:**
- GitHub Repository: `https://github.com/YOUR-USERNAME/REPOSITORY-NAME`
- Live Site: `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

---

**Ready to deploy? Let me know which option you prefer and I'll guide you through it step by step!** 🚀
