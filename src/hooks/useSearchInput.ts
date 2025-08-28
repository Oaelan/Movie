import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function useSearchInput(searchQuery: string) {
  const locale = useLocale();
  const router = useRouter();
  const [query, setQuery] = useState(searchQuery);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${locale}/search?query=${query}`);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  return { query, setQuery, handleSubmit, handleChange };
}
