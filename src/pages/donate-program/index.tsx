import { DONATE, DONATION_PROGRAM } from "@/static/Donate";
import { DONATE_CARD } from "@/static/Home";
import Image from "next/image";
import Link from "next/link";

export default function DonateProgram() {
  return (
    <div>
      <div className="h-[450px] px-[10vw] flex bg-[url('/image/projectBanner.jpg')] sm:px-0 sm:w-[100vw] sm:object-cover">
        <div>
          <div className="flex items-baseline">
            <div className="w-[5vw] border-b-2 border-white" />
            <div className="text-white mt-[50px] pl-[1vw] text-[1.2vw] font-bold sm:text-[3vw]">
              후원 프로그램
            </div>
          </div>
          <div className="text-[50px] font-bold ml-[6vw] mt-[85px] leading-snug text-white sm:w-[92vw] sm:text-[30px]">
            주제별 양육보완후원
          </div>
          <div className="text-[20px] mt-[2vw] ml-[6vw] text-white sm:text-[12px]">
            모든 어린이가 부족함 없이 자랄 수 있도록 돕습니다.
          </div>
        </div>
        <div className="w-[400px] sm:w-0"></div>
      </div>
      <div className="py-[150px] flex flex-col items-center sm:py-[50px]">
        <div>
          <div className="text-[50px] font-bold mb-[5vw] leading-snug sm:w-[90vw] sm:text-[33px] sm:mt-[5vw]">
            Hand in Hand project <br /> for La Gonave
          </div>
          <div className="flex sm:flex-col sm:m-auto">
            <Image
              src={"/image/lagonave-map.jpg"}
              alt="lagonave-map"
              width={550}
              height={350}
              className="w-[550px] sm:w-[90vw] object-cover sm:h-[200px] sm:m-auto"
            />
            <div className="ml-[5vw] w-[500px] sm:w-[90vw] sm:ml-0">
              <div className="text-[26px] font-SUITE font-medium leading-snug sm:text-[20px] sm:mt-[10vw] sm:font-normal">
                Hand In Hand 프로젝트는 아이티의 La Gonave 섬의 빈민가
                청소년들을 일대일 후원을 통해 학교 교육에 참여할 수 있도록 돕고,
                더불어 다양한 제자 훈련 프로그램을 통해 온전한 그리스도인으로
                성장할 수 있도록 지원하는 청소년 학교 후원 프로젝트입니다.
                <br />
                <br /> 이를 통해 La Gonave의 청소년들은 자신의 가정, 지역, 국가,
                그리고 전 세계에 그리스도의 나라를 참된 그리스도 지도자로서
                구축해 나갈 것입니다.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[65vw] max-w-[1100px] sm:w-auto">
          <div className="flex mt-[8vw] mb-[4vw]">
            <div className="text-[40px] font-bold font-roboto sm:text-[28px] sm:my-[10vw]">
              후원이 필요한 곳
            </div>
            <Image
              src="/prayHand.svg"
              alt="arrow button"
              width={45}
              height={45}
              className="ml-3 sm:w-[30px]"
            />
          </div>
          {DONATE.map((info, index) => {
            return (
              <div
                key={index}
                className="flex mb-[3vw] w-[90%] text-[25px] m-auto sm:w-[90vw] sm:text-[18px]"
              >
                <div className="mr-3 font-bold">{index + 1}.</div>
                <div className="w-[70vw] items-start justify-start sm:w-auto">
                  <strong>{info.title}</strong> : {info.description}
                </div>
              </div>
            );
          })}
          <div className="text-[40px] font-extrabold mt-[8vw] mb-[8vw] leading-snug font-NSK sm:text-[26px] sm:my-[15vw]">
            Hand in Hand project 의 선순환
          </div>
          <Image
            src={"/image/HandinHand.jpg"}
            alt="lagonave-map"
            width={850}
            height={700}
            className="w-[650px] sm:w-[90vw] object-contain m-auto"
          />
          <div className="text-[40px] font-extrabold mt-[8vw] mb-[2vw] font-NSK sm:text-[26px] sm:mt-[15vw] sm:mb-[8vw]">
            후원 방법
          </div>
          <div className="mb-[2vw] text-[25px] w-[90%] m-auto sm:w-[95vw] sm:text-[3.6vw] whitespace-pre-wrap leading-relaxed font-NSK sm:whitespace-pre-line">
            {`1. 후원대상: 라고나브 어린이, 청소년, 대학생, 현지 교사, 소망학교
2. 후원금 : 매달 $35불(40,000원) 혹 일시불 납부
3. 지출내용 : * 1년 학비 $300 (등록비, 수업비, 책값 보조 등)
	                  * 방과후 학교(영어, 컴퓨터, 악기, 체육등) : $170/년
	                  * 제자훈련 프로그램
	                  * 의료비 지원 : $5(매달)`}
          </div>
        </div>
        {DONATION_PROGRAM.map((item, index) => (
          <div
            key={index}
            className={`flex items-center mt-12 sm:flex-col ${
              index % 2 === 0 ? "even" : "odd"
            }`}
          >
            {index % 2 === 0 ? (
              <Image
                src={item.imageUrl}
                alt={item.alt}
                width={550}
                height={350}
                className="w-[450px] sm:w-[90vw] sm:h-[250px] object-cover"
              />
            ) : null}
            <div
              className={`w-[620px] h-[340px] flex flex-col justify-center gap-[40px] ${
                index % 2 === 0 ? "bg-[#FFEFE0]" : "bg-[#1D2130] text-white"
              } p-[70px] sm:p-[30px] sm:w-[90vw] sm:h-[280px] sm:gap-[22px]`}
            >
              <div className="text-[35px] font-NSK font-extrabold sm:text-[26px]">
                {item.title}
              </div>
              <div className="text-[20px] font-NSK font-medium sm:text-[16px] sm:font-normal">
                {item.description}
              </div>
              <div className="flex gap-10 text-[16px] mt-[30px] font-semibold sm:text-[16px] sm:gap-6 sm:mt-[15px] font-NSK">
                <Link
                  href={{
                    pathname: `/donate-program/${item.title}`,
                    query: {
                      title: item.title,
                      description: item.description,
                      image: item.imageUrl,
                    },
                  }}
                  className="bg-white text-black w-[210px] h-[48px] flex justify-center items-center sm:w-[150px] sm:h-[55px]"
                >
                  자세히 보기
                </Link>
                <Link
                  href={"/donate"}
                  className="bg-[#F3851D] text-white w-[210px] h-[48px] flex justify-center items-center sm:w-[150px] sm:h-[55px]"
                >
                  바로 후원하기
                </Link>
              </div>
            </div>
            {index % 2 !== 0 ? (
              <Image
                src={item.imageUrl}
                alt={item.alt}
                width={550}
                height={350}
                className="w-[450px] sm:w-[90vw] sm:h-[250px] object-cover"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
