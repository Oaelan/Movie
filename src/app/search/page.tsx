"use client";
import { useSearchParams } from "next/navigation";
import { getSearchMovies } from "@/lib/api/movieApi";
import { useEffect, useState } from "react";
import { Movie } from "@/lib/types/movie";
import { MovieCard } from "@/components";

export default function SearchPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchQuery.trim()) {
        setMovies([]);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const res = await getSearchMovies(searchQuery);
        setMovies(res.results);
      } catch (err) {
        setError("검색 중 오류가 발생했습니다.");
        console.error("검색 오류:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <p className="text-text-muted text-lg">검색 중...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-primary pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <p className="text-red-500 text-lg mb-4">{error}</p>
            <p className="text-text-secondary">다시 시도해주세요.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* 검색 결과 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text mb-2">
            &ldquo;{searchQuery}&rdquo; 검색 결과
          </h1>
          <p className="text-text-muted">
            {movies.length}개의 영화를 찾았습니다.
          </p>
        </div>

        {/* 검색 결과 */}
        {movies.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-text-muted text-lg mb-4">
              &ldquo;{searchQuery}&rdquo;에 대한 검색 결과가 없습니다.
            </p>
            <p className="text-text-secondary">다른 키워드로 검색해보세요.</p>
          </div>
        ) : (
          <div className="grid grid-cols md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
