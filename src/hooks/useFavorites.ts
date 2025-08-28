import { getMovieDetail } from "@/lib/api/movieApi";
import { useState, useEffect } from "react";
import { Movie } from "@/lib/types/movie";
import { useLocale } from "next-intl";
import { Language } from "@/i18n/config";

export default function useFavorites() {
  const locale = useLocale();
  const [likedMovieIds, setLikedMovieIds] = useState<string[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 로컬스토리지에서 좋아요 목록 가져오기
  const getLikedMovieIds = (): string[] => {
    if (typeof window !== "undefined") {
      const likes = localStorage.getItem("Likes");
      return likes ? JSON.parse(likes) : [];
    }
    return [];
  };

  // 좋아요 목록 ID 업데이트 및 초기 데이터 설정
  useEffect(() => {
    const ids = getLikedMovieIds();
    setLikedMovieIds(ids);

    // 좋아요 목록이 비어있으면 바로 로딩 완료
    if (ids.length === 0) {
      setIsLoading(false);
    }
  }, []);

  // 좋아요 목록 영화 데이터 가져오기
  useEffect(() => {
    const fetchAllMovies = async () => {
      // 좋아요 목록이 비어있으면 패칭하지 않음
      if (likedMovieIds.length === 0) {
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const moviePromises = likedMovieIds.map((id) =>
          getMovieDetail(id, locale as Language)
        );
        const movieData = await Promise.all(moviePromises);
        setMovies(movieData);
      } catch (error) {
        setError("좋아요 영화 데이터를 가져오는 중 오류가 발생했습니다.");
        console.error("좋아요 영화 데이터 가져오기 실패:", error);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllMovies();
  }, [likedMovieIds, locale]);

  return {
    likedMovies: movies,
    setLikedMovies: setMovies,
    likedMovieIds,
    setLikedMovieIds,
    isLoading,
    error,
  };
}
