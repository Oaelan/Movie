import { Theme } from "@/context/ThemeContext";

export async function getThemeCookieServer() {
  // 동적 import로 서버 전용 모듈 로드
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme");
  return (themeCookie?.value as Theme) || "light";
}

export async function setThemeCookieServer(theme: Theme) {
  // 동적 import로 서버 전용 모듈 로드
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  cookieStore.set("theme", theme);
}

export function getThemeCookieClient() {
  const themeCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("theme="));
  return themeCookie?.split("=")[1] || "light";
}
export function setThemeCookieClient(theme: Theme) {
  document.cookie = `theme=${theme}; path=/`;
}
