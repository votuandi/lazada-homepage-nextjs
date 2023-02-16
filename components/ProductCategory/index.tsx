/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ProductCategoryModel } from '@/models/productCategory.model'
import * as React from 'react'

export interface IProps {
  productCategory: ProductCategoryModel
}

export default function ProductCategory({ productCategory }: IProps) {
  return (
    <div className="w-[25vw] h-[25vw] pc:w-[150px] pc:h-[150px] relative bg-white flex flex-col content-center justify-center hover:drop-shadow-2xl border-r-[1px] border-b-[1px] border-slate-100">
      <img
        className="w-[12.5vw] h-[12.5vw] pc:w-[80px] pc:h-[80px] self-center relative"
        src={`/assets/img/product-category/${productCategory.img}`}
      />
      <p className="text-xs pc:text-sm leading-lg text-midgray self-center text-center relative mt-2 mx-1 pc:mx-3">
        {productCategory.name}
      </p>
    </div>
  )
}
