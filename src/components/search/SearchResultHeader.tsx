interface SearchResultHeaderProps {
  searchQuery: string;
  resultCount: number;
  translations: {
    (key: string): string;
  };
}

export default function SearchResultHeader({
  searchQuery,
  resultCount,
  translations,
}: SearchResultHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-text mb-2">
        &ldquo;{searchQuery}&rdquo; {translations("search.results")}
      </h1>
      <p className="text-text-muted">
        {resultCount} {translations("search.find")}
      </p>
    </div>
  );
}
