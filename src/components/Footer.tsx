import { NAVIGATION } from "@/static/Navbar";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation(["common"]);
  return (
    <footer className="bg-[#07403A] text-white pt-12 pb-4 px-[8vw] sm:hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* 상단 섹션 */}
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-1 sm:gap-10">
          {/* 브랜드 섹션 */}
          <div className="sm:text-center">
            <h1 className="text-2xl font-bold tracking-wide mb-2">
              OakTree Ministry
            </h1>
            <p className="text-gray-300 text-sm">
              Serving with faith and purpose
            </p>
          </div>

          {/* 네비게이션 섹션 */}
          <nav className="flex flex-col gap-3 sm:items-center">
            <h2 className="font-semibold mb-1 text-lg">Quick Links</h2>
            <Link href="/">
              <div className="text-gray-300 hover:text-white text-sm transition-all hover:translate-x-1 sm:hover:translate-x-0">
                Home
              </div>
            </Link>
            {NAVIGATION.map((nav) => (
              <Link href={nav.link} key={nav.title}>
                <div className="text-gray-300 hover:text-white text-sm transition-all hover:translate-x-1 sm:hover:translate-x-0">
                  {nav.title}
                </div>
              </Link>
            ))}
          </nav>

          {/* SNS 링크 섹션 */}
          <div className="flex flex-col gap-4 sm:items-center">
            <h2 className="font-semibold mb-1 text-lg">Connect With Us</h2>
            <div className="flex gap-4">
              <Link
                href="mailto:rlagksk8428@gmail.com"
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all hover:-translate-y-1"
              >
                <span className="text-sm">{t("contact-us", "Contact")}</span>
              </Link>
              <Link
                href="https://www.instagram.com/oaktreeministryhaiti"
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all hover:-translate-y-1"
              >
                <span className="text-sm">Instagram</span>
              </Link>
              <Link
                href="https://pf.kakao.com/_xjAxbxfd"
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all hover:-translate-y-1"
              >
                <span className="text-sm">KakaoTalk</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 저작권 섹션 */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex justify-between items-center flex-wrap gap-4 text-xs text-gray-400 sm:justify-center sm:text-center">
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
