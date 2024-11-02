import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

interface QueryEvent {
  query: string;
  params: string;
  duration: number;
}

const prisma = global.prisma || new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
})

// Debug logs
prisma.$on('query', (e: QueryEvent) => {
  console.log('Query: ' + e.query)
  console.log('Params: ' + e.params)
  console.log('Duration: ' + e.duration + 'ms')
})

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma