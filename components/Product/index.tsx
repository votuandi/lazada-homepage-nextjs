/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ProductModel } from '@/models/product.model'
import * as React from 'react'

export interface IProps {
  product: ProductModel
}

export default function Product({ product }: IProps) {
  let formatPrice = (price: number) => {
    let formatedPrice = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
    return formatedPrice
  }

  let getDiscount = () => {
    if (product.originPrice == null || product.finalPrice == null) return 0
    let discont = ((product.originPrice - product.finalPrice) * 100) / product.originPrice
    return discont.toFixed()
  }

  return (
    <div className="max-w-sm bg-white h-[325px] w-[188px] border border-gray-200 mb-[20px] hover:shadow">
      <a href="#">
        <img className=" w-[188px] h-[188px]" src={`/assets/img/product/${product.img}`} alt="" />
        <div className=" relative flex flex-col justify-start content-center pt-1 px-2 pb-3">
          <div className=" relative h-[14px]">
            {product.isMall && <img className=" h-3 w-auto" src="/assets/img/laz-mall.png" />}
          </div>
          <div className="h-[36px] leading-[18px] [display: -webkit-box] [-webkit-box-orient: vertical] [-webkit-line-clamp: 2] overflow-hidden mb-[4px] text-[14px]">
            {product.name}
          </div>
          <div className=" text-[18px] text-orange-600 leading-[18px] font-semibold">
            <span>{formatPrice(product.finalPrice != null ? product.finalPrice : 0)}</span>
          </div>
          <div className="text-[12px] py-1">
            <span className="text-gray-500 leading-[12px] line-through ">
              {formatPrice(product.originPrice != null ? product.originPrice : 0)}
            </span>
            <span className=" leading-[12px]"> -{getDiscount()}%</span>
          </div>
          <div className="relative flex flex-row leading-[14px] content-center ">
            <div className=" relative flex flex-row h-[14px] self-center justify-start">
              {[...Array(Math.ceil(product.star ? product.star : 0))]
                .map((x) => 0)
                .map((s, i) => (
                  <img
                    key={i}
                    className=" w-[11px] h-[11px] align-baseline"
                    src="/assets/icon/icon-golden-star.svg"
                  />
                ))}
              {[...Array(5 - Math.ceil(product.star ? product.star : 0))]
                .map((x) => 0)
                .map((s, i) => (
                  <img
                    key={i}
                    className=" w-[11px] h-[11px] grayscale align-baseline"
                    src="/assets/icon/icon-golden-star.svg"
                  />
                ))}
            </div>
            <span className="text-[12px] text-graytext self-center ml-1">{`(${product.amountFeedback})`}</span>
          </div>
        </div>
      </a>
    </div>
  )
}
