import { useState, useEffect } from "react";

export default function useLike(movieId: number) {
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

  return { isLiked, isMounted, handleLike };
}
