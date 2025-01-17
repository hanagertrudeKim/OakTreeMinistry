/* eslint-disable react-hooks/rules-of-hooks */
import { PROJECT } from "@/static/PROJECT";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function index() {
  const [isClickRight, setIsClickRight] = useState(true);
  const { t: common } = useTranslation(["common"]);
  const { t: project } = useTranslation(["project"]);
  const { locale } = useRouter();

  return (
    <div>
      <div className="relative h-[270px] group sm:h-[220px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/image/projectBanner2.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative h-full flex items-center px-[12%] sm:px-6">
          <div>
            <div className="inline-block">
              <div className="text-white/80 text-[17px] font-medium mb-3 sm:text-[15px]">
                {project("project")}
              </div>
              <div className="h-[1.5px] w-full bg-white/60 transform origin-left transition-all" />
            </div>
            <h1 className="text-[38px] font-bold mt-4 text-white leading-tight tracking-tight sm:text-[26px] sm:mt-3">
              {project("title")}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-[100px] sm:mb-[60px]">
        <div className="flex mx-8 justify-center font-bold text-[19px] mt-[45px] text-center font-NSK gap-[60px] sm:gap-[15px] sm:text-[15px] sm:mx-4 sm:mt-[25px]">
          <button
            className={`group w-[300px] h-[58px] border-2 transition-all duration-300 ease-in-out relative overflow-hidden
              ${
                isClickRight
                  ? "bg-gradient-to-r from-[#175a41] to-[#1a724f] text-white border-[#175a41] shadow-lg shadow-[#175a41]/30 hover:translate-y-[-2px] hover:shadow-xl"
                  : "text-[#175a41] border-[#175a41] hover:bg-gradient-to-r hover:from-[#175a41]/5 hover:to-[#1a724f]/5"
              } 
              clip-path-[polygon(10px_0,_calc(100%_-_10px)_0,_100%_10px,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_10px_100%,_0_calc(100%_-_10px),_0_10px)]
              sm:w-[165px] sm:h-[45px]`}
            onClick={() => setIsClickRight(true)}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Image
                src="/haiti-flag.svg"
                alt="Haiti flag"
                width={24}
                height={24}
                className="rounded-sm"
              />
              {project("haiti_la_gonave")}
            </span>
            {isClickRight && (
              <div className="absolute inset-0 bg-[url('/image/wave-pattern.svg')] opacity-10 animate-slide"></div>
            )}
          </button>
          <button
            className={`group w-[300px] h-[58px] border-2 transition-all duration-300 ease-in-out relative overflow-hidden
              ${
                isClickRight
                  ? "text-[#2E4B9B] border-[#2E4B9B] hover:bg-gradient-to-r hover:from-[#2E4B9B]/5 hover:to-[#3457B2]/5"
                  : "bg-gradient-to-r from-[#2E4B9B] to-[#3457B2] text-white border-[#2E4B9B] shadow-lg shadow-[#2E4B9B]/30 hover:translate-y-[-2px] hover:shadow-xl"
              }
              clip-path-[polygon(10px_0,_calc(100%_-_10px)_0,_100%_10px,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_10px_100%,_0_calc(100%_-_10px),_0_10px)]
              sm:w-[165px] sm:h-[45px]`}
            onClick={() => setIsClickRight(false)}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Image
                src="/dominican-flag.svg"
                alt="Dominican Republic flag"
                width={24}
                height={24}
                className="rounded-sm"
              />
              {project("dominica_republic")}
            </span>
            {!isClickRight && (
              <div className="absolute inset-0 bg-[url('/image/palm-pattern.svg')] opacity-10 animate-slide"></div>
            )}
          </button>
        </div>

        <div className="mt-16 px-[12%] sm:px-4">
          <div
            className={`relative overflow-hidden rounded-2xl ${
              isClickRight
                ? "bg-gradient-to-br from-[#175a41]/5 to-[#1a724f]/5"
                : "bg-gradient-to-br from-[#2E4B9B]/5 to-[#3457B2]/5"
            }`}
          >
            <div className="absolute top-0 right-0 w-64 h-24 bg-[url('/image/wave-pattern.svg')] opacity-5 rotate-90" />
            <div className="absolute bottom-0 left-0 w-64 h-24 bg-[url('/image/wave-pattern.svg')] opacity-5 -rotate-90" />

            <div className="relative flex gap-10 py-6 px-10 sm:flex-col sm:p-6">
              <div className="flex-1 sm:w-full">
                <div
                  className={`inline-block my-6 px-4 py-2 rounded-full text-[15px] font-medium transition-colors duration-300 sm:text-[13px] ${
                    isClickRight
                      ? "bg-[#175a41]/10 text-[#175a41] ring-1 ring-[#175a41]/20"
                      : "bg-[#2E4B9B]/10 text-[#2E4B9B] ring-1 ring-[#2E4B9B]/20"
                  }`}
                >
                  {isClickRight
                    ? locale === "ko"
                      ? "아이티 라고나브"
                      : "La Gonâve, Haiti"
                    : locale === "ko"
                    ? "도미니카 공화국 산티아고"
                    : "Santiago, Dominican Republic"}
                </div>

                <h3
                  className={`text-[28px] font-bold mb-4 transition-colors duration-300 sm:text-[20px] ${
                    isClickRight ? "text-[#175a41]" : "text-[#2E4B9B]"
                  }`}
                >
                  {isClickRight
                    ? locale === "ko"
                      ? "라고나브 섬은 여기에 있어요"
                      : "Location of La Gonâve Island"
                    : locale === "ko"
                    ? "산티아고는 여기에 있어요"
                    : "Location of Santiago"}
                </h3>

                <div className="space-y-4">
                  <p className="text-[17px] leading-relaxed text-gray-600 sm:text-[14px]">
                    {isClickRight
                      ? locale === "ko"
                        ? "아이티 수도 포르토프랭스에서 서쪽으로 약 60km 떨어진 곳에 위치한 라고나브 섬은 아이티에서 가장 큰 섬입니다. 약 12만 명의 주민이 거주하고 있으며, 열악한 의료·교육 환경 속에서 살아가고 있습니다."
                        : "La Gonâve Island, located about 60km west of Haiti's capital Port-au-Prince, is the largest island of Haiti. Approximately 120,000 residents live here under challenging medical and educational conditions."
                      : locale === "ko"
                      ? "도미니카 공화국 제2의 도시인 산티아고는 시바오 계곡에 위치해 있으며, 약 100만 명의 인구가 거주하고 있습니다. 이 중 상당수의 아이티 이주민들이 의료와 교육의 사각지대에서 힘겨운 삶을 이어가고 있습니다."
                      : "Santiago, the second-largest city in the Dominican Republic, is situated in the Cibao Valley with a population of about 1 million. Many Haitian immigrants here face difficulties accessing proper medical care and education."}
                  </p>

                  <div className="flex gap-4 sm:flex-wrap">
                    <div
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isClickRight
                          ? "bg-[#175a41]/5 text-[#175a41] ring-1 ring-[#175a41]/20 hover:bg-[#175a41]/10"
                          : "bg-[#2E4B9B]/5 text-[#2E4B9B] ring-1 ring-[#2E4B9B]/20 hover:bg-[#2E4B9B]/10"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isClickRight ? "text-[#175a41]" : "text-[#2E4B9B]"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[15px] font-medium sm:text-[13px]">
                        {isClickRight
                          ? locale === "ko"
                            ? "라고나브, 아이티"
                            : "La Gonâve, Haiti"
                          : locale === "ko"
                          ? "산티아고, 도미니카 공화국"
                          : "Santiago, Dominican Republic"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[480px] sm:w-full">
                <div
                  className={`aspect-[16/11] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
                    isClickRight
                      ? "ring-2 ring-[#175a41]/20 shadow-[#175a41]/10"
                      : "ring-2 ring-[#2E4B9B]/20 shadow-[#2E4B9B]/10"
                  }`}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={
                      isClickRight
                        ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120819.35614793927!2d-72.8848870665821!3d18.831562895791092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb94828c03b4d5d%3A0x654c3c75f8c505e1!2z65GQ7J207Yq4IOudvOqzvOuCmO2YuCDshJ0!5e0!3m2!1sko!2skr!4v1650432985037!5m2!1sko!2skr"
                        : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120819.35614793927!2d-70.70661016658211!3d19.4516628957911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c5daa73cea47%3A0x61881cfb4d8f5ac5!2z7IaM7ZWZ7Yq4IOyCrO2LgO2VmOqzoCDqs7XtlZjqsIA!5e0!3m2!1sko!2skr!4v1650432985037!5m2!1sko!2skr"
                    }
                    className="hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {isClickRight ? (
          PROJECT.lagonave_projects.map((info, index) => (
            <div
              key={index}
              className="flex justify-center mt-[90px] gap-[80px] sm:flex-col sm:mt-[40px] sm:items-center sm:px-4 sm:gap-[30px]"
            >
              <div className="font-NSK w-[520px] sm:w-[90vw]">
                <div className="text-[30px] font-bold sm:text-[25px]">
                  {project(info.title)}
                </div>
                <div className="text-[19px] leading-relaxed font-normal mt-[25px] sm:text-[15px]">
                  {project(info.description)}
                </div>
              </div>
              <Image
                src={info.image}
                alt={info.title}
                width={550}
                height={550}
                className="w-[470px] h-[370px] sm:w-[90vw] sm:h-[260px] object-cover rounded-lg"
              />
            </div>
          ))
        ) : (
          <>
            <div className="font-NSK mt-[80px] px-[18%] sm:mt-[30px] sm:px-4">
              <div className="mb-[30px]">
                <h2 className="text-[30px] font-bold sm:text-[25px] text-[#2E4B9B]/90">
                  {project(PROJECT.dominica_projects.info.title)}
                </h2>
              </div>
              <div className="relative p-8 rounded-2xl bg-[#2E4B9B]/[0.02] sm:p-6">
                <div className="text-[19px] leading-relaxed font-normal text-gray-600 sm:text-[15px]">
                  {project(PROJECT.dominica_projects.info.text)}
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/image/palm-pattern.svg')] opacity-[0.04] rotate-90" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[url('/image/palm-pattern.svg')] opacity-[0.04] -rotate-90" />
              </div>
            </div>

            {PROJECT.dominica_projects.projects.map((info, index) => (
              <div
                key={index}
                className="flex justify-center mt-[90px] gap-[80px] sm:flex-col sm:mt-[40px] sm:items-center sm:px-4 sm:gap-[30px]"
              >
                <div className="font-NSK w-[520px] sm:w-[90vw]">
                  <div className="text-[30px] font-bold sm:text-[25px]">
                    {project(info.title)}
                  </div>
                  <div className="text-[19px] leading-relaxed font-normal mt-[25px] sm:text-[15px]">
                    {project(info.description)}
                  </div>
                </div>
                <Image
                  src={info.image}
                  alt={info.title}
                  width={550}
                  height={550}
                  className="w-[470px] h-[370px] sm:w-[90vw] sm:h-[260px] object-cover rounded-lg"
                />
              </div>
            ))}
          </>
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
