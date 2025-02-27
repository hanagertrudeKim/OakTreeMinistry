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
              transition-all duration-700 ease-out sm:top-[76%]
              ${
                isVisible0
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
          >
            <h1
              className="text-white text-[50px] font-bold leading-snug 
              max-w-2xl whitespace-pre-line sm:text-4xl"
            >
              {common("current-locale") === "ko"
                ? `가난하고 잊혀진 섬,\n라고나브 땅의\n아이들에게 희망의 씨앗을\n심어주세요`
                : `La Gonâve,\nthe Forgotten Island:\nCreating a Future\nfor Its Youth`}
            </h1>

            <Link
              href="/donate-program#project-intro"
              className="inline-flex items-center justify-center
                px-8 py-4 mt-8 text-lg font-semibold
                text-white border-2 border-white rounded-lg
                transition-all duration-300
                hover:bg-white hover:text-[#0B6954]
                sm:px-8 sm:py-3 sm:text-base sm:mt-6
                sm:bg-[#0B6954] sm:border-none"
            >
              {common("current-locale") === "ko" ? "자세히 보기" : "Learn More"}
            </Link>
          </div>
        </div>

        {/* 후원 프로그램 소개 섹션 */}
        <section className="py-[80px] bg-gradient-to-b from-[#F3F7F6] to-[#E8F0ED] sm:py-[30px]">
          {/* 섹션 헤더 - 모바일 버전 포함 */}
          <div className="flex items-baseline max-w-[1200px] mx-auto px-[4vw]">
            <div className="w-[6vw] border-b-2 border-[#0B6954]/60 sm:w-[8vw]" />
            <div
              className="text-[#042C28] pl-[2vw] text-[24px] font-bold 
              sm:text-[18px] sm:tracking-tight"
            >
              {home("customized-donation")}
            </div>
          </div>

          <div className="max-w-[1200px] mx-auto px-[4vw]">
            {/* 섹션 타이틀 개선 */}
            <div
              ref={ref1}
              className={`text-[38px] font-bold leading-[120%] mt-[2vw] mb-[50px]
                transition-all ease-in-out duration-700
                sm:text-[26px] sm:mt-[30px] sm:mb-[35px]
                ${
                  isVisible1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
            >
              <div className="whitespace-pre-line sm:whitespace-normal sm:leading-snug">
                {common("current-locale") === "ko" ? (
                  <>
                    <span>라고나브 섬</span>의 아이들이{" "}
                    <br className="hidden sm:block" />
                    <span className="sm:block">
                      더 나은 미래를 꿈꿀 수 있도록
                    </span>
                  </>
                ) : (
                  <>
                    Empowering Children in
                    <br className="hidden sm:block" />
                    <span className="sm:block">
                      <span>La Gonâve</span> for a Brighter Future
                    </span>
                  </>
                )}
              </div>
              <strong
                className="text-[#0B6954] font-bold block mt-2
                sm:text-[22px] sm:mt-4 sm:hidden"
              >
                {home("customized-donation")}
              </strong>
            </div>

            {/* PC 버전 후원 프로그램 섹션 */}
            <div className="hidden lg:block max-w-[1200px] mx-auto">
              <div className="space-y-[50px]">
                {DONATE_CARD.map((info, index) => (
                  <div
                    key={index}
                    className="flex gap-[3vw] items-center bg-white rounded-[20px] p-10 
                      shadow-[0_15px_30px_-8px_rgba(0,0,0,0.08)]
                      hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] 
                      transition-all duration-500 ease-in-out group
                      border border-gray-100"
                  >
                    <div className="w-[42%]">
                      <div className="relative rounded-2xl overflow-hidden">
                        <Image
                          src={info.backgroundImage}
                          alt={home(info.title)}
                          width={600}
                          height={480}
                          className="w-full h-[360px] object-cover transition-all duration-700 
                            group-hover:scale-[1.03] brightness-[0.97]"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                    <div className="w-[58%] pr-4 flex flex-col h-full justify-between">
                      <div>
                        <h3
                          className="text-[34px] font-bold leading-[1.3] text-[#042C28]
                            tracking-[-0.02em] transition-all duration-300 group-hover:text-[#0B6954]"
                        >
                          {home(info.title)}
                        </h3>
                        <p className="text-[17px] text-gray-600 leading-[1.8] pt-10 font-normal">
                          {home(info.description)}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-8">
                        <Link
                          href="/donate-program#project-intro"
                          className="px-7 py-3.5 bg-white border border-[#0B6954] text-[#0B6954] rounded-lg
                            text-[16px] font-medium transition-all duration-300 
                            hover:bg-[#0B6954] hover:text-white group/button flex items-center gap-2"
                        >
                          <span>
                            {common("current-locale") === "ko"
                              ? "자세히 보기"
                              : "Learn More"}
                          </span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="transform transition-transform duration-300 
                              group-hover/button:translate-x-0.5"
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
                        <Link
                          href={info.donateLink}
                          className="px-7 py-3.5 bg-[#0B6954] text-white rounded-lg text-[16px] 
                            font-medium transition-all duration-300 hover:bg-[#095544] 
                            flex items-center gap-2 hover:gap-3"
                        >
                          {common("current-locale") === "ko"
                            ? "바로 후원하기"
                            : "Donate Now"}
                          <span className="text-lg transition-all duration-300">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 모바일 버전 카드 */}
            <div className="lg:hidden">
              <div className="flex justify-center mt-[30px]">
                <div
                  ref={ref2}
                  className={`flex overflow-x-auto gap-[15px] pb-[15px] px-[15px] 
                    scrollbar-hide max-w-full transition-all ease-in-out duration-700
                    ${
                      isVisible2
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                >
                  {DONATE_CARD.map((info, index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0 w-[280px] min-w-[280px] 
                        group transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 
                        to-transparent rounded-2xl transition-all duration-300"
                      />
                      <Image
                        src={info.backgroundImage}
                        alt="donation card"
                        width={280}
                        height={380}
                        className="object-cover rounded-2xl w-full h-[380px] 
                          brightness-90 transition-all duration-300"
                      />
                      <div
                        className="absolute bottom-0 left-0 p-5 text-white w-full 
                        bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl"
                      >
                        <div
                          className="inline-flex items-center px-2.5 py-1 bg-white/20 
                          backdrop-blur-sm text-[12px] font-medium rounded-full mb-3"
                        >
                          {common("current-locale") === "ko"
                            ? "후원 프로그램"
                            : "Donation Program"}
                        </div>
                        <div
                          className="text-[18px] font-bold mb-2 
                          leading-tight"
                        >
                          {home(info.title)}
                        </div>
                        <div
                          className="text-[13px] mb-4 line-clamp-2 
                          text-gray-200 leading-relaxed"
                        >
                          {home(info.description)}
                        </div>
                        <div className="flex gap-2">
                          <Link
                            href="/donate-program#project-intro"
                            className="bg-white/10 backdrop-blur-sm text-white flex-1 h-[36px] 
                              flex justify-center items-center rounded-lg text-[13px] 
                              hover:bg-white/20 transition-colors"
                          >
                            {common("current-locale") === "ko"
                              ? "자세히 보기"
                              : "Learn More"}
                          </Link>
                          <Link
                            href={info.donateLink}
                            className="bg-[#0B6954] text-white flex-1 h-[36px] 
                              flex justify-center items-center rounded-lg text-[13px] 
                              hover:bg-[#095544] transition-colors"
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
        <section className="py-[150px] sm:py-[50px]">
          <div className="flex items-baseline max-w-[1400px] mx-auto px-[8vw] sm:px-[4vw]">
            <div className="w-[9vw] border-b-2 border-black sm:w-[15vw]" />
            <div className="text-[#042C28] pl-[3vw] text-[28px] font-bold sm:text-[20px]">
              WHAT WE DO
            </div>
          </div>
          <div
            className="mt-[90px] flex flex-col gap-[150px] px-[8vw] max-w-[1400px] mx-auto 
            sm:mt-[40px] sm:gap-[50px] sm:px-[4vw]"
          >
            {/* 아이티 프로젝트 */}
            {PROJECT.filter((p) => p.country === "haiti")
              .slice(0, 1)
              .map((project, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-[8vw] sm:flex-col sm:gap-[20px]"
                >
                  <div className="relative w-[45%] sm:w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover rounded-2xl shadow-md 
                        sm:h-[250px] sm:rounded-lg"
                    />
                  </div>
                  <div className="w-[45%] flex flex-col justify-center sm:w-full">
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src="/haiti-flag.svg"
                        alt="Haiti flag"
                        width={35}
                        height={24}
                        className="rounded shadow-sm sm:w-[20px]"
                      />
                      <span
                        className="text-[22px] font-normal text-[#042C28] 
                        sm:text-[16px]"
                      >
                        Haiti
                      </span>
                    </div>
                    <h3
                      className="text-[36px] font-bold mb-6 text-[#042C28] leading-[1.2] 
                      sm:text-[24px] sm:mb-4"
                    >
                      {home(project.title)}
                    </h3>
                    <p
                      className="text-[20px] mb-12 text-gray-600 leading-[1.8] font-normal 
                      sm:text-[16px] sm:mb-6 sm:leading-[1.6]"
                    >
                      {home(project.description)}
                    </p>
                    <Link
                      href="/project"
                      className="inline-flex items-center gap-2.5 text-[17px] font-medium 
                        text-[#042C28] hover:text-[#0A3D38] transition-all duration-300 
                        group sm:text-[15px]"
                    >
                      <span className="text-[20px] sm:text-[16px]">
                        Read More
                      </span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform transition-transform duration-300 
                          group-hover:translate-x-1 sm:w-[20px] sm:h-[20px]"
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
                  className="flex flex-row-reverse gap-[8vw] sm:flex-col sm:gap-[20px]"
                >
                  <div className="relative w-[45%] sm:w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover rounded-2xl shadow-md 
                        sm:h-[250px] sm:rounded-lg"
                    />
                  </div>
                  <div className="w-[45%] flex flex-col justify-center sm:w-full">
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src="/dominican-flag.svg"
                        alt="Dominican Republic flag"
                        width={35}
                        height={24}
                        className="rounded shadow-sm sm:w-[20px]"
                      />
                      <span
                        className="text-[22px] font-normal text-[#042C28] 
                        sm:text-[16px]"
                      >
                        Dominican Republic
                      </span>
                    </div>
                    <h3
                      className="text-[36px] font-bold mb-6 text-[#042C28] leading-[1.2] 
                      sm:text-[24px] sm:mb-4"
                    >
                      {home(project.title)}
                    </h3>
                    <p
                      className="text-[20px] mb-12 text-gray-600 leading-[1.8] font-normal 
                      sm:text-[16px] sm:mb-6 sm:leading-[1.6]"
                    >
                      {home(project.description)}
                    </p>
                    <Link
                      href="/project"
                      className="inline-flex items-center gap-2.5 text-[17px] font-medium 
                        text-[#042C28] hover:text-[#0A3D38] transition-all duration-300 
                        group sm:text-[15px]"
                    >
                      <span className="text-[20px] sm:text-[16px]">
                        Read More
                      </span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform transition-transform duration-300 
                          group-hover:translate-x-1 sm:w-[20px] sm:h-[20px]"
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

        {/* 성경 구절 섹션 */}
        <section
          className="py-[80px] bg-gradient-to-b from-[#F3F7F6] to-[#E8F0ED] 
          relative overflow-hidden sm:py-[40px]"
        >
          {/* 장식용 배경 요소 */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
            <svg
              className="absolute top-[5%] left-[5%] w-[200px] h-[200px] 
                sm:w-[100px] sm:h-[100px]"
              viewBox="0 0 100 100"
            >
              <path
                d="M10 50 Q 50 10, 90 50 Q 50 90, 10 50"
                stroke="#0B6954"
                strokeWidth="8"
                fill="none"
              />
            </svg>
            <svg
              className="absolute bottom-[5%] right-[5%] w-[150px] h-[150px] 
                sm:w-[80px] sm:h-[80px]"
              viewBox="0 0 100 100"
            >
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                stroke="#0B6954"
                strokeWidth="8"
                fill="none"
                transform="rotate(30 50 50)"
              />
            </svg>
          </div>

          <div className="max-w-[800px] mx-auto px-[5vw] relative sm:px-[20px]">
            <div className="flex flex-col items-center max-w-[1400px] mb-[40px] sm:mb-[30px]">
              <div
                className="text-[#0B6954] text-[13px] font-medium tracking-[0.15em] mb-3 
                uppercase flex items-center gap-3 sm:text-[11px] sm:tracking-[0.1em]"
              >
                <span className="w-[15px] h-[1px] bg-[#0B6954]/60 sm:w-[10px]" />
                Bible Verse
                <span className="w-[15px] h-[1px] bg-[#0B6954]/60 sm:w-[10px]" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="max-w-[600px] relative sm:max-w-full">
                <p
                  className="text-[26px] leading-[1.6] text-[#042C28]/90 whitespace-pre-line mb-5
                  font-medium sm:text-[20px] sm:leading-[1.5] sm:whitespace-normal sm:px-[15px]"
                >
                  {common("current-locale") === "ko"
                    ? `"그들이 의의 나무 
                      곧 여호와께서 심으신 그 영광을 나타낼 자라 
                      일컬음을 받게 하려 하심이라"`
                    : `"They will be called oaks of righteousness,
                      a planting of the Lord
                      for the display of his splendor"`}
                </p>
                <div className="inline-block">
                  <p
                    className="text-[15px] text-[#0B6954]/80 font-medium tracking-wide
                    border-t border-[#0B6954]/20 pt-3 sm:text-[13px] sm:pt-2"
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
