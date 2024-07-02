import useMediaQuery from "@/utils/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

export default function Donation() {
  const isMobile = useMediaQuery();
  const { t: donate } = useTranslation(["donate"]);

  return (
    <div className="flex flex-col items-center justify-center py-4 bg-[url('/image/donateBackground.jpg')] h-[93vh] bg-cover sm:h-[630px] sm:bg-none sm:items-center">
      <div className="flex items-start gap-[10vw]">
        {!isMobile && (
          <div className="font-NSK text-white">
            <div className="text-[62px] font-bold indent-3 mt-5">
              {donate("donate_title")}
            </div>
            <div className="text-[30px] font-extralight mt-[50px] ml-3">
              {donate("donate_sub-title")}
            </div>
          </div>
        )}
        <iframe
          className="min-w-[425px] sm:min-w-[90vw] max-w-[560px] h-[630px] sm:mt-10"
          src="https://donorbox.org/embed/oaktree-ministry-1?default_interval=m"
          name="donorbox"
        ></iframe>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "donate"])),
    },
  };
};
