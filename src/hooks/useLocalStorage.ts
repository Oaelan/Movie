import { useState } from "react";

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    }
    return [];
  });
  // 로컬스토리지 값 변경 시 상태 업데이트
  const updateValue = (newValue: []) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, updateValue];
};
