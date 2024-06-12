import { NAVIGATION } from "@/static/Navbar";
import Link from "next/link";
import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Drawer({ isOpen, setIsOpen }: DrawerProps) {
  return (
    <main
      className={
        "fixed overflow-hidden z-30 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out w-[100vw]" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full ")
      }
    >
      <section
        className={
          "max-w-lg right-0 absolute bg-[#07403A] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform w-[80vw] " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg flex flex-col overflow-y-scroll h-full text-white p-5 font-normal pt-[80px]">
          {/* <header className="font-bold text-[5vw] py-[5vw]">메뉴</header> */}
          {NAVIGATION.map((info, index) => {
            return (
              <div key={index} className="text-[3.8vw] p-4">
                <Link href={info.link}>{info.title}</Link>
              </div>
            );
          })}
          <Link href={"/donate"} className="text-[3.5vw] p-4">
            Donate
          </Link>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
