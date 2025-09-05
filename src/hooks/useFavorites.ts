import { useEffect, useState } from "react";
import { Movie } from "@/lib/types/movie";
import { getLocalStorage, updateLocalStorage } from "@/lib/utils/localStorage";
import { useLocale } from "next-intl";
import { useQueries } from "@tanstack/react-query";
import { getMovieDetail } from "@/lib/api/movieApi";
import { Language } from "@/i18n/config";

export default function useFavorites() {
  const [likes, setLikes] = useState<Movie[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const likedMovieIds = getLocalStorage("Likes");
  const locale = useLocale();
  const data = useQueries({
    queries: likedMovieIds.map((id: number) => ({
      queryKey: ["likes", id, locale],
      queryFn: () => getMovieDetail(id.toString(), locale as Language),
      enabled: !!id, // id가 있을 때만 실행
    })),
  });

  const isLoading = !isMounted || data.some((query) => query.isLoading);
  const error = (data.find((query) => query.error)?.error as Error) || null;

  const toggleLike = (movieId: number) => {
    const currentLikes = getLocalStorage("Likes");
    if (currentLikes.includes(movieId)) {
      const newLikes = likes.filter((like) => like.id !== movieId);
      setLikes(newLikes);
      updateLocalStorage(
        "Likes",
        currentLikes.filter((id: number) => id !== movieId)
      );
    } else {
      updateLocalStorage("Likes", [...currentLikes, movieId]);
    }
  };
  useEffect(() => {
    if (data && data.length > 0) {
      const movies = data
        .filter((query) => query.isSuccess && query.data) // 성공한 쿼리만
        .map((query) => query.data as Movie);
      setLikes((prev) => {
        // 기존 데이터와 비교해서 다를 때만 업데이트
        if (JSON.stringify(prev) !== JSON.stringify(movies)) {
          return movies;
        }
        return prev;
      });
    }
  }, [data]);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return { likes, isLoading, error, toggleLike };
}
