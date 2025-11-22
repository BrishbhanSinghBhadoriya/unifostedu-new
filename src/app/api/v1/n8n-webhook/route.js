import { NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = 'https://n8n.unifostedu.com/webhook/c18db3a6-b362-494e-adc6-f838628c8a97';

export async function POST(request) {
  try {
    const body = await request.json();
    const { message } = body;

    const messageText = message 

    if (!messageText || typeof messageText !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Call n8n webhook
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: messageText,
        
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('n8n webhook error:', response.status, errorText);
      return NextResponse.json(
        { error: `Webhook error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('n8n webhook response:', data);
    // console.log('n8n webhook response:', data.response.raw[0].output);
    
    // Handle n8n webhook response format
    // n8n often returns {"message":"Workflow was started"} as acknowledgment
    // The actual response might be in different fields depending on workflow configuration
    let botResponse =data[0].output
    // If response is just "Workflow was started", it means workflow is processing
    // We should return a helpful message
    if (botResponse === 'Workflow was started' || data?.message === 'Workflow was started') {
      botResponse = 'I received your message and I\'m processing it. Please wait for my response...';
    }
    
    // If no response found, try to stringify the data
    if (!botResponse && data) {
      // Don't show raw JSON to user, show a friendly message
      botResponse = 'I received your message. The workflow has been triggered.';
    }
    
    return NextResponse.json({
      response: botResponse || 'Message received',
      success: true,
      raw: data // Include raw response for debugging
    });

  } catch (error) {
    console.error('n8n webhook proxy error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

