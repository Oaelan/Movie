import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import ThemeProvider from "@/context/ThemeContext";
import { getThemeCookieServer } from "@/lib/utils/cookies";
export const metadata: Metadata = {
  title: "Search Movie",
  description: "찾고싶은 영화정보를 검색할 수 있습니다!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getThemeCookieServer();

  return (
    <html lang="ko" data-theme={theme}>
      <body className="bg-primary">
        <ThemeProvider initialTheme={theme}>
          <Nav />
          <div className="mt-[154px]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
