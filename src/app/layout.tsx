import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import ThemeProvider, { Theme } from "@/context/ThemeContext";
import { NextIntlClientProvider } from "next-intl";
import { getCookieServer } from "@/lib/utils/cookies";
import { Language } from "@/i18n/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "@/providers/Providers";

export const metadata: Metadata = {
  title: "Search Movie",
  description: "찾고싶은 영화정보를 검색할 수 있습니다!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await getCookieServer("theme")) as Theme;
  const language = (await getCookieServer("language")) as Language;
  return (
    <html lang="ko" data-theme={theme}>
      <body className="bg-primary">
        <Providers theme={theme}>
          <NextIntlClientProvider locale={language}>
            <Nav />
            <div className="mt-[154px]">{children}</div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
