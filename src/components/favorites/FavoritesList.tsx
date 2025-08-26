import { Movie } from "@/lib/types/movie";
import { MovieCard } from "@/components";

interface FavoritesListProps {
  movies: Movie[];
}

export default function FavoritesList({ movies }: FavoritesListProps) {
  if (movies.length === 0) {
    return (
      <div className="col-span-full text-center py-20">
        <p className="text-text-muted text-lg mb-4">
          좋아요 목록이 비어있습니다.
        </p>
        <p className="text-text-secondary">
          영화를 검색하고 좋아요를 눌러보세요!
        </p>
      </div>
    );
  }

  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}
