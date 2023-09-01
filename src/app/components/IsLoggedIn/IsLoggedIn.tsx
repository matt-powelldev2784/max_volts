import { getLoggedInUser } from '@/app/lib/getLoggedInUser'

export const IsLoggedIn = async () => {
  const user = await getLoggedInUser()

  if (user) {
    return <div className="hidden">{user?.name} signed in</div>
  }

  if (!user) {
    return <div className="hidden">not signed in</div>
  }
}
