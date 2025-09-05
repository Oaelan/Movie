"use client";
import useLike from "@/hooks/useLike";
import { ButtonHTMLAttributes } from "react";
import { FaHeart } from "react-icons/fa";
import { getLocalStorage } from "@/lib/utils/localStorage";

interface LikeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  movieId: number;
  onClick?: () => void;
}

export default function Like({ movieId, onClick }: LikeProps) {
  const likes = getLocalStorage("Likes");
  const { isLiked, isMounted, handleLike } = useLike(movieId, likes);
  if (!isMounted) {
    return (
      <button
        className="cursor-pointer transition-colors duration-500"
        disabled
      >
        <FaHeart className="w-6 h-6 text-gray-500" />
      </button>
    );
  }

  return (
    <button
      className="cursor-pointer transition-colors duration-500"
      onClick={onClick ? onClick : handleLike}
    >
      <FaHeart
        className={`w-6 h-6 ${isLiked ? "text-red-500" : "text-gray-500"}`}
      />
    </button>
  );
}
