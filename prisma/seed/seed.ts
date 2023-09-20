import { prisma } from '../db/client'

async function main(): Promise<void> {
  await prisma.invoiceRow.deleteMany()
  await prisma.invoice.deleteMany()
  await prisma.product.deleteMany()
  await prisma.client.deleteMany()

  const clientSeeds = [
    {
      name: 'Simon Mack',
      companyName: 'Max Volts Electrical Services',
      add1: '1 Mack Street',
      add2: 'Mack Town',
      postcode: 'JS1 1JS',
      tel: '01234 567890',
      email: 'email@email.com',
    },
    {
      name: 'Matthew Powell',
      companyName: '',
      add1: '1 Powell Street',
      add2: 'Powell Town',
      postcode: 'JS1 1JS',
      tel: '01234 567890',
      email: 'email@email.com',
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
      buyPrice: 0,
      sellPrice: 50,
    },
    {
      name: 'Misc Materials',
      description: '',
      buyPrice: 0,
      sellPrice: 0,
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
