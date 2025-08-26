import { getMovieDetail } from "@/lib/api/movieApi";
import { useState, useEffect } from "react";
import { Movie } from "@/lib/types/movie";

export default function useFavorites() {
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

  // 좋아요 목록 ID 업데이트
  useEffect(() => {
    const ids = getLikedMovieIds();
    setLikedMovieIds(ids);
  }, []);

  // 좋아요 목록 영화 데이터 가져오기
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (likedMovieIds.length === 0) {
          setMovies([]);
          return;
        }

        const moviePromises = likedMovieIds.map((id) => getMovieDetail(id));
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
  }, [likedMovieIds]);

  return {
    likedMovies: movies,
    setLikedMovies: setMovies,
    likedMovieIds,
    setLikedMovieIds,
    isLoading,
    error,
  };
}
