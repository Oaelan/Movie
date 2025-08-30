"use client";
import { useTheme } from "@/context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

interface ThemeToggleProps {
  translations: {
    (key: string): string;
  };
}

export default function ThemeToggle({ translations }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="nav-menu-hover">
      <span className="">{theme === "light" ? <FaMoon /> : <FaSun />}</span>
      <span className="text-sm font-medium w-[50px] hidden md:inline">
        {theme === "light"
          ? translations("nav.theme.dark")
          : translations("nav.theme.light")}
      </span>
    </button>
  );
}
