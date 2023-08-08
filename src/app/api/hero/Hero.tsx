import { NavBar } from '@/app/components'
import { getLoggedInUser } from '@/lib/getLoggedInUser'

export default async function Hero() {
  const user = await getLoggedInUser()

  if (user) {
    return <div>{user?.name} signed in</div>
  }

  if (!user) {
    return <div>not signed in</div>
  }

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
    </main>
  )
}
