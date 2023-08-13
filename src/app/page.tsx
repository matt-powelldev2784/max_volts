import { NavBar, CreateInvoice } from '@/app/components'

export default async function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <CreateInvoice />
    </main>
  )
}
