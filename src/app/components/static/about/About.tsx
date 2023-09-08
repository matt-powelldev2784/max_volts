import React from 'react'
import Image from 'next/image'

export const About = () => {
  return (
    <div className="w-full h-full flexCol lg:flexRow gap-20 bg-darkBlack p-8 md:p-16">
      <div className="relative hidden lg:block w-[440px] pt-20 pb-20">
        <Image
          src={`/services/tools_fan.png`}
          alt={'Electrician tools'}
          width={1000}
          height={1080}
          className="object-cover"
        />
      </div>
      <div className="md:max-w-[700px] lg:max-w-[600px] text-white">
        <h1 className="text-center text-xl lg:text-left lg:text-2xl font-bold text-mvOrange">
          MAX VOLTS ELECTRICAL SERVICES
        </h1>
        <h2 className="text-center text-xl lg:text-left lg:text-2xl mb-8 text-mvGreen ">
          About Us
        </h2>
        <p className="text-justify lg:text-left text-md mb-4 text-[17px] md:text-[19px]">
          Max Volts Electrical Services is a Surrey based electrical contractor
          serving both commercial and domestic customers in and around the M25
          and London.
        </p>
        <p className="text-justify lg:text-left mb-4 text-[17px] md:text-[19px]">
          Max Volts ethos is to provide high-quality workmanship and deliver
          total satisfaction to all of our clients thus forging long-lasting
          business relationships.
        </p>
        <p className="text-justify lg:text-left text-[17px] md:text-[19px]">
          We can take a project from design to completion whether it&#39;s for a
          small commercial outlet, domestic household or a large office
          refurbishment. So why not call us now on 07877 695 996 to book an
          engineer.
        </p>
      </div>
    </div>
  )
}
