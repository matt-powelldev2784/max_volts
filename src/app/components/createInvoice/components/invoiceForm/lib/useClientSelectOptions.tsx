import { useClients } from '../../../../../lib/hooks/useClients'

export const useClientSelectOptions = () => {
  const clients = useClients()

  return clients.map((client) => {
    const { name, companyName } = client
    const text = companyName ? `${name} @ ${companyName}` : name

    return (
      <option key={client.id} value={client.id}>
        {text}
      </option>
    )
  })
}
