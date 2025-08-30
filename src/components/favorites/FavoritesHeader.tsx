interface FavoritesHeaderProps {
  count: number;
  translations: {
    (key: string): string;
  };
}

export default function FavoritesHeader({
  count,
  translations,
}: FavoritesHeaderProps) {
  return (
    <h1 className="text-3xl text-center font-bold text-text mb-8">
      {translations("favorites.title")} {`(${count})`}
    </h1>
  );
}
