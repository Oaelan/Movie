import { getMovieDetail } from "@/lib/api/movieApi";
import { useState, useEffect } from "react";
import { Movie } from "@/lib/types/movie";

export default function useFavorites() {
  const [likedMovies, setLikedMovies] = useState<Movie[]>([]);
  //로컬스토리지에 저장된 좋아요 목록 가져오기
  const getLikedMovieIds = (): string[] => {
    if (typeof window !== "undefined") {
      const likes = localStorage.getItem("Likes");
      return likes ? JSON.parse(likes) : [];
    }
    return [];
  };
  useEffect(() => {
    //좋아요 목록 영화 데이터 가져오기
    const fetchLikedMovies = async () => {
      //좋아요 목록으로 영화 데이터 가져오기
      const likedMovieIds = getLikedMovieIds();
      const likedMovies: Movie[] = await Promise.all(
        likedMovieIds.map((id) => getMovieDetail(id))
      );
      setLikedMovies(likedMovies);
    };
    fetchLikedMovies();
  }, []);
  return { likedMovies, setLikedMovies };
}
