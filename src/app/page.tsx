import { NavBar } from '@/app/components'
import { ClientMenu, ProductMenu, InvoiceMenu } from '@/app/components/menus'

export default async function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <nav className="flex flex-row w-full justify-center items-start flex-wrap gap-2 md:mt-4">
        <InvoiceMenu />
        <ClientMenu />
        <ProductMenu />
      </nav>
    </main>
  )
}
