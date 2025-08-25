"use client";
import MovieCard from "@/components/movie/MovieCard";
import useFavorites from "@/hooks/useFavorites";

export default function FavoritesPage() {
  const { likedMovies } = useFavorites();

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
