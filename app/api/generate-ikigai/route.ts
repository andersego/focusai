import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { love, good, world, paid } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a career and life purpose advisor that helps people find their ikigai. 
          You MUST return a response in this EXACT JSON format:
          {
            "suggestedProfession": "string",
            "connections": {
              "passion": "string",
              "mission": "string",
              "vocation": "string",
              "profession": "string"
            },
            "steps": ["string"]
          }`
        },
        {
          role: "user",
          content: `Based on these answers to the ikigai questions, suggest a professional path and explain how it interconnects all aspects:

What you love: ${love}
What you're good at: ${good}
What the world needs: ${world}
What you can be paid for: ${paid}

Remember to return ONLY the JSON format specified, with all fields present.`
        }
      ],
      temperature: 0.7,
    });

    const content = completion.choices[0].message.content;
    
    if (!content) {
      throw new Error('No content in response');
    }

    const parsedResponse = JSON.parse(content);

    // Validate response structure
    if (!parsedResponse.connections?.passion || 
        !parsedResponse.connections?.mission || 
        !parsedResponse.connections?.vocation || 
        !parsedResponse.connections?.profession) {
      throw new Error('Invalid response structure from OpenAI');
    }

    return NextResponse.json({ 
      result: {
        suggestedProfession: parsedResponse.suggestedProfession,
        connections: {
          passion: parsedResponse.connections.passion,
          mission: parsedResponse.connections.mission,
          vocation: parsedResponse.connections.vocation,
          profession: parsedResponse.connections.profession
        },
        steps: parsedResponse.steps
      }
    });
  } catch (error: any) {
    console.error('Ikigai analysis error:', error);
    return NextResponse.json({ 
      error: 'Failed to analyze ikigai',
      details: error?.message || 'Unknown error'
    }, { status: 500 });
  }
} 