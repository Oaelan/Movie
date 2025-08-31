import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useLocale } from "next-intl";
import { useQueryClient } from "@tanstack/react-query"; // 추가

export default function useLike(movieId: number) {
  const locale = useLocale();
  const queryClient = useQueryClient();
  const [likes, updateStorage] = useLocalStorage("Likes");
  const [isLiked, setIsLiked] = useState(() => {
    if (typeof window !== "undefined") {
      if (likes.indexOf(movieId) !== -1) return true;
    }
    return false;
  });
  const [isMounted, setIsMounted] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      updateStorage(likes.filter((id: number) => id !== movieId));
      queryClient.removeQueries({ queryKey: ["likes", movieId, locale] });
    } else {
      updateStorage([...likes, movieId]);
    }
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return { isLiked, isMounted, handleLike };
}
