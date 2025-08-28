import { HeroSection, MovieCardSlider } from "@/components";
import { fetchHomeData } from "@/lib/utils/homeDataUtils";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("home");
  // 서버에서 데이터 페칭 (로직은 유틸리티 함수로 분리)
  const { latestMovies, popularMovies, topRatedMovies, hasError } =
    await fetchHomeData();

  return (
    <div className="bg-primary h-screen">
      <HeroSection className="mb-15" title={t("title")} />

      {/* 에러 메시지 */}
      {hasError && (
        <div className="container mx-auto px-4 mb-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p className="text-center">
              {t("error.message")}
              <br />
              {t("error.refresh")}
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-15 justify-center items-center pb-15">
        <MovieCardSlider movies={latestMovies} title={t("latest")} />
        <MovieCardSlider movies={popularMovies} title={t("popular")} />
        <MovieCardSlider movies={topRatedMovies} title={t("topRated")} />
      </div>
    </div>
  );
}
