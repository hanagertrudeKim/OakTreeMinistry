/* eslint-disable react-hooks/rules-of-hooks */
import { PROJECT } from "@/static/PROJECT";
import Image from "next/image";
import React, { useState } from "react";

export default function index() {
  const [isClickRight, setIsClickRight] = useState(true);
  return (
    <div>
      <div className="h-[450px] px-[10vw] flex justify-center bg-[url('/image/projectBanner2.jpg')]">
        <div>
          <div className="flex items-baseline">
            <div className="w-[5vw] border-b-2 border-white" />
            <div className="text-white mt-[50px] pl-[1vw] text-[1.2vw] font-bold sm:text-[3vw]">
              프로젝트
            </div>
          </div>
          <div className="w-[600px] text-[3vw] font-bold ml-[6vw] mt-[85px] leading-snug text-white">
            우리는 이런 일을 하고 있어요
          </div>
          <div className="text-[20px] mt-[2vw] ml-[6vw] text-white">
            모든 어린이가 부족함 없이 자랄 수 있도록 돕습니다.
          </div>
        </div>
        <div className="w-[400px]"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center font-bold text-[19px] mt-[50px] text-center font-NSK gap-[120px]">
          <button
            className={`w-[280px] h-[55px] border border-black rounded-full ${
              isClickRight ? "bg-[#175a41] text-white" : "text-black"
            }`}
            onClick={() => setIsClickRight(true)}
          >
            아이티 라고나브
          </button>
          <button
            className={`w-[280px] h-[55px] border border-black rounded-full ${
              isClickRight ? "text-black" : "bg-[#175a41] text-white"
            }`}
            onClick={() => setIsClickRight(false)}
          >
            도미니카 공화국
          </button>
        </div>
        {isClickRight ? (
          PROJECT.lagonave_projects.map((project, index) => (
            <>
              <div key={index} className="flex justify-center mt-[150px]">
                <div className="font-NSK pr-[6vw] w-[600px]">
                  <div className="text-[30px] font-extrabold">
                    {project.title}
                  </div>
                  <div className="text-[21px] font-normal mt-[35px]">
                    {project.description}
                  </div>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={550}
                  height={550}
                  className="w-[500px] sm:w-[90vw] object-scale-down"
                />
              </div>
              {project.title === "도르가 미혼모 사역" && (
                <div className="font-NSK mt-[100px] flex flex-col justify-center items-center">
                  <div className="text-[30px] font-extrabold mb-[50px]">
                    도르가 미혼모 사역의 목적
                  </div>
                  <div className="flex w-[62vw] justify-between items-center">
                    <div className="text-[20px] w-[500px] whitespace-pre-wrap">
                      {`
1. 아이티 라고나브 섬의 미성년 미혼모들에게 적절한 직업 훈련과 경제적 자립을 위한 식량과 의료 서비스를 제공합니다.

2. 우리는 미혼모 가정을 돕고 지지하여, 건강하고 안정된 가정을 형성하도록 지원합니다.

3. 여성들의 자립 경제 활동을 촉진하여, 지역 경제의 활성화를 돕습니다.

4. 미혼모 신앙 공동체를 구성하여, 소외된 여성들이 참된 그리스도의 제자로 성장할 수 있도록 지원합니다.`}
                    </div>
                    <Image
                      src={"/image/dorega-graph.jpg"}
                      alt="project-school"
                      width={550}
                      height={550}
                      className="w-[420px] sm:w-[90vw] object-scale-down"
                    />
                  </div>
                </div>
              )}
            </>
          ))
        ) : (
          <div className="font-NSK m-auto px-[20vw] my-[100px]">
            <div className="text-[30px] font-extrabold ">
              {PROJECT.dominica_project.info.title}
            </div>
            <div className="text-[20px] font-normal mt-[60px]">
              {PROJECT.dominica_project.info.text}
            </div>
            <div className="text-[30px] font-extrabold mt-[100px]">
              {PROJECT.dominica_project.clinic.title}
            </div>
            <div className="text-[20px] font-normal my-[60px] whitespace-pre-wrap leading-relaxed">
              {PROJECT.dominica_project.clinic.text}
            </div>
            <Image
              src={"/image/pontezuela.jpg"}
              alt="pontezuela"
              width={550}
              height={550}
              className="w-[900px] sm:w-[90vw] object-scale-down m-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}
