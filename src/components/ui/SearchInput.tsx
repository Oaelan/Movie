"use client";
import { InputHTMLAttributes, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput({
  placeholder = "영화를 검색하세요",
}: InputHTMLAttributes<HTMLInputElement>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
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

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={query}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-elevated border border-border rounded-lg
                  text-text placeholder-text-muted shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent
                  hover:border-border-accent hover:shadow-md
                  transition-all duration-200"
        onChange={handleChange}
      />
    </form>
  );
}
