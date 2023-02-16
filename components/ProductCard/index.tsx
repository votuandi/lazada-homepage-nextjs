/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import styles from './styles.module.css'
import { FlashSaleProductModel } from '@/models/flashSaleProduct.model'

interface IProps {
  flashSaleProduct: FlashSaleProductModel
}

export default function ProductCard({ flashSaleProduct }: IProps) {
  let formatPrice = (price: number) => {
    let formatedPrice = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
    return formatedPrice
  }

  let getDiscount = () => {
    if (flashSaleProduct.orgPrice == null || flashSaleProduct.fnPrice == null) return 0
    let discont =
      ((flashSaleProduct.orgPrice - flashSaleProduct.fnPrice) * 100) / flashSaleProduct.orgPrice
    return discont.toFixed()
  }

  return (
    <div className="max-w-sm bg-white h-[290px] w-[188px] border border-gray-200 hover:shadow">
      <a href="#">
        <img className="w-[188px] h-[188px]" src="/assets/img/product-01.jpg" alt="" />
        <div className="p-2">
          <div className="h-[36px] leading-[18px] [display: -webkit-box] [-webkit-box-orient: vertical] [-webkit-line-clamp: 2] overflow-hidden mb-[4px] text-[14px]">
            {flashSaleProduct.name}
          </div>
          <div className=" text-[18px] text-orange-600 leading-[18px]">
            <span>
              {formatPrice(flashSaleProduct.fnPrice != null ? flashSaleProduct.fnPrice : 0)}
            </span>
          </div>
          <div className="text-[12px] py-1">
            <span className="text-gray-500 leading-[12px] line-through ">
              {formatPrice(flashSaleProduct.orgPrice != null ? flashSaleProduct.orgPrice : 0)}
            </span>
            <span className=" leading-[12px]"> -{getDiscount()}%</span>
          </div>
        </div>
      </a>
    </div>
  )
}
