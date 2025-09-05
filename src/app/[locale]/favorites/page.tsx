"use client";
import {
  LoadingState,
  ErrorState,
  FavoritesHeader,
  FavoritesList,
} from "@/components";
import { useTranslations } from "next-intl";
import useFavorites from "@/hooks/useFavorites";

export default function FavoritesPage() {
  const translations = useTranslations("");
  const { likes, error, isLoading, toggleLike } = useFavorites();

  if (error) {
    return <ErrorState message={translations("favorites.error")} />;
  }
  if (isLoading) {
    return <LoadingState message={translations("favorites.loading")} />;
  }
  return (
    <div className="min-h-screen bg-primary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <FavoritesHeader count={likes.length} translations={translations} />
        <div className="movie-grid">
          <FavoritesList
            isLoading={isLoading}
            movies={likes}
            translations={translations}
            toggleLike={toggleLike}
          />
        </div>
      </div>
    </div>
  );
}
