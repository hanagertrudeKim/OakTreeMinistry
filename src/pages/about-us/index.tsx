import { useIsVisible } from "@/utils/hooks/useIsVisible";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function AboutUs() {
  const isMobile = useMediaQuery();
  const { t: common } = useTranslation(["common"]);
  const { t: aboutUs } = useTranslation(["about-us"]);

  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="mt-[60px] sm:mt-[20px]">
      <div className="flex flex-col items-center">
        <div
          ref={ref1}
          className={`z-4 sm:px-[5vw] transition-all ease-in-out duration-1000
            ${
              isVisible1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          <div className="whitespace-pre text-[55px] font-extrabold text-end leading-snug sm:text-[6vw]">
            {!isMobile
              ? common("current-locale") == "ko"
                ? `우리는 아이티 라고나브 청소년이 그리스도의 제자로 
잘 성장하도록 훈련시키고 지지합니다.`
                : `We train and support La Gonave youth 
to grow as Christ's disciples.`
              : common("current-locale") == "ko"
              ? `우리는 청소년이 그리스도의 제자로 
  잘 성장하도록 훈련시키고 지지합니다.`
              : `We train and support youth 
  to grow as Christ's disciples.`}
          </div>
          <Image
            src={"/image/aboutus-banner.jpg"}
            alt="main banner"
            width={1280}
            height={500}
            className="w-[1400px] h-[550px] mt-[80px] z-40 object-center opacity-100 sm:mt-[46px] sm:h-[43vw]"
          />
        </div>
      </div>
      <div className="flex items-baseline">
        <div className="w-[9vw] border-b-2 border-black" />
        <div className="text-black mt-[88px] pl-[15px] text-[18px] font-extrabold sm:text-[11px] sm:mt-[50px]">
          KNOW ABOUT US
        </div>
      </div>
      <div className="mt-[80px] flex items-center justify-center sm:flex-col sm:px-[0px] sm:mt-[30px]">
        <div className="flex flex-col w-[550px] flex-wrap sm:w-[90%]">
          <div className="font-extrabold text-[55px] sm:text-[6vw]">
            OUR STORY
          </div>
          <div className="whitespace-pre-wrap text-[23px] mt-[40px] font-SUITE font-medium sm:font-semibold leading-snug sm:text-[3.6vw] sm:mt-[30px]">
            {common("current-locale") == "ko"
              ? `2010년, 하나님은 갑작스런 소명을 우리에게 부여하셨습니다. 먼 아이티 땅으로 우리를 보내며 이사야서 61장의 말씀을 통해 오랫동안 어둠 속에 잠들어 있는 아이티의 젊은이들을 깨우시고, 여호와의 영광을 드러내기 위해 의의 나무로 세우라고 하셨습니다.

2013년, 우리는 아이티에서도 가장 열악한 지역 중 하나인 La Gonave 섬으로 발을 들였습니다. 거기서는 마을 보건 선교사 양성, 의료 인프라 구축, 콜레라 퇴치, 교회 개척, 지역 개발, 청소년 양육, 학교 건축 등 다양한 사역을 교회와 글로벌 케어 팀과 함께 진행해왔습니다.

2024년, 아이티 대학생들을 위해 Santiago의 UTESA 대학 근처에 YWAM Oak Tree 선교센터를 개설했습니다. 이곳에서는 아이티 유학생들을 대상으로 성경 공부, 영어, 컴퓨터, 한글 등 다양한 활동이 이뤄지고 있습니다. 이들을 그리스도의 제자로 훈련시켜 아이티와 서북 아프리카로 선교의 중추로 보내고자 합니다.`
              : `In 2010, God suddenly called us to distant Haiti, fulfilling Isaiah 61 by awakening its youth from darkness to reveal the glory of the Lord and plant righteousness like oaks.

In 2013, we've collaborated on training health missionaries, building medical infrastructure, eradicating cholera, planting churches, developing communities, nurturing youth, and building schools with churches and global care teams.

In 2024, near UTESA University in Santiago, we opened the YWAM Oak Tree Mission Center for Haitian university students. We offer Bible study, English, computer skills, and Korean language classes, aiming to disciple these students as missionaries to Haiti and Northwest Africa.`}
          </div>
        </div>
        <Image
          src={"/image/main-AboutUs.jpg"}
          alt="about-us"
          width={580}
          height={680}
          className="w-[600px] h-[650px] sm:w-[90vw] ml-[120px] object-cover sm:ml-0 sm:h-auto sm:mt-[20px]"
        />
      </div>
      <div className="w-[100vw] bg-[#FFEFE0] h-[1200px] absolute top-[750px] -z-10 sm:h-[189vw] sm:top-[92vw]"></div>
      <div className="flex flex-col justify-center items-center mt-[200px] sm:mx-0 sm:px-[5vw] sm:mt-[100px]">
        <div className="w-[1100px] flex justify-center items-center sm:flex-col sm:items-start sm:w-[90vw]">
          <p className="font-extrabold text-[55px] sm:text-[7vw]">
            OUR {isMobile ?? <br />}
            VISION
          </p>
          <div className="ml-[100px] text-[26px] font-SUITE tracking-wide font-black sm:text-[3.8vw] sm:ml-0 sm:font-bold sm:mt-[10px]">
            {aboutUs("our-vision")}
          </div>
        </div>
        <div className="flex font-roboto mt-[120px] justify-center items-center sm:flex-col sm:object-center sm:mt-[50px]">
          <div>
            <div className="text-[45px] font-extrabold sm:text-[6vw]">
              OUR <br />
              INTERNAL VISION
            </div>
            <div className="w-[530px] mt-[40px] mr-[50px] font-SUITE text-[21px] tracking-wide font-medium sm:text-[4vw] sm:whitespace-pre-wrap sm:w-[90vw] sm:mr-0">
              {common("current-locale") == "ko" ? (
                <>
                  성경 말씀과 성령 충만함, 기도와 진정한 예배를 통해 <br />
                  청소년들의 내면에 맺어야 할 핵심 가치들을 갖게 한다. <br />
                  <br />
                  영적 영역 - 사랑, 경건, 정직, 섬김 <br />
                  인성 영역 - 실력, 근면, 자립, 협력
                </>
              ) : (
                <>
                  {!isMobile && (
                    <>
                      Through scripture, the Holy Spirit, prayer, and true
                      worship, instill in youth the essential values they need.
                      <br />
                      <br />
                    </>
                  )}
                  Spiritual Area - Love, Reverence, Honesty, and Service <br />
                  Personality Area - Ability, diligence, self-reliance,
                  cooperation
                </>
              )}
            </div>
            <div className="mt-[20px] font-SUITE">
              {aboutUs("our-internal-vision-bible")}
            </div>
          </div>
          <Image
            src={
              common("current-locale") == "ko"
                ? "/image/ko_internal-vision.jpg"
                : "/image/en_internal-vision.jpg"
            }
            alt="about-us"
            width={581}
            height={480}
            className="w-[530px] sm:w-[70vw] object-contain sm:ml-0 sm:mt-5"
          />
        </div>
        <div className="flex font-roboto mt-[100px] justify-center items-center sm:flex-col sm:m-auto">
          {!isMobile && (
            <Image
              src={
                common("current-locale") == "ko"
                  ? "/image/ko_external-vision.jpg"
                  : "/image/en_external-vision.jpg"
              }
              alt="about-us"
              width={581}
              height={480}
              className="w-[500px] sm:w-[90vw] mr-[120px] object-contain"
            />
          )}
          <div>
            <div className="text-[45px] font-extrabold sm:text-[6vw] sm:my-7">
              OUR <br />
              EXTERNAL VISION
            </div>
            <div className="w-[500px] mt-[40px] font-SUITE text-[21px] tracking-wide whitespace-pre-wrap font-medium sm:text-[4vw] sm:w-[80vw]">
              {aboutUs("our-external-vision-description")}
            </div>
            <div className="mt-[20px] font-SUITE">
              {aboutUs("our-external-vision-bible")}
            </div>
          </div>
          {isMobile && (
            <Image
              src={
                common("current-locale") == "ko"
                  ? "/image/ko_external-vision.jpg"
                  : "/image/en_external-vision.jpg"
              }
              alt="about-us"
              width={581}
              height={480}
              className="w-[30vw] mr-[8vw] object-contain sm:w-[70vw] sm:mr-0 sm:mt-5"
            />
          )}
        </div>
        <div>
          <div className="font-extrabold text-[55px] mt-[10vw] sm:text-[6vw]">
            OUR TEAM
          </div>
          <Image
            src={"/image/our-team.jpg"}
            alt="about-us"
            width={1200}
            height={1024}
            className="w-[1200px] sm:w-[90vw] mt-[4vw] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about-us"])),
    },
  };
};
