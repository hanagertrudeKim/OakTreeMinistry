import Image from "next/image";
import mainBanner from '../../public/image/children.jpg'
import Link from "next/link";
import { DONATE_CARD, VISION } from "@/static/Home";


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
      <div className="text-[3vw] whitespace-pre font-bold leading-[120%] ml-[16vw] mt-[4vw]">
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
        {/* Know About Us */}
        <div className="flex items-baseline ">
        <div className="w-[9vw] border-b-2 border-black" />
        <div className="text-black mt-[88px] pl-[3vw] text-[1.3vw] font-bold">
          KNOW ABOUT US
        </div>
        </div>
        <div className="flex justify-center gap-[8vw] p-8">
          <div className="w-[450px] mt-[5vw] ml-[3vw]">
            <div className="font-bold text-[2.5vw]">라고나브로의 보내심</div>
            <p className="mt-[2vw] text-[1.15vw]">
              우리는 아이티에서도 가장 열악한 지역 중 하나인 La Gonave 섬으로 발을 들였습니다.
              거기서는 마을 보건 선교사 양성, 의료 인프라 구축, 콜레라 퇴치, 교회 개척, 지역 개발, 청소년 양육,
              학교 건축 등 다양한 사역을 교회와 글로벌 케어 팀과 함께 진행해왔습니다.
            </p>
            <Link
              href={'/our-ministries'}
              className="bg-[#F3851D] text-black w-[167px] h-[44px] flex justify-center items-center rounded-md mt-[4vw] ">
              Learn More
              </Link>
          </div>
          <Image src={'/image/main-AboutUs.jpg'} alt="about-us" width={630} height={544} />
        </div>
        {/* 비젼 */}
        <div className="flex gap-3 items-center mt-[88px] ml-[10vw] mb-[20px]">
          <div className="text-black text-[3vw] font-bold">
            라고나브 청소년에게 그리스도의 사랑을
          </div>
          <div className="w-[40vw] border-b border-gray-400" />
        </div>
        <div className="bg-[#FFEFE0] width-[100vw] height-[50vw] p-[5vw] flex items-center justify-center gap-[10vw]">
          <div className="flex flex-col gap-[3vw]">
          {VISION.map((info, index) => {
            return (
              <div key={index} className="w-[25vw]">
              <div className="flex mb-[2vw] gap-3">
                <Image src={info.icon} width={28} height={28} alt="vision icon" />
                <div className="font-bold text-[1.5vw]">{info.title}</div>
              </div>
              <p className="text-[1.1vw] font-light">{info.description}</p>
              </div>
            )
          })}
          </div>
          <Image src={'/image/main-vision.jpg'}alt="vision" width={600} height={400} />
        </div>
      </div>
    </main>
  );
}
