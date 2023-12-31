import { PageTitle } from '@/app/ui/'
import { T_Client } from '@/types'
import { SetPage } from '@/app/ui/'
import { ClientListItem } from './components/ClientListItem/ClientListItem'
import { ClientListHeader } from './components/ClientListItemHeader/ClientListHeader'

interface ClientListProps {
  clients: T_Client[]
  maxClientPages: number
  currentPageNum: number
}

export const ClientList = async ({
  clients,
  maxClientPages,
  currentPageNum,
}: ClientListProps) => {
  const clientsJsx = clients.map((client) => {
    return <ClientListItem key={client.id} client={client} />
  })

  return (
    <section className="min-h-screen w-screen">
      <div className="flexCol mt-4 mb-4">
        <PageTitle text={'Client List'} imgPath={'/icons/person.svg'} />
      </div>
      <SetPage
        maxPageNumber={maxClientPages}
        currentPageNum={currentPageNum}
        baseUrl="/pages/client/client-list/"
      />
      <ClientListHeader />
      {clientsJsx}
    </section>
  )
}
