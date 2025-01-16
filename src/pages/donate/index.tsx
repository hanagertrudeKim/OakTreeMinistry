import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DONATION_PROGRAM } from "@/static/Donate";
import Link from "next/link";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Donation() {
  const [isClient, setIsClient] = React.useState(false);
  const { t } = useTranslation("common");
  const { t: dp } = useTranslation("donate-program");
  const router = useRouter();
  const { program } = router.query;
  const { locale } = router;

  const [selectedProgram, setSelectedProgram] = useState<string>(
    DONATION_PROGRAM.main[1].id
  );

  const LOCALIZED_PROGRAMS = {
    main: DONATION_PROGRAM.main.map((program) => ({
      ...program,
      title: locale === "ko" ? program.titleKo : program.titleEn,
    })),
    minor: DONATION_PROGRAM.minor.map((program) => ({
      ...program,
      title: locale === "ko" ? program.titleKo : program.titleEn,
    })),
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (program === "youth") {
      router.push("/donate-program");
    }
  }, [program, router]);

  useEffect(() => {
    if (program) {
      setSelectedProgram(program as string);
    }
  }, [program]);

  const getDonationLink = () => {
    const allPrograms = [...DONATION_PROGRAM.main, ...DONATION_PROGRAM.minor];
    const found = allPrograms.find((p) => p.id === selectedProgram);
    return found?.donorboxLink || DONATION_PROGRAM.main[1].donorboxLink;
  };

  const selectedProgramTitle =
    LOCALIZED_PROGRAMS.main
      .concat(LOCALIZED_PROGRAMS.minor)
      .find((p) => p.id === selectedProgram)?.title ||
    (locale === "ko" ? "소망학교 후원" : "Support Somang School");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-5 py-1.5 mb-4 text-sm font-semibold text-[#0B6954] bg-[#E7F4F0] rounded-full ring-1 ring-[#0B6954]/20">
            {locale === "ko" ? "함께 만드는 변화" : "Creating Change Together"}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {t("donate.program_title", { program: selectedProgramTitle })}
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {locale === "ko"
              ? "여러분의 후원은 더 나은 미래를 만드는 소중한 씨앗이 됩니다"
              : "Your support becomes a precious seed for creating a better future"}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 px-1">
                {locale === "ko" ? "주요 후원 프로그램" : "Main Programs"}
              </h3>
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                {LOCALIZED_PROGRAMS.main.map((program) => (
                  <Link
                    key={program.id}
                    href={program.donationLink}
                    className={`group block transition-all duration-200 ${
                      selectedProgram === program.id
                        ? "bg-[#E7F4F0] hover:bg-[#E7F4F0]/90"
                        : "hover:bg-[#E7F4F0]/20"
                    }`}
                  >
                    <div className="px-6 py-4 relative overflow-hidden">
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-5">
                          <div
                            className={`w-1.5 h-12 rounded-full transition-all duration-300 ${
                              selectedProgram === program.id
                                ? "bg-[#0B6954] scale-y-100"
                                : "bg-gray-200 group-hover:bg-[#0B6954]/60 scale-y-75 group-hover:scale-y-100"
                            }`}
                          />
                          <div className="space-y-1.5">
                            <span
                              className={`font-semibold text-lg transition-colors duration-200 ${
                                selectedProgram === program.id
                                  ? "text-[#0B6954]"
                                  : "text-gray-900 group-hover:text-[#0B6954]"
                              }`}
                            >
                              {dp(program.title)}
                            </span>
                            <p className="text-sm text-gray-500 group-hover:text-[#0B6954]/70 transition-colors duration-200">
                              {locale === "ko" ? "자세히 보기" : "Learn More"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div
                            className={`p-3 rounded-full transition-all duration-200 ${
                              selectedProgram === program.id
                                ? "bg-[#E7F4F0]"
                                : "bg-gray-100 group-hover:bg-[#E7F4F0]"
                            }`}
                          >
                            <svg
                              className={`w-5 h-5 transition-all duration-200 ${
                                selectedProgram === program.id
                                  ? "text-[#0B6954]"
                                  : "text-gray-400 group-hover:text-[#0B6954]"
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                          selectedProgram === program.id
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#E7F4F0]/50 rounded-full blur-3xl" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 px-1">
                {locale === "ko" ? "기타 후원 프로그램" : "Other Programs"}
              </h3>
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                {LOCALIZED_PROGRAMS.minor.map((program) => (
                  <Link
                    key={program.id}
                    href={program.donationLink}
                    className={`group block transition-all duration-200 ${
                      selectedProgram === program.id
                        ? "bg-[#E7F4F0]/70 hover:bg-[#E7F4F0]"
                        : "hover:bg-gray-50/70"
                    }`}
                  >
                    <div className="px-6 py-4 relative overflow-hidden">
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-5">
                          <div
                            className={`w-1.5 h-12 rounded-full transition-all duration-300 ${
                              selectedProgram === program.id
                                ? "bg-[#0B6954] scale-y-100"
                                : "bg-gray-200 group-hover:bg-[#0B6954]/60 scale-y-75 group-hover:scale-y-100"
                            }`}
                          />
                          <div className="space-y-1.5">
                            <span
                              className={`font-semibold text-lg transition-colors duration-200 ${
                                selectedProgram === program.id
                                  ? "text-[#0B6954]"
                                  : "text-gray-900 group-hover:text-[#0B6954]"
                              }`}
                            >
                              {dp(program.title)}
                            </span>
                            <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                              {locale === "ko" ? "자세히 보기" : "Learn More"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div
                            className={`p-3 rounded-full transition-all duration-200 ${
                              selectedProgram === program.id
                                ? "bg-[#E7F4F0]"
                                : "bg-gray-100 group-hover:bg-[#E7F4F0]"
                            }`}
                          >
                            <svg
                              className={`w-5 h-5 transition-all duration-200 ${
                                selectedProgram === program.id
                                  ? "text-[#0B6954]"
                                  : "text-gray-400 group-hover:text-[#0B6954]"
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                          selectedProgram === program.id
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#E7F4F0]/50 rounded-full blur-3xl" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex items-start justify-center min-h-full">
            {selectedProgram !== "child" && (
              <div className="bg-white rounded-2xl shadow-lg w-[470px] p-8 transition-all duration-300 hover:shadow-xl">
                <iframe
                  src={getDonationLink()}
                  name="donorbox"
                  seamless
                  className="w-[430px] h-[570px]"
                  style={{ border: "none" }}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ko", [
        "common",
        "donate-program",
      ])),
    },
  };
};
