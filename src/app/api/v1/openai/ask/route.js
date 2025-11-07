import { NextResponse } from 'next/server';
import axios from 'axios';

export async function handleOpenAIRequest(request) {
  try {
    const body = await request.json();
    const { prompt } = body;

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Get API base URL based on environment
    

    // Call the external OpenAI API
    const response = await axios.post(
      `/api/v1/openai/ask`,
      { prompt },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 30000 // 30 seconds timeout
      }
    );

    if (response.data && response.data.response) {
      return NextResponse.json({
        response: response.data.response,
        success: true
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid response from AI service' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    // Handle different error types
    if (error.response) {
      return NextResponse.json(
        { 
          error: error.response.data?.error || 'AI service error',
          status: error.response.status || 500
        },
        { status: error.response.status || 500 }
      );
    } else if (error.code === 'ECONNABORTED') {
      return NextResponse.json(
        { error: 'Request timed out' },
        { status: 408 }
      );
    } else if (error.code === 'ECONNREFUSED') {
      return NextResponse.json(
        { error: 'Unable to connect to AI service' },
        { status: 503 }
      );
    } else {
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  }
}

// Export POST handler for Next.js route
export async function POST(request) {
  return handleOpenAIRequest(request);
}

