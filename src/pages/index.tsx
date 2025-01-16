import { DONATE_CHILDREN } from "@/static/DonateChildren";
import Image from "next/image";
import Link from "next/link";
import { DONATE_CARD, PROJECT, VISION } from "@/static/Home";
import { useRef, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useIsVisible } from "@/utils/hooks/useIsVisible";

export default function Home() {
  const { t: common } = useTranslation(["common"]);
  const { t: home } = useTranslation(["home"]);

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isVisible0 = useIsVisible(ref0);
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);

  return (
    <main className="flex flex-col justify-center">
      <div className="flex flex-col relative contrast-70">
        {/* 배너 섹션 */}
        <div className="relative">
          {/* 그라데이션 오버레이 개선 */}
          <div
            className="absolute inset-0 z-10 bg-gradient-to-r 
              from-black/40 via-[#0A5045]/30 to-transparent
              lg:from-black/70 lg:via-[#0A5045]/50 lg:to-transparent
              lg:w-[50%]"
          />

          {/* 모바일 이미지 */}
          <Image
            src={"/image/main-mobileBanner.jpg"}
            alt="라고나브 섬의 아이들"
            width={439}
            height={539}
            className="w-full h-[70vh] object-cover brightness-90 lg:hidden"
            priority
          />

          {/* 데스크톱 이미지 */}
          <Image
            src={"/image/children-high-resolution.jpg"}
            alt="라고나브 섬의 아이들"
            width={1400}
            height={900}
            className="hidden w-full h-[80vh] object-cover object-center 
              brightness-95 lg:block"
            priority
          />

          {/* 텍스트 컨텐츠 */}
          <div
            ref={ref0}
            className={`absolute z-20 left-[7%] top-[30%] -translate-y-1/2
              transition-all duration-700 ease-out sm:top-[75%]
              ${
                isVisible0
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
          >
            <h1
              className="text-white text-[55px] font-bold leading-snug 
              max-w-2xl whitespace-pre-line sm:text-4xl"
            >
              {common("current-locale") === "ko"
                ? `잊혀진 섬, 라고나브에서\n들려오는 아이들의\n꿈을 함께합니다`
                : `La Gonâve,\nthe Forgotten Island:\nCreating a Future\nfor Its Youth`}
            </h1>

            <Link
              href={"/donate-program"}
              className="inline-flex items-center justify-center
                px-8 py-4 mt-8 text-lg font-semibold
                text-white border-2 border-white rounded-lg
                transition-all duration-300
                hover:bg-white hover:text-[#0B6954]
                sm:px-6 sm:py-3 sm:text-base
                sm:bg-[#0B6954] sm:border-none"
            >
              {common("current-locale") === "ko" ? "자세히 보기" : "Learn More"}
            </Link>
          </div>
        </div>

        {/* 후원 프로그램 소개 섹션 */}
        <section className="py-[100px] bg-gradient-to-b from-[#F3F7F6] to-[#E8F0ED] sm:py-[50px]">
          {/* 섹션 헤더 */}
          <div className="flex items-baseline">
            <div className="w-[9vw] border-b-2 border-black" />
            <div className="text-[#042C28] pl-[3vw] text-[28px] font-bold sm:text-[4vw]">
              {home("customized-donation")}
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto px-[5vw]">
            {/* 섹션 타이틀 */}
            <div
              ref={ref1}
              className={`text-[45px] whitespace-pre font-bold leading-[120%] mt-[2vw] mb-[60px]
                sm:text-[24px] sm:ml-[6vw] transition-all ease-in-out duration-700
                ${
                  isVisible1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
            >
              {common("current-locale") === "ko"
                ? `잊혀진 아이티 라고나브 섬,\n더 나은 배움을 꿈꾸는 아이들을 위한 `
                : `Enhancing Parenting Support\nwith Personalized, `}
              <strong className="text-[#0B6954] font-bold sm:block sm:text-[28px] sm:mt-[5px]">
                {home("customized-donation")}
              </strong>
            </div>

            {/* PC 버전 후원 프로그램 섹션 */}
            <div className="hidden lg:block max-w-[1400px] mx-auto">
              <div className="space-y-[80px]">
                {DONATE_CARD.map((info, index) => (
                  <div
                    key={index}
                    className="flex gap-[5vw] items-center bg-white rounded-[20px] p-12 
                      shadow-[0_12px_32px_-16px_rgba(0,0,0,0.1)]
                      hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.15)] 
                      transition-all duration-500 group"
                  >
                    <div className="w-[48%]">
                      <div className="relative rounded-2xl overflow-hidden transform transition-all duration-500">
                        <Image
                          src={info.backgroundImage}
                          alt={home(info.title)}
                          width={700}
                          height={580}
                          className="w-full h-[420px] object-cover transition-transform duration-700 
                            group-hover:scale-105 brightness-[0.95]"
                          priority={index === 0}
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-[#0B6954]/20 to-transparent 
                          group-hover:from-[#0B6954]/30 transition-all duration-500"
                        />
                      </div>
                    </div>
                    <div className="w-[52%] pr-6">
                      <div
                        className="inline-block px-5 py-2.5 bg-[#0B6954]/10 text-[#0B6954] 
                        text-[14px] font-semibold rounded-lg mb-7"
                      >
                        {common("current-locale") === "ko"
                          ? "후원 프로그램"
                          : "Donation Program"}
                      </div>
                      <h3
                        className="text-[38px] font-bold leading-[1.3] text-[#042C28] mb-6
                        tracking-[-0.02em]"
                      >
                        {home(info.title)}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-[1.7] mb-9">
                        {home(info.description)}
                      </p>
                      <div className="flex items-center gap-4">
                        <Link
                          href="/donate-program"
                          className="px-7 py-3.5 bg-white border-2 border-[#0B6954] text-[#0B6954] rounded-lg
                            text-[15px] font-semibold transition-all duration-300 
                            hover:bg-[#0B6954] hover:text-white group/button"
                        >
                          <span className="flex items-center gap-2">
                            {common("current-locale") === "ko"
                              ? "자세히 보기"
                              : "Learn More"}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="transform transition-transform duration-300 
                                group-hover/button:translate-x-1"
                            >
                              <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </Link>
                        <Link
                          href={info.donateLink}
                          className="px-7 py-3.5 bg-[#0B6954] text-white rounded-lg text-[15px] 
                            font-semibold transition-all duration-300 hover:bg-[#095544] 
                            flex items-center gap-2"
                        >
                          {common("current-locale") === "ko"
                            ? "바로 후원하기"
                            : "Donate Now"}
                          <span className="text-lg">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 모바일 버전 카드 */}
            <div className="lg:hidden">
              <div className="flex justify-center mt-[50px]">
                <div
                  ref={ref2}
                  className={`flex overflow-x-auto gap-[20px] pb-[20px] px-[20px] 
                    sm:gap-[15px] scrollbar-hide max-w-full transition-all ease-in-out duration-700
                    ${
                      isVisible2
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                >
                  {DONATE_CARD.map((info, index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0 w-[450px] sm:w-[330px] sm:min-w-[330px]"
                    >
                      <Image
                        src={info.backgroundImage}
                        alt="donation card"
                        width={450}
                        height={580}
                        className="object-cover rounded-2xl w-full h-[580px] sm:h-[450px] brightness-[0.9]"
                      />
                      <div
                        className="absolute bottom-[70px] left-[40px] text-white w-[80%] 
                        sm:bottom-[40px] sm:left-[20px]"
                      >
                        <div className="text-[29px] font-bold sm:text-[22px]">
                          {home(info.title)}
                        </div>
                        <div className="text-[16px] mt-4 sm:text-[14px] sm:line-clamp-3">
                          {home(info.description)}
                        </div>
                        <div className="flex gap-3 mt-[30px] sm:mt-[20px]">
                          <Link
                            href="/donate-program"
                            className="bg-white text-black flex-1 h-[44px] flex justify-center items-center 
                              rounded-md text-[16px] sm:text-[14px] sm:h-[40px] hover:bg-gray-100 transition-colors"
                          >
                            Learn More
                          </Link>
                          <Link
                            href={info.donateLink}
                            className="bg-[#0B6954] text-white flex-1 h-[44px] flex justify-center items-center 
                              rounded-md text-[16px] sm:text-[14px] sm:h-[40px] hover:bg-[#095544] transition-colors"
                          >
                            {common("donate-button")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 2. What We Do 섹션 */}
        <section className="py-[120px] sm:py-[50px]">
          <div className="flex items-baseline">
            <div className="w-[9vw] border-b-2 border-black" />
            <div className="text-[#042C28] pl-[3vw] text-[28px] font-bold sm:text-[4vw]">
              WHAT WE DO
            </div>
          </div>
          <div
            className="mt-[70px] flex flex-col gap-[120px] px-[8vw] max-w-[1400px] mx-auto 
            sm:gap-[50px] sm:px-[4vw]"
          >
            {/* 아이티 프로젝트 */}
            {PROJECT.filter((p) => p.country === "haiti")
              .slice(0, 1)
              .map((project, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-[8vw] sm:flex-col"
                >
                  <div className="relative w-[45%] sm:w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover sm:h-[300px] rounded-2xl shadow-md"
                    />
                  </div>
                  <div className="w-[45%] flex flex-col justify-center sm:w-full sm:mt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src="/haiti-flag.svg"
                        alt="Haiti flag"
                        width={35}
                        height={24}
                        className="rounded shadow-sm sm:w-[25px]"
                      />
                      <span className="text-[22px] font-normal text-[#042C28] sm:text-[18px]">
                        Haiti
                      </span>
                    </div>
                    <h3 className="text-[36px] font-bold mb-6 text-[#042C28] leading-[1.2] sm:text-[28px]">
                      {home(project.title)}
                    </h3>
                    <p className="text-[17px] mb-8 text-gray-600 leading-[1.8] font-normal">
                      {home(project.description)}
                    </p>
                    <Link
                      href="/project"
                      className="inline-flex items-center gap-2 text-[15px] font-medium text-[#042C28] hover:text-[#0A3D38] transition-all duration-300 group"
                    >
                      Read More
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}

            {/* 도미니카 프로젝트 */}
            {PROJECT.filter((p) => p.country === "dominican")
              .slice(0, 1)
              .map((project, index) => (
                <div
                  key={index}
                  className="flex flex-row-reverse gap-[8vw] sm:flex-col"
                >
                  <div className="relative w-[45%] sm:w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover sm:h-[300px] rounded-2xl shadow-md"
                    />
                  </div>
                  <div className="w-[45%] flex flex-col justify-center sm:w-full sm:mt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src="/dominican-flag.svg"
                        alt="Dominican Republic flag"
                        width={35}
                        height={24}
                        className="rounded shadow-sm sm:w-[25px]"
                      />
                      <span className="text-[22px] font-normal text-[#042C28] sm:text-[18px]">
                        Dominican Republic
                      </span>
                    </div>
                    <h3 className="text-[36px] font-bold mb-6 text-[#042C28] leading-[1.2] sm:text-[28px]">
                      {home(project.title)}
                    </h3>
                    <p className="text-[17px] mb-8 text-gray-600 leading-[1.8] font-normal">
                      {home(project.description)}
                    </p>
                    <Link
                      href="/project"
                      className="inline-flex items-center gap-2 text-[15px] font-medium text-[#042C28] hover:text-[#0A3D38] transition-all duration-300 group"
                    >
                      Read More
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* 5. Our Recent Work 섹션 */}
        {/* <section className="pb-[150px] sm:py-[30px]">
          <div className="relative mb-[50px] sm:mb-[30px] ml-[8vw]">
            <div className="relative flex items-center">
              <Image
                src={"/mainCircle.svg"}
                alt="circle"
                width={120}
                height={120}
                className="w-[120px] sm:w-[80px]"
              />
              <h2
                className="absolute font-bold text-[40px] ml-[100px] 
                sm:text-[24px] sm:ml-[60px]"
              >
                OUR RECENT WORK
              </h2>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/media" className="w-[90%] max-w-[1000px]">
              <Image
                src={"/image/main-gallery.jpg"}
                alt="gallery"
                width={1000}
                height={800}
                className="w-full rounded-lg shadow-md sm:w-[95%] mx-auto"
              />
            </Link>
          </div>
        </section> */}

        {/* 성경 구절 섹션 */}
        <section className="py-[70px] bg-[#F3F7F6] relative overflow-hidden sm:py-[40px]">
          <div className="max-w-[900px] mx-auto px-[5vw]">
            <div className="flex flex-col items-center max-w-[1400px] mb-[40px]">
              <div className="text-[#0B6954] text-[16px] font-bold tracking-widest mb-2 sm:text-[14px]">
                BIBLE VERSE
              </div>
              <div className="w-[40px] h-[2px] bg-[#0B6954]" />
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="max-w-[600px]">
                {/* 성경 구절 */}
                <p
                  className="text-[28px] leading-[1.3] text-[#042C28] whitespace-pre-line mb-4
                  font-bold sm:text-[22px] sm:leading-[1.4]"
                >
                  {common("current-locale") === "ko"
                    ? `"그들이 의의 나무 
                      곧 여호와께서 심으신 그 영광을 나타낼 자라 
                      일컬음을 받게 하려 하심이라"`
                    : `"They will be called oaks of righteousness,
                      a planting of the Lord
                      for the display of his splendor"`}
                </p>

                {/* 성경 구절 출처 */}
                <div className="inline-block pt-1">
                  <p
                    className="text-[16px] text-[#0B6954] font-bold
                    sm:text-[14px]"
                  >
                    {common("current-locale") === "ko"
                      ? "이사야 61:3"
                      : "Isaiah 61:3"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home", "about-us"])),
    },
  };
};
