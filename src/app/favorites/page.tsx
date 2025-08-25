"use client";

import { Movie } from "@/lib/types/movie";
import { getMovieDetail } from "@/lib/api/movieApi";
import { useEffect, useState } from "react";
import MovieCard from "@/components/movie/MovieCard";

export default function FavoritesPage() {
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

  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-text mb-8">
        좋아요 목록 {`(${likedMovies.length + "개"})`}
      </h1>
      <div className="grid grid-cols md:grid-cols-4 lg:grid-cols-6 gap-y-10 justify-items-center">
        {likedMovies.length === 0 ? (
          <div className="col-span-full text-center py-20">
            <p className="text-text-muted text-lg mb-4">
              좋아요 목록이 비어있습니다.
            </p>
            <p className="text-text-secondary">
              영화를 검색하고 좋아요를 눌러보세요!
            </p>
          </div>
        ) : (
          likedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} className="" />
          ))
        )}
      </div>
    </div>
  );
}
