"use client";
import { Movie } from "@/lib/types/movie";
import { useEffect, useState } from "react";
import { getSearchMovies } from "@/lib/api/movieApi";

export default function useInfiniteFetch(searchQuery: string) {
  //검색 결과 영화 데이터 목록
  const [movies, setMovies] = useState<Movie[]>([]);
  //전체 결과
  const [totalResults, setTotalResults] = useState(0); // 전체 결과 수
  //전체 페이지 수
  const [totalPages, setTotalPages] = useState(0);
  //로딩 상태
  const [isLoading, setIsLoading] = useState(true);
  //에러 상태
  const [error, setError] = useState<string | null>(null);
  //페이지 번호
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  //더 불러올 데이터가 있는지 여부
  const [hasMore, setHasMore] = useState(true);

  //검색어 변경 시 초기화
  const reset = () => {
    setMovies([]);
    setTotalResults(0);
    setTotalPages(0);
    setCurrentPage(1);
    setHasMore(true);
    setIsLoading(true);
  };
  //추가 데이터 로드 함수
  const loadMore = async () => {
    //검색어가 비어있거나, 더 불러올 데이터가 없거나, 로딩 중이면 종료
    if (!searchQuery.trim() || !hasMore || isLoading) return;
    try {
      setIsLoading(true);
      const nextPage = currentPage + 1;
      const result = await getSearchMovies(searchQuery, nextPage);
      setMovies((prevMovies) => [...prevMovies, ...result.results]);
      setCurrentPage(nextPage);
      setHasMore(nextPage < result.total_pages);
    } catch (error) {
      setError("추가 데이터 로드 중 오류가 발생했습니다.");
      console.error("추가 데이터 로드 중 오류가 발생했습니다.", error);
    } finally {
      setIsLoading(false);
    }
  };
  //초기 검색 및 검색어 변경 시 초기화
  useEffect(() => {
    //초기 검색 결과 데이터 가져오는 함수
    const fetchInitialData = async () => {
      if (!searchQuery.trim()) {
        return;
      }
      try {
        reset();
        setIsLoading(true);
        setError(null);
        const result = await getSearchMovies(searchQuery, 1);
        setMovies(result.results);
        setTotalResults(result.total_results);
        setTotalPages(result.total_pages);
        setCurrentPage(1);
        setHasMore(result.total_pages > 1);
      } catch (error) {
        setError("검색 중 오류가 발생했습니다.");
        console.error("검색 중 오류가 발생했습니다.", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInitialData();
  }, [searchQuery]);

  return {
    movies,
    totalResults,
    totalPages,
    isLoading,
    error,
    hasMore,
    loadMore,
  };
}
