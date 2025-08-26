"use client";
import { useState, useEffect } from "react";

export default function useFetch<ResponseType, ParamsType>(
  apiFn: (params: ParamsType) => Promise<ResponseType>,
  params: ParamsType
) {
  const [data, setData] = useState<ResponseType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // 파라미터가 항상 있으므로 단순화
        const result = await apiFn(params);
        setData(result);
      } catch (error) {
        setError("데이터 로딩 중 오류가 발생했습니다.");
        console.error("Fetch 오류:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiFn, params]);

  return { data, isLoading, error };
}
