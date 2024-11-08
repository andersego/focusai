import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient({
  log: ['query', 'error', 'warn']
})

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

process.on('beforeExit', async () => {
  await prisma.$disconnect()
})

export default prisma