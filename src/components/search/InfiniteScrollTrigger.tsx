"use client";
import { useEffect, useRef } from "react";
import { LoadingState } from "..";
interface InfiniteScrollTriggerProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetching: boolean;
  translations: {
    (key: string): string;
  };
}
export default function InfiniteScrollTrigger({
  fetchNextPage,
  hasNextPage,
  isFetching,
  translations,
}: InfiniteScrollTriggerProps) {
  // 무한 스크롤 트리거 영역
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // hasMore가 false면 옵저버 설정하지 않음
    if (!hasNextPage) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
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
  }, [fetchNextPage, hasNextPage]);

  return (
    hasNextPage && (
      <div ref={observerRef} className="flex justify-center py-4">
        {isFetching ? (
          <LoadingState message={translations("search.loadingMore")} />
        ) : (
          <div className="h-4" />
        )}
      </div>
    )
  );
}
