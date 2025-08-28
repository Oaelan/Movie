import { DetailMovie } from "@/lib/types/movie";
import {
  MovieHeader,
  MovieRating,
  MovieMetaInfo,
  MovieGenres,
  MovieTagline,
  MovieOverview,
  MovieProduction,
  MovieBudget,
} from "@/components";

interface MovieContentProps {
  movie: DetailMovie;
  translations: {
    (key: string): string;
  };
}

export default function MovieContent({
  movie,
  translations,
}: MovieContentProps) {
  return (
    <div className="flex-1 space-y-6">
      {/* 제목과 평점 */}
      <div className="flex flex-col md:flex-row md:gap-30">
        <MovieHeader movie={movie} />
        <MovieRating movie={movie} translations={translations} />
      </div>

      {/* 메타 정보 */}
      <MovieMetaInfo movie={movie} translations={translations} />

      {/* 장르 */}
      <MovieGenres genres={movie.genres} />

      {/* 태그라인 */}
      <MovieTagline tagline={movie.tagline} />

      {/* 줄거리 */}
      <MovieOverview overview={movie.overview} translations={translations} />

      {/* 제작 정보 */}
      <MovieProduction
        production_companies={movie.production_companies}
        translations={translations}
      />

      {/* 예산 및 수익 */}
      <MovieBudget movie={movie} translations={translations} />
    </div>
  );
}
