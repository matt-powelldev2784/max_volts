import { NavBar } from '@/app/components'
import Hero from './api/hero/Hero'

export default async function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <Hero />
    </main>
  )
}
