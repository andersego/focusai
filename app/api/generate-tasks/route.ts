import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { goal, deadline, previousTasks, currentDay } = await req.json();

    if (!goal || !deadline) {
      return NextResponse.json({ 
        error: 'Missing required fields',
        details: 'Both goal and deadline are required'
      }, { status: 400 });
    }

    let previousTasksContext = '';
    let feedbackContext = '';

    if (previousTasks?.length > 0) {
      const completedTasks = previousTasks.filter((t: any) => t.completed);
      const incompleteTasks = previousTasks.filter((t: any) => !t.completed);
      
      previousTasksContext = `
Previous day's progress:
- Completed tasks: ${completedTasks.map((t: any) => t.text).join(', ')}
- Incomplete tasks: ${incompleteTasks.map((t: any) => t.text).join(', ')}`;

      // Get feedback for previous day if exists
      const feedback = previousTasks.feedback;
      if (feedback) {
        feedbackContext = `
User's feedback from previous day:
- Mood: ${feedback.mood}
- Comments: ${feedback.feedback}`;
      }
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a task planner that creates specific, actionable tasks."
        },
        {
          role: "user",
          content: `Create 3 specific tasks for Day ${currentDay} of the goal: "${goal}" (deadline: ${deadline}). Tasks should be achievable today.

${previousTasksContext}
${feedbackContext}

Consider the previous day's progress and user feedback when generating new tasks.

Return ONLY a JSON object in this exact format:
{
  "tasks": [
    {"id": 1, "text": "First specific task description", "completed": false},
    {"id": 2, "text": "Second specific task description", "completed": false},
    {"id": 3, "text": "Third specific task description", "completed": false}
  ]
}`
        }
      ],
      temperature: 0.3,
    });

    const response = completion.choices[0].message.content;
    
    if (!response) {
      throw new Error('No content in OpenAI response');
    }

    return NextResponse.json(JSON.parse(response));
  } catch (error: any) {
    console.error('Task generation error:', error);
    return NextResponse.json({ 
      error: 'Failed to generate tasks',
      details: error?.message || 'Unknown error'
    }, { status: 500 });
  }
} 