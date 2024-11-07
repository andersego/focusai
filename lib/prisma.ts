import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient({
  log: ['query', 'error', 'warn'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  },
  __internal: {
    engine: {
      connectionLimit: 1,
      binaryTargets: ['native', 'rhel-openssl-1.0.x']
    }
  }
})

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

process.on('beforeExit', async () => {
  await prisma.$disconnect()
})

export default prisma