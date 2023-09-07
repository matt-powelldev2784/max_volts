import Image from 'next/image'

const Card = () => (
  <div className="flexCol p-4 shadow rounded bg-white border-2 border-red-500">
    <div className="flexRow lg:flexCol max-w-[600px] md:h-[300px] lg:h-fit border-2 border-green-500">
      <div className="md:w-[2000px] lg:w-fit border-2 border-blue-500">
        <Image
          src={`/services/car_charge_woman.jpg`}
          alt={'Electrician tools'}
          width={1000}
          height={1080}
          className="object-cover"
        />
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting.
      </p>
    </div>
  </div>
)

export const Cards = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 p-16 mx-auto place-content-center justify-center border-2 border-blue-500">
    <Card />
    <Card />
    <Card />
  </div>
)
