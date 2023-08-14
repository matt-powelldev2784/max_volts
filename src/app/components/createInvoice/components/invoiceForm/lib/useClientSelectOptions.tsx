import { useClients } from '../../../../../../lib/hooks/useClients'

export const useClientSelectOptions = () => {
  const clients = useClients()

  return clients.map((client) => {
    return (
      <option key={client.id} value={client.id}>
        {`${client.name} @ ${client.companyName}`}
      </option>
    )
  })
}
