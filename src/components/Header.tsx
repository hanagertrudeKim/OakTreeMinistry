import Link from "next/link";
import Image from "next/image";
import { NAVIGATION } from "@/static/Navbar";
import { useTranslation } from "next-i18next";

export default function Header({ setIsOpen }: any) {
  const { i18n } = useTranslation();
  const { t } = useTranslation(["common"]);

  const handleClickChangeLng = () => {
    const newlng = i18n.language === "ko" ? "/en" : "";
    const { protocol, host, pathname } = window.location;
    const newPath = pathname.replace(/^\/en(\/|$)/g, "/");
    window.location.href = protocol + "//" + host + newlng + newPath;
  };

  return (
    <div className="sticky w-full h-[85px] bg-white flex items-center pr-5 sm:relative sm:h-[12vw] justify-end shadow-md">
      <Link href={"/"} className="">
        <Image
          src="/logo.svg"
          alt="logo"
          width={220}
          height={80}
          className="sm:h-[12vw] sm:w-[30vw] sm:left-[10px] absolute left-0 top-0"
        />
      </Link>
      <div className="sm:hidden flex gap-16 text-[18px] font-bold font-NSK">
        {NAVIGATION.map((content, index) => {
          return (
            <Link
              key={index}
              href={content.link}
              className="transition-colors hover:text-[#07403A] relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#07403A] after:transition-all hover:after:w-full"
            >
              {t(content.title)}
            </Link>
          );
        })}
      </div>
      <Link
        href="/donate"
        className="bg-[#07403A] text-white w-28 h-10 leading-none 
          flex justify-center items-center rounded-md text-md font-bold 
          sm:hidden sm:h-[8vw] sm:w-[18vw] sm:text-[2.8vw] ml-16 
          transition-all duration-300 ease-in-out
          hover:bg-[#0a5048] hover:shadow-lg hover:scale-105
          relative overflow-hidden
          before:absolute before:top-0 before:left-0 
          before:w-full before:h-full before:bg-white/10
          before:translate-x-[-100%] before:skew-x-[-45deg]
          before:transition-transform before:duration-300
          hover:before:translate-x-[100%]"
      >
        <span className="text-center">Donate</span>
      </Link>
      <Image
        src="/mobileMenu.svg"
        alt="menu"
        width={26}
        height={26}
        onClick={() => setIsOpen(true)}
        className="lg:hidden sm:absolute sm:right-5 cursor-pointer hover:opacity-80 transition-opacity"
      />
      <button
        className="flex ml-5 gap-2 justify-center items-center sm:mr-[40px] 
          px-4 py-2 rounded-full border border-gray-200 
          bg-white shadow-sm
          hover:bg-gray-50 hover:border-gray-300 hover:shadow-md
          active:scale-95
          transition-all duration-200 ease-in-out"
        onClick={handleClickChangeLng}
      >
        <Image
          src={
            t("current-locale") === "ko"
              ? "/korea_flag.svg"
              : "/english_flag.svg"
          }
          alt="언어 선택 버튼"
          width={22}
          height={22}
          className="rounded-full shadow-sm hover:scale-105 transition-transform"
        />
        <span
          className="font-roboto font-medium text-gray-700 
          relative after:content-[''] after:absolute 
          after:bottom-0 after:left-0 after:w-0 
          after:h-[1px] after:bg-gray-400
          after:transition-all after:duration-300
          group-hover:after:w-full"
        >
          {t("current-locale")}
        </span>
      </button>
    </div>
  );
}
