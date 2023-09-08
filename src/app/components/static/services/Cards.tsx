import Image from 'next/image'

const Card = () => (
  <div className="flexCol p-4 bg-white lg:max-w-[400px] mx-auto">
    <div className="md:flexRow gap-8 lg:flexCol w-full md:h-[300px] lg:h-fit overflow-hidden">
      <div className="md:grow-2 lg:w-fit">
        <Image
          src={`/services/car_charge_woman.jpg`}
          alt={'Electrician tools'}
          width={1000}
          height={1080}
          className="object-cover"
        />
      </div>
      <div className="w-full min-w-[250px]">
        <h2 className="text-center text-mvOrange text-lg font-bold my-2">
          Electrical Installations
        </h2>
        <p className="text-justify">
          Electrical Installations Quality electrical installations for
          residential and commercial properties. Trust our expert electricians
          for a reliable service.
        </p>
      </div>
    </div>
  </div>
)

export const Cards = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-2 md:p-8 mx-auto place-content-center justify-center">
    <Card />
    <Card />
    <Card />
  </div>
)
