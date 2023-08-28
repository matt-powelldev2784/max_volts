import { NavBar } from '@/app/components'
import { ClientMenu, ProductMenu, InvoiceMenu } from '@/app/components'

export default async function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <nav className="flex flex-row w-full justify-center items-start flex-wrap gap-8 md:mt-4">
        <InvoiceMenu />
        <ClientMenu />
        <ProductMenu />
      </nav>
    </main>
  )
}
