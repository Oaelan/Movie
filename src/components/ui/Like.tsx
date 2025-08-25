"use client";
import useLike from "@/hooks/useLike";
import { ButtonHTMLAttributes } from "react";
import { FaHeart } from "react-icons/fa";

interface LikeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  movieId: number;
}

export default function Like({ className, movieId }: LikeProps) {
  const { isLiked, isMounted, handleLike } = useLike(movieId);
  if (!isMounted) {
    return (
      <button
        className={`${className} cursor-pointer transition-colors duration-500`}
        disabled
      >
        <FaHeart className="w-6 h-6 text-gray-500" />
      </button>
    );
  }

  return (
    <button
      className={`${className} cursor-pointer transition-colors duration-500`}
      onClick={handleLike}
    >
      <FaHeart
        className={`w-6 h-6 ${isLiked ? "text-red-500" : "text-gray-500"}`}
      />
    </button>
  );
}
