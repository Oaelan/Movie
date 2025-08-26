"use client";
import { useSearchParams } from "next/navigation";
import { getSearchMovies } from "@/lib/api/movieApi";
import useFetch from "@/hooks/useFetch";
import { TMDBResponse } from "@/lib/types/movie";
import {
  SearchResultHeader,
  SearchResultList,
  LoadingState,
  ErrorState,
} from "@/components";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const {
    data: searchResults,
    isLoading,
    error,
  } = useFetch<TMDBResponse, string>(getSearchMovies, searchQuery);

  // 검색 결과 추출
  const movies = searchResults?.results || [];

  if (isLoading) {
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
          resultCount={movies.length}
        />
        <SearchResultList movies={movies} searchQuery={searchQuery} />
      </div>
    </div>
  );
}
