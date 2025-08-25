import { Movie } from "@/lib/types/movie";
import { useState, useEffect } from "react";

interface UseSliderProps {
  moviesCount: number;
  movies: Movie[];
  sliderWidth: number;
}
export default function useSlider({
  moviesCount,
  movies,
  sliderWidth,
}: UseSliderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = Math.ceil(movies.length / moviesCount);
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  // 2. 슬라이드 간격 설정 (예: 3초)
  const slideInterval = 3000;

  // TODO: 마우스 호버 시 자동 슬라이드 일시정지
  const handleMouseEnter = () => {
    setIsAutoSlide(false);
  };
  const handleMouseLeave = () => {
    setIsAutoSlide(true);
  };

  const translateX = currentPage * sliderWidth;

  const nextMovies = () => {
    // 마지막 페이지에서 다음으로 가면 첫 페이지로
    if (currentPage >= totalPage - 1) setCurrentPage(0);
    else setCurrentPage(currentPage + 1);
  };
  const prevMovies = () => {
    // 첫 페이지에서 이전으로 가면 마지막 페이지로
    if (currentPage <= 0) setCurrentPage(totalPage - 1);
    else setCurrentPage(currentPage - 1);
  };
  useEffect(() => {
    if (isAutoSlide) {
      const timer = setInterval(nextMovies, slideInterval);
      return () => clearInterval(timer);
    }
  }, [isAutoSlide, nextMovies, slideInterval]);
  return {
    currentPage,
    setCurrentPage,
    totalPage,
    nextMovies,
    prevMovies,
    translateX,
    isAutoSlide,
    handleMouseEnter,
    handleMouseLeave,
    slideInterval,
  };
}
