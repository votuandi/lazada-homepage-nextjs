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
      <ul className="inline-flex items-center -space-x-px">
        <li onClick={() => pickPageNumber(currentPageNumber === 1 ? 1 : currentPageNumber - 1)}>
          <p className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
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
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </p>
        </li>
      </ul>
    </nav>
  )
}
