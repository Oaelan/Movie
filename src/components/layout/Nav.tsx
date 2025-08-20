"use client";
import Link from "next/link";
import SearchInput from "../ui/SearchInput";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { FaGlobe, FaHeart, FaMoon, FaSun } from "react-icons/fa";

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-text flex flex-col">
      <div className="px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-accent font-bold text-xl">
          Movie
        </Link>

        <ul className="flex gap-6 items-center">
          {/* 언어 선택 버튼 - 모던한 드롭다운 스타일 */}
          <li>
            <button className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors duration-200 px-3 py-2 rounded-md hover:bg-secondary">
              <FaGlobe className="w-4 h-4 hidden md:inline" />
              <span className="text-sm font-medium">KR</span>
            </button>
          </li>

          {/* 즐겨찾기 버튼 - 아이콘과 함께 */}
          <li>
            <Link
              href="/favorites"
              className="flex items-center gap-2 text-text-secondary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-secondary"
            >
              <FaHeart className="w-4 h-4 text-red-500 hidden md:inline" />
              <p className="text-sm font-medium">관심</p>
            </Link>
          </li>

          <li>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors duration-200 px-3 py-2 rounded-md hover:bg-secondary"
            >
              <span className="hidden md:inline">
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </span>
              <span className="text-sm font-medium w-[50px]">
                {theme === "light" ? "다크" : "라이트"}
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div className="px-8 py-4 bg-secondary">
        <SearchInput key={pathname} />
      </div>
    </nav>
  );
}
