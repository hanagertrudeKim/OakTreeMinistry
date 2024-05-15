import useMediaQuery from "@/utils/hooks/useMediaQuery";
import React from "react";

export default function Donation() {
  const isMobile = useMediaQuery();
  return (
    <div className="flex flex-col items-center justify-center py-4 bg-[url('/image/donateBackground.jpg')] h-[93vh] bg-cover sm:h-[630px] sm:bg-none">
      <div className="flex items-start gap-[10vw] sm:flex-col">
        {!isMobile && (
          <div className="font-NSK text-white">
            <div className="text-[65px] font-extrabold indent-3">
              1:1 청소년 후원하기
            </div>
            <div className="text-[30px] font-extralight mt-[70px] ml-3">
              후원하실 프로그램을 선택해주세요.
            </div>
          </div>
        )}
        <iframe
          className="min-w-[425px] max-w-[560px] h-[630px] sm:mt-10"
          src="https://donorbox.org/embed/oaktree-ministry-1?default_interval=m"
          name="donorbox"
        ></iframe>
      </div>
    </div>
  );
}
