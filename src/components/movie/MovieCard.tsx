"use client";

import Image from "next/image";
import Rating from "./Rating";
import Link from "next/link";
import { Movie } from "@/lib/types/movie";
import { LinkHTMLAttributes } from "react";

interface MovieCardProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  movie: Movie;
}

export default function MovieCard({ movie, ...props }: MovieCardProps) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
  // TMDB 이미지 URL 생성
  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}/w500${movie.poster_path}`
    : null;

  return (
    <Link
      {...props}
      href={`/movie/${movie.id}`}
      className="relative w-44 h-76 rounded-lg border-1 border-border-accent
    overflow-hidden flex flex-col justify-center items-center
      pb-4 gap-1 hover:scale-105 transition-all duration-1000 ease-linear cursor-pointer"
    >
      <Rating
        vote_average={movie.vote_average}
        className="absolute top-2 left-2 z-10"
      />
      {posterUrl ? (
        <Image
          src={posterUrl}
          alt={movie.title}
          width={100}
          height={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-secondary flex items-center justify-center">
          <p className="text-text-secondary text-sm text-center px-2">
            이미지 준비중
          </p>
        </div>
      )}
      <div className="flex flex-col gap-1 justify-center items-center w-full px-2">
        <h3 className="text-sm font-bold text-text truncate w-full text-center">
          {movie.title}
        </h3>
        <p className="text-xs text-text-muted truncate w-full text-center">
          {movie.release_date}
        </p>
      </div>
    </Link>
  );
}
