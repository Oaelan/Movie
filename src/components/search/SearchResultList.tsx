"use client";
import { Movie } from "@/lib/types/movie";
import { MovieCard } from "@/components";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";

interface SearchResultListProps {
  movies: Movie[];
  searchQuery: string;
  hasMore: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
}

export default function SearchResultList({
  movies,
  searchQuery,
  hasMore,
  isLoading,
  onLoadMore,
}: SearchResultListProps) {
  // 초기 검색 결과가 없을 때
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
    <div className="space-y-4">
      {/* 영화 카드 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* 무한 스크롤 트리거 영역 */}
      <InfiniteScrollTrigger
        onLoadMore={onLoadMore}
        hasMore={hasMore}
        isLoading={isLoading}
      />
    </div>
  );
}
