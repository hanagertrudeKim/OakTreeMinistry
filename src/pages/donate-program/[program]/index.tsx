import { DONATE, DONATION_PROGRAM } from "@/static/Donate";
import { DONATE_CARD } from "@/static/Home";
import Image from "next/image";
import Link from "next/link";

export default function Program() {
  return (
    <div>
      <div className="bg-[#FFEFE0] h-[500px] px-[10vw] flex justify-center">
        <div>
          <div className="flex items-baseline">
            <div className="w-[5vw] border-b-2 border-black" />
            <div className="text-black mt-[80px] pl-[1vw] text-[1vw] font-bold sm:text-[3vw]">
              후원 프로그램
            </div>
          </div>
          <div className="w-[600px] text-[45px] font-bold ml-[6vw] mt-[80px] leading-snug">
            주제별 양육보완후원
          </div>
          <div className="text-[20px] mt-[2vw] ml-[6vw]">
            모든 어린이가 부족함 없이 자랄 수 있도록 돕습니다.
          </div>
        </div>
        <Image
          src={"/image/what-we-do-banner.jpg"}
          alt="about-us"
          width={474}
          height={374}
          className="w-[500px] sm:w-[90vw] ml-[4vw] object-contain"
        />
      </div>
    </div>
  );
}
