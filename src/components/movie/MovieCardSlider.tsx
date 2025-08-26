"use client";
import { Movie } from "@/lib/types/movie";
import { HTMLAttributes } from "react";
import MovieCard from "./MovieCard";
import SliderButton from "@/components/ui/SliderButton";
import Indicator from "@/components/ui/Indicator";
import useSlider from "@/hooks/useSlider";

interface MovieCardSliderProps extends HTMLAttributes<HTMLDivElement> {
  movies: Movie[];
  title: string;
}

export default function MovieCardSlider({
  movies,
  title,
}: MovieCardSliderProps) {
  //슬라이더에서 한번에 보여질 영화 포스터 갯수
  const moviesCount = 5;
  const {
    currentPage,
    setCurrentPage,
    totalPage,
    nextMovies,
    prevMovies,
    translateX,
    handleMouseEnter,
    handleMouseLeave,
  } = useSlider({
    moviesCount: moviesCount,
    movies,
    sliderWidth: 960,
  });

  return (
    <div
      className="flex flex-col gap-4 justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="rounded-full border border-border-accent px-4 py-2 text-2xl font-bold text-center text-text-secondary">
        {title}
      </div>
      <div className="flex items-center justify-center gap-4">
        <SliderButton direction="left" onClick={prevMovies} />
        <div className="overflow-hidden w-[960px] p-2">
          <div
            className="w-fit flex gap-4"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: "transform 700ms ease-in-out",
            }}
          >
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        <SliderButton direction="right" onClick={nextMovies} />
      </div>
      <Indicator
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
