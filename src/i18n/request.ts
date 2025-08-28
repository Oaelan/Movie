import { getRequestConfig } from "next-intl/server";
import { getCookieServer } from "@/lib/utils/cookies";

export default getRequestConfig(async () => {
  // 쿠키에서 언어 설정 가져오기
  const cookieLanguage = await getCookieServer("language");

  // 영어와 한글만 지원
  const validLocale =
    cookieLanguage === "ko" || cookieLanguage === "en" ? cookieLanguage : "ko";

  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default,
  };
});
