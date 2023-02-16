/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { useState, useEffect } from 'react'

export interface IProps {
  images: []
}

export default function SlideShow({ images }: IProps) {
  const [index, setIndex] = useState(0)

  let updateIndex = (ind: number) => {
    setIndex(ind)
  }

  useEffect(() => {
    ;(async () => {
      setInterval(() => {
        setIndex(index === images.length - 1 ? 0 : index + 1)
      }, 5000)
    })()
  }, [])

  return (
    <div className=" h-[344px] w-[1000px] relative">
      <img
        className=" h-[344px] w-[1000px] relative"
        src={`/assets/img/slide-show-${images[index]}.jpg`}
      />
      <div className=" h-3 w-[1000px] absolute bottom-[5%] z-20 flex flex-row justify-center content-center">
        {[...Array(images.length)]
          .map((x, i) => i)
          .map((s) => (
            <div
              className={` w-3 h-3 ${
                s === index ? `bg-white` : `bg-white/50`
              } border-box mx-1 rounded-full`}
              key={s}
              onClick={() => {
                updateIndex(s)
              }}
            ></div>
          ))}
      </div>
    </div>
  )
}
