import Link from "next/link";
import Image from "next/image";

const contents = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About us",
    link: "/about-us",
  },
  {
    title: "Our Ministries",
    link: "/our-ministries",
  },
  {
    title: "Media",
    link: "/media",
  },
];

export default function Header({ setIsOpen }: any) {
  return (
    <div className="sticky w-full h-21 bg-white flex justify-between items-center pr-20 sm:relative">
      <Image
        src="/logo.svg"
        alt="logo"
        width={220}
        height={80}
        className="sm:w-[100px]"
      />
      <Image
        src="/mobileMenu.svg"
        alt="menu"
        width={20}
        height={20}
        onClick={() => setIsOpen(true)}
        className="lg:hidden"
      />
      <div className="sm:hidden flex justify-center items-center gap-16 text-base font-semibold">
        {contents.map((content, index) => {
          return (
            <Link key={index} href={content.link} className="">
              {content.title}
            </Link>
          );
        })}
      </div>
      <Link
        href="/donate"
        className="bg-[#07403A] text-white w-28 h-10 flex justify-center items-center rounded-md text-sm sm:h-[24px] sm:w-[19vw] sm:text-[9px] sm:absolute right-0"
      >
        <div>Donate</div>
      </Link>
    </div>
  );
}
