# Google Sheets Integration Setup Guide

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Contact Form Submissions" or similar
4. Add these headers in the first row:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Company
   - E1: Budget
   - F1: Message

## Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Replace the default code with this:

```javascript
function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request:', e);
    
    // Check if postData exists
    if (!e.postData || !e.postData.contents) {
      throw new Error('No post data received');
    }
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    console.log('Parsed data:', data);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.company || '',
      data.budget || '',
      data.message || ''
    ];
    
    console.log('Row data to append:', rowData);
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data saved successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'Contact Form API is running',
      timestamp: new Date().toISOString(),
      message: 'Use POST method to submit form data'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3: Deploy as Web App
1. Click **Deploy** → **New deployment**
2. Choose **Web app** as the type
3. Set **Execute as**: "Me" (this is CRITICAL)
4. Set **Who has access**: "Anyone" (this allows external requests)
5. Click **Deploy**
6. **IMPORTANT**: You'll be asked to authorize the script - click "Authorize access"
7. If you see a warning screen, click "Advanced" → "Go to [your project name] (unsafe)"
8. Click "Allow" to grant permissions
9. Copy the **Web app URL** that's generated

### ⚠️ CRITICAL DEPLOYMENT NOTES:
- **The URL should end with `/exec`** - if it doesn't, you're using the wrong URL
- **You must authorize the script** during deployment
- **If you update the script code**, you need to create a **NEW deployment** (not update the existing one)
- **Test the URL in a browser first** - it should return JSON, not HTML

## Step 4: Update Your API Route
1. Open `src/app/api/contact/route.js`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with the URL you copied in Step 3

## Step 5: Test the Integration
1. Fill out the contact form on your website
2. Submit the form
3. Check your Google Sheet - you should see the new row with the form data

## Security Notes
- The Google Apps Script URL will be public, but it only accepts POST requests
- Consider adding rate limiting or CAPTCHA for production use
- You can add additional validation in the Apps Script if needed

## Troubleshooting

### 🔴 Getting HTML Response Instead of JSON?
This is the most common issue. Here's how to fix it:

1. **Check the URL format**: Must end with `/exec`
2. **Redeploy the script**: 
   - Go to Apps Script → Deploy → New deployment
   - Create a completely NEW deployment (don't update existing)
   - Make sure "Execute as" = "Me" and "Who has access" = "Anyone"
3. **Test in browser**: Visit your script URL - it should show JSON like:
   ```json
   {
     "status": "Contact Form API is running",
     "timestamp": "2024-01-01T00:00:00.000Z",
     "message": "Use POST method to submit form data"
   }
   ```
4. **If you see HTML/login page**: The script isn't properly authorized or deployed

### 🔴 Other Common Issues:
- **CORS errors**: Make sure your Google Apps Script is deployed as a web app with "Anyone" access
- **Data not saving**: Check that the sheet has the correct headers in row 1
- **500 errors**: Check the Google Apps Script execution logs for detailed errors
- **Authorization issues**: You may need to re-authorize the script

### 🧪 Quick Test:
1. Visit `/api/test-google-script` on your site
2. Check browser console and terminal logs
3. The logs will show exactly what response you're getting from Google
