import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { prisma } from '../../prisma/db/client'

export const getLoggedInUser = async () => {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email

  if (email) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  } else return null
}
