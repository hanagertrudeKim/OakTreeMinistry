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

  return (
    <div className="mt-[60px] sm:mt-[20px] mb-[120px] sm:mb-[80px]">
      <div className="flex items-baseline max-w-[1200px] px-4">
        <div className="w-[60px] border-b-2 border-[#0B403A]" />
        <div className="pl-[20px] text-[32px] font-bold text-[#0B403A] sm:text-[4vw]">
          KNOW ABOUT US
        </div>
      </div>
      <div className="mt-[60px] sm:mt-[10px] bg-[#0B403A] text-white py-24 px-8 sm:py-12 sm:px-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-16 sm:flex-col">
          <div className="flex flex-col w-[550px] sm:w-full">
            <div className="font-extrabold text-[56px] sm:text-[7vw] relative mb-8">
              OUR STORY
            </div>
            <div className="text-[19px] font-SUITE font-medium leading-relaxed opacity-90 sm:text-[3.5vw] whitespace-pre-line">
              {common("current-locale") == "ko"
                ? `2010년, 하나님은 갑작스런 소명을 우리에게 부여하셨습니다. 먼 아이티 땅으로 우리를 보내며 이사야서 61장의 말씀을 통해 오랫동안 어둠 속에 잠들어 있는 아이티의 젊은이들을 깨우시고, 여호와의 영광을 드러내기 위해 의의 나무로 세우라고 하셨습니다.

2013년, 우리는 아이티에서도 가장 열악한 지역 중 하나인 La Gonave섬으로 발을 들였습니다. 거기서는 마을 보건 선교사 양성, 의료 인프라 구축, 콜레라 퇴치, 교회 개척, 지역 개발, 청소년 양육, 학교 건축 등 다양한 사역을 교회와 글로벌 케어 팀과 함께 진행해왔습니다.

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
            className="w-[500px] h-[580px] sm:w-[92%] sm:h-[350px] object-cover shadow-xl rounded-lg sm:mt-[35px]"
          />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 mt-[120px] sm:mt-[80px]">
        <div className="flex items-start gap-x-16 sm:flex-col">
          <div className="relative">
            <p className="font-extrabold text-[54px] text-[#0B403A] sm:text-[7vw]">
              OUR {isMobile && <br />}
              VISION
            </p>
            <div className="absolute bottom-0 left-0 w-[120px] h-[3px] bg-[#0B403A]"></div>
          </div>
          <div className="text-[22px] font-SUITE leading-relaxed tracking-wide font-medium max-w-[700px] mt-3 sm:text-[3.8vw] sm:mt-[30px]">
            {aboutUs("our-vision")}
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-[120px] sm:mt-[80px]">
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
                        worship, instill in youth the essential values they
                        need.
                        <br />
                        <br />
                      </>
                    )}
                    Spiritual Area - Love, Reverence, Honesty, and Service{" "}
                    <br />
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
        </div>
        <div className="max-w-[1200px] mx-auto mt-[120px] sm:mt-[80px] flex items-center sm:flex-col">
          {!isMobile && (
            <div className="flex-shrink-0 mr-[120px]">
              <Image
                src={
                  common("current-locale") == "ko"
                    ? "/image/ko_external-vision.jpg"
                    : "/image/en_external-vision.jpg"
                }
                alt="about-us"
                width={581}
                height={480}
                className="w-[500px] sm:w-[90vw] object-contain"
              />
            </div>
          )}
          <div className="flex-grow">
            <div className="text-[45px] font-bold sm:text-[6vw]">
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
              className="w-[70vw] mt-5 object-contain"
            />
          )}
        </div>
        <div className="mt-[120px] sm:mt-[80px] space-y-[100px]">
          <div className="bg-gray-50 rounded-lg p-12 sm:p-6">
            <div className="relative mb-12">
              <p className="font-extrabold text-[50px] sm:text-[7vw] flex items-center gap-4 text-[#0B403A]">
                <Image
                  src="/haiti-flag.svg"
                  alt="Haiti flag"
                  width={60}
                  height={40}
                  className="sm:w-[8vw] sm:h-auto"
                />
                La Gonave Team
              </p>
              <div className="absolute bottom-0 left-0 w-[280px] h-[3px] bg-[#0B403A]"></div>
            </div>
            <Image
              src={"/image/LagonaveTeam1.jpeg"}
              alt="about-us"
              width={1000}
              height={1024}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="bg-gray-50 rounded-lg p-12 sm:p-6">
            <div className="relative mb-12">
              <p className="font-extrabold text-[48px] sm:text-[7vw] flex items-center gap-4 text-[#0B403A]">
                <Image
                  src="/dominican-flag.svg"
                  alt="Dominican Republic flag"
                  width={60}
                  height={40}
                  className="sm:w-[8vw] sm:h-auto"
                />
                {isMobile ? "DR Team" : "Dominican Republic Team"}
              </p>
              <div className="absolute bottom-0 left-0 w-[280px] h-[3px] bg-[#0B403A]"></div>
            </div>
            <Image
              src={"/image/DominicanTeam1.jpeg"}
              alt="about-us"
              width={1000}
              height={1024}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
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
