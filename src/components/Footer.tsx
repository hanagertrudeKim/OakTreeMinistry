import { NAVIGATION } from "@/static/Navbar";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation(["common"]);
  return (
    <footer className="bg-[#07403A] text-white py-10 px-[8vw]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-8 sm:gap-6">
          {/* 브랜드 섹션 */}
          <div className="sm:w-full sm:text-center">
            <h1 className="text-2xl font-bold">OakTree Ministry</h1>
          </div>

          {/* 네비게이션 섹션 */}
          <nav className="flex gap-8 sm:gap-6 sm:w-full sm:justify-center">
            <Link href="/">
              <div className="text-gray-300 hover:text-white text-base transition-colors">
                Home
              </div>
            </Link>
            {NAVIGATION.map((nav) => (
              <Link href={nav.link} key={nav.title}>
                <div className="text-gray-300 hover:text-white text-base transition-colors">
                  {nav.title}
                </div>
              </Link>
            ))}
          </nav>

          {/* SNS 링크 섹션 */}
          <div className="flex gap-6 sm:w-full sm:justify-center">
            <Link
              href="mailto:rlagksk8428@gmail.com"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
            >
              <span className="text-base">{t("contact-us", "Contact")}</span>
            </Link>
            <Link
              href="https://www.instagram.com/oaktreeministryhaiti"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
            >
              <span className="text-base">Instagram</span>
            </Link>
            <Link
              href="https://pf.kakao.com/_xjAxbxfd"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
            >
              <span className="text-base">KakaoTalk</span>
            </Link>
          </div>
        </div>

        {/* 저작권 섹션 */}
        <div className="border-t border-white/10 mt-6 pt-6">
          <div className="flex justify-between items-center flex-wrap gap-4 text-sm text-gray-400 sm:justify-center sm:text-center">
            <p>Copyright © 2024 OakTree Ministry</p>
            <div className="flex gap-6 sm:mt-2">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
