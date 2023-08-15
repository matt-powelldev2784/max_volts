import { NavBar, Clients } from '@/app/components'

export default async function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <Clients />
    </main>
  )
}
