import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { love, good, world, paid } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a career and life purpose advisor that helps people find their ikigai (intersection of what they love, what they're good at, what the world needs, and what they can be paid for)."
        },
        {
          role: "user",
          content: `Based on these answers to the ikigai questions, suggest a professional path and explain how it interconnects all aspects:

What you love: ${love}
What you're good at: ${good}
What the world needs: ${world}
What you can be paid for: ${paid}

Provide a response in this JSON format:
{
  "profession": "A clear suggestion for a professional activity that combines all aspects",
  "connections": {
    "passion": "How this connects what they love with what they're good at",
    "mission": "How this connects what they love with what the world needs",
    "vocation": "How this connects what they're good at with what they can be paid for",
    "profession": "How this connects what the world needs with what they can be paid for"
  },
  "path": "A detailed step-by-step path to start pursuing this profession, including specific actions and milestones"
}`
        }
      ],
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;
    
    if (!response) {
      throw new Error('No content in OpenAI response');
    }

    return NextResponse.json(JSON.parse(response));
  } catch (error: any) {
    console.error('Ikigai analysis error:', error);
    return NextResponse.json({ 
      error: 'Failed to analyze ikigai',
      details: error?.message || 'Unknown error'
    }, { status: 500 });
  }
} 