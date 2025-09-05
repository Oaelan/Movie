"use client";
import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchMovies } from "@/lib/api/movieApi";
import { TMDBResponse } from "@/lib/types/movie";
import { useLocale } from "next-intl";
import { Language } from "@/i18n/config";

export default function useInfiniteFetch(searchQuery: string) {
  const locale = useLocale() as Language;
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useInfiniteQuery<TMDBResponse>({
    queryKey: ["search", searchQuery], // 검색어별 캐싱
    queryFn: ({ pageParam }) =>
      getSearchMovies(searchQuery, pageParam as number, locale),
    initialPageParam: 1, // React Query v5에서 필수
    getNextPageParam: (response: TMDBResponse) => {
      // 다음 페이지가 있는지 확인
      return response.page < response.total_pages
        ? response.page + 1
        : undefined;
    },
    enabled: !!searchQuery.trim(), // 검색어가 있을 때만 실행
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    gcTime: 10 * 60 * 1000, // 10분간 메모리에 보관 (React Query v5에서 cacheTime -> gcTime)
    retry: 3, // 실패 시 3번 재시도
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false, // 창 포커스 시 자동 새로고침 비활성화
    refetchOnReconnect: true, // 네트워크 재연결 시 새로고침
  });
  // 모든 페이지의 영화 데이터를 하나의 배열로 합치고 중복 제거
  const movies = useMemo(() => {
    if (!data?.pages) return [];

    const allMovies = data.pages.flatMap((page: TMDBResponse) => page.results);

    const movieSet = new Set(); // 검색결과에 페이지마다 중복된 영화가 있을 수 있기 때문에 Set을 사용하여 중복 제거
    const uniqueMovies = allMovies.filter((movie) => {
      if (movieSet.has(movie.id)) {
        return false; // 제거
      }
      movieSet.add(movie.id);
      return true; // 유지
    });

    return uniqueMovies;
  }, [data]);

  // 첫 번째 페이지의 메타데이터 사용
  const totalResults = data?.pages[0]?.total_results ?? 0;
  const totalPages = data?.pages[0]?.total_pages ?? 0;

  return {
    movies,
    totalResults,
    totalPages,
    isLoading,
    isFetching,
    error: error?.message ?? null,
    hasMore: hasNextPage,
    loadMore: fetchNextPage,
    isFetchingNextPage,
    refetch, // 검색어 변경 시 수동으로 새로고침 가능
  };
}
