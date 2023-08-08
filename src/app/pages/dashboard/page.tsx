import { NavBar } from '@/app/components'
import { checkUserIsAdmin } from '@/app/lib/getLoggedInUser'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const isAdmin = await checkUserIsAdmin()
  if (!isAdmin) redirect('/')

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      Admin Dashboard
    </main>
  )
}
