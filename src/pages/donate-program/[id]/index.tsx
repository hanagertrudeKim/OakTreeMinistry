import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { DONATE_CHILDREN } from "@/static/DonateChildren";
import { useEffect, useState } from "react";

export default function ChildDonation() {
  const router = useRouter();
  const { id } = router.query;
  const { t: dp } = useTranslation(["donate-program"]);
  const [child, setChild] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const selectedChild = DONATE_CHILDREN.find(
        (c) => c.registration_number === id
      );
      setChild(selectedChild);
    }
  }, [id]);

  if (!child) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-0">
          <div className="relative isolate overflow-hidden py-6 sm:py-12">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-gray-50/50"></div>
            </div>

            <div className="mx-auto max-w-3xl relative">
              <h1 className="relative z-10">
                <span className="block text-2xl sm:text-2xl md:text-5xl font-bold tracking-tight text-gray-900 mb-2 sm:mb-5">
                  1:1 어린이 후원 결제하기
                </span>
                <span className="mt-2 sm:mt-0 block text-sm sm:text-xs leading-6 sm:leading-0 text-gray-600">
                  한 아이의 미래를 변화시키는 여정에 동참해주세요
                </span>
              </h1>

              <div className="mt-6 flex justify-center sm:mt-3">
                <div className="h-px w-16 bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12">
          <div className="lg:col-span-3 bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl border border-gray-100">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 lg:gap-8">
              <div className="relative w-full md:w-64 lg:w-72 h-[300px] md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={child.photo}
                  alt={child.korean_name}
                  fill
                  className="object-cover transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-lg font-semibold">
                    ID: {child.registration_number}
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-4 md:space-y-6 w-full">
                <div className="space-y-3 border-b border-gray-100 pb-6">
                  <div className="inline-block bg-[#1e4d2b]/10 px-3 py-1 rounded-full">
                    <span className="text-[#1e4d2b] font-medium text-xs">
                      아동 프로필
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-800">
                      안녕하세요!
                      <br />
                      저는{" "}
                      <span className="text-[#1e4d2b] relative">
                        {child.english_name}
                        <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#1e4d2b]/10 -z-10"></span>
                      </span>
                      입니다
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      label: "등록번호",
                      value: child.registration_number,
                      icon: "🆔",
                    },
                    {
                      label: "나이",
                      value: `${child.age}세`,
                      icon: "🎂",
                    },
                    {
                      label: "성별",
                      value: child.gender === "M" ? "남자" : "여자",
                      icon: "👤",
                    },
                    {
                      label: "생년월일",
                      value: child.date_of_birth,
                      icon: "📅",
                    },
                    {
                      label: "거주지",
                      value: child.residence,
                      icon: "🏠",
                    },
                    {
                      label: "장래희망",
                      value: child.future_dream,
                      icon: "✨",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors flex items-center"
                    >
                      <span className="text-lg w-6">{item.icon}</span>
                      <span className="text-gray-500 w-16 text-sm">
                        {item.label}
                      </span>
                      <span className="font-medium text-gray-800 flex-1 text-sm">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#f8f9fa] rounded-lg p-6 mt-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🙏</span>
                <h3 className="font-semibold text-gray-800">기도제목</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {child.prayer_request}
              </p>
            </div>

            <div className="mt-6 md:mt-12">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6 flex items-center">
                <span className="text-primary mr-2">💝</span> 후원금은 이렇게
                쓰여요
              </h2>

              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 mb-6 md:mb-8">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">
                      월 후원금
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-primary">
                      $30 / $40
                    </p>
                  </div>
                  <div className="h-10 md:h-12 w-[1px] bg-gray-200"></div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">
                      연간 후원금
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-gray-900">
                      $420
                    </p>
                  </div>
                </div>
                <div className="text-xs md:text-sm text-gray-600 bg-gray-50 p-2 md:p-3 rounded-lg">
                  💡 후원금은 아이들의 교육, 의료, 영양 지원에 사용됩니다
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  {
                    title: "1년 학비",
                    amount: "$300",
                    desc: "등록비, 수업비, 책값 보조 등",
                    icon: "📚",
                  },
                  {
                    title: "방과후 학교",
                    amount: "$170/년",
                    desc: "영어, 컴퓨터, 악기, 체육 등",
                    icon: "🎨",
                  },
                  {
                    title: "식량 지원",
                    amount: "$175/년",
                    desc: "연 3회",
                    icon: "🍱",
                  },
                  {
                    title: "의료비 지원",
                    amount: "$5/월",
                    desc: "기초 의료 지원",
                    icon: "🏥",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white p-5 sm:px-4 md:p-4 rounded-lg border border-gray-200 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-2 md:gap-3">
                      <span className="text-lg md:text-xl">{item.icon}</span>
                      <div>
                        <p className="font-medium text-gray-900 text-sm md:text-base">
                          {item.title}
                        </p>
                        <p className="text-primary font-semibold text-sm md:text-base">
                          {item.amount}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-8 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-full lg:w-[430px] mx-auto">
              <div className="p-4 bg-gradient-to-br from-[#1e4d2b]/90 to-[#2e7d32]/90 relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full transform translate-x-8 -translate-y-8"></div>
                <div className="flex items-center gap-1">
                  <span className="text-white/80 text-xs">
                    {child.korean_name} 어린이
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-white">
                  정기 후원 하기
                </h2>
              </div>
              <iframe
                src={`https://donorbox.org/embed/oaktree-support-child?child_name=${encodeURIComponent(
                  child.korean_name
                )}&child_id=${encodeURIComponent(
                  child.registration_number
                )}&readonly=true`}
                name="donorbox"
                className="w-full h-[800px]"
                style={{ maxWidth: "430px", margin: "0 auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const paths = DONATE_CHILDREN.map((child) => ({
    params: { id: child.registration_number },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "donate-program"])),
    },
  };
};
