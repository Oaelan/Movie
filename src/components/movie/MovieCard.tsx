"use client";

import Image from "next/image";
import Rating from "./Rating";
import Link from "next/link";
import { Movie } from "@/lib/types/movie";
import { LinkHTMLAttributes } from "react";
import Like from "@/components/ui/Like";
import { getImageUrl } from "@/lib/utils/imageUtils";
import { useLocale, useTranslations } from "next-intl";

interface MovieCardProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  movie: Movie;
}

export default function MovieCard({ movie, ...props }: MovieCardProps) {
  // TMDB 이미지 URL 생성
  const posterUrl = getImageUrl(movie.poster_path, "w500") || null;
  const locale = useLocale();
  const t = useTranslations("movie");
  return (
    <Link
      {...props}
      href={`/${locale}/movies/${movie.id}`}
      className="relative w-44 h-76 rounded-lg border-1 border-border-accent
    overflow-hidden flex flex-col justify-center items-center
      pb-4 gap-1 hover:scale-105 transition-all duration-1000 ease-linear cursor-pointer"
    >
      <div className="absolute top-2 left-2 z-10">
        <Rating vote_average={movie.vote_average} />
      </div>
      <div className="absolute top-2 right-2 z-10">
        <Like movieId={movie.id} />
      </div>
      {posterUrl ? (
        <div className="w-full h-64 flex-shrink-0">
          <Image
            src={posterUrl}
            alt={movie.title}
            width={176}
            height={256}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-64 flex-shrink-0 bg-secondary flex items-center justify-center">
          <p className="text-text-secondary text-sm text-center px-2">
            {t("imageLoading")}
          </p>
        </div>
      )}
      <div className="flex flex-col gap-1 justify-center items-center w-full pt-1 px-2">
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
