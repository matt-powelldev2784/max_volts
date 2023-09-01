import { NavBar } from '@/app/components'
import { SignOut } from '@/app/components/auth/SignOut'

export default function SignOutPage() {
  return (
    <>
      <NavBar />
      <div className="flexCol gap-4">
        <SignOut />
      </div>
    </>
  )
}
