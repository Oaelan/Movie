"use client";
import { useEffect, useRef } from "react";
import { LoadingState } from "..";
interface InfiniteScrollTriggerProps {
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
  translations: {
    (key: string): string;
  };
}
export default function InfiniteScrollTrigger({
  onLoadMore,
  hasMore,
  isLoading,
  translations,
}: InfiniteScrollTriggerProps) {
  // 무한 스크롤 트리거 영역
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // hasMore가 false면 옵저버 설정하지 않음
    if (!hasMore) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      {
        threshold: 0.3,
      }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [onLoadMore, hasMore]);

  return (
    hasMore && (
      <div ref={observerRef} className="flex justify-center py-4">
        {isLoading ? (
          <LoadingState message={translations("search.loadingMore")} />
        ) : (
          <div className="h-4" />
        )}
      </div>
    )
  );
}
