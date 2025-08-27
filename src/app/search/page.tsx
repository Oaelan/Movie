"use client";
import { useSearchParams } from "next/navigation";
import {
  SearchResultHeader,
  SearchResultList,
  LoadingState,
  ErrorState,
} from "@/components";
import useInfiniteFetch from "@/hooks/useInfiniteFetch";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const { movies, isLoading, error, hasMore, loadMore, totalResults } =
    useInfiniteFetch(searchQuery);

  if (isLoading && movies.length === 0) {
    return <LoadingState message="검색 중..." />;
  }

  if (error) {
    return <ErrorState error={error} message="다시 시도해주세요." />;
  }

  return (
    <div className="min-h-screen bg-primary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <SearchResultHeader
          searchQuery={searchQuery}
          resultCount={totalResults}
        />
        <SearchResultList
          movies={movies}
          searchQuery={searchQuery}
          hasMore={hasMore}
          isLoading={isLoading}
          onLoadMore={loadMore}
        />
      </div>
    </div>
  );
}
