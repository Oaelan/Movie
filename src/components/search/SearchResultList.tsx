import { Movie } from "@/lib/types/movie";
import { MovieCard } from "@/components";

interface SearchResultListProps {
  movies: Movie[];
  searchQuery: string;
}

export default function SearchResultList({
  movies,
  searchQuery,
}: SearchResultListProps) {
  if (movies.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-text-muted text-lg mb-4">
          &ldquo;{searchQuery}&rdquo;에 대한 검색 결과가 없습니다.
        </p>
        <p className="text-text-secondary">다른 키워드로 검색해보세요.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
