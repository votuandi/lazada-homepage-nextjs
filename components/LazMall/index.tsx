/* eslint-disable @next/next/no-img-element */
import { LazMallModel } from '@/models/lazMall.model'
import * as React from 'react'

export interface IProps {
  lazMall: LazMallModel
}

export default function LazMall({ lazMall }: IProps) {
  return (
    <div className="max-w-sm bg-white h-[270px] w-[188px] cursor-pointer hover:shadow relative flex flex-col justify-start content-center">
      <div className="w-[188px] h-[36px] top-[152px] left-0 absolute  bg-gradient-to-t from-gray-500/[.5] to-transparent z-20"></div>
      <div className="w-[188px] h-[188px] relative">
        <img className="w-[188px] h-[188px]" src={`/assets/img/${lazMall.bigImg}`} alt="" />
      </div>
      <div className="w-[52px] h-[52px] relative shadow content-center justify-center flex  -mt-[26px] z-30 self-center bg-white">
        <img
          className="w-[44px] h-[44px] left-1/2 bg-center self-center"
          src={`/assets/img/${lazMall.smallImg}`}
          alt=""
        />
      </div>
      <p className=" relative self-center text-blacktext text-[14px] leading-[18px] mt-[8px] mx-[8px] mb-[4px]">
        {lazMall.name}
      </p>
      <p className=" relative self-center text-graytext text-[12px] leading-[14px] mx-[8px]">
        {lazMall.subName}
      </p>
    </div>
  )
}
