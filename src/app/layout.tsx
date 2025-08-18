import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import ThemeProvider from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Search Movie",
  description: "찾고싶은 영화정보를 검색할 수 있습니다!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-primary">
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
