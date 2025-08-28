// 공통 쿠키 유틸리티 함수들
export async function getCookieServer(name: string) {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  const cookie = cookieStore.get(name);
  return cookie?.value;
}

export function getCookieClient(name: string) {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return cookie?.split("=")[1];
}

export function setCookieClient(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/`;
}
