export async function GET() {
  try {
    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzlUoH24oARWsFAsXLFKnmvgOxdtc5gOebxtxzw_uHmFspJDR1_19IJwg83hooxs9PRfQ/exec';
    
    // Test GET request first
    const getResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'GET'
    });
    
    console.log('GET Response Status:', getResponse.status);
    const getResult = await getResponse.text();
    console.log('GET Response:', getResult);
    
    // Test POST request
    const testData = {
      timestamp: new Date().toISOString(),
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      budget: '10k-25k',
      message: 'This is a test message'
    };
    
    const postResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    console.log('POST Response Status:', postResponse.status);
    console.log('POST Response Headers:', [...postResponse.headers.entries()]);
    
    const postResult = await postResponse.text();
    console.log('POST Response Body:', postResult);
    
    return Response.json({
      success: true,
      getStatus: getResponse.status,
      getResult: getResult,
      postStatus: postResponse.status,
      postResult: postResult
    });
    
  } catch (error) {
    console.error('Test error:', error);
    return Response.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}
