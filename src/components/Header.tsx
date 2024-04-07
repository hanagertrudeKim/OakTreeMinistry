import Link from "next/link";
import Image from "next/image";
import { NAVIGATION } from "@/static/Navbar";

export default function Header({ setIsOpen }: any) {
  return (
    <div className="sticky w-full h-21 bg-white flex justify-between items-center pr-20 sm:relative sm:h-[12vw]">
      <Image
        src="/logo.svg"
        alt="logo"
        width={220}
        height={80}
        className="sm:h-[12vw] sm:w-[30vw] sm:left-[10px]"
      />
      <Image
        src="/mobileMenu.svg"
        alt="menu"
        width={24}
        height={24}
        onClick={() => setIsOpen(true)}
        className="lg:hidden sm:absolute sm:right-[28vw]"
      />
      <div className="sm:hidden flex justify-center items-center gap-16 text-base font-semibold">
        {NAVIGATION.map((content, index) => {
          return (
            <Link key={index} href={content.link} className="">
              {content.title}
            </Link>
          );
        })}
      </div>
      <Link
        href="/donate"
        className="bg-[#07403A] text-white w-28 h-10 flex justify-center items-center rounded-md text-sm sm:h-[7vw] sm:w-[19vw] sm:text-[3vw] sm:absolute right-6"
      >
        <div>Donate</div>
      </Link>
    </div>
  );
}
