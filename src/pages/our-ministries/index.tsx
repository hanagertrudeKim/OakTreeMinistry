import { DONATE } from "@/static/Donate";
import { DONATE_CARD } from "@/static/Home";
import Image from "next/image";
import Link from "next/link";

export default function OurMinistries() {
  return (
    <div>
      <div className="bg-[#FFEFE0] h-[500px] px-[10vw] flex justify-center">
        <div>
          <div className="flex items-baseline">
            <div className="w-[5vw] border-b-2 border-black" />
            <div className="text-black mt-[80px] pl-[1vw] text-[1vw] font-bold sm:text-[3vw]">
              후원 프로그램
            </div>
          </div>
          <div className="w-[600px] text-[45px] font-bold ml-[6vw] mt-[80px] leading-snug">
            주제별 양육보완후원
          </div>
          <div className="text-[20px] mt-[2vw] ml-[6vw]">
            모든 어린이가 부족함 없이 자랄 수 있도록 돕습니다.
          </div>
        </div>
        z
        <Image
          src={"/image/what-we-do-banner.jpg"}
          alt="about-us"
          width={474}
          height={374}
          className="w-[500px] sm:w-[90vw] ml-[4vw] object-contain"
        />
      </div>
      <div className="py-[150px] flex flex-col items-center">
        <div className="flex items-center">
          <Image
            src={"/image/childrenDonate.jpg"}
            alt="어린이 후원 사진"
            width={550}
            height={350}
            className="w-[480px] sm:w-[90vw] object-contain"
          />
          <div className="w-[600px] h-[350px] flex flex-col justify-center gap-[40px] bg-[#FFEFE0] p-[70px]">
            <div className="text-[28px] font-NSK font-extrabold">
              1:1 청소년 후원하기
            </div>
            <div className="text-[18px] font-NSK font-medium">
              학비 지원으로 성경 공부, 제자 훈련을 지원합니다.
            </div>
            <div className="flex gap-6 text-[16px] mt-[30px] font-semibold sm:text-[10px]">
              <Link
                href={"/our-ministries"}
                className="bg-white text-black w-[210px] h-[48px] flex justify-center items-center rounded-md sm:w-[100px] sm:h-[30px]"
              >
                자세히 보기
              </Link>
              <Link
                href={"/our-ministries"}
                className="bg-[#F3851D] text-white w-[210px] h-[48px] flex justify-center items-center rounded-md sm:w-[100px] sm:h-[30px]"
              >
                바로 후원하기
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-12">
          <div className="w-[600px] h-[350px] flex flex-col items-end justify-center gap-[40px] bg-[#1D2130] p-[70px] text-white">
            <div className="text-[28px] font-NSK font-extrabold">
              대학생 후원하기
            </div>
            <div className="text-[18px] font-NSK font-medium">
              학비 지원으로 성경 공부, 제자 훈련을 지원합니다.
            </div>
            <div className="flex text-[16px] mt-[30px] font-semibold sm:text-[10px] gap-6">
              <Link
                href={"/our-ministries"}
                className="bg-none border-[1px] w-[210px] h-[48px] flex justify-center items-center rounded-md sm:w-[100px] sm:h-[30px]"
              >
                자세히 보기
              </Link>
              <Link
                href={"/our-ministries"}
                className="bg-[#F3851D] text-white w-[210px] h-[48px] flex justify-center items-center rounded-md sm:w-[100px] sm:h-[30px]"
              >
                바로 후원하기
              </Link>
            </div>
          </div>
          <Image
            src={"/image/collegeDonate.jpg"}
            alt="대학생 후원 사진"
            width={550}
            height={350}
            className="w-[480px] sm:w-[90vw] object-contain"
          />
        </div>
        <div className="flex items-center mt-12">
          <Image
            src={"/image/schoolDonate.jpg"}
            alt="소망학교 후원 사진"
            width={550}
            height={350}
            className="w-[480px] sm:w-[90vw] object-center"
          />
          <div className="w-[600px] h-[350px] flex flex-col justify-center gap-[40px] bg-[#FFEFE0] p-[70px]">
            <div className="text-[28px] font-NSK font-extrabold">
              소망 학교 후원하기
            </div>
            <div className="text-[18px] font-NSK font-medium">
              학비 지원으로 성경 공부, 제자 훈련을 지원합니다.
            </div>
            <div className="flex gap-6 text-[16px] mt-[30px] font-semibold sm:text-[10px]">
              <Link
                href={"/our-ministries"}
                className="bg-white text-black w-[210px] h-[48px] flex justify-center items-center rounded-md sm:w-[100px] sm:h-[30px]"
              >
                자세히 보기
              </Link>
              <Link
                href={"/our-ministries"}
                className="bg-[#F3851D] text-white w-[210px] h-[48px] flex justify-center items-center rounded-md sm:w-[100px] sm:h-[30px]"
              >
                바로 후원하기
              </Link>
            </div>
          </div>
        </div>

        <div className="text-[50px] font-bold mt-[10vw] mb-[5vw] leading-snug w-[65%]">
          Hand in Hand project <br /> for La Gonave
        </div>
        <div className="flex">
          <Image
            src={"/image/lagonave-map.jpg"}
            alt="lagonave-map"
            width={550}
            height={350}
            className="w-[550px] sm:w-[90vw] object-contain"
          />
          <div className="ml-[5vw] w-[26vw]">
            <div className="text-[40px] font-semibold">La Gonave Project</div>
            <div className="text-[21px] font-SUITE mt-[3vw] font-medium leading-snug">
              Hand In Hand 프로젝트는 아이티의 La Gonave 섬의 빈민가 청소년들을
              일대일 후원을 통해 학교 교육에 참여할 수 있도록 돕고, 더불어
              다양한 제자 훈련 프로그램을 통해 온전한 그리스도인으로 성장할 수
              있도록 지원하는 청소년 학교 후원 프로젝트입니다.
              <br />
              <br /> 이를 통해 La Gonave의 청소년들은 자신의 가정, 지역, 국가,
              그리고 전 세계에 그리스도의 나라를 참된 그리스도 지도자로서 구축해
              나갈 것입니다.
            </div>
          </div>
        </div>
        <div>
          <div className="text-[40px] font-extrabold mt-[8vw] mb-[8vw] leading-snug font-NSK">
            Hand in Hand project 의 선순환
          </div>
          <Image
            src={"/image/HandinHand.jpg"}
            alt="lagonave-map"
            width={850}
            height={700}
            className="w-[30vw] sm:w-[90vw] object-contain m-auto"
          />
          <div className="flex items-center mt-[8vw] mb-[3vw]">
            <div className="text-[40px] font-bold font-roboto">
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
                <div className="text-[25px] mr-3 font-bold">{index + 1}.</div>
                <div className="w-[70vw] items-start justify-start text-[1.5vw]">
                  <strong>{info.title}</strong> : {info.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
