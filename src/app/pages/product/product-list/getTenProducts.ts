import { prisma } from '@/app/lib'

export const getTenProducts = async (pageNumber: number) => {
  const pageSize = 10
  const skip = (pageNumber - 1) * pageSize

  const products = await prisma.product.findMany({
    where: { isHidden: false },
    orderBy: { name: 'asc' },
    skip,
    take: pageSize,
  })

  return products
}
