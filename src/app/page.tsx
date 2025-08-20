import { HeroSection, MovieCardSlider } from "@/components";
import { Movie } from "@/lib/types/movie";
import {
  getLatestMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "@/lib/api/movieApi";

export default async function Home() {
  const [latestMovies, popularMovies, topRatedMovies]: [
    Movie[],
    Movie[],
    Movie[]
  ] = await Promise.all([
    getLatestMovies(),
    getPopularMovies(),
    getTopRatedMovies(),
  ]);

  return (
    <div className="bg-primary h-screen">
      <HeroSection
        className="mb-15"
        title="찾고 싶은 영화를 마음껏 검색하세요!"
      />
      <div className="flex flex-col gap-15 justify-center items-center pb-15">
        <MovieCardSlider movies={latestMovies} title="최신순" />
        <MovieCardSlider movies={popularMovies} title="인기순" />
        <MovieCardSlider movies={topRatedMovies} title="평점순" />
      </div>
    </div>
  );
}
