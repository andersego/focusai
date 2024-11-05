import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const ikigais = await prisma.ikigai.findMany({
      where: {
        userId: session.user.id
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    const parsedIkigais = ikigais.map(ikigai => ({
      ...ikigai,
      result: JSON.parse(ikigai.result as string),
      answers: JSON.parse(ikigai.answers as string)
    }))

    return NextResponse.json({ ikigais: parsedIkigais })
  } catch (error) {
    console.error('Error fetching ikigais:', error)
    return NextResponse.json({ error: 'Failed to fetch ikigais' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { result, answers, analysisId } = await req.json()

    const resultString = typeof result === 'string' ? result : JSON.stringify(result)
    const answersString = typeof answers === 'string' ? answers : JSON.stringify(answers)

    const dataToSave = {
      userId: session.user.id,
      result: resultString,
      answers: answersString,
      analysisId: analysisId || undefined
    }

    console.log('Attempting to save:', dataToSave)

    if (analysisId) {
      const existingIkigai = await prisma.ikigai.findFirst({
        where: {
          userId: session.user.id,
          analysisId: analysisId
        }
      })

      if (existingIkigai) {
        const updatedIkigai = await prisma.ikigai.update({
          where: {
            id: existingIkigai.id
          },
          data: {
            result: resultString,
            answers: answersString
          }
        })
        return NextResponse.json({ ikigai: updatedIkigai })
      }
    }

    const savedIkigai = await prisma.ikigai.create({
      data: dataToSave
    })

    console.log('Successfully saved:', savedIkigai)
    return NextResponse.json({ ikigai: savedIkigai })
  } catch (error) {
    console.error('Error saving ikigai:', error)
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      })
    }
    return NextResponse.json({ 
      error: 'Failed to save ikigai',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 