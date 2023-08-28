import { prisma } from '@/app/lib'

export const getProduct = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  })

  return product
}
