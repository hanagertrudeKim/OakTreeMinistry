import { useIsVisible } from "@/utils/hooks/useIsVisible";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import { DONATION_PROGRAM } from "@/static/Donate";
import Link from "next/link";

export default function Donation() {
  const isMobile = useMediaQuery();
  const { t: donate } = useTranslation(["donate"]);
  const { t: dp } = useTranslation(["donate-program"]);

  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const router = useRouter();
  const { program } = router.query;

  const getDonationLink = () => {
    switch (program) {
      case "youth":
        return "https://donorbox.org/embed/oaktree-support-child";
      case "college-students":
        return "https://donorbox.org/embed/oaktree-support-college-students";
      case "hope-school":
        return "https://donorbox.org/embed/oaktree-support-hope-school";
      default:
        return "https://donorbox.org/embed/oaktree-support-child";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 bg-[url('/image/donateBackground.jpg')] h-[93vh] bg-cover sm:h-[630px] sm:bg-none sm:items-center">
      <div
        ref={ref1}
        className={`flex items-start gap-[10vw] transition-all ease-in-out duration-1000
            ${
              isVisible1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
      >
        {!isMobile && (
          <div className="font-NSK text-white">
            <div className="text-[62px] font-bold indent-3 mt-5">
              {donate("donate_title")}
            </div>
            <div className="flex flex-col gap-4 mt-24 justify-between">
              {DONATION_PROGRAM.map((program, index) => (
                <Link
                  key={index}
                  href={program.donationLink}
                  className="bg-[#F3851D] text-white text-sm leading-none tracking-tight w-[217px] h-[44px] flex justify-center items-center rounded-md sm:w-[150px] sm:h-[35px]"
                >
                  {dp(program.title)}
                </Link>
              ))}
            </div>
          </div>
        )}
        <iframe
          className="min-w-[425px] sm:min-w-[90vw] max-w-[560px] h-[630px] sm:mt-10"
          src={getDonationLink()}
          name="donorbox"
        ></iframe>
      </div>
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
