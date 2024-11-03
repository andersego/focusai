import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

// Prevent multiple instances in development
const prisma = global.prisma || new PrismaClient()

// Close the connection when the server shuts down
process.on('beforeExit', async () => {
  await prisma.$disconnect()
})

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma