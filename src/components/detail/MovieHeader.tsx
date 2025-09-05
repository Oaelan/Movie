import { DetailMovie } from "@/lib/types/movie";
import Like from "@/components/ui/Like";

interface MovieHeaderProps {
  movie: DetailMovie;
}

export default function MovieHeader({ movie }: MovieHeaderProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-1">
        <h1 className="truncate text-2xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
          {movie.title}
        </h1>
        {movie.original_title !== movie.title && (
          <p className="text-xl text-text-muted mt-2">{movie.original_title}</p>
        )}
        <Like movieId={movie.id} className="mt-4" />
      </div>
    </div>
  );
}
