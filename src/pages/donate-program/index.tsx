import { DONATE, DONATION_PROGRAM } from "@/static/Donate";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";

export default function DonateProgram() {
  const { t: common } = useTranslation(["common"]);
  const { t: dp } = useTranslation(["donate-program"]);
  jeffton;
  return (
    <div>
      <div className="h-[450px] px-[10vw] flex bg-[url('/image/projectBanner.jpg')] sm:px-0 sm:w-[100vw] sm:object-cover">
        <div>
          <div className="flex items-baseline">
            <div className="w-[5vw] border-b-2 border-white" />
            <div className="text-white mt-[50px] pl-[1vw] text-[20px] font-bold sm:text-[3vw]">
              {dp("donate-program-title")}
            </div>
          </div>
          <div className="text-[45px] font-bold ml-[6vw] mt-[85px] leading-snug text-white sm:w-[92vw] sm:text-[30px]">
            {dp("page-title")}
          </div>
          <div className="text-[20px] mt-[2vw] ml-[6vw] text-white sm:text-[12px]">
            {dp("page-sub-title")}
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
                {dp("hand-in-hand-project-description1")}
                <br /> <br />
                {dp("hand-in-hand-project-description2")}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[65vw] max-w-[1100px] sm:w-auto">
          {/* <div className="flex mt-[8vw] mb-[4vw]">
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
          </div> */}
          <div className="text-[40px] font-extrabold mt-[8vw] mb-[8vw] leading-snug font-NSK sm:text-[26px] sm:my-[15vw]">
            {dp("hand-in-hand-project-cycle")}
          </div>
          <Image
            src={"/image/HandinHand.jpg"}
            alt="lagonave-map"
            width={850}
            height={700}
            className="w-[650px] sm:w-[90vw] object-contain m-auto"
          />
          <div className="mt-[100px]">
            {DONATE.map((info, index) => {
              return (
                <div
                  key={index}
                  className="flex mt-[50px] w-[90%] text-[25px] m-auto sm:w-[90vw] sm:text-[18px]"
                >
                  <div className="mr-3 font-bold">{index + 1}.</div>
                  <div className="w-[70vw] items-start justify-start sm:w-auto">
                    <strong>{dp(info.title)}</strong> : {dp(info.description)}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-[40px] font-extrabold mt-[8vw] mb-[2vw] font-NSK sm:text-[26px] sm:mt-[15vw] sm:mb-[8vw]">
            {dp("how-to-donate")}
          </div>
          <div className="mb-[2vw] text-[25px] m-auto sm:w-[95vw] sm:text-[3.6vw] whitespace-pre-wrap leading-relaxed font-NSK sm:whitespace-pre-line">
            {common("current-locale") === "ko"
              ? `1. 후원대상: 라고나브 어린이, 청소년, 대학생, 현지 교사, 소망학교
2. 후원금 : 매달 $35불(40,000원) 혹 일시불 납부
3. 지출내용 : * 1년 학비 $300 (등록비, 수업비, 책값 보조 등)
	                  * 방과후 학교(영어, 컴퓨터, 악기, 체육등) : $170/년
	                  * 제자훈련 프로그램
	                  * 의료비 지원 : $5(매달)`
              : `1. Target of Donation: Children, Youth, University Students, Local Teachers, Hope School
2. Donation Amount: $35 per month (40,000 KRW) or one-time payment
3. Expenditures: * Annual tuition fee: $300 (registration fee, tuition, book subsidies, etc.)
                           * After-school programs (English, computer skills): $170 per year
                           * Discipleship training programs
                           * Medical expenses support: $5 per month`}
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
              className={`w-[620px] h-[340px] flex flex-col justify-center gap-[20px] ${
                index % 2 === 0 ? "bg-[#FFEFE0]" : "bg-[#07403A] text-white"
              } p-[70px] pt-[90px] sm:p-[30px] sm:w-[90vw] sm:h-[280px] sm:gap-[22px]`}
            >
              <div className="text-[31px] font-NSK font-extrabold sm:text-[26px]">
                {dp(item.title)}
              </div>
              <div className="text-[20px] font-NSK font-medium sm:text-[16px] sm:font-normal">
                {dp(item.description)}
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
                  {common("detail-button")}
                </Link>
                <Link
                  href={"/donate"}
                  className="bg-[#F3851D] text-white w-[210px] h-[48px] flex justify-center items-center sm:w-[150px] sm:h-[55px]"
                >
                  {common("donate-button")}
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

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "donate-program"])),
    },
  };
};
