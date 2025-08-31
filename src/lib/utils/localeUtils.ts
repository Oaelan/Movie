import { Language } from "@/i18n/config";

// 앱 locale을 TMDB locale로 변환하는 함수
export function getTMDBLocale(locale: Language): string {
  switch (locale) {
    case "ko":
      return "ko-KR";
    case "en":
      return "en-US";
  }
}
