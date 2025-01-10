import { NAVIGATION } from "@/static/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Dispatch, ReactNode, SetStateAction, useEffect } from "react";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Drawer({ isOpen, setIsOpen }: DrawerProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setIsOpen(false));

    return () => {
      router.events.off("routeChangeStart", () => setIsOpen(false));
    };
  }, [router, setIsOpen]);

  return (
    <main
      className={
        "fixed overflow-hidden z-30 bg-gray-900/60 inset-0 transform ease-in-out w-[100vw]" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-500 opacity-0 translate-x-full")
      }
    >
      <section
        className={
          "max-w-lg right-0 absolute bg-gradient-to-br from-[#07403A] via-[#063832] to-[#052825] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform w-[75vw] border-l border-white/10" +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        <article className="relative w-screen max-w-lg flex flex-col h-full text-white p-6 font-normal pt-[80px]">
          <div className="space-y-2">
            {NAVIGATION.map((info, index) => {
              return (
                <div
                  key={index}
                  className="text-[16px] py-3.5 px-6 hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-2"
                >
                  <Link href={info.link} className="block w-full">
                    {info.title}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-auto mb-8 px-6">
            <Link
              href={"/donate"}
              className="group inline-block py-2.5 px-5 bg-gradient-to-r from-emerald-600/80 to-emerald-700/80 hover:from-emerald-600 hover:to-emerald-700 rounded-lg transition-all duration-300 text-center"
            >
              <span className="text-[14px] font-medium">Support Us</span>
            </Link>
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => setIsOpen(false)}
      ></section>
    </main>
  );
}
