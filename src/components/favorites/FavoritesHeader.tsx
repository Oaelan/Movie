interface FavoritesHeaderProps {
  count: number;
}

export default function FavoritesHeader({ count }: FavoritesHeaderProps) {
  return (
    <h1 className="text-3xl text-center font-bold text-text mb-8">
      좋아요 목록 {`(${count}개)`}
    </h1>
  );
}
