import { HeroSection, MovieCardSlider } from "@/components";
import { fetchHomeData } from "@/lib/utils/homeDataUtils";

export default async function Home() {
  // 서버에서 데이터 페칭 (로직은 유틸리티 함수로 분리)
  const { latestMovies, popularMovies, topRatedMovies, hasError } =
    await fetchHomeData();

  return (
    <div className="bg-primary h-screen">
      <HeroSection
        className="mb-15"
        title="찾고 싶은 영화를 마음껏 검색하세요!"
      />

      {/* 에러 메시지 */}
      {hasError && (
        <div className="container mx-auto px-4 mb-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p className="text-center">
              영화 데이터를 불러오는 중 문제가 발생했습니다.
              <br />
              잠시 후 새로고침해주세요.
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-15 justify-center items-center pb-15">
        <MovieCardSlider movies={latestMovies} title="최신순" />
        <MovieCardSlider movies={popularMovies} title="인기순" />
        <MovieCardSlider movies={topRatedMovies} title="평점순" />
      </div>
    </div>
  );
}
