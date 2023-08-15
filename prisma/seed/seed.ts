import { prisma } from '../db/client'

async function main(): Promise<void> {
  await prisma.invoiceRow.deleteMany()
  await prisma.invoice.deleteMany()
  await prisma.product.deleteMany()
  await prisma.client.deleteMany()

  const clientSeeds = [
    {
      name: 'John Smith',
      companyName: 'John Smith Ltd',
      add1: '1 John Street',
      add2: 'John Town',
      postcode: 'JS1 1JS',
      tel: '01234 567890',
      email: 'email@email.com',
    },
    {
      name: 'Jane Smith',
      companyName: 'Jane Smith Ltd',
      add1: '1 Jane Street',
      add2: 'Jane Town',
      postcode: 'JS1 1JS',
      tel: '01234 567890',
    },
  ]

  const clients = await prisma.client.createMany({
    data: clientSeeds.map((client) => ({
      name: client.name,
      companyName: client.companyName,
      add1: client.add1,
      add2: client.add2,
      postcode: client.postcode,
      tel: client.tel,
      email: client.email,
    })),
  })
  console.log({ clients })

  const productSeeds = [
    {
      name: 'Labour',
      description: '',
      buyPrice: 100,
      sellPrice: 200,
    },
    {
      name: 'Electrical Part 1',
      description: 'Electrical Part 1 Description',
      buyPrice: 200,
      sellPrice: 400,
    },
    {
      name: 'Misc',
      description: '',
      buyPrice: 0,
      sellPrice: 0,
    },
  ]

  const products = await prisma.product.createMany({
    data: productSeeds.map((product) => ({
      name: product.name,
      description: product.description,
      buyPrice: product.buyPrice,
      sellPrice: product.sellPrice,
    })),
  })

  console.log({ products })
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
