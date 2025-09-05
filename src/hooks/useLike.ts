import { useState, useEffect } from "react";
import { getLocalStorage, updateLocalStorage } from "@/lib/utils/localStorage";

export default function useLike(movieId: number, likes: number[]) {
  const [isLiked, setIsLiked] = useState(() => {
    if (typeof window !== "undefined") {
      if (likes.indexOf(movieId) !== -1) return true;
    }
    return false;
  });
  const [isMounted, setIsMounted] = useState(false);

  const handleLike = () => {
    const currentLikes = getLocalStorage("Likes");
    if (isLiked) {
      updateLocalStorage(
        "Likes",
        currentLikes.filter((id: number) => id !== movieId)
      );
    } else {
      updateLocalStorage("Likes", [...currentLikes, movieId]);
    }
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return { isLiked, isMounted, handleLike };
}
