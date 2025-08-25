"use client";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

interface LikeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  movieId: number;
}
export default function Like({ className, movieId }: LikeProps) {
  const [isLiked, setIsLiked] = useState(() => {
    if (typeof window !== "undefined") {
      const storedLikes = localStorage.getItem("Likes");
      if (storedLikes) return JSON.parse(storedLikes).includes(movieId);
    }
    return false;
  });
  const [isMounted, setIsMounted] = useState(false);

  const handleLike = () => {
    const storedLikes = localStorage.getItem("Likes");
    const likes = storedLikes ? JSON.parse(storedLikes) : [];
    if (likes.includes(movieId)) {
      localStorage.setItem(
        "Likes",
        JSON.stringify(likes.filter((id: number) => id !== movieId))
      );
    } else {
      localStorage.setItem("Likes", JSON.stringify([...likes, movieId]));
    }
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
