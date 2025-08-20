interface MovieProductionProps {
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
}

export default function MovieProduction({
  production_companies,
}: MovieProductionProps) {
  if (!production_companies || production_companies.length === 0) return null;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-text">제작사</h2>
      <div className="flex flex-wrap gap-2">
        {production_companies.map((company) => (
          <span
            key={company.id}
            className="px-3 py-1 bg-secondary text-text rounded-full text-sm border border-border"
          >
            {company.name}
          </span>
        ))}
      </div>
    </div>
  );
}
