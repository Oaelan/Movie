import { DetailMovie } from "@/lib/types/movie";
import Rating from "@/components/movie/Rating";

interface MovieRatingProps {
  movie: DetailMovie;
  translations: {
    (key: string): string;
  };
}

export default function MovieRating({ movie, translations }: MovieRatingProps) {
  return (
    <>
      {/* 데스크톱용 평점 */}
      <div className="flex-col gap-3 hidden md:flex">
        <h2 className="text-xl font-semibold text-text">
          {translations("movie.rating")}
        </h2>
        <div className="flex items-center gap-3">
          <Rating vote_average={movie.vote_average} />
          <div className="flex flex-col">
            <span className="text-lg font-medium text-text">
              {movie.vote_average.toFixed(1) + " / 10.0"}
            </span>
            <span className="text-xs text-text-muted">
              {movie.vote_count.toLocaleString()} {translations("movie.votes")}
            </span>
          </div>
        </div>
      </div>

      {/* 모바일용 평점 */}
      <div className="flex-col gap-3 flex md:hidden">
        <h2 className="text-xl font-semibold text-text">
          {translations("movie.rating")}
        </h2>
        <div className="flex items-center gap-3">
          <Rating vote_average={movie.vote_average} />
          <div className="flex flex-col">
            <span className="text-lg font-medium text-text">
              {movie.vote_average.toFixed(1) + " / 10.0"}
            </span>
            <span className="text-xs text-text-muted">
              {movie.vote_count.toLocaleString()} {translations("movie.votes")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
