import { prisma } from '../db/client'
import { storeItemSeeds } from './storeItems'

async function main(): Promise<void> {
  //   await prisma.storeItem.deleteMany()
  //   const storeItems = await prisma.storeItem.createMany({
  //     data: storeItemSeeds.map((product) => ({
  //       name: product.name,
  //       image: product.image,
  //       brand: product.brand,
  //       description: product.description,
  //       price: product.price,
  //       category: product.category,
  //     })),
  //   })
  //   console.log({ storeItems })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })

  .catch(async (e) => {
    console.error(e)

    await prisma.$disconnect()

    process.exit(1)
  })
