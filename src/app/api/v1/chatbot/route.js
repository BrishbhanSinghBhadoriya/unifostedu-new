import { NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = 'https://n8n.unifostedu.com/webhook/691c118c-a79e-4be3-8c9d-171704236806';

// Redirect chatbot API calls to n8n webhook
export async function POST(request) {
  try {
    const body = await request.json();
    const { prompt, message, text } = body;

    const messageText = prompt || message || text;

    if (!messageText || typeof messageText !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Call n8n webhook directly
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: messageText,
        prompt: messageText,
        text: messageText,
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

    
    // Handle n8n webhook response format
    let botResponse = data?.response || 
                     data?.message || 
                     data?.text || 
                     data?.output ||
                     data?.data?.response ||
                     data?.data?.message ||
                     (Array.isArray(data) && data[0]?.json?.response) ||
                     (Array.isArray(data) && data[0]?.json?.message);
    
    // If response is just "Workflow was started", it means workflow is processing
    if (botResponse === 'Workflow was started' || data?.message === 'Workflow was started') {
      botResponse = 'I received your message and I\'m processing it. Please wait for my response...';
    }
    
    if (!botResponse && data) {
      botResponse = 'I received your message. The workflow has been triggered.';
    }
    
    return NextResponse.json({
      response: botResponse || 'Message received',
      success: true,
    });

  } catch (error) {
    console.error('Chatbot API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

