import { DetailMovie } from "@/lib/types/movie";

interface MovieMetaInfoProps {
  movie: DetailMovie;
  translations: {
    (key: string): string;
  };
}

export default function MovieMetaInfo({
  movie,
  translations,
}: MovieMetaInfoProps) {
  return (
    <div className="flex flex-wrap gap-4 text-sm text-text-muted">
      <span>{movie.release_date}</span>
      {movie.runtime > 0 && (
        <span>
          {Math.floor(movie.runtime / 60)} {translations("movie.hours")}{" "}
          {movie.runtime % 60} {translations("movie.minutes")}
        </span>
      )}
      <span>{movie.status}</span>
    </div>
  );
}
