import { DONATE } from "@/static/Donate";
import Image from "next/image";
import React, { useState } from "react";

export default function OurMinistries() {
  const [showProjectDetail, setShowProjectDetail] = useState(false);
  return (
    <div>
      <div className="bg-[#FFEFE0] h-[30vw] px-[10vw] flex justify-center">
        <div>
          <div className="flex items-baseline ">
            <div className="w-[5vw] border-b-2 border-black" />
            <div className="text-black mt-[80px] pl-[1vw] text-[1vw] font-bold sm:text-[3vw]">
              WHAT WE DO
            </div>
          </div>
          <div className="w-[25vw] text-[3vw] font-bold ml-[6vw] mt-[2vw] leading-snug">
            We are working cross country
          </div>
          <div className="w-[25w] text-[0.9vw] mt-[2vw] ml-[6vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </div>
        </div>
        <Image
          src={"/image/what-we-do-banner.jpg"}
          alt="about-us"
          width={474}
          height={374}
          className="w-[30vw] sm:w-[90vw] ml-[4vw] object-contain"
        />
      </div>
      <div className="px-[15vw]">
        <div className="text-[2.9vw] font-bold mt-[5vw] mb-[5vw] leading-snug">
          Hand in Hand project <br /> for La Gonave
        </div>
        <div className="flex">
          <Image
            src={"/image/lagonave-map.jpg"}
            alt="lagonave-map"
            width={550}
            height={350}
            className="w-[35vw] sm:w-[90vw] object-contain"
          />
          <div className="ml-[5vw] w-[32vw]">
            <div className="text-[2vw] font-semibold">La Gonave Project</div>
            <div className="text-[1.3vw] font-SUITE mt-[2vw] font-medium leading-snug">
              Hand In Hand 프로젝트는 아이티의 La Gonave 섬의 빈민가 청소년들을
              일대일 후원을 통해 학교 교육에 참여할 수 있도록 돕고, 더불어
              다양한 제자 훈련 프로그램을 통해 온전한 그리스도인으로 성장할 수
              있도록 지원하는 청소년 학교 후원 프로젝트입니다.
              <br />
              <br /> 이를 통해 La Gonave의 청소년들은 자신의 가정, 지역, 국가,
              그리고 전 세계에 그리스도의 나라를 참된 그리스도 지도자로서 구축해
              나갈 것입니다.
            </div>
            <button
              onClick={() => setShowProjectDetail(!showProjectDetail)}
              className="bg-[#F3851D] text-black w-[167px] h-[44px] flex justify-center font-bold items-center rounded-md mt-[2.5vw] sm:w-[27vw] sm:h-[8vw] sm:text-[2.5vw] sm:mt-[5vw] sm:font-semibold"
            >
              자세히 보기
            </button>
          </div>
        </div>
        {showProjectDetail && (
          <div>
            <div className="text-[2.5vw] font-bold mt-[8vw] mb-[5vw] leading-snug font-roboto">
              Hand in Hand project 의 선순환
            </div>
            <Image
              src={"/image/HandinHand.jpg"}
              alt="lagonave-map"
              width={850}
              height={700}
              className="w-[40vw] sm:w-[90vw] object-contain m-auto"
            />
            <div className="flex items-center mt-[8vw] mb-[3vw]">
              <div className="text-[2.3vw] font-bold font-roboto">
                후원이 필요한 곳
              </div>
              <Image
                src="/prayHand.svg"
                alt="arrow button"
                width={45}
                height={45}
                className="ml-3"
              />
            </div>
            {DONATE.map((info, index) => {
              return (
                <div key={index} className="flex mb-[3vw] w-[55vw] m-auto">
                  <div className="text-[1.4vw] mr-3 font-bold">
                    {index + 1}.
                  </div>
                  <div className="w-[70vw] items-start justify-start text-[1.5vw]">
                    <strong>{info.title}</strong> : {info.description}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
