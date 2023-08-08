import { getLoggedInUser } from '@/lib/getLoggedInUser'

export const IsLoggedIn = async () => {
  const user = await getLoggedInUser()

  if (user) {
    return <div>{user?.name} signed in</div>
  }

  if (!user) {
    return <div>not signed in</div>
  }
}
