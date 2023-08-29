import { prisma } from '@/app/lib'

export const getMaxProductPage = async () => {
  const pageSize = 10

  const totalProducts = await prisma.product.count()

  const maxPage = Math.ceil(totalProducts / pageSize)

  return maxPage
}
