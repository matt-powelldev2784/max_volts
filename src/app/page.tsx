import { NavBar } from '@/app/components'
import { ClientMenu, ProductMenu, InvoiceMenu } from '@/app/components'

export default async function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <nav className="flex flex-row w-full justify-center items-start flex-wrap mt-4 md:mt-8 lg:mt-8 gap-8 lg:m-4">
        <InvoiceMenu />
        <ClientMenu />
        <ProductMenu />
      </nav>
    </main>
  )
}
