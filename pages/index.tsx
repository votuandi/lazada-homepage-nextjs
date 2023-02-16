/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Countdown from 'react-countdown'
import ProductCard from '@/components/ProductCard'
import LazMall from '@/components/LazMall'
import { FlashSaleProductModel } from '@/models/flashSaleProduct.model'
import { ModCardModel } from '@/models/modCard.model'
import { LazMallModel } from '@/models/lazMall.model'
import { ProductCategoryModel } from '@/models/productCategory.model'
import ProductCategory from '@/components/ProductCategory'
import { ProductModel } from '@/models/product.model'
import Product from '@/components/Product'
import Pagination from '@/components/Pagination'
import CategoryMenu from '@/components/CategoryMenu'
import SlideShow from '@/components/SlideShow'
import Footer from '@/components/Footer'
import multilanguage from '@/public/lang/multilanguage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isShowAH, setShowAH] = useState(true)
  const [isShowLocalize, setShowLocalize] = useState(false)
  const [topActionLinks, setTopActionLinks] = useState([])
  const [sliderImageId, setSliderImageId] = useState<string[]>(['01'])
  const [modCards, setModCards] = useState([])
  const [dateTimer, setDateTimer] = useState(Date.now() + 40000000)
  const [flashSaleProducts, setFlashSaleProducts] = useState([])
  const [lazMalls, setLazMall] = useState([])
  const [productCategories, setProductCategories] = useState([])
  const [products, setProduct] = useState([])
  const [productPerPage, setProductPerPage] = useState(24)
  const [totalPage, setTotalPage] = useState(0)
  const [showChat, setShowChat] = useState(false)
  const [stickyClass, setStickyClass] = useState('')
  const [isShowMenu, setShowMenu] = useState(true)
  const [localization, setLocalization] = useState(multilanguage.MultiLanguague('vi'))

  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: {
    hours: number
    minutes: number
    seconds: number
    completed: boolean
  }) => {
    if (completed) {
      setDateTimer(Date.now() + 5000)
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      )
    }
  }

  let getContants = async () => {
    try {
      let res = await fetch('/assets/json/contants.json')
      let data = await res.json()
      setTopActionLinks(data.topActionLinks)
      setSliderImageId(data.sliderImageId)
    } catch (error) {
      console.log(error)
    }
  }

  let getFlashSaleProducts = async () => {
    try {
      let res = await fetch('/assets/json/flashSaleProducts.json')
      let data = await res.json()
      setFlashSaleProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  let getModCard = async () => {
    try {
      let res = await fetch('/assets/json/modCards.json')
      let data = await res.json()
      setModCards(data)
    } catch (error) {
      console.log(error)
    }
  }

  let getLazMall = async () => {
    try {
      let res = await fetch('/assets/json/lazMalls.json')
      let data = await res.json()
      setLazMall(data)
    } catch (error) {
      console.log(error)
    }
  }

  let getProductCategories = async () => {
    try {
      let res = await fetch('/assets/json/productCategories.json')
      let data = await res.json()
      setProductCategories(data)
    } catch (error) {
      console.log(error)
    }
  }

  let getProducts = async (pageNumber: number) => {
    try {
      let res = await fetch('/assets/json/products.json')
      let data = await res.json()
      setTotalPage(Math.ceil(data.length / productPerPage))
      setProduct(data.slice((pageNumber - 1) * productPerPage, pageNumber * productPerPage))
    } catch (error) {
      console.log(error)
    }
  }

  let getScrollY = async () => {
    setStickyClass(window.scrollY > 80 ? 'sticky top-0' : 'relavite')
    setShowMenu(window.scrollY < 80)
  }

  let setLanguage = (local: string) => {
    setLocalization(multilanguage.MultiLanguague(local))
  }

  let clickTopMenu = (index: number) => {
    if (index === 6) {
      setShowLocalize(true)
    }
  }

  useEffect(() => {
    ;(async () => {
      await getFlashSaleProducts()
      await getModCard()
      await getContants()
      await getLazMall()
      await getProductCategories()
      await getProducts(1)
      window.addEventListener('scroll', getScrollY)
    })()
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative flex flex-col justify-center content-center w-screen">
          <div className="w-screen">
            {isShowAH === true && (
              <>
                <div className="relative w-screen h-[80px] bg-tet">
                  <img
                    className="object-contain w-screen h-[80px]"
                    src="/assets/img/qc-head.png"
                    alt=""
                  />
                </div>
                <button
                  className="font-bold text-2xl text-white absolute right-[20%] top-1 z-10"
                  onClick={() => {
                    setShowAH(false)
                  }}
                >
                  X
                </button>
              </>
            )}
          </div>

          <div className={`${stickyClass} flex flex-col z-50 w-screen bg-white`}>
            {isShowMenu && (
              <div
                className="relative flex flex-row w-[1200px] justify-evenly self-center bg-slate-50"
                onMouseLeave={() => {
                  setShowLocalize(false)
                }}
              >
                {topActionLinks.map((item, ind) => (
                  <a
                    onClick={() => clickTopMenu(ind)}
                    key={ind}
                    className="relative cursor-pointer text-xs leading-[25px]"
                  >
                    {item}
                  </a>
                ))}
                {isShowLocalize && (
                  <div className=" w-[220px] h-[90px] bg-white border-graytext border-[1px] rounded-xl drop-shadow-xl absolute top-[100%] right-0 z-50 flex flex-col">
                    <div className=" w-[200px] h-[72px] self-center flex flex-row justify-around pt-2">
                      <img
                        className=" rounded-full w-[72px] h-[72px] cursor-pointer"
                        src="/assets/img/vi.png"
                        onClick={() => {
                          setLanguage('vi')
                        }}
                      />
                      <img
                        className=" rounded-full w-[72px] h-[72px] cursor-pointer"
                        src="/assets/img/en.jpg"
                        onClick={() => {
                          setLanguage('en')
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="relative bg-white h-[75px] flex flex-row content-end justify-around w-[1200px] self-center">
              <img
                className="object-contain w-[10vw] h-auto cursor-pointer"
                src="/assets/img/logo-lazada.png"
                alt=""
              />
              <div className="w-fit h-10 bg-slate-200 flex content-center justify-start self-center">
                <input
                  className="bg-slate-200 p-4 text-base w-[30vw] "
                  type="text"
                  placeholder={localization.searchHolder}
                />
                <button className=" bg-orange-500 h-10 w-10 ml-[auto] flex justify-center content-center">
                  <img
                    className=" h-6 w-6 filter invert-[100%] sepia-[0%] saturate-[0%] hue-rotate-[323deg] brightness-[102%] contrast-[102%] self-center"
                    src="/assets/icon/icon-search.svg"
                    alt=""
                  />
                </button>
              </div>
              <button>
                <img className="h-8 cursor-pointer" src="/assets/icon/icon-cart.svg" alt="" />
              </button>
              <img
                className="object-contain w-[12vw] h-auto cursor-pointer"
                src="/assets/img/zalopay.png"
                alt=""
              />
            </div>
          </div>

          <div className=" relative flex justify-center content-center w-screen bg-tet my-5">
            <div className=" relative flex flex-row w-[1200px] h-[344px] justify-center content-center self-center">
              <CategoryMenu />
              <div className="ralative w-[1000px] h-[344px]  justify-center content-center">
                <SlideShow images={sliderImageId} />
              </div>
            </div>
          </div>

          <div className="relative w-screen flex flex-col">
            <div className=" relative flex flex-col justify-center content-end w-screen min-w-[1200px] h-fit pt-[200px] bg-[url(//icms-image.slatic.net/images/ims-web/0fe02511-83d8-4ac8-a3f6-7f1cb8177e84.gif)]">
              <div className="relative w-[1200px] py-4 content-center justify-between flex flex-row self-center">
                {modCards.map((modcard: ModCardModel) => (
                  <div
                    className=" h-[40px] w-[288px] px-1 bg-white flex flex-row flex-wrap content-center justify-start rounded-2xl"
                    key={modcard.id}
                  >
                    <img
                      className=" object-contain w-[32px] h-[32px] self-center"
                      src={`/assets/img/mod-cart-${modcard.img}.png`}
                      alt=""
                    />
                    <p className="px-2 text-[21px] self-center">{modcard.title}</p>
                  </div>
                ))}
              </div>
              <div className=" relative w-[1200px] flex flex-col self-center pb-6">
                <h1 className=" relative text-[22px] text-blacktext py-1">
                  {localization.flashSale}
                </h1>
                <div className=" relative bg-white h-[60px] px-4 flex flex-row content-center">
                  <p className=" text-red-500 self-center">{localization.onSaleNow}</p>
                  <p className=" self-center mx-10">{localization.endingIn}</p>
                  <div className={styles.contdown}>
                    <Countdown date={dateTimer} renderer={renderer} overtime={true} />
                  </div>
                  <button className="ml-[auto] mx-[1px] text-orange-500 border-2 border-orange-500 h-[40px] self-center px-8">
                    {localization.shopAllProducts}
                  </button>
                </div>{' '}
                <div className=" relative w-[1200px] h-fit bg-white flex flex-row flex-wrap content-center justify-between p-2">
                  {flashSaleProducts.map((p: FlashSaleProductModel) => (
                    <div className="self-center" key={p.id}>
                      <ProductCard flashSaleProduct={p} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative flex flex-col justify-center content-center w-screen bg-bg">
              <div className=" relative w-[1200px] flex flex-col self-center pb-10 content-center align-baseline">
                <div className=" flex flex-row h-[38px] leading-[38px] content-center">
                  <span className=" relative text-[22px] text-blacktext py-3 self-center">
                    Laz Mall
                  </span>
                  <a className=" ml-[auto] align-baseline justify-center content-center" href="">
                    <span className=" text-blue-500 font-medium self-center">Xem thêm &gt;</span>
                  </a>
                </div>
                <div className=" relative w-[1200px] h-fit flex flex-row flex-wrap content-center justify-between p-2">
                  {lazMalls.map((lazm: LazMallModel) => (
                    <div className="self-center" key={lazm.id}>
                      <LazMall lazMall={lazm} />
                    </div>
                  ))}
                </div>
              </div>

              <div className=" relative w-[1200px] flex flex-col self-center pb-10 content-center align-baseline">
                <div className=" flex flex-row h-fit leading-[38px] content-center">
                  <span className=" relative text-[22px] text-blacktext py-3 self-center">
                    {localization.categories}
                  </span>
                </div>
                <div className=" relative w-full min-h-[300px] flex flex-row flex-wrap box-border">
                  {productCategories.map((prc: ProductCategoryModel) => (
                    <div className="self-center" key={prc.id}>
                      <ProductCategory productCategory={prc} />
                    </div>
                  ))}
                </div>
              </div>

              <div className=" relative w-[1200px] flex flex-col self-center  content-center align-baseline">
                <div className=" flex flex-row h-fit leading-[38px] content-center">
                  <span className=" relative text-[22px] text-blacktext py-3 self-center">
                    {localization.justForYou}
                  </span>
                </div>
                <div className=" relative w-[1200px] h-fit flex flex-row flex-wrap content-center justify-between p-2">
                  {products.map((p: ProductModel, i) => (
                    <div className="self-center" key={i}>
                      <Product product={p} />
                    </div>
                  ))}
                </div>
                <div className=" relative self-center">
                  <Pagination amountPage={totalPage} getProduct={getProducts} />
                </div>
              </div>
            </div>

            <div className=" relative w-screen h-fit flex justify-center bg-bg border-t-2">
              <Footer />
            </div>
          </div>
          <div
            className=" w-[160px] h-[40px] z-40 shadow-2xl shadow-chatbox border-chatbox/20 border-b-0 border-[1px] sticky bottom-0 left-[90%] bg-white flex flex-row justify-center content-center cursor-pointer"
            onClick={() => {
              setShowChat(true)
            }}
          >
            <img
              className=" w-6 h-6 self-center filter invert-[13%] sepia-[27%] saturate-[7407%] hue-rotate-[176deg] brightness-[99%] contrast-[97%] mx-2"
              src="/assets/icon/icon-messages.svg"
            />
            <p className="self-center text-chatbox extrabold text-xl">Tin nhắn</p>
          </div>
          {showChat && (
            <div className=" w-[740px] h-[500px] shadow-2xl sticky bottom-0 left-[60%] bg-[#eff0f5] border-chatbox border-[1px] flex flex-row justify-center content-center z-50">
              <p
                className="sticky bottom-0 left-[97.5%]  flex flex-row justify-center content-center text-2xl text-chatbox cursor-pointer"
                onClick={() => {
                  setShowChat(false)
                }}
              >
                X
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
