import { CategoryMenuModel } from '@/models/categoryMenu.model'
import * as React from 'react'
import { useState, useEffect } from 'react'

export interface IProps {
  showMobile: boolean
}

export default function CategoryMenu({ showMobile }: IProps) {
  const emptyMenu: CategoryMenuModel = {
    id: '',
    name: '',
    subMenu: [],
  }

  const [menu, setMenu] = useState<CategoryMenuModel[]>([emptyMenu])
  const [index, setIndex] = useState(-1)
  const [smenu, setSMenu] = useState<CategoryMenuModel[]>([emptyMenu])
  const [sindex, setSIndex] = useState(-1)
  const [ssmenu, setSSMenu] = useState<CategoryMenuModel[]>([emptyMenu])
  const [ssindex, setSSIndex] = useState(-1)
  const [isPC, setPC] = useState(false)

  let getMenuContent = async () => {
    try {
      let res = await fetch('/assets/json/categoryMenu.json')
      let data = await res.json()
      setMenu(data)
    } catch (error) {
      console.log(error)
    }
  }

  let setMenuItemIndex = (ind: number) => {
    setIndex(ind)
  }

  let setSubMenu = (subMenu: CategoryMenuModel) => {
    setSMenu(subMenu.subMenu)
  }

  let setSMenuItemIndex = (ind: number) => {
    setSIndex(ind)
  }

  let setSSubMenu = (subMenu: CategoryMenuModel) => {
    setSSMenu(subMenu.subMenu)
  }

  let setSSMenuItemIndex = (ind: number) => {
    setSIndex(ind)
  }

  let setSSSubMenu = (subMenu: CategoryMenuModel) => {
    setSSMenu(subMenu.subMenu)
  }

  let getScreen = () => {
    setPC(window.innerWidth > 1200)
  }

  useEffect(() => {
    ;(async () => {
      getScreen()
      await getMenuContent()
      window.addEventListener('resize', getScreen)
    })()
  }, [])
  return (
    <div>
      {isPC && (
        <div className=" relative h-[344px] w-full bg-white border border-gray-50 flex flex-col justify-between content-center px-1 pt-3 pb-3 hover:cursor-pointer">
          {menu
            .map((m: CategoryMenuModel) => m.name)
            .map((x, i) => (
              <div
                key={i}
                className=" w-[200px] flex flex-row hover:bg-gray-200"
                onMouseOver={() => {
                  setMenuItemIndex(i)
                  setSubMenu(menu[i])
                }}
                onMouseLeave={() => {
                  setMenuItemIndex(-1)
                  setSubMenu(emptyMenu)
                }}
              >
                <span className=" text-[12px] text-blacktext hover:text-orange-500 py-1">{x}</span>
                {index === i && smenu.length > 0 && (
                  <span className="ml-auto pr-2 text-orange-500 absolute right-0 font-black">
                    &gt;
                  </span>
                )}
                {index === i && smenu.length > 0 && (
                  <div className=" absolute left-[190px] -top-[1px] h-[344px] w-[200px] bg-transparent"></div>
                )}
                {index >= 0 && index === i && smenu.length > 0 && (
                  <div className=" absolute left-[199px] -top-[1px] z-20 bg-white border border-gray-50 h-[344px] w-[200px] flex flex-col justify-start content-center px-1 pt-3 pb-3 hover:cursor-pointer shadow-xl">
                    {smenu
                      .map((sm: CategoryMenuModel) => sm.name)
                      .map((_x, _i) => (
                        <div
                          key={_i}
                          className=" flex flex-row hover:bg-gray-200"
                          onMouseOver={() => {
                            setSMenuItemIndex(_i)
                            setSSubMenu(smenu[_i])
                          }}
                          onMouseLeave={() => {
                            setSMenuItemIndex(-1)
                            setSSubMenu(emptyMenu)
                          }}
                        >
                          <span className=" text-[12px] text-blacktext hover:text-orange-500 py-1">
                            {_x}
                          </span>
                          {sindex === _i && ssmenu.length > 0 && (
                            <span className="ml-auto pr-2 text-orange-500 absolute right-0 font-black">
                              &gt;
                            </span>
                          )}
                          {sindex === _i && ssmenu.length > 0 && (
                            <div className=" absolute left-[190px] -top-[1px] h-[344px] w-[200px] bg-transparent"></div>
                          )}
                          {sindex >= 0 && sindex === _i && ssmenu.length > 0 && (
                            <div className=" absolute left-[199px] -top-[1px] z-20 bg-white border border-gray-50 h-[344px] w-[200px] flex flex-col justify-start content-center px-1 pt-3 pb-3 hover:cursor-pointer shadow-xl">
                              {ssmenu
                                .map((ssm: CategoryMenuModel) => ssm.name)
                                .map((__x, __i) => (
                                  <div
                                    key={__i}
                                    onMouseOver={() => {
                                      setSSMenuItemIndex(__i)
                                      setSSSubMenu(smenu[__i])
                                    }}
                                    onMouseLeave={() => {
                                      setSSMenuItemIndex(-1)
                                      setSSSubMenu(emptyMenu)
                                    }}
                                  >
                                    <span className=" text-[12px] text-blacktext hover:text-orange-500 py-1">
                                      {__x}
                                    </span>
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
      {!isPC && showMobile && (
        <div className=" fixed h-screen w-[70vw] shadow-2xl top-0 left-0 bg-white border border-gray-50 flex flex-col justify-start content-center px-1 py-3 hover:cursor-pointer z-50">
          {menu
            .map((m: CategoryMenuModel) => m.name)
            .map((x, i) => (
              <div key={i}>
                <div
                  className=" w-full p-2 flex flex-row hover:bg-gray-200"
                  onMouseOver={() => {
                    setMenuItemIndex(i)
                    setSubMenu(menu[i])
                  }}
                >
                  <span className=" text-base text-blacktext hover:text-orange-500 py-1">{x}</span>
                  {index === i && smenu.length > 0 && (
                    <span className="ml-auto pr-2 text-orange-500 absolute right-0 font-black">
                      &or;
                    </span>
                  )}
                </div>
                {index >= 0 && index === i && smenu.length > 0 && (
                  <div className=" relative ml-auto bg-white h-fit w-[65vw] flex flex-col justify-start content-center px-1 pb-3 hover:cursor-pointer border-orange-800 border-b-2">
                    {smenu
                      .map((sm: CategoryMenuModel) => sm.name)
                      .map((_x, _i) => (
                        <div key={_i}>
                          <div
                            className=" flex flex-row hover:bg-gray-200"
                            onMouseOver={() => {
                              setSMenuItemIndex(_i)
                              setSSubMenu(smenu[_i])
                            }}
                          >
                            <span className=" text-base text-blacktext hover:text-orange-500 py-1">
                              {_x}
                            </span>
                            {sindex === _i && ssmenu.length > 0 && (
                              <span className="ml-auto pr-2 text-orange-500 absolute right-0 font-black">
                                &or;
                              </span>
                            )}
                          </div>
                          {sindex >= 0 && sindex === _i && ssmenu.length > 0 && (
                            <div className=" relative ml-auto bg-white h-fit w-[60vw] flex flex-col justify-start content-center px-1 pb-3 hover:cursor-pointer border-orange-800 border-b-2">
                              {ssmenu
                                .map((ssm: CategoryMenuModel) => ssm.name)
                                .map((__x, __i) => (
                                  <div
                                    key={__i}
                                    onMouseOver={() => {
                                      setSSMenuItemIndex(__i)
                                      setSSSubMenu(smenu[__i])
                                    }}
                                  >
                                    <span className=" text-base text-blacktext hover:text-orange-500 py-2">
                                      {__x}
                                    </span>
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
