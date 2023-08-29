import { ClientListItem } from '../ClientListItem/ClientListItem'

export const ClientListHeader = () => {
  const clientListHeader = {
    id: 'clientListHeader',
    Name: 'Name',
    companyName: 'Coompnay',
    add1: 'Address 1',
    add2: 'Address2',
    postcode: 'Post Code',
    tel: 'Tel',
    email: 'Email',
    header: true,
  }

  const ProductListHeaderJsx = (
    // @ts-ignore: ignore erros to allow insertion of invoice row header
    <ClientListItem key={clientListHeader.id} client={clientListHeader} />
  )

  return <>{ProductListHeaderJsx}</>
}
