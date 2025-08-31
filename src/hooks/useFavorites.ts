import { getMovieDetail } from "@/lib/api/movieApi";
import { useLocale } from "next-intl";
import { Language } from "@/i18n/config";
import { useLocalStorage } from "./useLocalStorage";
import { useQueries } from "@tanstack/react-query";
import { Movie } from "@/lib/types/movie";
import { useEffect, useState } from "react";

export default function useFavorites() {
  const locale = useLocale();
  const [likedMovieIds, updateStorage] = useLocalStorage("Likes");
  const [isMounted, setIsMounted] = useState(false);

  const movieQueries = useQueries({
    queries: likedMovieIds.map((id: number) => ({
      queryKey: ["likes", id, locale],
      queryFn: () => getMovieDetail(id.toString(), locale as Language),
      enabled: !!id, // id가 있을 때만 실행
    })),
  });
  const isLoading = !isMounted || movieQueries.some((query) => query.isLoading);
  const error = movieQueries.find((query) => query.error)?.error;
  const movies: Movie[] = movieQueries
    .map((query) => query.data as Movie)
    .filter(Boolean); // 성공한 데이터만 필터링

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return {
    likedMovies: movies,
    updateStorage: updateStorage,
    likedMovieIds,
    isLoading,
    error,
  };
}
