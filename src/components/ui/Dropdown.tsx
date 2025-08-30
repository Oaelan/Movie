"use client";
import { FaGlobe } from "react-icons/fa";
import { Language } from "@/i18n/config";

interface DropdownProps {
  value?: Language;
  options: { value: Language; label: string }[];
  onChange?: (value: Language) => void;
  className?: string;
}

export default function Dropdown({ options, value, onChange }: DropdownProps) {
  return (
    <div className="relative">
      <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none" />
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value as Language)}
        className="dropdown-select"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-elevated text-text"
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* 커스텀 화살표 */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          className="w-4 h-4 text-text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
