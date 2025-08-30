interface MovieOverviewProps {
  overview: string;
  translations: {
    (key: string): string;
  };
}

export default function MovieOverview({
  overview,
  translations,
}: MovieOverviewProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-text">
        {translations("movie.overview")}
      </h2>
      <p className="text-text leading-relaxed">
        {overview || translations("movie.noOverview")}
      </p>
    </div>
  );
}
