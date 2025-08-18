"use client";

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  vote_average: number;
}

export default function Rating({
  vote_average,
  className,
  ...props
}: RatingProps) {
  // 퍼센트 계산
  const percentage = (vote_average / 10) * 100;

  // 평점에 따른 색상 결정
  const getRatingColor = (rating: number) => {
    if (rating >= 6.0) return "#ffd700"; // 만점: 노란색
    if (rating >= 4.5) return "#22c55e"; // 3.0 이상: 초록색
    return "#ef4444"; // 3.0 미만: 빨간색
  };

  const ratingColor = getRatingColor(vote_average);

  // 원형 프로그레스 바 계산
  const circleRadius = 20;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDasharray = circleCircumference;
  const strokeDashoffset =
    circleCircumference - (percentage / 100) * circleCircumference;

  return (
    <div
      {...props}
      className={`w-12 h-12 font-bold text-white rounded-full ${className} rating_bg`}
    >
      {/* 배경 원 */}
      <svg
        className="absolute inset-0 w-full h-full transform -rotate-90"
        viewBox="0 0 44 44"
      >
        <circle
          cx="22"
          cy="22"
          r={circleRadius}
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="3"
          fill="none"
        />
        {/* 프로그레스 원 */}
        <circle
          cx="22"
          cy="22"
          r={circleRadius}
          stroke={ratingColor}
          strokeWidth="3"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-5000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex justify-center items-center">
        <span className="text-sm font-bold text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)] shadow-black">
          {vote_average.toFixed(1)}
        </span>
      </div>
    </div>
  );
}
