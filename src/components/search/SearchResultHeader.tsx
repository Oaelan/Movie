interface SearchResultHeaderProps {
  searchQuery: string;
  resultCount: number;
}

export default function SearchResultHeader({
  searchQuery,
  resultCount,
}: SearchResultHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-text mb-2">
        &ldquo;{searchQuery}&rdquo; 검색 결과
      </h1>
      <p className="text-text-muted">{resultCount}개의 영화를 찾았습니다.</p>
    </div>
  );
}
