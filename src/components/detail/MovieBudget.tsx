import { DetailMovie } from "@/lib/types/movie";

interface MovieBudgetProps {
  movie: DetailMovie;
  translations: {
    (key: string): string;
  };
}

export default function MovieBudget({ movie, translations }: MovieBudgetProps) {
  if (movie.budget <= 0 && movie.revenue <= 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {movie.budget > 0 && (
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-text">
            {translations("movie.budget")}
          </h3>
          <p className="text-text-muted">${movie.budget.toLocaleString()}</p>
        </div>
      )}
      {movie.revenue > 0 && (
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-text">
            {translations("movie.revenue")}
          </h3>
          <p className="text-text-muted">${movie.revenue.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
