'use client'

import { useState, useEffect } from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { slideImages } from './data/slideData'
import Image from 'next/image'
import { Button } from '@/app/ui'

export const Hero = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const SlidesJsx = slideImages.map(
    ({ key, image, alt, title1, title2, title3, text }) => (
      <div
        key={key}
        className="slide-container w-full h-[250px] md:h-[500px] lg:h-[620px] relative overflow-hidden"
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
          <p className="text-center lg:text-left font-bold text-xl md:text-3xl lg:text-5xl text-white mx-6 md:mx-16 lg:mx-0 rounded-xl p-4">
            {title1.toUpperCase()}
            <span className="text-mvOrange text-justify">
              {' ' + title2.toUpperCase() + ' '}
            </span>
            <span> {title3.toUpperCase()}</span>
          </p>
          <p className="text-center text-lg lg:text-left text-white mx-6 md:mx-16 lg:mx-0 rounded-xl p-4">
            {text}
          </p>
          <Button
            type="button"
            optionalClasses="text-white bg-mvOrange h-full w-[150px] md:w-[300px] max-h-[45px] ml-4 mt-4"
            buttonText={`Get A Quote Now`}
            disabled={false}
          />
        </div>
      </div>
    )
  )

  const properties = {
    arrows: false,
    transitionDuration: 700,
    duration: 5000,
  }

  return (
    <section className="relative overflow-hidden">
      {isClient ? <Fade {...properties}>{SlidesJsx}</Fade> : null}
    </section>
  )
}
