"use client";
import { useSearchParams } from "next/navigation";
import {
  SearchResultHeader,
  SearchResultList,
  LoadingState,
  ErrorState,
} from "@/components";
import useInfiniteFetch from "@/hooks/useInfiniteFetch";
import { useTranslations } from "next-intl";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const translations = useTranslations("");

  const {
    movies,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    totalResults,
    isFetching,
  } = useInfiniteFetch(searchQuery);

  if (isLoading && movies.length === 0) {
    return <LoadingState message={translations("common.loading")} />;
  }

  if (error) {
    return <ErrorState message={translations("common.retry")} />;
  }

  return (
    <div className="min-h-screen bg-primary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <SearchResultHeader
          searchQuery={searchQuery}
          resultCount={totalResults}
          translations={translations}
        />
        <SearchResultList
          movies={movies}
          searchQuery={searchQuery}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          translations={translations}
          isFetching={isFetching}
        />
      </div>
    </div>
  );
}
