import Image from "next/image";
import mainBanner from '../../public/image/children.jpg'
import Link from "next/link";
import { DONATE_CARD } from "@/static/Home";


export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <div className="flex flex-col relative contrast-70">
        <Image src={mainBanner}
          alt="main banner"
          sizes="100vw"
          style={{ width: '100vw', height: 'auto'}}>
        </Image>
        <div className="absolute left-[7vw] top-[16vw] text-white ">
        <div className="text-[4vw] whitespace-pre font-bold leading-[120%]" >
          {`라고나브 청소년들을
후원해주세요`}
        </div>
        <div className="font-semibold text-[1.5vw] mt-[13px]">
          Hand in Hand project for La Gonave
          </div>
          <Link
            href={'/our-ministries'}
            className="bg-white text-black w-[10vw] h-[3vw] flex justify-center items-center rounded-md text-[0.9vw] font-semibold mt-[6vw]">
            Learn More
          </Link>
        </div>
      <div className="flex items-baseline ">
        <div className="w-[9vw] border-b-2 border-black" />
        <div className="text-[#F3851D] mt-[88px] pl-[3vw] text-[1.3vw] font-bold">
        맞춤 후원
        </div>
      </div>
      <div className="text-[4vw] whitespace-pre font-bold leading-[120%] ml-[16vw] mt-[4vw]">
          {`양육에 가치를 더하는,
당신을 위한 `}
          <strong className="text-[#F3851D] font-bold">맞춤 후원</strong>
        </div>
        {/* 후원 card */}
        <div className="flex ml-[10vw] justify-center mt-[140px]">
        <Image src="/ArrowButton.svg" alt="arrow button" width={38} height={38} />
        <div className="flex pl-[200px] overflow-x-scroll">
          {DONATE_CARD.map((info, index) => {
            return (
              <div key={index} className="flex flex-col relative contrast-70 snap-center mr-[26px] rounded">
              <Image
                src={info.backgroundImage}
                alt="donation card"
                width={430}
                height={550}
                className="object-cover rounded w-[430px] h-[550px] max-w-[430px]"
                />
                <div className="absolute bottom-[70px] left-[50px] text-white w-[330px]">
                  <div className="text-[33px] font-semibold">{info.title}</div>
                  <div className="text-[16px] mt-4">{info.description}</div>
                  <div className="flex justify-around gap-3 text-[16px] mt-[30px] font-semibold">
                    <Link
                      href={'/our-ministries'}
                      className="bg-white text-black w-[146px] h-[44px] flex justify-center items-center rounded-md">
                      Learn More
                    </Link> 
                    <Link
                      href={'/our-ministries'}
                      className="bg-[#F3851D] text-white w-[167px] h-[44px] flex justify-center items-center rounded-md ">
                      바로 후원하기
                      </Link>
                    </div>
                </div>
              </div>
            )
          })}
          </div>
        </div>  
      </div>
    </main>
  );
}
