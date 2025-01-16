import { DONATE, DONATION_PROGRAM } from "@/static/Donate";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { DONATE_CHILDREN, DonateChild } from "@/static/DonateChildren";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useIsVisible } from "@/utils/hooks/useIsVisible";
import { DONATE_CARD } from "@/static/Home";

export default function DonateProgram() {
  const { t: common } = useTranslation(["common"]);
  const { t: dp } = useTranslation(["donate-program"]);
  const [selectedChild, setSelectedChild] = useState<DonateChild | null>(null);
  const router = useRouter();
  const { t: home } = useTranslation(["home"]);
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  return (
    <div>
      <div className="relative h-[400px] sm:h-[300px] group">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/image/projectBanner.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative h-full flex items-center px-[15vw] sm:px-5">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <div className="text-white/90 text-lg font-medium tracking-wide px-4 py-2 border border-white/20 rounded-full backdrop-blur-sm">
                {dp("donate-program-title")}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white leading-tight tracking-tight sm:text-2xl mb-6">
              {dp("page-title")}
            </h1>

            <p className="text-lg text-white/90 max-w-[600px] leading-relaxed sm:text-base">
              {dp("page-sub-title")}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-12">
        <div className="w-[68vw] max-w-[1000px] mx-auto sm:w-[90vw]">
          <div className="text-center space-y-5">
            <span className="inline-block px-5 py-2 bg-[#1e4d2b]/10 rounded-full text-[#1e4d2b] text-lg font-bold">
              {common("current-locale") === "ko"
                ? "아동 후원 프로그램"
                : "Child Sponsorship Program"}
            </span>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-base leading-relaxed">
              {common("current-locale") === "ko"
                ? "후원을 통해 아이티 라고나브 섬의 아이들에게 교육과 희망을 전달합니다"
                : "Through sponsorship, we deliver education and hope to children in La Gonave, Haiti"}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[68vw] max-w-[1000px] mx-auto mb-[100px] sm:py-12 sm:w-[90vw]">
        <div className="space-y-20">
          {DONATE_CHILDREN.map((child, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg flex sm:flex-col items-stretch w-full sm:h-auto h-[300px] cursor-pointer transition-all duration-300 border border-gray-100 overflow-hidden group transform hover:-translate-y-1"
              onClick={() => setSelectedChild(child)}
            >
              <div className="w-[340px] sm:w-full h-full sm:h-[280px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <Image
                  src={child.photo}
                  alt={child.korean_name}
                  fill
                  className="object-cover sm:rounded-t-xl sm:rounded-b-none rounded-l-xl transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-[#1e4d2b] text-sm font-medium">
                    #{child.registration_number}
                  </span>
                </div>
              </div>

              <div className="flex-1 px-12 py-10 sm:px-6 sm:py-6 flex flex-col justify-between">
                <div className="space-y-9">
                  <h3 className="text-[26px] sm:text-xl font-bold text-gray-800 leading-tight">
                    {dp("child-greeting")}{" "}
                    <span className="text-[#2b6f3e] font-extrabold relative inline-block">
                      {common("current-locale") === "ko" ? (
                        <>
                          {child.korean_name}
                          <span className="text-gray-600 font-semibold ml-2 text-[0.8em]">
                            ({child.english_name})
                          </span>
                        </>
                      ) : (
                        child.english_name
                      )}
                      <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#1e4d2b]/10 -z-10"></span>
                    </span>
                    {dp("child-greeting-end")}
                  </h3>

                  <div className="rounded-lg p-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <span className="text-[20px]">🎂</span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">
                            {dp("age")}
                          </p>
                          <p className="font-semibold text-gray-800">
                            {child.age}
                            <span className="text-gray-500 font-normal ml-1 text-sm">
                              {dp("years-old")}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <span className="text-[20px]">👤</span>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">
                            {dp("gender")}
                          </p>
                          <p className="font-semibold text-gray-800">
                            {child.gender === "M"
                              ? common("current-locale") === "ko"
                                ? "남자"
                                : "Male"
                              : common("current-locale") === "ko"
                              ? "여자"
                              : "Female"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5 sm:flex-col sm:gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedChild(child);
                    }}
                    className="flex-1 py-2.5 bg-[#EAEFEC] border border-[#D1D9D3] text-[#3A4D3E] rounded-lg hover:bg-[#DFE5E1] hover:border-[#B8C2BA] transition-all duration-300 font-medium text-sm shadow-sm hover:shadow-md"
                  >
                    {common("current-locale") === "ko"
                      ? "자세히 보기"
                      : "View Details"}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(
                        `/donate-program/${child.registration_number}`
                      );
                    }}
                    className="flex-1 py-2.5 bg-[#1e4d2b] text-white rounded-lg hover:bg-[#133219] transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg"
                  >
                    {common("current-locale") === "ko"
                      ? "바로 후원하기"
                      : "Donate"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-20 sm:py-12">
        <div className="w-[78vw] max-w-[1200px] mx-auto sm:w-[90vw]">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#1e4d2b]/10 rounded-full text-[#1e4d2b] text-sm font-medium mb-4">
              {common("current-locale") === "ko"
                ? "후원 프로그램"
                : "Sponsorship Programs"}
            </span>
            <h2 className="text-4xl sm:text-3xl font-bold text-gray-900 mb-4">
              {common("current-locale") === "ko"
                ? "라고나브 청소년 양육 후원 프로그램"
                : "La Gonave Youth Nurturing Sponsorship Program"}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-md sm:text-base">
              {common("current-locale") === "ko"
                ? "아이티의 미래를 이끌어갈 청소년들의 꿈과 희망을 함께 만들어갑니다"
                : "Together, we create dreams and hope for the youth who will lead Haiti's future"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1e4d2b]/5 rounded-full blur-2xl"></div>
              <div className="relative">
                <Image
                  src={"/image/lagonave-map.png"}
                  alt="lagonave-map"
                  width={500}
                  height={300}
                  className="w-full h-[350px] object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <div className="lg:pl-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e4d2b]/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#1e4d2b] rounded-full"></span>
                <span className="text-[#1e4d2b] font-semibold text-sm">
                  {common("current-locale") === "ko"
                    ? "프로젝트 소개"
                    : "Project Introduction"}
                </span>
              </div>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  {dp("hand-in-hand-project-description1")}
                </p>
                <p className="text-lg leading-relaxed">
                  {dp("hand-in-hand-project-description2")}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-16">
            <h3 className="text-3xl sm:text-[22px] font-bold text-gray-800 mb-20 sm:mb-6 text-center">
              {dp("hand-in-hand-project-cycle")}
            </h3>

            <div className="flex justify-center mb-16">
              <Image
                src={
                  common("current-locale") == "ko"
                    ? "/image/ko_HandinHand.jpg"
                    : "/image/en_HandinHand.png"
                }
                alt="project-cycle"
                width={650}
                height={500}
                className="w-[550px] sm:w-full object-contain"
              />
            </div>

            <div className="grid grid-cols-1 gap-8 px-20">
              {[
                {
                  title:
                    common("current-locale") === "ko"
                      ? "청소년 후원"
                      : "Youth Sponsorship",
                  description: dp("donate-program1-description"),
                },
                {
                  title:
                    common("current-locale") === "ko"
                      ? "대학생 후원"
                      : "University Student Sponsorship",
                  description: dp("donate-program2-description"),
                },
                {
                  title:
                    common("current-locale") === "ko"
                      ? "현지 교사 후원"
                      : "Local Teacher Sponsorship",
                  description: dp("donate-program3-description"),
                },
                {
                  title:
                    common("current-locale") === "ko"
                      ? "소망학교 후원"
                      : "Hope School Sponsorship",
                  description: dp("donate-program4-description"),
                },
              ].map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-8 sm:p-5 hover:bg-gray-100 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-[#1e4d2b] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-[18px] font-bold text-gray-800 mb-3">
                        {dp(info.title)}
                      </h4>
                      <p className="text-gray-600 text-lg sm:text-[15px] leading-relaxed">
                        {dp(info.description)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedChild && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-">
          <div className="bg-white rounded-2xl max-w-[1100px] w-full mx-auto shadow-2xl">
            <div className="px-16 py-6 sm:p-6 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {common("current-locale") === "ko"
                    ? "아동 정보"
                    : "Child Information"}
                </h3>
                <p className="text-sm text-gray-500">
                  {common("current-locale") === "ko"
                    ? "후원을 통해 아이들의 미래에 희망을 전해주세요"
                    : "Help bring hope to children's future through sponsorship"}
                </p>
              </div>
              <button
                onClick={() => setSelectedChild(null)}
                className="text-gray-400 hover:text-gray-600 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-50 transition-all"
              >
                ✕
              </button>
            </div>

            <div className="px-16 sm:px-4 py-12 max-h-[80vh] overflow-y-auto">
              <div className="mb-10">
                <h3 className="text-[32px] sm:text-2xl font-bold text-gray-800 leading-tight">
                  {common("current-locale") === "ko" ? (
                    <>
                      안녕하세요! 저는{" "}
                      <span className="text-[#1e4d2b] relative inline-block">
                        {selectedChild.korean_name}
                        <span className="absolute bottom-0 left-0 w-full h-[8px] bg-[#1e4d2b]/10 -z-10"></span>
                      </span>
                      <span className="text-gray-500 font-medium ml-2 text-[0.8em]">
                        ({selectedChild.english_name})
                      </span>
                      입니다.
                    </>
                  ) : (
                    <>
                      Hello!
                      <br />I am{" "}
                      <span className="text-[#1e4d2b] relative inline-block">
                        {selectedChild.english_name}
                        <span className="absolute bottom-0 left-0 w-full h-[8px] bg-[#1e4d2b]/10 -z-10"></span>
                      </span>
                      .
                    </>
                  )}
                </h3>
              </div>

              <div className="grid grid-cols-11 gap-10 sm:grid-cols-1">
                <div className="col-span-4 relative">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={selectedChild.photo}
                      alt={selectedChild.korean_name}
                      width={400}
                      height={500}
                      className="w-full h-[420px] object-cover sm:h-[350px] transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                      <span className="text-[#1e4d2b] text-sm font-semibold">
                        #{selectedChild.registration_number}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-7 space-y-6">
                  <div className="rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <span className="text-xl">📖</span>
                      </div>
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {common("current-locale") === "ko"
                          ? "나의 이야기"
                          : "My Story"}
                      </h3>
                    </div>
                    <div className="relative mx-4">
                      <p className="text-gray-600 leading-relaxed pt-2">
                        {common("current-locale") === "ko"
                          ? selectedChild.story.ko
                          : selectedChild.story.en}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 px-4">
                    {[
                      {
                        label: dp("grade"),
                        value: `${selectedChild.grade}${
                          common("current-locale") === "ko"
                            ? "학년"
                            : "th grade"
                        }`,
                        icon: "📚",
                      },
                      {
                        label: dp("age"),
                        value: `${selectedChild.age}${dp("years-old")}`,
                        icon: "🎂",
                      },
                      {
                        label: dp("gender"),
                        value:
                          selectedChild.gender === "M"
                            ? common("current-locale") === "ko"
                              ? "남자"
                              : "Male"
                            : common("current-locale") === "ko"
                            ? "여자"
                            : "Female",
                        icon: "👤",
                      },
                      {
                        label: dp("school"),
                        value: selectedChild.school,
                        icon: "🏫",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors flex items-center"
                      >
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm mr-3">
                          <span className="text-sm">{item.icon}</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500 font-bold uppercase tracking-wide block">
                            {item.label}
                          </span>
                          <span className="font-lg text-gray-800 text-sm mt-0.5 block">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                        <span className="text-sm">👨‍👩‍👧‍👦</span>
                      </div>
                      <h5 className="text-base font-bold text-gray-800">
                        {dp("family")}
                      </h5>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-200 text-[15px]">
                      {common("current-locale") === "ko"
                        ? selectedChild.family.ko
                        : selectedChild.family.en}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(
                      `/donate-program/${selectedChild.registration_number}`
                    );
                  }}
                  className="px-12 py-4 bg-[#1e4d2b] text-white rounded-lg hover:bg-[#133219] transition-all duration-300 text-base font-semibold shadow-md hover:shadow-lg sm:w-full"
                >
                  {common("current-locale") === "ko"
                    ? "바로 후원하기"
                    : "Donate"}
                </button>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {dp("program-introduction")}
                </h2>
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {dp("program-introduction-desc")}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {dp("donation-usage")}
                </h2>

                <div className="bg-white rounded-lg border border-gray-200 p-5 mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 text-left">
                    {common("current-locale") === "ko"
                      ? "후원 방법"
                      : "Donation Options"}
                  </h3>
                  <div className="grid grid-cols-2 gap-6 mb-3">
                    <button className="bg-[#f8faf8] rounded-lg p-4 hover:bg-[#f0f4f0] transition-colors text-left">
                      <p className="text-sm text-gray-500 mb-1">
                        {common("current-locale") === "ko"
                          ? "월 후원하기"
                          : "Monthly Donation"}
                      </p>
                      <p className="text-[28px] font-bold text-[#1e4d2b]">
                        $40
                      </p>
                    </button>
                    <button className="bg-[#f8faf8] rounded-lg p-4 hover:bg-[#f0f4f0] transition-colors text-left">
                      <p className="text-sm text-gray-500 mb-1">
                        {common("current-locale") === "ko"
                          ? "연간 후원하기"
                          : "Annual Donation"}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">$420</p>
                    </button>
                  </div>
                  <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md text-left">
                    💡 {dp("donation-usage-desc")}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      title:
                        common("current-locale") === "ko"
                          ? "방과후 프로그램"
                          : "After School Program",
                      amount:
                        common("current-locale") === "ko"
                          ? "주 5회"
                          : "5 times/week",
                      desc:
                        common("current-locale") === "ko"
                          ? "영어, 컴퓨터, 축구, 악기"
                          : "English, Computer, Soccer, Music",
                      icon: "🎨",
                    },
                    {
                      title:
                        common("current-locale") === "ko"
                          ? "예배와 성경공부"
                          : "Worship & Bible Study",
                      amount:
                        common("current-locale") === "ko" ? "주간" : "Weekly",
                      desc:
                        common("current-locale") === "ko"
                          ? "매주 토요일 진행"
                          : "Every Saturday",
                      icon: "🙏",
                    },
                    {
                      title:
                        common("current-locale") === "ko"
                          ? "여름 성경학교"
                          : "Summer Bible School",
                      amount:
                        common("current-locale") === "ko"
                          ? "연 1회"
                          : "Once a year",
                      desc:
                        common("current-locale") === "ko"
                          ? "여름 특별 프로그램"
                          : "Special Summer Program",
                      icon: "☀️",
                    },
                    {
                      title:
                        common("current-locale") === "ko"
                          ? "지역봉사"
                          : "Community Service",
                      amount:
                        common("current-locale") === "ko"
                          ? "정기적"
                          : "Regular",
                      desc:
                        common("current-locale") === "ko"
                          ? "전도 및 봉사활동"
                          : "Evangelism & Service Activities",
                      icon: "🤝",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start gap-5 text-sm">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <p className="font-semibold text-base text-gray-900 mb-1">
                            {item.title}
                          </p>
                          <p className="text-primary mb-1">{item.amount}</p>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {common("current-locale") === "ko"
                    ? "우리의 비전"
                    : "Our Vision"}
                </h2>

                <div className="bg-gradient-to-br from-[#f8faf8] to-white rounded-xl p-8 border border-[#e0e8e0] shadow-sm">
                  <p className="text-gray-700 leading-relaxed">
                    {dp("vision-statement-1")}
                    <br />
                    {dp("vision-statement-2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "donate-program",
        "home",
      ])),
    },
  };
};
