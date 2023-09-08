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
    <section className="bg-darkBlack py-8 lg:py-16">
      <h1 className="w-full text-center text-xl lg:text-2xl font-bold text-mvOrange mb-2 md:mb-8">
        OUR SERVICES
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-12 mx-4 place-content-center justify-center">
        {servicesCardsJsx}
      </div>
    </section>
  )
}
