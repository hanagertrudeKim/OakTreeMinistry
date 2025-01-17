import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { DONATE_CHILDREN, DonateChild } from "@/static/DonateChildren";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function DonateProgram() {
  const { t: common } = useTranslation(["common"]);
  const { t: dp } = useTranslation(["donate-program"]);
  const [selectedChild, setSelectedChild] = useState<DonateChild | null>(null);
  const router = useRouter();
  const projectIntroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (router.asPath.includes("#project-intro") && projectIntroRef.current) {
      projectIntroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.asPath]);

  return (
    <div>
      <div className="relative h-[350px] sm:h-[280px] group">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/image/projectBanner.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative h-full flex items-center px-[15vw] sm:px-5">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white leading-tight tracking-tight sm:text-[22px] sm:leading-snug mb-6 sm:mb-4">
              {dp("page-title")}
            </h1>

            <p className="text-lg text-white/90 max-w-[600px] leading-relaxed sm:text-[15px] sm:leading-normal">
              {dp("page-sub-title")}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-12 sm:hidden">
        <div className="w-[68vw] max-w-[1000px] mx-auto sm:w-[90vw]">
          <div className="text-center space-y-5">
            <span className="inline-block px-5 py-2 bg-[#1e4d2b]/10 rounded-full text-[#1e4d2b] text-xl font-bold">
              {common("current-locale") === "ko"
                ? "아동 후원 프로그램"
                : "Child Sponsorship Program"}
            </span>
          </div>
        </div>
      </div>

      <div className="w-[70vw] max-w-[1100px] mx-auto mb-[100px] sm:mb-4 sm:py-8 sm:w-[94vw]">
        <div className="space-y-16">
          {DONATE_CHILDREN.map((child, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl flex sm:flex-col items-stretch w-full sm:h-auto h-[440px] cursor-pointer transition-all duration-300 border border-gray-100/50 overflow-hidden group"
            >
              <div className="w-[400px] sm:w-full h-full sm:h-[280px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10" />
                <Image
                  src={child.photo}
                  alt={child.korean_name}
                  fill
                  className="object-cover sm:rounded-t-2xl sm:rounded-b-none rounded-l-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 z-20 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                  <span className="text-[#1e4d2b] text-sm font-semibold">
                    #{child.registration_number}
                  </span>
                </div>
              </div>

              <div className="flex-1 px-12 py-10 sm:px-4 sm:py-6 flex flex-col justify-between relative group-hover:bg-gray-50/50 transition-colors duration-300">
                <div className="space-y-8 sm:space-y-4">
                  <div>
                    <h3 className="text-[36px] sm:text-2xl font-bold text-gray-800 leading-tight mb-10 sm:mb-2">
                      {common("current-locale") === "ko" ? (
                        <>
                          <span className="text-[#2b6f3e] relative inline-block">
                            {child.korean_name}
                            <span className="absolute bottom-2 left-0 w-full h-[8px] bg-[#1e4d2b]/10 -z-10"></span>
                          </span>
                          <span className="text-gray-500 font-medium ml-3 text-xl sm:text-lg">
                            ({child.english_name})
                          </span>
                        </>
                      ) : (
                        <span className="text-[#2b6f3e] relative inline-block">
                          {child.english_name}
                          <span className="absolute bottom-2 left-0 w-full h-[8px] bg-[#1e4d2b]/10 -z-10"></span>
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-500 text-lg sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 mb-8 sm:mb-4">
                      {common("current-locale") === "ko"
                        ? child.story.ko
                        : child.story.en}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:gap-2">
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-3 group-hover:bg-white transition-colors duration-300">
                      <div className="flex items-center gap-3 sm:gap-2">
                        <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[#1e4d2b]/5 flex items-center justify-center">
                          <span className="text-lg sm:text-base">🎂</span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium mb-0.5">
                            {dp("age")}
                          </p>
                          <p className="font-semibold text-gray-800 text-base sm:text-xs">
                            {child.age} {dp("years-old")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-3 group-hover:bg-white transition-colors duration-300">
                      <div className="flex items-center gap-3 sm:gap-2">
                        <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[#1e4d2b]/5 flex items-center justify-center">
                          <span className="text-lg sm:text-base">🏫</span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium mb-0.5">
                            {dp("school")}
                          </p>
                          <p className="font-semibold text-gray-800 text-base sm:text-xs">
                            {child.school}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 sm:flex-row sm:gap-2 mt-8 sm:mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedChild(child);
                    }}
                    className="flex-1 py-4 sm:py-3 bg-[#EAEFEC] border border-[#D1D9D3] text-[#3A4D3E] rounded-xl hover:bg-[#DFE5E1] hover:border-[#B8C2BA] transition-all duration-300 font-medium text-base sm:text-xs shadow-sm hover:shadow-md"
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
                    className="flex-1 py-4 sm:py-3 bg-[#1e4d2b] text-white rounded-xl hover:bg-[#133219] transition-all duration-300 font-medium text-base sm:text-xs shadow-md hover:shadow-lg"
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

      <div
        className="bg-white py-20 sm:py-12"
        ref={projectIntroRef}
        id="project-intro"
      >
        <div className="w-[78vw] max-w-[1200px] mx-auto sm:w-[94vw]">
          <div className="text-center mb-16 sm:mb-10">
            <h2 className="text-4xl sm:text-2xl font-bold text-gray-900">
              {common("current-locale") === "ko"
                ? "라고나브 청소년 양육 후원 프로그램"
                : "La Gonave Youth Nurturing Sponsorship Program"}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-6 mb-20 sm:mb-12 items-center">
            <div className="relative sm:px-4">
              <div className="relative h-[350px] sm:h-[250px] rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245447.05739641684!2d-73.07647981951162!3d18.828176126561244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb94f31c9103dc3%3A0x9e2ae86c4e08d0b2!2sGonave%20Island!5e0!3m2!1sen!2skr!4v1710910000000!5m2!1sen!2skr&region=HT"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="lg:pl-6 sm:px-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e4d2b]/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#1e4d2b] rounded-full"></span>
                <span className="text-[#1e4d2b] font-semibold text-sm">
                  {common("current-locale") === "ko"
                    ? "프로젝트 소개"
                    : "Project Introduction"}
                </span>
              </div>
              <div className="space-y-6 sm:space-y-4 text-gray-700">
                <p className="text-lg sm:text-base leading-relaxed">
                  {dp("hand-in-hand-project-description1")}
                </p>
                <p className="text-lg sm:text-base leading-relaxed">
                  {dp("hand-in-hand-project-description2")}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-16 sm:pt-10">
            <div className="flex justify-center mb-16 sm:mb-10">
              <Image
                src={
                  common("current-locale") == "ko"
                    ? "/image/ko_HandinHand.jpg"
                    : "/image/en_HandinHand.png"
                }
                alt="project-cycle"
                width={650}
                height={500}
                className="w-[550px] sm:w-full sm:px-4 object-contain"
              />
            </div>

            <div className="grid grid-cols-1 gap-8 sm:gap-4 px-20 sm:px-4">
              {[
                {
                  title:
                    common("current-locale") === "ko"
                      ? "1 : 1 청소년 후원"
                      : "1 : 1 Child Sponsorship",
                  description: dp("donate-program1-description"),
                  donationLink: "/donate-program",
                  donorboxLink: "",
                },
                {
                  title:
                    common("current-locale") === "ko"
                      ? "아이티 대학생 후원"
                      : "Haitian College Student Sponsorship",
                  description: dp("donate-program2-description"),
                  donationLink: "/donate?program=college-students",
                  donorboxLink:
                    "https://donorbox.org/embed/oaktree-support-college-students",
                },
                {
                  title:
                    common("current-locale") === "ko"
                      ? "라고나브 소망 신학교 후원"
                      : "Hope Theological School Sponsorship",
                  description: dp("donate-program3-description"),
                  donationLink: "/donate?program=theological-school",
                  donorboxLink:
                    "https://donorbox.org/embed/support-hope-theological-seminary",
                },
                {
                  title:
                    common("current-locale") === "ko"
                      ? "소망 학교 후원"
                      : "Hope School Sponsorship",
                  description: dp("donate-program4-description"),
                  donationLink: "/donate?program=hope-school",
                  donorboxLink:
                    "https://donorbox.org/embed/oaktree-support-hope-school",
                },
              ].map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 sm:p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-6 sm:gap-4">
                    <div className="bg-[#1e4d2b]/10 text-[#1e4d2b] w-12 h-12 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl sm:text-lg font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl sm:text-xl font-bold text-gray-800 mb-3">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 text-base sm:text-sm leading-relaxed mb-6">
                        {dp(info.description)}
                      </p>
                      <Link
                        href={info.donationLink}
                        className="group inline-flex items-center gap-2 text-[#1e4d2b] hover:text-[#143420] font-medium transition-colors"
                      >
                        <span>
                          {common("current-locale") === "ko"
                            ? "후원 바로가기"
                            : "View Sponsorship Program"}
                        </span>
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedChild && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-0">
          <div className="bg-white rounded-2xl max-w-[1200px] w-full mx-auto shadow-2xl sm:h-[100vh] sm:rounded-none">
            <div className="px-16 py-8 sm:px-4 sm:py-4 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="text-2xl sm:text-xl font-bold text-gray-800 mb-1">
                  {common("current-locale") === "ko"
                    ? "아동 정보"
                    : "Child Information"}
                </h3>
                <p className="text-sm text-gray-500 sm:text-xs">
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

            <div className="px-16 sm:px-4 py-12 sm:py-6 max-h-[85vh] sm:max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="mb-12 sm:mb-6">
                <h3 className="text-[36px] sm:text-2xl font-bold text-gray-800 leading-tight sm:leading-normal">
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

              <div className="grid grid-cols-11 gap-12 sm:block sm:space-y-6">
                <div className="col-span-4 relative">
                  <div className="relative rounded-lg overflow-hidden shadow-lg sm:h-[300px]">
                    <Image
                      src={selectedChild.photo}
                      alt={selectedChild.korean_name}
                      width={350}
                      height={520}
                      className="w-full h-[520px] sm:h-[300px] object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                      <span className="text-[#1e4d2b] text-sm font-semibold">
                        #{selectedChild.registration_number}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-7 space-y-8 sm:space-y-4">
                  <div className="rounded-lg p-8 sm:p-5 hover:shadow-md transition-all duration-300 border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <span className="text-xl">📖</span>
                      </div>
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {common("current-locale") === "ko"
                          ? "나의 이야기"
                          : "My Story"}
                      </h3>
                    </div>
                    <div className="relative">
                      <p className="text-gray-600 leading-relaxed text-lg sm:text-base">
                        {common("current-locale") === "ko"
                          ? selectedChild.story.ko
                          : selectedChild.story.en}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 px-4 sm:grid-cols-1 sm:gap-3 sm:px-0">
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

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                        <span className="text-sm">👨‍👩‍👧‍👦</span>
                      </div>
                      <h5 className="text-lg font-bold text-gray-800">
                        {dp("family")}
                      </h5>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-200 text-base">
                      {common("current-locale") === "ko"
                        ? selectedChild.family.ko
                        : selectedChild.family.en}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 sm:mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:text-xl">
                  {dp("program-introduction")}
                </h2>
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {dp("program-introduction-desc")}
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:mt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:text-xl">
                  {dp("donation-usage")}
                </h2>

                <div className="bg-white rounded-lg border border-gray-200 p-5 mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 text-left">
                    {common("current-locale") === "ko"
                      ? "후원 방법"
                      : "Donation Options"}
                  </h3>
                  <div className="grid grid-cols-2 gap-6 mb-3 sm:grid-cols-1 sm:gap-3">
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

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
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
            </div>
          </div>
        </div>
      )}

      {selectedChild && (
        <div className="hidden sm:block fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-50">
          <button
            onClick={() =>
              router.push(
                `/donate-program/${selectedChild?.registration_number}`
              )
            }
            className="w-full py-4 bg-[#1e4d2b] text-white rounded-xl hover:bg-[#133219] transition-all duration-300 font-medium text-base shadow-md hover:shadow-lg"
          >
            {common("current-locale") === "ko" ? "바로 후원하기" : "Donate Now"}
          </button>
        </div>
      )}

      {selectedChild && <div className="pb-20 sm:block hidden"></div>}
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
