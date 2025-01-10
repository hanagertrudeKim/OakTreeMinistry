import { useIsVisible } from "@/utils/hooks/useIsVisible";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { DONATION_PROGRAM } from "@/static/Donate";
import Link from "next/link";

export default function Donation() {
  const isMobile = useMediaQuery();
  const [isClient, setIsClient] = React.useState(false);
  const { t: donate } = useTranslation(["donate"]);
  const { t: dp } = useTranslation(["donate-program"]);
  const router = useRouter();
  const { program } = router.query;

  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (program === "youth") {
      router.push("/donate-program");
    }
  }, [program, router]);

  const getDonationLink = () => {
    switch (program) {
      case "youth":
        return "/donate-program";
      case "college-students":
        return "https://donorbox.org/embed/oaktree-support-college-students";
      case "hope-school":
        return "https://donorbox.org/embed/oaktree-support-hope-school";
      default:
        return "https://donorbox.org/embed/oaktree-support-hope-school";
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#07403A] via-[#0a5048] to-[#07403A] min-h-[calc(90vh)] flex flex-col">
      <div className="max-w-[1400px] mx-auto px-4 pt-12 sm:pt-16 pb-8 sm:px-6 lg:px-8 w-full">
        <div className="mb-12">
          <h2 className="text-white/80 text-lg mb-3 font-medium">
            OakTree Ministry
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-NSK tracking-tight leading-tight">
            {donate("donate_title")}
          </h1>
        </div>
        <div
          ref={ref1}
          className={`mx-auto grid lg:grid-cols-12 gap-6 lg:gap-20 transition-all ease-in-out duration-1000
              ${
                isVisible1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
        >
          {isClient &&
            (!isMobile ? (
              <>
                <div className="lg:col-span-5">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
                    <p className="text-white/90 text-lg mb-8">
                      {donate("donate_sub-title")}
                    </p>
                    <div className="space-y-4">
                      {DONATION_PROGRAM.map((program, index) => (
                        <Link
                          key={index}
                          href={program.donationLink}
                          className="group relative flex w-full items-center justify-between rounded-xl bg-white p-5 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
                        >
                          <h3 className="text-lg font-medium text-gray-900">
                            {dp(program.title)}
                          </h3>
                          <span className="rounded-full bg-[#F3851D] p-2.5 text-white group-hover:bg-[#E67710] transition-all shadow-sm">
                            <svg
                              className="h-5 w-5"
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
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  {program !== "youth" && (
                    <iframe
                      className="w-full h-[650px] rounded-xl"
                      src={getDonationLink()}
                      name="donorbox"
                    ></iframe>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="w-full mb-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {DONATION_PROGRAM.map((program, index) => (
                        <Link
                          key={index}
                          href={program.donationLink}
                          className="group relative flex w-full items-center justify-between rounded-lg bg-white p-3 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
                        >
                          <h3 className="text-sm font-medium text-gray-900 mr-2">
                            {dp(program.title)}
                          </h3>
                          <span className="rounded-full bg-[#F3851D] p-1.5 text-white group-hover:bg-[#E67710] transition-all shadow-sm flex-shrink-0">
                            <svg
                              className="h-3.5 w-3.5"
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
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  {program !== "youth" && (
                    <iframe
                      className="w-full h-[550px]"
                      src={getDonationLink()}
                      name="donorbox"
                    ></iframe>
                  )}
                </div>
              </>
            ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('/image/wave-pattern.svg')] opacity-5 pointer-events-none"></div>
    </div>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "donate",
        "donate-program",
      ])),
    },
  };
};
