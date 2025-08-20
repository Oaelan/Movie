interface MovieGenresProps {
  genres: Array<{
    id: number;
    name: string;
  }>;
}

export default function MovieGenres({ genres }: MovieGenresProps) {
  if (!genres || genres.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <span
          key={genre.id}
          className="px-3 py-1 bg-secondary text-text rounded-full text-sm border border-border"
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
}
