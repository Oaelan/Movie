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
  const t = useTranslations("favorites");
  const { likedMovies, isLoading, error } = useFavorites();

  if (error) {
    return <ErrorState error={error} message={t("error")} />;
  }
  if (isLoading) {
    return <LoadingState message={t("loading")} />;
  }
  return (
    <div className="min-h-screen bg-primary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <FavoritesHeader count={likedMovies.length} translations={t} />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
          <FavoritesList movies={likedMovies} translations={t} />
        </div>
      </div>
    </div>
  );
}
