"use client";
import { Movie } from "@/lib/types/movie";
import { MovieCard } from "@/components";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";

interface SearchResultListProps {
  movies: Movie[];
  searchQuery: string;
  isFetching: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  translations: {
    (key: string, values?: Record<string, string | number>): string;
  };
}

export default function SearchResultList({
  movies,
  searchQuery,
  isFetching,
  fetchNextPage,
  hasNextPage,
  translations,
}: SearchResultListProps) {
  // 초기 검색 결과가 없을 때
  if (movies.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-text-muted text-lg mb-4">
          {translations("search.noResults", { query: searchQuery })}
        </p>
        <p className="text-text-secondary">
          {translations("search.suggestion")}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* 영화 카드 그리드 */}
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* 무한 스크롤 트리거 영역 */}
      <InfiniteScrollTrigger
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
        translations={translations}
      />
    </div>
  );
}
