import { NAVIGATION } from "@/static/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { useTranslation } from "next-i18next";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Drawer({ isOpen, setIsOpen }: DrawerProps) {
  const router = useRouter();
  const { t } = useTranslation(["common"]);

  useEffect(() => {
    router.events.on("routeChangeStart", () => setIsOpen(false));

    return () => {
      router.events.off("routeChangeStart", () => setIsOpen(false));
    };
  }, [router, setIsOpen]);

  return (
    <main
      className={
        "fixed overflow-hidden z-30 bg-gray-900/75 backdrop-blur-sm inset-0 transform ease-in-out w-[100vw]" +
        (isOpen
          ? " transition-opacity opacity-100 duration-300 translate-x-0"
          : " transition-all delay-300 opacity-0 translate-x-full")
      }
    >
      <section
        className={
          "max-w-[300px] right-0 absolute bg-gradient-to-br from-[#07403A] via-[#063832] to-[#052825] h-full shadow-2xl delay-300 duration-300 ease-in-out transition-all transform w-[80vw] border-l border-white/10" +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        <article className="relative w-screen max-w-lg flex flex-col h-full text-white">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{t("menu")}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <div className="space-y-1">
              {NAVIGATION.map((info, index) => {
                const isActive = router.pathname === info.link;
                return (
                  <div key={index} className="mx-3">
                    <Link
                      href={info.link}
                      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/10 ${
                        isActive
                          ? "bg-white/15 text-emerald-400"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      <span className="text-[15px] font-medium">
                        {t(info.title)}
                      </span>
                    </Link>
                  </div>
                );
              })}

              <div className="mx-6 mt-[40px]">
                <Link
                  href={"/donate"}
                  className="flex items-center justify-center w-[250px] py-3 px-5 
                    bg-gradient-to-r from-emerald-600 to-teal-600 
                    hover:from-emerald-500 hover:to-teal-500 
                    rounded-lg transition-all duration-200 
                    shadow-md hover:shadow-lg"
                >
                  <span className="text-[14px] font-medium">
                    {t("donate-button")}
                  </span>
                </Link>
              </div>
            </div>
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
