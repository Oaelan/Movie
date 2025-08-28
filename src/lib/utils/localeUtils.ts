import { Language } from "@/i18n/config";

// 앱 locale을 TMDB locale로 변환하는 함수
export function getTMDBLocale(locale: Language): string {
  if (locale === "ko") {
    return "ko-KR";
  } else {
    return "en-US";
  }
}
