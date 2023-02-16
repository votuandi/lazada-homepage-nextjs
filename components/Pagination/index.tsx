/* eslint-disable react/jsx-key */
import * as React from 'react'
import { useEffect, useState } from 'react'

export interface IProps {
  amountPage: number
  getProduct: Function
}

export default function Pagination({ amountPage, getProduct }: IProps) {
  const [currentPageNumber, setCurrentPageNumber] = useState(1)

  let pickPageNumber = async (pageNumber: number) => {
    await getProduct(pageNumber)
    setCurrentPageNumber(pageNumber)
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px pb-3">
        <li onClick={() => pickPageNumber(currentPageNumber === 1 ? 1 : currentPageNumber - 1)}>
          <p className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
            &#60; Previous
          </p>
        </li>

        {[...Array(amountPage)]
          .map((x, i) => i + 1)
          .map((s) => (
            <li key={s} onClick={() => pickPageNumber(s)}>
              <p
                className={`px-3 py-2 leading-tight text-gray-500 ${
                  currentPageNumber === s ? 'bg-blue-300' : 'bg-white'
                } border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
              >
                {s}
              </p>
            </li>
          ))}

        <li
          onClick={() =>
            pickPageNumber(currentPageNumber === amountPage ? amountPage : currentPageNumber + 1)
          }
        >
          <p className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
            Next &#62;
          </p>
        </li>
      </ul>
    </nav>
  )
}
