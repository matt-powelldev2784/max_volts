import { NavBar } from '@/app/components'
import { NavItems } from './components/navbar/components/NavItems'

export default async function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <div className="bg-darkBlack flex flex-col gap-8 p-4 h-fit min-h-screen">
        <NavItems />
      </div>
    </main>
  )
}
