import Image from "next/image";
import Link from "next/link";
import { DONATE_CARD, PROJECT, VISION } from "@/static/Home";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const [projectIdx, setProjectIdx] = useState(0);
  const { t: common } = useTranslation(["common"]);
  const { t: home } = useTranslation(["home"]);

  return (
    <main className="flex flex-col justify-center">
      <div className="flex flex-col relative contrast-70">
        <Image
          src={"/image/main-mobileBanner.jpg"}
          alt="main banner"
          width={439}
          height={539}
          className="w-[100%] brightness-75 lg:hidden "
        />
        <Image
          src={"/image/children-high-resolution.jpg"}
          alt="main banner"
          width={1400}
          height={900}
          className="w-[100vw] h-[850px] object-cover sm:hidden"
        />
        <div className="absolute left-[100px] top-[16vw] text-white sm:top-[32vh] sm:left-[30px]">
          <div className="text-[60px] whitespace-pre font-bold leading-[120%] sm:text-[8vw]">
            {common("current-locale") === "ko"
              ? `라고나브 청소년들을
후원해주세요`
              : `Please support
La Gonave Children`}
          </div>
          <div className="font-semibold text-[25px] mt-[20px] sm:text-[3.5vw] sm:mt-[4px]">
            Hand in Hand project for La Gonave
          </div>
          <Link
            href={"/donate-program"}
            className="bg-white text-black w-[170px] h-[50px] flex justify-center items-center rounded-md text-[16px] font-semibold mt-[70px] sm:mt-[30px] sm:w-[25vw] sm:h-[8vw] sm:text-[2.8vw] sm:bg-[#F3851D] sm:text-white sm:font-medium"
          >
            Learn More
          </Link>
        </div>

        {/* 후원 card */}
        <div className="flex items-baseline ">
          <div className="w-[9vw] border-b-2 border-black" />
          <div className="text-[#F3851D] mt-[88px] pl-[3vw] text-[25px] font-bold sm:text-[4vw]">
            {home("customized-donation")}
          </div>
        </div>
        <div className="text-[45px] whitespace-pre font-bold leading-[120%] ml-[16vw] mt-[4vw] sm:text-[7vw]">
          {common("current-locale") === "ko"
            ? `양육에 가치를 더하는,
당신을 위한 `
            : `Enhancing Parenting Support 
with Personalized, `}
          <strong className="text-[#F3851D] font-bold">
            {home("customized-donation")}
          </strong>
        </div>
        <div className="flex justify-center mt-[140px] sm:ml-0 sm:mt-[50px]">
          <div className="flex overflow-x-scroll sm:pl-10 sm:flex-col sm:gap-[20px]">
            {DONATE_CARD.map((info, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col relative contrast-70 mr-[30px] rounded"
                >
                  <Image
                    src={info.backgroundImage}
                    alt="donation card"
                    width={430}
                    height={550}
                    className="object-cover rounded w-[430px] h-[550px] max-w-[430px] sm:w-[80vw] sm:h-[350px]"
                  />
                  <div className="absolute bottom-[70px] left-[40px] text-white w-[360px] sm:w-[70vw] sm:left-[20px] sm:bottom-[40px]">
                    <div className="text-[29px] font-bold sm:text-[25px]">
                      {home(info.title)}
                    </div>
                    <div className="text-[16px] mt-4 sm:text-[15px]">
                      {home(info.description)}
                    </div>
                    <div className="flex justify-around gap-3 text-[16px] mt-[30px] font-semibold sm:text-[13px]">
                      <Link
                        href={"/donate-program"}
                        className="bg-white text-black w-[160px] h-[44px] flex justify-center items-center rounded-md sm:w-[120px] sm:h-[35px]"
                      >
                        Learn More
                      </Link>
                      <Link
                        href={"/donate"}
                        className="bg-[#F3851D] text-white w-[167px] h-[44px] flex justify-center items-center rounded-md sm:w-[120px] sm:h-[35px]"
                      >
                        {common("donate-button")}
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
          <div className="text-black mt-[88px] pl-[2vw] text-[20px] font-bold sm:text-[3vw]">
            KNOW ABOUT US
          </div>
        </div>
        <div className="flex justify-center gap-[8vw] p-8 sm:flex-col sm:py-7">
          <div className="w-[470px] mt-[50px] ml-[3vw] sm:w-[80vw] sm:mt-[2vw]">
            <div className="font-bold text-[40px] sm:text-[7.5vw]">
              {home("know-about-us-title")}
            </div>
            <p className="mt-[40px] text-[20px] sm:text-[4vw] sm:mt-[4vw]">
              {home("know-about-us-description")}
            </p>
            <Link
              href={"/donate-program"}
              className="bg-[#F3851D] text-black w-[167px] h-[44px] flex justify-center items-center rounded-md mt-[4vw] sm:w-[30vw] sm:h-[9vw] sm:text-[3vw] sm:mt-[6vw] sm:font-semibold"
            >
              Learn More
            </Link>
          </div>
          <Image
            src={"/image/main-AboutUs.jpg"}
            alt="about-us"
            width={630}
            height={544}
            className="w-[500px] sm:w-[90vw] object-cover"
          />
        </div>
        {/* 비젼 */}
        <div className="flex gap-3 items-center mt-[88px] ml-[10vw] mb-[20px] sm:mt-[10vw] sm:ml-[9vw]">
          <div className="text-black text-[45px] font-bold sm:text-[7vw] sm:w-[90vw]">
            {home("vision-title")}
          </div>
          <div className="w-[40vw] border-b border-gray-400" />
        </div>
        <div className="bg-[#FFEFE0] p-[5vw] flex items-center justify-center gap-[8vw] sm:flex-col">
          <div className="flex flex-col gap-[50px] sm:gap-[10vw] sm:mt-[5vw]">
            {VISION.map((info, index) => {
              return (
                <div key={index} className="w-[400px] sm:w-[80vw]">
                  <div className="flex mb-[20px] gap-3">
                    <Image
                      src={info.icon}
                      width={28}
                      height={28}
                      alt="vision icon"
                      className="sm:w-[20px]"
                    />
                    <div className="font-bold text-[32px] sm:text-[5vw]">
                      {info.title}
                    </div>
                  </div>
                  <p className="text-[20px] font-normal sm:text-[4vw] sm:font-normal sm:mt-[3vw]">
                    {home(info.description)}
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
            className="w-[600px] object-cover"
          />
        </div>
        {/* 프로젝트 */}
        <div className="flex items-baseline ">
          <div className="w-[9vw] border-b-2 border-black" />
          <div className="text-black mt-[88px] pl-[2vw] text-[1.3vw] font-bold sm:text-[3vw] sm:mt-[55px]">
            PROJECT WE HAVE DONE
          </div>
        </div>
        <div className="text-black text-[45px] font-bold ml-[9vw] my-[2vw] sm:hidden">
          {home("project-title")}
        </div>
        <div className="my-[30px] flex sm:px-[2vw] sm:mt-[10vw] relative w-[80vw] h-[700px] sm:flex-col sm:h-[440px] sm:w-[100vw]">
          <Image
            src={PROJECT[projectIdx].image}
            alt="project"
            width={540}
            height={600}
            className="object-cover w-[580px] h-[590px] absolute left-[15vw] top-0 sm:w-[100vw] sm:h-[250px] sm:left-0"
          />
          <div className="absolute bottom-0 left-[45vw] sm:left-auto sm:right-0">
            <div className="bg-[#042C28] w-[640px] h-[500px] font-light text-white text-[17px] px-[3.5vw] py-[4vw] mt-[2vw] sm:text-[3.3vw] sm:w-[85vw] sm:h-[220px] sm:mt-0 sm:px-[10vw]">
              <Link
                className="text-[35px] font-semibold sm:text-[5vw]"
                href="/project"
              >
                <div className="text-white">
                  {home(PROJECT[projectIdx].location)} |
                </div>
                <div className="text-[#F5D992]">
                  {home(PROJECT[projectIdx].title)}
                </div>
              </Link>
              <div className="flex gap-3 my-[2vw]">
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
              <p
                style={{
                  WebkitLineClamp: 3,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  fontWeight: "400",
                }}
              >
                {home(PROJECT[projectIdx].description)}
              </p>
              <p className="mt-[3vw] font-normal">
                {" "}
                - {home(PROJECT[projectIdx].location)}
              </p>
            </div>
          </div>
        </div>
        <div className="relative mt-[4vw] mb-[13vw] sm:mt-[10vw]">
          <Image
            src={"/mainCircle.svg"}
            alt="circle"
            width={150}
            height={150}
            className="absolute w-[10vw]"
          />
          <div className="font-bold text-[45px] z-10 absolute left-[100px] top-[30px] sm:text-[4.5vw] sm:top-[10px] sm:left-[10vw]">
            OUR RECENT WORK
          </div>
        </div>
        <Link className="flex flex-col items-center" href="/media">
          <Image
            src={"/image/main-gallery.jpg"}
            alt="gallery"
            width={1100}
            height={900}
            className="w-[1100px] sm:w-[100vw] mb-[120px]"
          />
        </Link>
      </div>
    </main>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
};
