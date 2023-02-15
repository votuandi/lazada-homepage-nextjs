/* eslint-disable @next/next/no-img-element */
import { ProductCategoryModel } from '@/models/productCategory.model'
import * as React from 'react'

export interface IProps {
  productCategory: ProductCategoryModel
}

export default function ProductCategory({ productCategory }: IProps) {
  return (
    <div className="w-[150px] h-[150px] relative bg-white flex flex-col content-center justify-center hover:shadow border-r-[1px] border-b-[1px] border-slate-100">
      <img
        className="w-[80px] h-[80px] self-center relative"
        src={`/assets/img/product-category/${productCategory.img}`}
        alt=""
      />
      <p className=" text-sm leading-lg text-blacktext self-center text-center relative mt-2 mx-3">
        {productCategory.name}
      </p>
    </div>
  )
}
