# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets to track all student quiz results automatically.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it **"Quiz Results"** (or any name you prefer)
4. In the first row, add these column headers:
   ```
   A1: Timestamp
   B1: Name
   C1: Matriculation Number
   D1: Program
   E1: Score
   F1: Total Questions
   G1: Percentage
   H1: Status
   ```

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Create a new row with the data
    var row = [
      data.timestamp,
      data.name,
      data.matriculationNumber,
      data.programName,
      data.score + '/' + data.total,
      data.total,
      data.percentage + '%',
      data.passed ? 'Passed' : 'Failed'
    ];

    // Append the row to the sheet
    sheet.appendRow(row);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Quiz Results API is running');
}
```

4. Click the **disk icon** (💾) or press `Ctrl+S` to save
5. Name your project: **"Quiz Results API"**

## Step 3: Deploy the Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **"Web app"**
4. Configure the deployment:
   - **Description**: Quiz Results Tracker
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** (important!)
5. Click **Deploy**
6. You may see a warning "Authorization required" - click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to Quiz Results API (unsafe)** → **Allow**
9. Copy the **Web app URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```
   ⚠️ **SAVE THIS URL - YOU NEED IT FOR THE NEXT STEP!**

## Step 4: Update Your Quiz Code

1. Open your project folder
2. Open the file `app.js`
3. Find line 1 (very top of the file)
4. Add this line at the very top:

```javascript
const GOOGLE_SHEETS_URL = 'YOUR_WEB_APP_URL_HERE';
```

Replace `YOUR_WEB_APP_URL_HERE` with the URL you copied in Step 3.

**Example:**
```javascript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycby1234567890abcdef/exec';
```

5. Save the file
6. Push to GitHub:
   ```bash
   git add .
   git commit -m "Add Google Sheets integration"
   git push
   ```

## Step 5: Test It

1. Wait 1-2 minutes for GitHub Pages to update
2. Go to your quiz website
3. Complete a test quiz
4. Check your Google Sheet - the result should appear automatically!

## Troubleshooting

### Results not appearing in Google Sheet?

1. **Check the Web App URL** - Make sure you copied it correctly into `app.js`
2. **Check "Who has access"** - Must be set to "Anyone" in deployment settings
3. **Re-deploy** - In Apps Script, click Deploy → Manage deployments → Edit → Deploy as new version

### How to view all results?

Just open your Google Sheet! All student results will appear there automatically as they complete quizzes.

### Can students see other students' results?

No! Students only see their own results. Only you can see the Google Sheet with all results.

## Next Steps

Once everything is working:
- You can format your Google Sheet (colors, filters, charts, etc.)
- You can download the sheet as Excel/CSV anytime
- You can share the sheet with other professors (read-only access)
- Results are saved permanently in your Google Drive

---

## Need Help?

If you encounter any issues, double-check:
1. ✅ Google Sheet has the correct headers
2. ✅ Apps Script code is copied exactly
3. ✅ Web app is deployed with "Anyone" access
4. ✅ Web app URL is correctly added to `app.js`
5. ✅ Changes are pushed to GitHub
