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
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative h-full flex items-center px-[10vw] sm:px-5">
          <div>
            <div className="inline-block">
              <div className="text-white/80 text-[18px] font-medium mb-4 sm:text-[16px]">
                {dp("donate-program-title")}
              </div>
              <div className="h-[2px] w-full bg-white/60 transform origin-left transition-all" />
            </div>

            <h1 className="text-[42px] font-bold mt-6 text-white leading-tight tracking-tight sm:text-[28px]">
              {dp("page-title")}
            </h1>

            <p className="text-[18px] mt-4 text-white/90 max-w-[500px] sm:text-[14px]">
              {dp("page-sub-title")}
            </p>
          </div>
        </div>
      </div>

      <div className="pb-[200px] flex flex-col items-center sm:py-[50px]">
        {/* 1:1 어린이 리스트 */}
        <div className="w-[78vw] max-w-[1100px] mb-[200px] sm:mb-[100px] sm:w-[85vw]">
          <h2 className="inline-block relative mt-[100px] sm:mt-[50px] mb-4">
            <span className="text-[48px] font-bold text-gray-800 border-b-4 border-[#1e4d2b]/20 pb-2 sm:text-[28px]">
              {common("current-locale") === "ko"
                ? "후원이 필요해요"
                : "Children Waiting for You"}
            </span>
          </h2>
          <p className="text-gray-600 text-xl mb-[60px] sm:text-[16px] sm:mb-[40px]">
            {dp("children-waiting-desc")}
          </p>

          <div className="space-y-24 sm:space-y-12 mt-[80px] sm:mt-[40px]">
            {DONATE_CHILDREN.map((child, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl flex sm:flex-col items-stretch w-full sm:h-auto h-[380px] cursor-pointer transition-all duration-300 border border-gray-100 overflow-hidden group"
                onClick={() => setSelectedChild(child)}
              >
                <div className="w-[420px] sm:w-full h-[380px] sm:h-[280px] relative overflow-hidden">
                  <Image
                    src={child.photo}
                    alt={child.korean_name}
                    fill
                    className="object-cover sm:rounded-t-2xl sm:rounded-b-none rounded-l-2xl transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex-1 px-14 py-12 sm:px-4 sm:py-5 flex flex-col justify-center relative">
                  <div className="absolute top-8 right-8 sm:top-4 sm:right-4 bg-[#1e4d2b]/10 px-3 py-1 rounded-full">
                    <span className="text-[#1e4d2b] text-sm sm:text-xs font-medium">
                      #{child.registration_number}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-[18px] font-bold mb-8 sm:mb-4 text-gray-800 pr-[100px] sm:pr-[80px]">
                    {dp("child-greeting")}{" "}
                    <span className="text-[#2b6f3e] font-extrabold relative inline-block">
                      {child.korean_name}
                      <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#2b6f3e]/20"></span>
                    </span>
                    <span className="text-gray-600 font-semibold ml-2">
                      ({child.english_name})
                    </span>{" "}
                    {dp("child-greeting-end")}
                  </h3>

                  <div className="grid grid-cols-3 gap-4 sm:gap-2 my-5 sm:my-3">
                    <div className="flex items-center gap-3 sm:gap-2">
                      <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[#1e4d2b]/10 flex items-center justify-center">
                        <span className="text-[#1e4d2b] sm:text-sm">🏠</span>
                      </div>
                      <div>
                        <p className="text-sm sm:text-xs text-gray-500">
                          {dp("residence")}
                        </p>
                        <p className="font-bold text-gray-800 sm:text-sm">
                          {child.residence}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-2">
                      <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[#1e4d2b]/10 flex items-center justify-center">
                        <span className="text-[#1e4d2b] sm:text-sm">🎂</span>
                      </div>
                      <div>
                        <p className="text-sm sm:text-xs text-gray-500">
                          {dp("age")}
                        </p>
                        <p className="font-bold text-gray-800 sm:text-sm">
                          {child.age}
                          {dp("years-old")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-2">
                      <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[#1e4d2b]/10 flex items-center justify-center">
                        <span className="text-[#1e4d2b] sm:text-sm">✨</span>
                      </div>
                      <div>
                        <p className="text-sm sm:text-xs text-gray-500">
                          {dp("future-dream")}
                        </p>
                        <p className="font-bold text-gray-800 sm:text-sm">
                          {child.future_dream}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6 sm:flex-col sm:gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedChild(child);
                      }}
                      className="flex-1 px-6 py-3 bg-white border-2 border-[#2c5282] text-[#2c5282] rounded-xl hover:bg-[#2c5282] hover:text-white transition-colors duration-300 font-medium"
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
                      className="flex-1 px-6 py-3 bg-[#1e4d2b] text-white rounded-xl hover:bg-[#133219] transition-colors duration-300 font-medium"
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

        {/* 아동 상세정보 모달 */}
        {selectedChild && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedChild(null)}
          >
            <div
              className="bg-white rounded-xl max-w-6xl w-full mx-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-16 sm:p-6 pb-0">
                <div className="flex justify-between items-center mb-12 sm:mb-0 sm:pb-0 pb-6 border-b border-gray-100">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {common("current-locale") === "ko"
                        ? "아동 정보"
                        : "Child Information"}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {common("current-locale") === "ko"
                        ? "후원을 통해 아이들의 미래에 희망을 전해주세요"
                        : "Help bring hope to children's future through sponsorship"}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedChild(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl transition-colors duration-300 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="p-16 sm:px-4 pt-0 max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-6">
                  <div className="space-y-6">
                    <Image
                      src={selectedChild.photo}
                      alt={selectedChild.korean_name}
                      width={400}
                      height={500}
                      className="rounded-xl object-cover w-[400px] h-[500px] shadow-md mt-[50px] sm:mt-[20px] sm:w-full sm:h-[350px]"
                    />
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-4 border-b border-gray-100 pb-8">
                      <div className="inline-block bg-[#1e4d2b]/10 px-4 py-1.5 rounded-full">
                        <span className="text-[#1e4d2b] font-medium text-sm">
                          {common("current-locale") === "ko"
                            ? "아동 프로필"
                            : "Child Profile"}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-3xl font-bold text-gray-800">
                          {common("current-locale") === "ko"
                            ? "안녕하세요!"
                            : "Hello!"}
                          <br />
                          {common("current-locale") === "ko"
                            ? "저는 "
                            : "I am "}
                          <span className="text-[#1e4d2b] relative">
                            {selectedChild.english_name}
                            <span className="absolute bottom-0 left-0 w-full h-[8px] bg-[#1e4d2b]/10 -z-10"></span>
                          </span>
                          {common("current-locale") === "ko" ? "입니다." : "."}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-2">
                        {[
                          {
                            label:
                              common("current-locale") === "ko"
                                ? "등록번호"
                                : "No.",
                            value: selectedChild.registration_number,
                            icon: "🆔",
                          },
                          {
                            label:
                              common("current-locale") === "ko"
                                ? "나이"
                                : "Age",
                            value: `${selectedChild.age}${
                              common("current-locale") === "ko"
                                ? "살"
                                : " years old"
                            }`,
                            icon: "🎂",
                          },
                          {
                            label:
                              common("current-locale") === "ko"
                                ? "성별"
                                : "Gender",
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
                            label: dp("birth-date"),
                            value: selectedChild.date_of_birth,
                            icon: "📅",
                          },
                          {
                            label: dp("residence"),
                            value: selectedChild.residence,
                            icon: "🏠",
                          },
                          {
                            label: dp("future-dream"),
                            value: selectedChild.future_dream,
                            icon: "✨",
                          },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="bg-gray-50 rounded-lg p-4 sm:p-3 hover:bg-gray-100 transition-colors flex items-center"
                          >
                            <span className="text-xl sm:text-base w-8 sm:w-6">
                              {item.icon}
                            </span>
                            <span className="text-gray-500 w-20 sm:w-16 sm:text-sm">
                              {item.label}
                            </span>
                            <span className="font-medium text-gray-800 flex-1 sm:text-sm">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#f8f9fa] rounded-lg p-6 sm:p-4 mt-6 sm:mt-4">
                      <div className="flex items-center gap-2 mb-3 sm:mb-2">
                        <span className="text-xl sm:text-base">🙏</span>
                        <h3 className="font-semibold text-gray-800 sm:text-sm">
                          {dp("prayer-request")}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed sm:text-sm">
                        {selectedChild.prayer_request}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 sm:mt-6 flex justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(
                        `/donate-program/${selectedChild.registration_number}`
                      );
                    }}
                    className="px-12 sm:px-6 py-4 sm:py-3 bg-[#1e4d2b] text-white rounded-xl hover:bg-[#133219] transition-colors duration-300 min-w-[200px] text-lg sm:text-base font-semibold shadow-md hover:shadow-lg sm:w-full"
                  >
                    {common("current-locale") === "ko"
                      ? "바로 후원하기"
                      : "Donate"}
                  </button>
                </div>

                {/* 아동 후원에 관한 설명 섹션 */}
                <div className="mt-12 sm:mt-20">
                  <h2 className="text-2xl sm:text-[20px] font-semibold">
                    {dp("program-introduction")}
                  </h2>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                      <p className="text-gray-600 leading-relaxed">
                        {dp("program-introduction-desc")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 현재 진행 중인 프로그램 */}
                <div className="mt-12 sm:mt-8">
                  <h2 className="text-2xl sm:text-[20px] font-semibold">
                    {dp("donation-usage")}
                  </h2>

                  <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          {common("current-locale") === "ko"
                            ? "월 후원금"
                            : "Monthly Donation"}
                        </p>
                        <p className="text-2xl font-bold text-primary">
                          $30 / $40
                        </p>
                      </div>
                      <div className="h-12 w-[1px] bg-gray-200"></div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          {common("current-locale") === "ko"
                            ? "연간 후원금"
                            : "Annual Donation"}
                        </p>
                        <p className="text-2xl font-bold text-gray-900">$420</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      💡 {dp("donation-usage-desc")}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
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
                        className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary/30 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-xl">{item.icon}</span>
                          <div>
                            <p className="font-medium text-gray-900">
                              {item.title}
                            </p>
                            <p className="text-primary font-semibold">
                              {item.amount}
                            </p>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 비전 statement */}
                <div className="bg-gradient-to-br from-[#f8f3e7] to-[#fcf9f2] rounded-xl border border-[#e6d5b8] p-6 sm:mt-12 mt-12">
                  <h3 className="text-lg font-bold text-[#1e4d2b] mb-3">
                    {common("current-locale") === "ko"
                      ? "우리의 비전"
                      : "Our Vision"}
                  </h3>
                  <div className="flex items-start gap-3">
                    <p className="text-[#2d3748] text-base leading-relaxed">
                      <span className="font-medium">
                        {dp("vision-statement-1")}
                      </span>
                      <br />
                      <br />
                      {dp("vision-statement-2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-[78vw] max-w-[1200px] mb-[100px] sm:w-[90vw] sm:mb-[50px]">
          <h2 className="inline-block relative mb-[60px] sm:mb-[30px]">
            <span className="text-[45px] font-bold text-gray-800 border-b-4 border-[#1e4d2b]/20 pb-2 sm:text-[26px]">
              Hand in Hand Project
            </span>
          </h2>

          <div className="bg-white rounded-lg shadow-md p-12 sm:p-5 border border-gray-100">
            {/* 프로젝트 소개 섹션 */}
            <div className="flex sm:flex-col gap-12 mb-16">
              <div className="flex-1 max-w-[450px]">
                <Image
                  src={"/image/lagonave-map.jpg"}
                  alt="lagonave-map"
                  width={450}
                  height={300}
                  className="w-full h-[350px] sm:h-[200px] object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1">
                <div className="inline-block bg-[#1e4d2b]/10 px-6 py-1.5 rounded-full mb-6">
                  <span className="text-[#1e4d2b] font-medium text-md">
                    {common("current-locale") === "ko"
                      ? "프로젝트 소개"
                      : "Project Introduction"}
                  </span>
                </div>
                <div className="text-xl sm:text-[16px] text-gray-700 leading-relaxed space-y-8">
                  <p>{dp("hand-in-hand-project-description1")}</p>
                  <p>{dp("hand-in-hand-project-description2")}</p>
                </div>
              </div>
            </div>

            {/* 프로젝트 사이클 섹션 */}
            <div className="border-t border-gray-100 pt-16">
              <h3 className="text-3xl sm:text-[22px] font-bold text-gray-800 mb-12 sm:mb-6 text-center">
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
                  className="w-[600px] sm:w-full object-contain"
                />
              </div>

              {/* 프로젝트 단계 설명 */}
              <div className="grid grid-cols-1 gap-8">
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
                        <h4 className="text-2xl sm:text-[18px] font-bold text-gray-800 mb-3">
                          {dp(info.title)}
                        </h4>
                        <p className="text-gray-600 text-lg sm:text-[15px] leading-relaxed">
                          {dp(info.description)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* 후원 card */}
                <section className="py-[100px] sm:py-[50px]">
                  <div className="flex items-baseline sm:items-center">
                    <div className="w-[5vw] border-b-2 border-black sm:hidden" />
                    <div className="text-[#0B6954] pl-[1vw] text-[25px] font-bold sm:text-[18px] sm:pl-[6vw]">
                      {home("customized-donation")}
                    </div>
                  </div>
                  <div
                    ref={ref1}
                    className={`text-[45px] whitespace-pre font-bold leading-[120%] mt-[2vw] sm:text-[24px] sm:ml-[6vw] transition-all ease-in-out duration-700
                    ${
                      isVisible1
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {common("current-locale") === "ko"
                      ? `잊혀진 아이티 라고나브 섬,\n더 나은 배움을 꿈꾸는 아이들을 위한 `
                      : `Enhancing Parenting Support\nwith Personalized, `}
                    <strong className="text-[#0B6954] font-bold sm:block sm:text-[28px] sm:mt-[5px]">
                      {home("customized-donation")}
                    </strong>
                  </div>
                  <div className="flex justify-center mt-[100px] sm:mt-[50px]">
                    <div
                      ref={ref2}
                      className={`flex overflow-x-auto gap-[20px] pb-[20px] px-[20px] 
                      sm:gap-[15px] scrollbar-hide max-w-full transition-all ease-in-out duration-700
                      ${
                        isVisible2
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                    >
                      {DONATE_CARD.map((info, index) => (
                        <div
                          key={index}
                          className="relative flex-shrink-0 w-[450px] sm:w-[330px] sm:min-w-[330px]"
                        >
                          <Image
                            src={info.backgroundImage}
                            alt="donation card"
                            width={450}
                            height={580}
                            className="object-cover rounded-2xl w-full h-[580px] sm:h-[450px]"
                          />
                          <div
                            className="absolute bottom-[70px] left-[40px] text-white w-[80%] 
                            sm:bottom-[40px] sm:left-[20px]"
                          >
                            <div className="text-[29px] font-bold sm:text-[22px]">
                              {home(info.title)}
                            </div>
                            <div className="text-[16px] mt-4 sm:text-[14px] sm:line-clamp-3">
                              {home(info.description)}
                            </div>
                            <div className="flex gap-3 mt-[30px] sm:mt-[20px]">
                              <Link
                                href={"/donate-program"}
                                className="bg-white text-black flex-1 h-[44px] flex justify-center items-center 
                                  rounded-md text-[16px] sm:text-[14px] sm:h-[40px] hover:bg-gray-100 transition-colors"
                              >
                                Learn More
                              </Link>
                              <Link
                                href={info.donateLink}
                                className="bg-[#0B6954] text-white flex-1 h-[44px] flex justify-center items-center 
                                  rounded-md text-[16px] sm:text-[14px] sm:h-[40px] hover:bg-[#095544] transition-colors"
                              >
                                {common("donate-button")}
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
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
