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
      <div className="relative h-[300px] group sm:h-[250px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/image/projectBanner2.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative h-full flex items-center px-[10vw] sm:px-8">
          <div>
            <div className="inline-block">
              <div className="text-white/80 text-[18px] font-medium mb-4 sm:text-[15px]">
                {project("project")}
              </div>
              <div className="h-[2px] w-full bg-white/60 transform origin-left transition-all" />
            </div>

            <h1 className="text-[42px] font-bold mt-6 text-white leading-tight tracking-tight sm:text-[26px] sm:mt-4">
              {project("title")}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-[150px] sm:mb-[100px]">
        <div className="flex mx-8 justify-center font-bold text-[21px] mt-[50px] text-center font-NSK gap-[150px] sm:gap-[20px] sm:text-[15px] sm:mx-4 sm:mt-[30px]">
          <button
            className={`group w-[320px] h-[65px] border-2 transition-all duration-300 ease-in-out relative overflow-hidden
              ${
                isClickRight
                  ? "bg-gradient-to-r from-[#175a41] to-[#1a724f] text-white border-[#175a41] shadow-lg shadow-[#175a41]/30 hover:translate-y-[-2px] hover:shadow-xl"
                  : "text-[#175a41] border-[#175a41] hover:bg-gradient-to-r hover:from-[#175a41]/5 hover:to-[#1a724f]/5"
              } 
              clip-path-[polygon(10px_0,_calc(100%_-_10px)_0,_100%_10px,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_10px_100%,_0_calc(100%_-_10px),_0_10px)]
              sm:w-[180px] sm:h-[48px]`}
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
            className={`group w-[320px] h-[65px] border-2 transition-all duration-300 ease-in-out relative overflow-hidden
              ${
                isClickRight
                  ? "text-[#2E4B9B] border-[#2E4B9B] hover:bg-gradient-to-r hover:from-[#2E4B9B]/5 hover:to-[#3457B2]/5"
                  : "bg-gradient-to-r from-[#2E4B9B] to-[#3457B2] text-white border-[#2E4B9B] shadow-lg shadow-[#2E4B9B]/30 hover:translate-y-[-2px] hover:shadow-xl"
              }
              clip-path-[polygon(10px_0,_calc(100%_-_10px)_0,_100%_10px,_100%_calc(100%_-_10px),_calc(100%_-_10px)_100%,_10px_100%,_0_calc(100%_-_10px),_0_10px)]
              sm:w-[180px] sm:h-[48px]`}
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
        {isClickRight ? (
          PROJECT.lagonave_projects.map((info, index) => (
            <div
              key={index}
              className="flex justify-center mt-[150px] sm:flex-col sm:mt-[60px] sm:items-center sm:px-5"
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
                className="w-[500px] h-[400px] sm:w-[90vw] sm:h-[300px] object-cover rounded-lg"
              />
            </div>
          ))
        ) : (
          <>
            <div className="font-NSK mt-[100px] px-[20%] sm:mt-[40px] sm:px-5">
              <div className="relative mb-[40px] pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-[#2E4B9B] before:to-[#3457B2]">
                <h2 className="text-[35px] font-extrabold sm:text-[28px] text-[#2E4B9B]">
                  {project(PROJECT.dominica_projects.info.title)}
                </h2>
              </div>
              <div
                className="relative p-8 rounded-lg 
                bg-gradient-to-br from-white to-gray-50
                shadow-[0_10px_30px_-15px_rgba(46,75,155,0.3)]
                border border-[#2E4B9B]/10
                sm:p-5"
              >
                <div className="text-[21px] leading-relaxed font-normal text-gray-700 sm:text-[18px]">
                  {project(PROJECT.dominica_projects.info.text)}
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/image/palm-pattern.svg')] opacity-[0.03] rounded-tr-lg"></div>
              </div>
            </div>

            {PROJECT.dominica_projects.projects.map((info, index) => (
              <div
                key={index}
                className="flex justify-center mt-[150px] sm:flex-col sm:mt-[60px] sm:items-center sm:px-5"
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
                  className="w-[500px] h-[400px] sm:w-[90vw] sm:h-[300px] object-cover rounded-lg"
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
