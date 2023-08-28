import { PageTitle } from '.'
import { NavBar } from '../components'

export const ServerError = () => {
  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <PageTitle
        text={'Server Error'}
        imgPath={'/icons/error.svg'}
        divClasses={'mt-4'}
      />
      <p className="flexRow mt-4">Please try again later.</p>
    </main>
  )
}
