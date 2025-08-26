"use client";
import useFavorites from "@/hooks/useFavorites";
import {
  LoadingState,
  ErrorState,
  FavoritesHeader,
  FavoritesList,
} from "@/components";

export default function FavoritesPage() {
  const { likedMovies, isLoading, error } = useFavorites();

  if (isLoading) {
    return <LoadingState message="좋아요 목록을 불러오는 중..." />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <div className="min-h-screen bg-primary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <FavoritesHeader count={likedMovies.length} />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
          <FavoritesList movies={likedMovies} />
        </div>
      </div>
    </div>
  );
}
