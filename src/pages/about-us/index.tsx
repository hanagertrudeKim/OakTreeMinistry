import useMediaQuery from "@/utils/hooks/useMediaQuery";
import Image from "next/image";
import React from "react";

export default function A() {
  const isMobile = useMediaQuery();
  return (
    <div className="mt-[3vw]">
      <div className="py-[2vw] px-[9vw] z-4 sm:px-[5vw]">
        <div className="whitespace-pre text-[3vw] font-extrabold text-end leading-snug sm:text-[6vw]">
          {!isMobile
            ? `우리는 아이티 라고나브 청소년이 그리스도의 제자로
잘 성장하도록 훈련시키고 지지합니다`
            : `우리는 청소년이 그리스도의 제자로
잘 성장하도록 훈련시키고 지지합니다`}
        </div>
        <Image
          src={"/image/aboutus-banner.jpg"}
          alt="main banner"
          sizes="100vw"
          width={1280}
          height={500}
          className="w-[100vw] h-[32vw] mt-[5vw] z-40 object-center opacity-100 transform -translate-y-5 transition duration-1000 ease-in-out sm:mt-[46px] sm:h-[43vw]"
        />
      </div>
      <div className="flex items-baseline ">
        <div className="w-[9vw] border-b-2 border-black" />
        <div className="text-black mt-[88px] pl-[2vw] text-[1vw] font-extrabold sm:text-[3vw] sm:mt-[5vw]">
          KNOW ABOUT US
        </div>
      </div>
      <div className="mt-[4vw] px-[10vw] flex items-center justify-center sm:flex-col sm:px-[0vw]">
        <div className="flex flex-col w-[34vw] flex-wrap sm:w-[90%]">
          <div className="font-extrabold text-[3vw] sm:text-[6vw]">
            OUR STORY
          </div>
          <div className="whitespace-pre-wrap text-[1.3vw] mt-[4vw] font-SUITE font-medium leading-snug sm:text-[3.5vw]">
            {`2010년, 하나님은 갑작스런 소명을 우리에게 부여하셨습니다. 먼 아이티 땅으로 우리를 보내며 이사야서 61장의 말씀을 통해 오랫동안 어둠 속에 잠들어 있는 아이티의 젊은이들을 깨우시고, 여호와의 영광을 드러내기 위해 의의 나무로 세우라고 하셨습니다.

2013년, 우리는 아이티에서도 가장 열악한 지역 중 하나인 La Gonave 섬으로 발을 들였습니다. 거기서는 마을 보건 선교사 양성, 의료 인프라 구축, 콜레라 퇴치, 교회 개척, 지역 개발, 청소년 양육, 학교 건축 등 다양한 사역을 교회와 글로벌 케어 팀과 함께 진행해왔습니다.

2024년, 아이티 대학생들을 위해 Santiago의 UTESA 대학 근처에 YWAM Oak Tree 선교센터를 개설했습니다. 이곳에서는 아이티 유학생들을 대상으로 성경 공부, 영어, 컴퓨터, 한글 등 다양한 활동이 이뤄지고 있습니다. 이들을 그리스도의 제자로 훈련시켜 아이티와 서북 아프리카로 선교의 중추로 보내고자 합니다.`}
          </div>
        </div>
        <Image
          src={"/image/main-AboutUs.jpg"}
          alt="about-us"
          width={580}
          height={680}
          className="w-[37vw] h-[40vw] sm:w-[90vw] ml-[8vw] object-cover sm:ml-0 sm:h-auto sm:mt-[20px]"
        />
      </div>
      <div className="w-[100vw] bg-[#FFEFE0] h-[70vw] absolute top-[43vw] -z-10 sm:h-[189vw] sm:top-[92vw]"></div>
      <div className="my-[13vw] mx-[15vw] sm:mx-0 sm:px-[5vw]">
        <div className="flex justify-center items-center sm:flex-col sm:items-start">
          <p className="font-extrabold text-[3vw] sm:text-[6vw]">
            OUR {isMobile ?? <br />}
            VISION
          </p>
          <div className="ml-[7vw] text-[1.5vw] font-SUITE tracking-wide font-black sm:text-[3.8vw] sm:ml-0 sm:font-bold sm:mt-[10px]">
            라고나브 청소년들을 후원하고 지지하여 그들에게 최선의 교육과
            제자훈련을 제공함으로 영적으로 사회적으로 성숙한 그리스도인되어 그들
            스스로 그들의 나라를 세우며 또 세게 선교에 큰 역할을 감당하는
            청년으로 세운다
          </div>
        </div>
        <div className="flex font-roboto mt-[8vw] justify-center items-center sm:flex-col">
          <div>
            <div className="text-[2vw] font-bold sm:text-[5vw]">
              OUR <br />
              INTERNAL VISION
            </div>
            <div className="mt-[1.4vw] font-SUITE text-[1.4vw] tracking-wide font-medium sm:text-[3.5vw]">
              성경말씀과 성령 충만함, 기도와 진정한 예배를 통해 <br />
              청소년들의 내면에 맺어야 할 핵심 가치들을 갖게 한다. <br /> <br />
              영적 영역 - 사랑, 경건, 정직, 섬김 <br />
              인성 영역 - 실력, 근면, 자립, 협력
            </div>
            <div className="mt-[1.2vw] font-SUITE">
              (갈5:22. 딤후 2:21,22, 시편 119:1-16, 엡4:13-15, 눅2:40)
            </div>
          </div>
          <Image
            src={"/image/internal-vision.jpg"}
            alt="about-us"
            width={581}
            height={480}
            className="w-[30vw] sm:w-[70vw] ml-[6vw] object-contain sm:ml-0 sm:mt-5"
          />
        </div>
        <div className="flex font-roboto mt-[3vw] justify-center items-center sm:flex-col sm:m-auto">
          {!isMobile && (
            <Image
              src={"/image/external-vision.jpg"}
              alt="about-us"
              width={581}
              height={480}
              className="w-[30vw] sm:w-[90vw] mr-[8vw] object-contain"
            />
          )}
          <div>
            <div className="text-[2vw] font-bold sm:text-[5vw]">
              OUR <br />
              EXTERNAL VISION
            </div>
            <div className="mt-[1.4vw] font-SUITE text-[1.4vw] tracking-wide w-[30vw] whitespace-pre-wrap font-medium sm:text-[3.5vw] sm:w-[80vw]">
              {`열방을 향해 예수 그리스도의 지상 명령을 실행하며 그들이 속한 가정, 지역사회, 국가를 섬기며 그 속에 하나님 나라의 핵심 가치를 이루어가게 한다.`}
            </div>
            <div className="mt-[1.2vw] font-SUITE">
              (갈5:22. 딤후 2:21,22, 시편 119:1-16, 엡4:13-15, 눅2:40)
            </div>
          </div>
          {isMobile && (
            <Image
              src={"/image/external-vision.jpg"}
              alt="about-us"
              width={581}
              height={480}
              className="w-[30vw] mr-[8vw] object-contain sm:w-[70vw] sm:mr-0 sm:mt-5"
            />
          )}
        </div>
        <div className="font-extrabold text-[3vw] mt-[10vw] sm:text-[6vw]">
          OUR TEAM
        </div>
        <Image
          src={"/image/our-team.jpg"}
          alt="about-us"
          width={1200}
          height={1024}
          className="w-[80vw] sm:w-[90vw] mt-[4vw] object-contain"
        />
      </div>
    </div>
  );
}
