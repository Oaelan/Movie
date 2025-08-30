"use client";
import Image from "next/image";
import { useState } from "react";

interface MoviePosterProps {
  posterUrl: string | null;
  title: string;
  imageLoadingText: string;
}

export default function MoviePoster({
  posterUrl,
  title,
  imageLoadingText,
}: MoviePosterProps) {
  const [imageError, setImageError] = useState(false);
  return (
    <div className="flex-shrink-0">
      {posterUrl && !imageError ? (
        <div className="w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={posterUrl}
            alt={title}
            width={320}
            height={480}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="w-80 h-96 bg-secondary rounded-lg flex items-center justify-center shadow-2xl">
          <p className="text-text-secondary text-center px-4">
            {imageLoadingText}
          </p>
        </div>
      )}
    </div>
  );
}
