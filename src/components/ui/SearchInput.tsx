"use client";
import { InputHTMLAttributes } from "react";
import { useSearchParams } from "next/navigation";
import useSearchInput from "@/hooks/useSearchInput";

export default function SearchInput({
  placeholder = "영화를 검색하세요",
}: InputHTMLAttributes<HTMLInputElement>) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const { query, handleSubmit, handleChange } = useSearchInput(searchQuery);

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
