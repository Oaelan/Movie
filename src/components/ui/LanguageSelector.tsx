"use client";
import { useState } from "react";
import { setCookieClient } from "@/lib/utils/cookies";
import Dropdown from "./Dropdown";
import { Language } from "@/i18n/config";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export default function LanguageSelector() {
  const locale = useLocale() as Language;
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(locale);

  const options: { value: Language; label: string }[] = [
    { value: "ko", label: "한국어" },
    { value: "en", label: "English" },
  ];

  const handleLanguageChange = (value: Language) => {
    // 쿠키에 언어 설정 저장
    setCookieClient("language", value);
    setCurrentLanguage(value);

    // 현재 경로에서 언어 부분만 변경
    const segments = pathname.split("/");
    if (segments[1] && ["ko", "en"].includes(segments[1])) {
      segments[1] = value;
    } else {
      segments.splice(1, 0, value);
    }
    const newPath = segments.join("/");
    window.location.href = newPath; // 페이지 새로고침
  };

  return (
    <Dropdown
      options={options}
      value={currentLanguage}
      onChange={handleLanguageChange}
    />
  );
}
