import Image from "next/image";
import Link from "next/link";
import { DONATE_CARD, PROJECT, VISION } from "@/static/Home";
import { useState } from "react";
import useMediaQuery from "@/utils/hooks/useMediaQuery";

export default function Home() {
  const [projectIdx, setProjectIdx] = useState(0);
  const isMobile = useMediaQuery();

  return (
    <main className="flex flex-col justify-center">
      <div className="flex flex-col relative contrast-70">
        {isMobile ? (
          <Image
            src={"/image/main-mobileBanner.jpg"}
            alt="main banner"
            sizes="100vw"
            width={600}
            height={900}
            className="w-[100vw] brightness-75"
          />
        ) : (
          <Image
            src={"/image/children-high-resolution.jpg"}
            alt="main banner"
            sizes="100vw"
            width={1400}
            height={900}
            className="w-[100vw]"
          />
        )}

        <div className="absolute left-[7vw] top-[16vw] text-white sm:top-[35vh]">
          <div className="text-[4vw] whitespace-pre font-bold leading-[120%] sm:text-[8vw]">
            {`라고나브 청소년들을
후원해주세요`}
          </div>
          <div className="font-semibold text-[1.5vw] mt-[13px] sm:text-[3.5vw] sm:mt-[4px]">
            Hand in Hand project for La Gonave
          </div>
          <Link
            href={"/donate-program"}
            className="bg-white text-black w-[10vw] h-[3vw] flex justify-center items-center rounded-md text-[0.9vw] font-semibold mt-[6vw] sm:w-[25vw] sm:h-[8vw] sm:text-[2.8vw] sm:bg-[#F3851D] sm:text-white sm:font-medium"
          >
            Learn More
          </Link>
        </div>

        {/* 후원 card */}
        <div className="flex items-baseline ">
          <div className="w-[9vw] border-b-2 border-black" />
          <div className="text-[#F3851D] mt-[88px] pl-[3vw] text-[1.3vw] font-bold sm:text-[4vw]">
            맞춤 후원
          </div>
        </div>
        <div className="text-[3vw] whitespace-pre font-bold leading-[120%] ml-[16vw] mt-[4vw] sm:text-[7vw]">
          {`양육에 가치를 더하는,
당신을 위한 `}
          <strong className="text-[#F3851D] font-bold">맞춤 후원</strong>
        </div>
        <div className="flex ml-[10vw] justify-center mt-[140px] sm:ml-0 sm:mt-[50px]">
          <Image
            src="/ArrowButton.svg"
            alt="arrow button"
            width={38}
            height={38}
            className="sm:hidden"
          />
          <div className="flex pl-[200px] overflow-x-scroll sm:pl-10 sm:flex-col sm:gap-[20px]">
            {DONATE_CARD.map((info, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col relative contrast-70 snap-center mr-[26px] rounded"
                >
                  <Image
                    src={info.backgroundImage}
                    alt="donation card"
                    width={430}
                    height={550}
                    className="object-cover rounded w-[430px] h-[550px] max-w-[430px] sm:w-[264px] sm:h-[380px]"
                  />
                  <div className="absolute bottom-[70px] left-[50px] text-white w-[330px] sm:w-[220px] sm:left-[20px] sm:bottom-[40px]">
                    <div className="text-[33px] font-bold sm:text-[23px]">
                      {info.title}
                    </div>
                    <div className="text-[16px] mt-4 sm:text-[12px]">
                      {info.description}
                    </div>
                    <div className="flex justify-around gap-3 text-[16px] mt-[30px] font-semibold sm:text-[11px]">
                      <Link
                        href={"/donate-program"}
                        className="bg-white text-black w-[146px] h-[44px] flex justify-center items-center rounded-md sm:w-[100px] sm:h-[30px]"
                      >
                        Learn More
                      </Link>
                      <Link
                        href={"/donate-program"}
                        className="bg-[#F3851D] text-white w-[167px] h-[44px] flex justify-center items-center rounded-md sm:w-[100px] sm:h-[30px]"
                      >
                        바로 후원하기
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Know About Us */}
        <div className="flex items-baseline ">
          <div className="w-[9vw] border-b-2 border-black" />
          <div className="text-black mt-[88px] pl-[2vw] text-[1.3vw] font-bold sm:text-[3vw]">
            KNOW ABOUT US
          </div>
        </div>
        <div className="flex justify-center gap-[8vw] p-8 sm:flex-col sm:py-7">
          <div className="w-[30vw] mt-[5vw] ml-[3vw] sm:w-[70vw] sm:mt-[2vw]">
            <div className="font-bold text-[2.5vw] sm:text-[6vw]">
              라고나브로의 보내심
            </div>
            <p className="mt-[2.5vw] text-[1.15vw] sm:text-[3.5vw] sm:mt-[6vw]">
              우리는 아이티에서도 가장 열악한 지역 중 하나인 La Gonave 섬으로
              발을 들였습니다. 거기서는 마을 보건 선교사 양성, 의료 인프라 구축,
              콜레라 퇴치, 교회 개척, 지역 개발, 청소년 양육, 학교 건축 등
              다양한 사역을 교회와 글로벌 케어 팀과 함께 진행해왔습니다.
            </p>
            <Link
              href={"/donate-program"}
              className="bg-[#F3851D] text-black w-[167px] h-[44px] flex justify-center items-center rounded-md mt-[4vw] sm:w-[27vw] sm:h-[8vw] sm:text-[2.8vw] sm:mt-[5vw] sm:font-semibold"
            >
              Learn More
            </Link>
          </div>
          <Image
            src={"/image/main-AboutUs.jpg"}
            alt="about-us"
            width={630}
            height={544}
            className="w-[40vw] sm:w-[90vw]"
          />
        </div>
        {/* 비젼 */}
        <div className="flex gap-3 items-center mt-[88px] ml-[10vw] mb-[20px] sm:mt-[10vw] sm:ml-[9vw]">
          <div className="text-black text-[3vw] font-bold sm:text-[6vw] sm:w-[50vw]">
            라고나브 청소년에게 그리스도의 사랑을
          </div>
          <div className="w-[40vw] border-b border-gray-400" />
        </div>
        <div className="bg-[#FFEFE0] width-[100vw] height-[50vw] p-[5vw] flex items-center justify-center gap-[10vw] sm:flex-col">
          <div className="flex flex-col gap-[3vw] sm:gap-[10vw] sm:mt-[5vw]">
            {VISION.map((info, index) => {
              return (
                <div key={index} className="w-[25vw] sm:w-[80vw]">
                  <div className="flex mb-[2vw] gap-3">
                    <Image
                      src={info.icon}
                      width={28}
                      height={28}
                      alt="vision icon"
                      className="sm:w-[20px]"
                    />
                    <div className="font-bold text-[1.5vw] sm:text-[3.7vw]">
                      {info.title}
                    </div>
                  </div>
                  <p className="text-[1.1vw] font-light sm:text-[3.3vw] sm:font-normal sm:mt-[3vw]">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
          <Image
            src={"/image/main-vision.jpg"}
            alt="vision"
            width={600}
            height={400}
          />
        </div>
        {/* 프로젝트 */}
        <div className="flex items-baseline ">
          <div className="w-[9vw] border-b-2 border-black" />
          <div className="text-black mt-[88px] pl-[2vw] text-[1.3vw] font-bold sm:text-[3vw] sm:mt-[55px]">
            PROJECT WE HAVE DONE
          </div>
        </div>
        <div className="text-black text-[3vw] font-bold ml-[9vw] my-[2vw] sm:hidden">
          우리는 이렇게 함께 일합니다
        </div>
        <div className="bg-[#1D2130] p-[6vw] flex text-[3vw] relative sm:text-[6vw] font-semibold sm:h-[124vw] sm:px-[2vw] sm:mt-[10vw]">
          <div className="ml-[10vw] z-10 sm:ml-[4vw]">
            <div className="text-white">{PROJECT[projectIdx].location} |</div>
            <div className="text-[#F5D992]">{PROJECT[projectIdx].title}</div>
            <div className="flex gap-3 mt-[5vw]">
              <Image
                src={"/projectLeftArrow.svg"}
                alt="project-left-icon"
                width={46}
                height={46}
                className="cursor-pointer sm:hidden"
                onClick={() =>
                  projectIdx > 0 ? setProjectIdx(projectIdx - 1) : null
                }
              />
              <Image
                src={"/projectRightArrow.svg"}
                alt="project-right-icon"
                width={46}
                height={46}
                className="cursor-pointer sm:hidden"
                onClick={() =>
                  projectIdx < PROJECT.length - 1
                    ? setProjectIdx(projectIdx + 1)
                    : null
                }
              />
            </div>
            <Image
              src={PROJECT[projectIdx].image}
              alt="project"
              width={540}
              height={580}
              className="object-fit w-[60vw] h-[65vw] lg:hidden"
            />
            <div className="bg-[#2E425A] w-[40vw] text-white text-[1.3vw] font-normal px-[3vw] py-[5vw] mt-[2vw] sm:text-[3.3vw] sm:absolute sm:top-[70vw] sm:right-0 sm:w-[80vw] sm:p-[6vw]">
              <p>{PROJECT[projectIdx].description}</p>
              <p className="mt-[3vw]"> - {PROJECT[projectIdx].location}</p>
            </div>
          </div>
          <Image
            src={PROJECT[projectIdx].image}
            alt="project"
            width={540}
            height={580}
            className="object-fit absolute right-[15vw] top-[9vw] w-[35vw] sm:top-[20vw] sm:hidden"
          />
        </div>
        <div className="relative mt-[4vw] mb-[13vw] sm:mt-[10vw]">
          <Image
            src={"/mainCircle.svg"}
            alt="circle"
            width={150}
            height={150}
            className="absolute w-[10vw]"
          />
          <div className="font-bold text-[2.5vw] z-10 absolute left-[6vw] top-[30px] sm:text-[4.5vw] sm:top-[10px]">
            OUR RECENT WORK
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/image/main-gallery.jpg"}
            alt="gallery"
            width={1100}
            height={900}
            className="w-[80vw] sm:w-[100vw]"
          />
        </div>
      </div>
    </main>
  );
}
