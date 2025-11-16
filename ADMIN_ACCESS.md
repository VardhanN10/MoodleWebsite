# Admin Access Guide

## How to Access Quiz Results (Admin Only)

The Results page is **password-protected** and hidden from students. Only you can access it.

### Method 1: Keyboard Shortcut (Easiest)

1. Go to your quiz website: https://vardhann10.github.io/MoodleWebsite/
2. Press **Ctrl + Shift + R** (hold all three keys together)
3. Enter the admin password when prompted
4. You'll see the Results page with all student quiz submissions

### Method 2: Direct Link

You can also access the results by going directly to:
https://vardhann10.github.io/MoodleWebsite/?admin=true

Then enter the password.

---

## Current Admin Password

**Default Password:** `admin123`

### ⚠️ IMPORTANT: Change Your Password!

For security, you should change the default password:

1. Open `app.js` in your project folder
2. Find line 6: `const ADMIN_PASSWORD = 'admin123';`
3. Change `'admin123'` to your own secure password
4. Example: `const ADMIN_PASSWORD = 'MySecurePass2024!';`
5. Save the file
6. Push to GitHub:
   ```bash
   git add app.js
   git commit -m "Update admin password"
   git push
   ```

---

## What You Can Do on the Results Page

- ✅ View all student quiz results
- ✅ Filter results by program
- ✅ Export results to CSV (Excel-compatible)
- ✅ See pass/fail status
- ✅ Clear all results (with confirmation)

---

## Viewing Results in Google Sheets

You can also view all results directly in your Google Sheet, which updates in real-time as students complete quizzes.

**Your Google Sheet:** [Open your Google Sheet]

---

## Security Notes

- Students cannot see the Results page (it's not visible in navigation)
- The password is required to access results
- Results are stored in both:
  - **Google Sheets** (your private sheet)
  - **Browser localStorage** (each student sees only their own result)

---

## Sharing the Quiz Link

When sharing the quiz with students, just give them the main URL:
**https://vardhann10.github.io/MoodleWebsite/**

They will NOT be able to access the results page.

---

## Troubleshooting

**Forgot your password?**
- Check `app.js` file, line 6
- Or reset it by editing the file on GitHub

**Can't access results page?**
- Make sure you're using **Ctrl + Shift + R** (all three keys together)
- Try refreshing the page first
- Check that you're on the live website (not a local file)
