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
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors duration-200 px-3 py-2 rounded-md hover:bg-secondary"
    >
      <span className="">{theme === "light" ? <FaMoon /> : <FaSun />}</span>
      <span className="text-sm font-medium w-[50px] hidden md:inline">
        {theme === "light" ? translations("dark") : translations("light")}
      </span>
    </button>
  );
}
