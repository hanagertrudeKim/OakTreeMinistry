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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-green-600 bg-green-50 rounded-full">
            {locale === "ko" ? "함께 만드는 변화" : "Creating Change Together"}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-gray-900">
            {t("donate.program_title", { program: selectedProgramTitle })}
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 px-1">
                {locale === "ko" ? "주요 후원 프로그램" : "Main Programs"}
              </h3>
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {LOCALIZED_PROGRAMS.main.map((program) => (
                  <Link
                    key={program.id}
                    href={program.donationLink}
                    className={`group block transition-all duration-200 border-b last:border-b-0 ${
                      selectedProgram === program.id
                        ? "bg-green-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="px-6 py-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-1.5 h-14 rounded-full transition-colors ${
                              selectedProgram === program.id
                                ? "bg-green-600"
                                : "bg-gray-200 group-hover:bg-green-300"
                            }`}
                          />
                          <span
                            className={`font-medium text-lg ${
                              selectedProgram === program.id
                                ? "text-green-700"
                                : "text-gray-900"
                            }`}
                          >
                            {dp(program.title)}
                          </span>
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors"
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
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 px-1">
                {locale === "ko" ? "기타 후원 프로그램" : "Other Programs"}
              </h3>
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {LOCALIZED_PROGRAMS.minor.map((program) => (
                  <Link
                    key={program.id}
                    href={program.donationLink}
                    className={`group block transition-all duration-200 border-b last:border-b-0 ${
                      selectedProgram === program.id
                        ? "bg-green-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="px-6 py-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-1.5 h-12 rounded-full transition-colors ${
                              selectedProgram === program.id
                                ? "bg-green-600"
                                : "bg-gray-200 group-hover:bg-green-300"
                            }`}
                          />
                          <span
                            className={`font-medium text-lg ${
                              selectedProgram === program.id
                                ? "text-green-700"
                                : "text-gray-900"
                            }`}
                          >
                            {dp(program.title)}
                          </span>
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors"
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
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex items-center justify-center min-h-full">
            {selectedProgram !== "child" && (
              <div className="bg-white rounded-xl shadow-lg w-[470px] p-6">
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
