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
        placeholder={translations("nav.search.placeholder")}
        className="search-input"
        onChange={handleChange}
      />
    </form>
  );
}
