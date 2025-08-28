import { Language } from "@/i18n/config";
import {
  getLatestMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "@/lib/api/movieApi";
import { Movie } from "@/lib/types/movie";
import { getLocale } from "next-intl/server";

interface HomeDataResult {
  latestMovies: Movie[];
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  hasError: boolean;
}

export async function fetchHomeData(): Promise<HomeDataResult> {
  const locale = await getLocale();
  let latestMovies: Movie[] = [];
  let popularMovies: Movie[] = [];
  let topRatedMovies: Movie[] = [];
  let hasError = false;

  try {
    // 서버에서 데이터 페칭
    const [latest, popular, topRated] = await Promise.all([
      getLatestMovies(1, locale as Language),
      getPopularMovies(1, locale as Language),
      getTopRatedMovies(1, locale as Language),
    ]);

    latestMovies = latest || [];
    popularMovies = popular || [];
    topRatedMovies = topRated || [];
  } catch (error) {
    console.error("메인 페이지 데이터 페칭 실패:", error);
    // 에러 발생 시 빈 배열로 초기화 (앱 크래시 방지)
    latestMovies = [];
    popularMovies = [];
    topRatedMovies = [];
    hasError = true;
  }

  return {
    latestMovies,
    popularMovies,
    topRatedMovies,
    hasError,
  };
}
