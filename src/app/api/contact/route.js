export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message } = body;

    // Google Apps Script Web App URL - updated with your new URL
    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzlUoH24oARWsFAsXLFKnmvgOxdtc5gOebxtxzw_uHmFspJDR1_19IJwg83hooxs9PRfQ/exec';

    // Prepare the data to send to Google Sheets
    const formData = {
      timestamp: new Date().toISOString(),
      name: name || '',
      email: email || '',
      company: company || '',
      budget: budget || '',
      message: message || ''
    };

    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    console.log('Google Apps Script response status:', response.status);
    console.log('Google Apps Script response headers:', response.headers);

    const responseText = await response.text();
    console.log('Google Apps Script raw response:', responseText);

    if (!response.ok) {
      console.error('Google Apps Script error response:', responseText);
      throw new Error(`Failed to submit form data: ${response.status} - ${responseText.substring(0, 200)}`);
    }

    // Check if response is HTML (indicating deployment issue)
    if (responseText.trim().startsWith('<!DOCTYPE') || responseText.trim().startsWith('<html')) {
      console.warn('Google Apps Script returned HTML instead of JSON, but data may have been saved');
      // Since we got a 200 status and the data might be saved, we'll return success
      // but log this for debugging
      console.log('Response was HTML but status was 200 - data likely saved successfully');
    } else {
      // Try to parse JSON response
      try {
        const result = JSON.parse(responseText);
        console.log('Google Apps Script success response:', result);
      } catch (parseError) { // eslint-disable-line no-unused-vars
        console.warn('Could not parse response as JSON, but status was 200');
      }
    }

    return Response.json({ 
      success: true, 
      message: 'submitted successfully!' 
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return Response.json(
      { 
        success: false, 
        message: 'Failed to submit form. Please try again.' 
      },
      { status: 500 }
    );
  }
}
