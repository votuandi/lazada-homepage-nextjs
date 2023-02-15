import * as React from 'react'
import { useState, useEffect } from 'react'

export interface IProps {}

export default function CategoryMenu(props: IProps) {
  const [menu, setMenu] = useState([])

  let getMenuContent = async () => {
    try {
      let res = await fetch('/assets/json/categoryMenu.json')
      let data = await res.json()
      setMenu(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    ;(async () => {
      await getMenuContent()
    })()
  }, [])
  return (
    <div className=" relative h-[344px] w-[200px] flex flex-col justify-between content-center px-1 pt-3 pb-3 hover:cursor-pointer">
      {menu
        .map((m: any) => m.name)
        .map((x, i) => (
          <p key={i} className=" text-[12px] text-blacktext ">
            {x}
          </p>
        ))}
    </div>
  )
}
