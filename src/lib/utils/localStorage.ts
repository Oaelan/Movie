export const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  }
  return [];
};
export const updateLocalStorage = (key: string, value: number[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};
