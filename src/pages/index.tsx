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
  const isVisible0 = useIsVisible(ref0);
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <main className="flex flex-col justify-center">
      <div className="flex flex-col relative contrast-70">
        {/* 배너 섹션 */}
        <div className="relative">
          <div
            className="absolute inset-0 w-full bg-gradient-to-r from-[#1A1A1A]/60 via-[#0A5045]/40 to-transparent z-10 
            lg:w-[40%]"
          ></div>
          <Image
            src={"/image/main-mobileBanner.jpg"}
            alt="main banner"
            width={439}
            height={539}
            className="w-full h-[60vh] object-cover brightness-[0.8] lg:hidden"
            priority
          />
          <Image
            src={"/image/children-high-resolution.jpg"}
            alt="main banner"
            width={1400}
            height={900}
            className="w-full h-[85vh] object-cover object-left-top brightness-[1] contrast-[1] sm:hidden"
            priority
          />
          <div
            ref={ref0}
            className={`absolute left-[5%] top-[13%] text-white 
              sm:left-[5%] sm:top-[50%] transition-all ease-out duration-700 z-20
              ${
                isVisible0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <div
              className="text-[60px] whitespace-pre font-bold leading-[1.3] 
              sm:text-[8vw] sm:leading-[1.2]"
            >
              {common("current-locale") === "ko"
                ? `잊혀진 섬, 라고나브에서
들려오는 아이들의
꿈을 함께합니다`
                : `La Gonâve,
the Forgotten Island:
Creating a Future
for Its Youth`}
            </div>
            <Link
              href={"/donate-program"}
              className="border-[2px] border-white bg-transparent 
                text-white w-[170px] h-[50px] flex justify-center items-center 
                rounded-md text-[18px] font-bold mt-[5vh]
                transition-all duration-300 ease-out
                hover:bg-white/20 hover:scale-105
                lg:w-[150px] lg:h-[45px] lg:text-[16px]
                md:w-[130px] md:h-[40px] md:text-[14px]
                sm:w-[120px] sm:h-[35px] sm:text-[12px] sm:mt-[3vh]
                sm:bg-[#0B6954] sm:border-none"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* 1:1 어린이 후원 아동 소개 */}
        <section className="py-[100px] bg-gradient-to-b from-[#F3F7F6] to-[#E8F0ED] sm:py-[50px]">
          <div className="flex items-baseline max-w-[1400px] mb-[70px] mx-auto">
            <div className="w-[9vw] border-b-2 border-black" />
            <div className="text-[#0B6954] pl-[3vw] text-[28px] font-bold sm:text-[4vw]">
              {home("child-sponsorship-title")}
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto px-[5vw] sm:px-[4vw]">
            <div className="flex gap-[5vw] items-center bg-white rounded-2xl p-16 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] sm:flex-col sm:p-6">
              {/* 왼쪽: 아동 정보 */}
              <div className="w-[55%] sm:w-full sm:order-2">
                <h2 className="text-[42px] font-bold leading-tight text-[#042C28] mb-8 sm:text-[28px]">
                  {home("child-intro-prefix")}
                  <br />
                  <span className="text-[#0B6954]">
                    {common("current-locale") === "ko"
                      ? DONATE_CHILDREN[0].korean_name
                      : DONATE_CHILDREN[0].english_name}
                  </span>
                  {home("child-intro-suffix")}
                </h2>

                <p className="text-[16px] text-gray-700 leading-relaxed mb-8 sm:text-[15px]">
                  {home("child-greeting-prefix")} {DONATE_CHILDREN[0].residence}{" "}
                  {home("child-location-mid")}{" "}
                  {common("current-locale") === "ko"
                    ? DONATE_CHILDREN[0].korean_name
                    : DONATE_CHILDREN[0].english_name}
                  {home("child-greeting-suffix")}
                  <br />
                  {home("child-age-prefix")} {DONATE_CHILDREN[0].age}
                  {home("child-age-suffix")}{" "}
                  {DONATE_CHILDREN[0].gender === "M"
                    ? home("child-gender-male")
                    : home("child-gender-female")}{" "}
                  {home("child-type")}
                  <br />
                  <br />
                  {home("child-message")}
                  <br />
                  {home("child-question")}
                </p>

                <div className="flex gap-4 sm:flex-col sm:gap-3">
                  <Link
                    href={`/donate-program?childId=${DONATE_CHILDREN[0].registration_number}`}
                    className="px-10 py-4 bg-white border-2 border-[#0B6954] text-[#0B6954] rounded-md font-semibold transition-all hover:bg-[#0B6954] hover:text-white sm:text-center"
                  >
                    {home("learn-more-button")}
                  </Link>
                  <Link
                    href={`/donate-program/${DONATE_CHILDREN[0].registration_number}`}
                    className="px-10 py-4 bg-[#0B6954] text-white rounded-md font-semibold transition-all hover:bg-[#095544] sm:text-center"
                  >
                    {home("sponsor-now-button")}
                  </Link>
                </div>
              </div>

              {/* 오른쪽: 아동 사진 */}
              <div className="w-[45%] sm:w-full sm:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg max-w-[500px] mx-auto sm:h-[70vw]">
                  <Image
                    src={DONATE_CHILDREN[0].photo}
                    alt={`${DONATE_CHILDREN[0].korean_name} 아동 사진`}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 700px) 90vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 후원 card */}
        <section className="py-[100px] sm:py-[50px]">
          <div className="flex items-baseline">
            <div className="w-[9vw] border-b-2 border-black" />
            <div className="text-[#0B6954] pl-[3vw] text-[25px] font-bold sm:text-[4vw]">
              {home("customized-donation")}
            </div>
          </div>
          <div
            ref={ref1}
            className={`text-[45px] whitespace-pre font-bold leading-[120%] ml-[16vw] mt-[2vw] 
              sm:text-[5.5vw] sm:ml-[13vw] sm:mt-[4vw] transition-all ease-in-out duration-700
              ${
                isVisible1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            {common("current-locale") === "ko"
              ? `잊혀진 아이티 라고나브 섬,
더 나은 배움을 꿈꾸는 아이들을 위한 `
              : `Enhancing Parenting Support 
with Personalized, `}
            <strong className="text-[#0B6954] font-bold sm:block sm:text-[6.2vw] sm:mt-[2vw]">
              {home("customized-donation")}
            </strong>
          </div>
          <div className="flex justify-center mt-[100px] sm:mt-[50px]">
            <div
              className="flex overflow-x-auto gap-[60px] pb-[20px] px-[30px] 
              sm:gap-[15px] sm:px-[20px] scrollbar-hide max-w-full"
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
                    height={600}
                    className="object-cover rounded-2xl w-full h-[600px] sm:h-[450px]"
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
                        href={"/donate-program"}
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
        <section className="pb-[150px] sm:py-[30px]">
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
        </section>

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
