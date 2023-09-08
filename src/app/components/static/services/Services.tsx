import { CardItem } from './Components/cardItem/CardItem'
import { servicesData } from './Components/data/servicesData'

export const Services = () => {
  const servicesCardsJsx = servicesData.map((service) => (
    <CardItem
      key={service.key}
      image={service.image}
      title={service.title}
      text={service.text}
    />
  ))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-2 md:p-8 mx-auto place-content-center justify-center">
      {servicesCardsJsx}
    </div>
  )
}
