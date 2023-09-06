'use client'

import { useState, useEffect } from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { slideImages } from './data/slideData'
import Image from 'next/image'

export const Hero = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const SlidesJsx = slideImages.map(
    ({ key, image, alt, title1, title2, title3, text }) => (
      <div
        key={key}
        className="slide-container w-full h-[215px] md:h-[380px] lg:h-[620px] relative overflow-hidden"
      >
        <div className="absolute w-full h-full bg-black/[0.6]"></div>

        <Image
          src={`/slides/${image}`}
          alt={alt}
          width={1920}
          height={1080}
          className="object-cover z-0"
        />

        <div className="absolute top-0 flexCol lg:items-start lg:left-32 lg:max-w-[750px] h-full w-full z-10">
          <p className="text-center sm:max-w-[280px] md:max-w-full lg:text-left font-bold text-xl md:text-3xl lg:text-5xl text-white mx-6 md:mx-16 lg:mx-0 rounded-xl mb-2">
            {title1.toUpperCase()}
            <span className="text-mvOrange">
              {' ' + title2.toUpperCase() + ' '}
            </span>
            <span> {title3.toUpperCase()}</span>
          </p>
          <p className="hidden md:block text-justify md:text-center text-sm lg:text-left text-white mx-6 md:mx-16 lg:mx-0 rounded-xl py-2 md:text-base mb-4 ">
            {text}
          </p>
          <button
            type="button"
            className="text-white bg-mvOrange h-full w-[280px] md:w-[300px] max-h-[45px] mt-4 md:mt-0 rounded-xl hidden md:block "
          >
            Get Your Quote Now
          </button>
        </div>
      </div>
    )
  )

  const properties = {
    arrows: false,
    transitionDuration: 700,
    duration: 10000,
  }

  return (
    <section className="relative overflow-hidden bg-darkBlack">
      {isClient ? <Fade {...properties}>{SlidesJsx}</Fade> : null}
    </section>
  )
}
