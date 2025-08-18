import { HTMLAttributes } from "react";

interface IndicatorProps extends HTMLAttributes<HTMLDivElement> {
  totalPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Indicator({
  totalPage,
  currentPage,
  setCurrentPage,
}: IndicatorProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: totalPage }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index)}
          className={`w-2 h-2 rounded-full ${
            index === currentPage ? "bg-text" : "bg-secondary"
          } hover:bg-text border border-border p-2 transition-colors duration-200`}
        />
      ))}
    </div>
  );
}
