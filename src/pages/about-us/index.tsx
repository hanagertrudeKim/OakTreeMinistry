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
    <div className="mb-[120px] sm:mb-[80px]">
      <div className="bg-[#0B403A] text-white py-24 px-8 sm:py-8 sm:px-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-16 sm:flex-col sm:gap-8">
          <div className="flex flex-col w-[550px] sm:w-full">
            <div className="font-extrabold text-[56px] sm:text-[7vw] relative mb-8">
              OUR STORY
            </div>
            <div className="text-[19px] font-SUITE font-medium leading-relaxed opacity-90 sm:text-[3.5vw] whitespace-pre-line">
              {common("current-locale") == "ko"
                ? `2010년, 하나님께서 우리에게 아이티 선교에 대한 소명을 주셨습니다. 먼 아이티 땅으로 우리를 보내며 이사야서 61장의 말씀을 통해 오랫동안 어둠 속에 잠들어 있는 아이티의 젊은이들을 깨우고, 그들을 통해 여호와의 영광을 드러내기 위해 의의 나무로 세우라고 하셨습니다.

2013년, 하나님께서는 우리들을 아이티에서도 가장 열악한 지역 중 하나인 La Gonave섬으로 인도하셨습니다. 거기서 우리들은 여러 팀들과 함께 마을 보건 선교사 양성, 의료 인프라 구축, 콜레라 퇴치, 교회 개척, 지역 개발, 청소년 양육, 학교 건축 등 다양한 사역들을 진행해왔습니다.

2022년, 아이티의 악화된 치안 상황으로 인해 우리 팀은 도미니카 공화국 santiago 도시로 베이스를 옮기게 되었습니다. 거기서도 많은 아이티 불법 이주민 대상으로 의료 사역 및 청소년 및 유학생 캠퍼스 사역을 진행하고 있습니다. 이와 동시에 기존의 해오던 라고나브 사역들도 계속 하고있습니다. 특히, 아이티 유학생들을 대상으로 집중적으로 사역하고 있으며 이들을 대상으로 성경 공부, 영어, 컴퓨터, 이동진료 등 다양한 사역들을 진행하고 있습니다.`
                : `In 2010, God called us to serve the mission field in Haiti. He sent us to this distant land with the message of Isaiah 61, commissioning us to awaken the youth of Haiti who had long been living in darkness. Through them, He called us to reveal His glory and establish them as oaks of righteousness.

In 2013, God led us to La Gonave Island, one of the most underdeveloped regions in Haiti. There, we partnered with various teams to carry out diverse ministries, including training community health missionaries, building medical infrastructure, eradicating cholera, planting churches, developing local communities, nurturing young people, and constructing schools.

In 2022, due to the deteriorating security situation in Haiti, our team relocated our base to Santiago, a city in the Dominican Republic. There, we continue to serve Haitian immigrants, many of whom are undocumented, through medical ministries, youth outreach, and campus ministry for Haitian students. At the same time, we remain committed to our ongoing work in La Gonave. In particular, we are focusing on ministering to Haitian students by offering Bible studies, English classes, computer training, and mobile medical clinics.`}
            </div>
          </div>
          <Image
            src={"/image/main-AboutUs.jpg"}
            alt="about-us"
            width={580}
            height={680}
            className="w-[500px] h-[580px] sm:w-full sm:h-[400px] object-cover shadow-xl rounded-lg sm:mt-6"
          />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 mt-[120px] sm:mt-[60px]">
        <div className="flex items-start gap-x-16 sm:flex-col sm:gap-y-6">
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
        <div className="max-w-[1200px] mx-auto mt-[120px] sm:mt-[60px] flex items-center sm:flex-col sm:gap-8">
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
            className="w-[530px] sm:w-[100%] object-contain sm:ml-0 sm:mt-4"
          />
        </div>
        <div className="max-w-[1200px] mx-auto mt-[120px] sm:mt-[60px] flex items-center sm:flex-col sm:gap-8">
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
              className="w-full mt-4 object-contain"
            />
          )}
        </div>
        <div className="mt-[80px] sm:mt-[40px] space-y-[60px] sm:space-y-[40px]">
          <div className="bg-gray-50 rounded-lg p-8 sm:p-4">
            <div className="relative mb-8">
              <p className="font-extrabold text-[40px] sm:text-[6vw] flex items-center gap-4 text-[#0B403A]">
                <Image
                  src="/haiti-flag.svg"
                  alt="Haiti flag"
                  width={50}
                  height={33}
                  className="sm:w-[7vw] sm:h-auto"
                />
                La Gonave Team
              </p>
              <div className="absolute bottom-0 left-0 w-[200px] h-[3px] bg-[#0B403A]"></div>
            </div>
            <Image
              src={"/image/LagonaveTeam1.jpeg"}
              alt="about-us"
              width={600}
              height={618}
              className="w-[60vw] rounded-lg shadow-lg"
            />
          </div>
          <div className="bg-gray-50 rounded-lg p-8 sm:p-4">
            <div className="relative mb-8">
              <p className="font-extrabold text-[40px] sm:text-[6vw] flex items-center gap-4 text-[#0B403A]">
                <Image
                  src="/dominican-flag.svg"
                  alt="Dominican Republic flag"
                  width={50}
                  height={33}
                  className="sm:w-[7vw] sm:h-auto"
                />
                {isMobile ? "DR Team" : "Dominican Republic Team"}
              </p>
              <div className="absolute bottom-0 left-0 w-[200px] h-[3px] bg-[#0B403A]"></div>
            </div>
            <Image
              src={"/image/DominicanTeam1.jpeg"}
              alt="about-us"
              width={600}
              height={618}
              className="w-[60vw] rounded-lg shadow-lg"
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
