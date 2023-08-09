import { NavBar, Invoice, IsLoggedIn } from '@/app/components'

export default async function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <IsLoggedIn />
      <Invoice />
    </main>
  )
}
