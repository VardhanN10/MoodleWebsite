// ========================================
// UPDATED Google Apps Script Code
// Copy and paste this into your Apps Script editor
// Replace the old code completely
// ========================================

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
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();

    // Skip header row and convert to JSON
    var results = [];

    for (var i = 1; i < data.length; i++) {
      var row = data[i];

      // Skip empty rows
      if (!row[0]) continue;

      // Parse the score (e.g., "7/10" to get score and total)
      var scoreParts = row[4].toString().split('/');
      var score = parseInt(scoreParts[0]) || 0;
      var total = parseInt(scoreParts[1]) || 10;

      // Parse percentage (e.g., "70%" to 70)
      var percentage = parseInt(row[6].toString().replace('%', '')) || 0;

      results.push({
        timestamp: row[0],
        name: row[1],
        matriculationNumber: row[2],
        programName: row[3],
        score: score,
        total: total,
        percentage: percentage,
        passed: row[7] === 'Passed'
      });
    }

    // Return results as JSON
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      data: results
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
