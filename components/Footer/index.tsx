/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { useState, useEffect } from 'react'
import { FooterDataModel } from '@/models/footerData.model'

export interface IProps {}

export default function Footer(props: IProps) {
  const [footerData, setFooterData] = useState<FooterDataModel>()

  let getFooterData = async () => {
    try {
      let res = await fetch('/assets/json/footer.json')
      let data = await res.json()
      setFooterData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    ;(async () => {
      await getFooterData()
    })()
  }, [])

  return (
    <div className=" w-screen flex flex-col justify-start content-centerself-center">
      <div className=" w-[1200px] flex flex-row justify-between py-6 self-center">
        <img className="w-[388px] h-[79px]" src="assets/img/footer-qc-01.png" alt="" />
        <img className="w-[388px] h-[79px]" src="assets/img/footer-qc-02.png" alt="" />
        <img className="w-[388px] h-[79px]" src="assets/img/footer-qc-03.png" alt="" />
      </div>

      <div className="w-[1200px] flex flex-row justify-between text-bluetext self-center pt-[20px] pb-[25px]">
        <div className=" w-[300px] h-fit flex flex-col justify-start">
          <h1 className=" text-base leading-[35px] uppercase">Liên hệ với Lazada</h1>
          {footerData?.contact?.map((x, i) => (
            <a key={i} className=" text-xs hover:underline" href="">
              {x}
            </a>
          ))}
        </div>
        <div className=" w-[300px] h-fit flex flex-col justify-start">
          <h1 className=" text-base leading-[35px] uppercase">Lazada Việt Nam</h1>
          {footerData?.aboutus?.map((x, i) => (
            <a key={i} className=" text-xs hover:underline" href="">
              {x}
            </a>
          ))}
        </div>
        <div className=" w-[600px] h-fit flex flex-col justify-center content-center">
          <div className=" flex flex-row w-[600px] h-fit">
            <div className=" flex flex-row w-[300px]">
              <img className=" w-[42px] h-[42px]" src="/assets/img/logo-download.png" alt="" />
              <div className=" flex flex-col w-[250px] text-base leading-[20px] px-[15px]">
                <p className=" text-orange-500 w-[250px]">Go where your heart beats</p>
                <p className=" text-blacktext w-[250px]">Tải App Lazada</p>
              </div>
            </div>
            <div className=" flex flex-row flex-wrap w-[300px] h-[95px]">
              <img className="h-[42px] w-auto" src="/assets/img/download-01.png" alt="" />
              <img className="h-[42px] w-auto" src="/assets/img/download-02.png" alt="" />
              <img className="h-[42px] w-auto" src="/assets/img/download-03.png" alt="" />
            </div>
          </div>
          <div>
            <p className=" text-xs font-extralight text-blacktext p-0 ">
              CÔNG TY TNHH RECESS
              <br />
              Giấy CNĐKDN: 0308808576 – Ngày cấp: 06/5/2009, được sửa đổi lần thứ 19 ngày 15/8/2019.{' '}
              <br />
              Cơ quan cấp: Phòng Đăng ký kinh doanh – Sở kế hoạch và Đầu tư TP.HCM <br />
              Địa chỉ đăng ký kinh doanh: Tầng 19, Tòa nhà Saigon Centre – Tháp 2, 67 Lê Lợi, Phường
              Bến Nghé, Quận 1, Tp. Hồ Chí Minh, Việt Nam.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-screen bg-white">
        <img className=" w-100% h-auto self-center" src="/assets/img/payment.png" alt="" />
      </div>
      <div className=" w-[1200px] h-fit flex flex-row self-center py-5">
        <div className=" w-[300px] h-fit flex flex-col">
          <h1 className=" uppercase w-[256px] text-base text-textgrayfooter font-normal mb-[5px]">
            LAZADA - NỀN TẢNG MUA SẮM TRỰC TUYẾN HÀNG ĐẦU VIỆT NAM
          </h1>
          <p className=" text-xs text-textgrayfooter w-[256px] mb-[5px]">
            Thành lập từ năm 2012, Lazada là nền tảng thương mại điện tử hàng đầu Đông Nam Á, tiên
            phong thúc đẩy sự phát triển tại khu vực thông qua Thương mại & Công nghệ. Hiện nay, với
            nền tảng logistics và hệ thống thanh toán lớn nhất khu vực, Lazada trở thành một phần
            trong đời sống của người tiêu dùng và hướng đến mục tiêu phục vụ cho 300 triệu khách
            hàng trên toàn khu vực Đông Nam Á vào năm 2030.
          </p>
          <p className=" text-xs text-textgrayfooter w-[256px] mb-[5px]">
            Tại Việt Nam, Lazada là nền tảng Thương mại điện tử quen thuộc của hàng triệu người tiêu
            dùng bởi sự đa dạng hàng đầu về chủng loại sản phẩm, ứng dụng công nghệ mua sắm và giải
            trí thông minh cùng khả năng logistics
          </p>
        </div>
        <div className=" w-[300px] h-fit flex flex-col">
          <p className=" text-xs text-textgrayfooter w-[256px] mb-[5px]">
            mạnh mẽ và dịch vụ chăm sóc khách hàng tối ưu. Đáng chú ý, bên cạnh các chương trình ưu
            đãi trực tuyến hấp dẫn hàng tháng hấp dẫn thường xuyên, Lazada Việt Nam còn thu hút
            người dùng với các Lễ Hội Mua Sắm siêu lớn trong năm, đây được xem là các thời điểm mua
            sắm không thể bỏ lỡ của các tín đồ mua sắm trên toàn quốc.
          </p>
          <p className=" text-xs text-textgrayfooter w-[256px] mb-[5px]">
            Hãy truy cập website hoặc tải ngay ứng dụng Lazada để gia tăng thêm nhiều trải nghiệm
            độc đáo cho hành trình mua sắm – giải trí tuyệt vời và siêu tiết kiệm ngay hôm nay!
          </p>
          <h1 className=" uppercase w-[256px] text-base text-textgrayfooter font-normal mb-[5px]">
            SẢN PHẨM CHÍNH HÃNG
          </h1>
          <div className=" w-[256px] flex flex-row flex-wrap -ml-1">
            {footerData?.p1?.map((x, i) => (
              <span
                key={i}
                className=" text-[12px] text-textgrayfooter w-fit hover:underline mb-1 ml-1 leading-[12px] h-fit "
              >
                {`${x}, `}
              </span>
            ))}
          </div>
        </div>
        <div className=" w-[300px] h-fit flex flex-col">
          <h1 className=" uppercase w-[256px] text-base text-textgrayfooter font-normal mb-[5px]">
            SẢN PHẨM NỔI BẬT
          </h1>
          {footerData?.p2?.map((t, i) => (
            <div key={i}>
              <p className=" text-xs text-textgrayfooter w-[256px] mb-[5px] uppercase">{t.title}</p>
              <div className=" w-[256px] flex flex-row flex-wrap mb-3 -ml-1">
                {t.sp.map((p, j) => (
                  <span
                    key={j}
                    className=" text-[12px] text-textgrayfooter w-fit hover:underline mb-1 ml-1 leading-[12px] h-fit "
                  >
                    {`${p}, `}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className=" w-[300px] h-fit flex flex-col">
          {footerData?.p3?.map((t, i) => (
            <div key={i}>
              <p className=" text-xs text-textgrayfooter w-[256px] mb-[5px] uppercase">{t.title}</p>
              <div className=" w-[256px] flex flex-row flex-wrap mb-3 -ml-1">
                {t.sp.map((p, j) => (
                  <span
                    key={j}
                    className=" text-[12px] text-textgrayfooter w-fit hover:underline mb-1 ml-1 leading-[12px] h-fit "
                  >
                    {`${p}, `}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-screen bg-white flex justify-center content-center">
        <img className=" w-100% h-auto self-center" src="/assets/img/lastimg.png" alt="" />
      </div>
    </div>
  )
}
