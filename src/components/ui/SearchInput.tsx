"use client";
import { useSearchParams } from "next/navigation";
import useSearchInput from "@/hooks/useSearchInput";

interface SearchInputProps {
  translations: {
    (key: string): string;
  };
}

export default function SearchInput({ translations }: SearchInputProps) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const { query, handleSubmit, handleChange } = useSearchInput(searchQuery);

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={query}
        placeholder={translations("search.placeholder")}
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
