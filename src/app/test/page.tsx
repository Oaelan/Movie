"use client";
import { useEffect, useState } from "react";

export default function MyComponent() {
  const [percentage, setPercentage] = useState(0);

  // 5점 만점 기준 (예: 4.2점)
  const vote_average = 4.2;

  useEffect(() => {
    // 애니메이션 효과
    const timer = setTimeout(() => {
      setPercentage((vote_average / 5) * 100);
    }, 100);

    return () => clearTimeout(timer);
  }, [vote_average]);

  // 원형 프로그레스 바 계산
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="relative w-12 h-12">
        {/* 배경 원 */}
        <svg
          className="absolute inset-0 w-full h-full transform -rotate-90"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r={radius}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="3"
            fill="none"
          />
          {/* 프로그레스 원 */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            stroke="#ffd700"
            strokeWidth="3"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* 평점 텍스트 */}
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-sm font-bold text-text">{vote_average}</span>
        </div>
      </div>
    </div>
  );
}
