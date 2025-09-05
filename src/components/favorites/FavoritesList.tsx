import { Movie } from "@/lib/types/movie";
import { LoadingState, MovieCard } from "@/components";

interface FavoritesListProps {
  movies: Movie[];
  translations: {
    (key: string): string;
  };
  toggleLike?: (movieId: number) => void;
  isLoading: boolean;
}

export default function FavoritesList({
  movies,
  translations,
  toggleLike,
  isLoading,
}: FavoritesListProps) {
  // 로딩이 완료되고 데이터가 없으면 빈 상태 표시
  if (movies.length === 0) {
    return (
      <div className="col-span-full text-center py-20">
        <p className="text-text-muted text-lg mb-4">
          {translations("favorites.empty")}
        </p>
        <p className="text-text-secondary">
          {translations("favorites.suggestion")}
        </p>
      </div>
    );
  }

  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} toggleLike={toggleLike} />
      ))}
      {isLoading && (
        <LoadingState message={translations("favorites.loading")} />
      )}
    </>
  );
}
