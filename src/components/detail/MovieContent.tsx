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
}

export default function MovieContent({ movie }: MovieContentProps) {
  return (
    <div className="flex-1 space-y-6">
      {/* 제목과 평점 */}
      <div className="flex flex-col md:flex-row md:gap-30">
        <MovieHeader movie={movie} />
        <MovieRating movie={movie} />
      </div>

      {/* 메타 정보 */}
      <MovieMetaInfo movie={movie} />

      {/* 장르 */}
      <MovieGenres genres={movie.genres} />

      {/* 태그라인 */}
      <MovieTagline tagline={movie.tagline} />

      {/* 줄거리 */}
      <MovieOverview overview={movie.overview} />

      {/* 제작 정보 */}
      <MovieProduction production_companies={movie.production_companies} />

      {/* 예산 및 수익 */}
      <MovieBudget movie={movie} />
    </div>
  );
}
