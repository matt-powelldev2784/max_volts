import { NavBar } from '@/app/components'
import { NotAuth } from '@/app/components'

export default async function NotAuthorisedPage() {
  return (
    <>
      <NavBar />
      <NotAuth />
    </>
  )
}
