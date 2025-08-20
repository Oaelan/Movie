interface MovieOverviewProps {
  overview: string;
}

export default function MovieOverview({ overview }: MovieOverviewProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-text">줄거리</h2>
      <p className="text-text leading-relaxed">
        {overview || "줄거리 정보가 없습니다."}
      </p>
    </div>
  );
}
