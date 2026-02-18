// {import { NextResponse } from 'next/server';

// // Active n8n webhook endpoint (previous one returned 404)
// const N8N_WEBHOOK_URL = 'https://n8n.unifostedu.com/webhook/691c118c-a79e-4be3-8c9d-171704236806';

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { message } = body;

//     const messageText = message 

//     if (!messageText || typeof messageText !== 'string') {
//       return NextResponse.json(
//         { error: 'Message is required' },
//         { status: 400 }
//       );
//     }

   
//     const response = await fetch(N8N_WEBHOOK_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         message: messageText,
        
//       }),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('n8n webhook error:', response.status, errorText);
//       return NextResponse.json(
//         { error: `Webhook error: ${response.status}` },
//         { status: response.status }
//       );
//     }
//     // Call n8n webhook

//     const data = await response.json();
   
//     // console.log('n8n webhook response:', data.response.raw[0].output);
    
//     // Handle n8n webhook response format
//     // n8n often returns {"message":"Workflow was started"} as acknowledgment
//     // The actual response might be in different fields depending on workflow configuration
//     let botResponse =data[0].output
//     // If response is just "Workflow was started", it means workflow is processing
//     // We should return a helpful message
//     if (botResponse === 'Workflow was started' || data?.message === 'Workflow was started') {
//       botResponse = 'I received your message and I\'m processing it. Please wait for my response...';
//     }
    
//     // If no response found, try to stringify the data
//     if (!botResponse && data) {
//       // Don't show raw JSON to user, show a friendly message
//       botResponse = 'I received your message. The workflow has been triggered.';
//     }
    
//     return NextResponse.json({
//       response: botResponse || 'Message received',
//       success: true,
//       raw: data // Include raw response for debugging
//     });

//   } catch (error) {
//     console.error('n8n webhook proxy error:', error);
//     return NextResponse.json(
//       { error: error.message || 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request) {
  try {
    const body = await request.json();
    const message = body.message;

    const n8nResponse = await fetch(
      'https://unifostedu.app.n8n.cloud/webhook/4ddd7d9a-d3da-4f79-be6a-b2a4b7589730',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      }
    );

    // n8n baaz aukaat empty response deta hai
    const text = await n8nResponse.text();
    
    if (!text || text.trim() === '') {
      return Response.json({ 
        response: 'Sorry, I could not find results. Try searching for a university name or course name.' 
      });
    }

    const data = JSON.parse(text);
    const responseText = data?.response || data?.message || 'No response from AI.';

    return Response.json({ response: responseText });

  } catch (error) {
    console.error('API Route error:', error.message);
    return Response.json({ 
      response: 'Something went wrong. Please try again!' 
    }, { status: 500 });
  }
}