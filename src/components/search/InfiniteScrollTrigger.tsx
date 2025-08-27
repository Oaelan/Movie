"use client";
import { useEffect, useRef } from "react";
import { LoadingState } from "..";
interface InfiniteScrollTriggerProps {
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
}
export default function InfiniteScrollTrigger({
  onLoadMore,
  hasMore,
  isLoading,
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
        threshold: 0.1,
        rootMargin: "100px",
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
          <LoadingState message="더 많은 영화를 불러오는 중..." />
        ) : (
          <div className="h-4" />
        )}
      </div>
    )
  );
}
