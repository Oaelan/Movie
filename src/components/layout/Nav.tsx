"use client";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { ThemeToggle, LanguageSelector, SearchInput } from "@/components";

export default function Nav() {
  const locale = useLocale();
  const translations = useTranslations("");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-text flex flex-col">
      <div className="px-8 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-accent font-bold text-3xl">
          Movie
        </Link>

        <ul className="flex gap-6 items-center">
          {/* 언어 선택 드롭다운 */}
          <li>
            <LanguageSelector />
          </li>

          {/* 즐겨찾기 버튼 - 아이콘과 함께 */}
          <li>
            <Link href={`/${locale}/favorites`} className="nav-menu-hover">
              <FaHeart className="w-4 h-4 text-red-500" />
              <p className="text-sm font-medium hidden md:inline">
                {translations("nav.favorites")}
              </p>
            </Link>
          </li>

          <li>
            <ThemeToggle translations={translations} />
          </li>
        </ul>
      </div>
      <div className="px-8 py-4 bg-secondary">
        <SearchInput translations={translations} />
      </div>
    </nav>
  );
}
