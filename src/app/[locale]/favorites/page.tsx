"use client";
import useFavorites from "@/hooks/useFavorites";
import {
  LoadingState,
  ErrorState,
  FavoritesHeader,
  FavoritesList,
} from "@/components";
import { useTranslations } from "next-intl";

export default function FavoritesPage() {
  const translations = useTranslations("");
  const { likedMovies, isLoading, error } = useFavorites();

  if (error) {
    return <ErrorState message={translations("favorites.error")} />;
  }
  if (isLoading) {
    return <LoadingState message={translations("favorites.loading")} />;
  }
  return (
    <div className="min-h-screen bg-primary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <FavoritesHeader
          count={likedMovies.length}
          translations={translations}
        />
        <div className="movie-grid">
          <FavoritesList movies={likedMovies} translations={translations} />
        </div>
      </div>
    </div>
  );
}
