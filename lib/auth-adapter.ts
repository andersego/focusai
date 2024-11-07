import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { Adapter, AdapterUser } from "next-auth/adapters"
import prisma from "./prisma"

interface AccountData {
  provider: string
  providerAccountId: string
}

export function CustomPrismaAdapter(): Adapter {
  const adapter = PrismaAdapter(prisma)

  return {
    ...adapter,
    getUserByAccount: async (data: AccountData): Promise<AdapterUser | null> => {
      try {
        const account = await prisma.account.findFirst({
          where: {
            provider: data.provider,
            providerAccountId: data.providerAccountId,
          },
          select: {
            user: true,
          },
        })

        if (!account?.user) return null

        const user: AdapterUser = {
          id: account.user.id,
          email: account.user.email || "",
          emailVerified: account.user.emailVerified,
          name: account.user.name,
          image: account.user.image,
        }

        return user
      } catch (error) {
        console.error("Error in getUserByAccount:", error)
        return null
      }
    }
  }
} 