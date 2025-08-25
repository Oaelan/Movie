import { useState } from "react";
import { useRouter } from "next/navigation";

export default function useSearchInput(searchQuery: string) {
  const router = useRouter();
  const [query, setQuery] = useState(searchQuery);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return { query, setQuery, handleSubmit, handleChange };
}
