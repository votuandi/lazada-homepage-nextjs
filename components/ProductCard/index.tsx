import * as React from 'react'
import styles from './styles.module.css'

interface IProps {
  title: string
  originalPrice: number
  finalPrice: number
}

export default function ProductCard({ title, originalPrice, finalPrice }: IProps) {
  let formatPrice = (price: number) => {
    let formatedPrice = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
    return formatedPrice
  }

  let getDiscount = () => {
    let discont = ((originalPrice - finalPrice) * 100) / originalPrice
    return discont.toFixed()
  }

  return (
    <div className="max-w-sm bg-white h-[290px] w-[188px] border border-gray-200 rounded-lg hover:shadow">
      <a href="#">
        <img className="rounded-t-lg w-[188px] h-[188px]" src="/assets/img/product-01.jpg" alt="" />
        <div className="p-2">
          <div className="h-[36px] leading-[18px] [display: -webkit-box] [-webkit-box-orient: vertical] [-webkit-line-clamp: 2] overflow-hidden mb-[4px] text-[14px]">
            {title}
          </div>
          <div className=" text-[18px] text-orange-600 leading-[18px]">
            <span>{formatPrice(finalPrice)}</span>
          </div>
          <div className="text-[12px] py-1">
            <span className="text-gray-500 leading-[12px] line-through ">
              {formatPrice(originalPrice)}
            </span>
            <span className=" leading-[12px]"> -{getDiscount()}%</span>
          </div>
        </div>
      </a>
    </div>
  )
}
