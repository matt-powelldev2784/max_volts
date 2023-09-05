'use client'
import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { slideImages } from './data/slideData'
import Image from 'next/image'

export const Hero = () => {
  const SlidesJsx = slideImages.map(({ key, image, alt, text }) => (
    <div
      key={key}
      className="slide-container w-full h-[250px] md:h-[500px] lg:h-[620px] relative"
    >
      <Image
        src={`/slides/${image}`}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute flex flex-col justify-center items-center lg:items-start lg:left-32 lg:max-w-md h-full w-full">
        <p className="text-center lg:text-left font-bold text-3xl md:text-5xl lg:text-7xl text-white mx-8 md:mx-60 lg:mx-0">
          {text}
        </p>
        <button className="bg-white px-4 py-2 rounded my-4 md:my-8">
          Shop Now
        </button>
      </div>
    </div>
  ))

  const properties = {
    prevArrow: <></>,
    nextArrow: <></>,
  }

  return (
    <section className="relative">
      <Slide {...properties}>{SlidesJsx}</Slide>
    </section>
  )
}
