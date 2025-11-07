import { NextResponse } from 'next/server';
import { handleOpenAIRequest } from '../openai/ask/route';

export async function POST(request) {
  try {
    const body = await request.json();
    const { prompt } = body;

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Call the internal OpenAI API route handler directly
    return await handleOpenAIRequest(request);

  } catch (error) {
    console.error('Chatbot API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

