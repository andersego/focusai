import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "./prisma"

export function CustomPrismaAdapter() {
  const adapter = PrismaAdapter(prisma)

  return {
    ...adapter,
    getUserByAccount: async (data) => {
      try {
        // Intentar obtener el usuario
        const account = await prisma.account.findFirst({
          where: {
            provider: data.provider,
            providerAccountId: data.providerAccountId,
          },
          select: {
            user: true,
          },
        })
        return account?.user ?? null
      } catch (error) {
        console.error("Error in getUserByAccount:", error)
        return null
      }
    }
  }
} 