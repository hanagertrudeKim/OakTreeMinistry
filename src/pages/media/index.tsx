import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <div className="flex flex-col px-[10vw] py-[5vw]">
      <div className="text-[45px] font-bold mb-[100px]">OUR RECENT WORK</div>
      {/* 방명록 기능 추가 */}
      <Image
        src={"/image/Gallery1.jpg"}
        alt="about-us"
        width={1300}
        height={1100}
        className="mx-auto sm:w-[90vw] object-contain"
      />
    </div>
  );
}
