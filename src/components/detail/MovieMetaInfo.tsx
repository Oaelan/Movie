import { DetailMovie } from "@/lib/types/movie";

interface MovieMetaInfoProps {
  movie: DetailMovie;
}

export default function MovieMetaInfo({ movie }: MovieMetaInfoProps) {
  return (
    <div className="flex flex-wrap gap-4 text-sm text-text-muted">
      <span>{movie.release_date}</span>
      {movie.runtime > 0 && (
        <span>
          {Math.floor(movie.runtime / 60)}시간 {movie.runtime % 60}분
        </span>
      )}
      <span>{movie.status}</span>
    </div>
  );
}
