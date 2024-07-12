/* eslint-disable react-hooks/rules-of-hooks */
import { PROJECT } from "@/static/PROJECT";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import React, { useState } from "react";

export default function index() {
  const [isClickRight, setIsClickRight] = useState(true);
  const { t: common } = useTranslation(["common"]);
  const { t: project } = useTranslation(["project"]);

  return (
    <div>
      <div className="h-[450px] px-[10vw] flex bg-[url('/image/projectBanner2.jpg')] sm:px-0 sm:w-[100vw] sm:object-cover">
        <div>
          <div className="flex items-baseline">
            <div className="w-[5vw] border-b-2 border-white" />
            <div className="text-white mt-[50px] pl-[1vw] text-[1.2vw] font-bold sm:text-[3vw]">
              {project("project")}
            </div>
          </div>
          <div className="sm:w-full w-[600px] text-[50px] font-bold ml-[6vw] mt-[85px] leading-snug text-white sm:text-[24px]">
            {project("title")}
          </div>
          <div className="text-[20px] mt-[2vw] ml-[6vw] text-white sm:text-[12px]">
            {project("sub-title")}
          </div>
        </div>
        <div className="w-[400px] sm:w-0"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex mx-8 justify-center font-bold text-[19px] mt-[50px] text-center font-NSK gap-[120px] sm:gap-[30px] sm:text-[16px]">
          <button
            className={`w-[280px] h-[55px] border border-black rounded-full ${
              isClickRight ? "bg-[#175a41] text-white" : "text-black"
            } sm:w-[180px] sm:h-[48px]`}
            onClick={() => setIsClickRight(true)}
          >
            {project("haiti_la_gonave")}
          </button>
          <button
            className={`w-[280px] h-[55px] border border-black rounded-full ${
              isClickRight ? "text-black" : "bg-[#175a41] text-white"
            } sm:w-[180px] sm:h-[48px]`}
            onClick={() => setIsClickRight(false)}
          >
            {project("dominica_republic")}
          </button>
        </div>
        {isClickRight ? (
          PROJECT.lagonave_projects.map((info, index) => (
            <>
              <div
                key={index}
                className="flex justify-center mt-[150px] sm:flex-col sm:mt-[80px] sm:items-center"
              >
                <div className="font-NSK pr-[6vw] w-[600px] sm:w-[90vw] sm:pr-0">
                  <div className="text-[35px] font-extrabold sm:text-[28px]">
                    {project(info.title)}
                  </div>
                  <div className="text-[21px] font-normal mt-[35px] sm:mb-5 sm:text-[18px]">
                    {project(info.description)}
                  </div>
                </div>
                <Image
                  src={info.image}
                  alt={info.title}
                  width={550}
                  height={550}
                  className="w-[500px] sm:w-[90vw] object-scale-down"
                />
              </div>
              {info.title === "lagonave_projects_title4" && (
                <div className="font-NSK mt-[100px] flex flex-col justify-center items-center">
                  <div className="text-[35px] font-extrabold mb-[50px] sm:text-[25px] sm:mb-[10px] sm:w-[90vw]">
                    {project("lagonave_dorcas_projects_title")}
                  </div>
                  <div className="flex gap-[8vw] justify-between items-center sm:w-[90vw] sm:flex-col">
                    <div className="text-[20px] w-[500px] whitespace-pre-wrap sm:w-[90vw] sm:text-[18px] sm:mb-10">
                      {common("current-locale") == "ko"
                        ? `
1. 아이티 라고나브 섬의 미성년 미혼모들에게 적절한 직업 훈련과 경제적 자립을 위한 식량과 의료 서비스를 제공합니다.

2. 우리는 미혼모 가정을 돕고 지지하여, 건강하고 안정된 가정을 형성하도록 지원합니다.

3. 여성들의 자립 경제 활동을 촉진하여, 지역 경제의 활성화를 돕습니다.

4. 미혼모 신앙 공동체를 구성하여, 소외된 여성들이 참된 그리스도의 제자로 성장할 수 있도록 지원합니다.`
                        : `
1. We provide appropriate job training, food, and medical services for the economic independence of underage single mothers on Haiti's La Gonave Island.

2. We support and assist single-mother families to form healthy and stable households.

3. We promote the economic independence of women, helping to revitalize the local economy.

4. We form a faith community for single mothers, supporting marginalized women to grow as true disciples of Christ.`}
                    </div>
                    <div className="mb-12">
                      <Image
                        src={
                          common("current-locale") == "ko"
                            ? "/image/ko_dorega-graph.jpg"
                            : "/image/en_dorega-graph.jpg"
                        }
                        alt="project-school"
                        width={550}
                        height={550}
                        className="w-[450px] sm:w-[80vw] object-scale-down sm:m-auto my-12"
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          ))
        ) : (
          <div className="font-NSK m-auto px-[20vw] my-[100px] sm:px-[5vw]">
            <div className="text-[35px] font-extrabold sm:text-[28px]">
              {project(PROJECT.dominica_projects.info.title)}
            </div>
            <div className="text-[20px] font-normal mt-[60px] sm:mt-[30px] sm:text-[18px]">
              {project(PROJECT.dominica_projects.info.text)}
            </div>
            <div className="text-[35px] font-extrabold mt-[100px] sm:mt-[80px] sm:text-[28px]">
              {project(PROJECT.dominica_projects.clinic.title)}
            </div>
            <div className="text-[20px] font-normal my-[60px] whitespace-pre-wrap leading-relaxed sm:text-[17px] sm:my-[30px]">
              {project(PROJECT.dominica_projects.clinic.text)}
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

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "project"])),
    },
  };
};
