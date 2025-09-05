// src/providers/Providers.tsx
"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "@/context/ThemeContext";
import { Theme } from "@/context/ThemeContext";

interface ProvidersProps {
  children: React.ReactNode;
  theme: Theme;
}

export default function Providers({ children, theme }: ProvidersProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        retry: 3,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
