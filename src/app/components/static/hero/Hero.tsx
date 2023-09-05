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
      <div className="absolute flexCol lg:items-start lg:left-32 lg:max-w-[800px] h-full w-full">
        <p className="text-center lg:text-left font-bold text-xl md:text-3xl lg:text-5xl text-white mx-6 md:mx-16 lg:mx-0 bg-mvGreen/[0.9] rounded-xl p-4">
          {text}
        </p>
        <button className="bg-white px-4 py-2 rounded my-4 md:my-8 text-9xl">
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
