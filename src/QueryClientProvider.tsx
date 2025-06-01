"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryProviders = ({ children }: { children: React.ReactNode }) => {
  // Initialize QueryClient only once per session
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 60_000 },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {/* Hydrate state if you server-render queries */}
      {children}
    </QueryClientProvider>
  );
};

export default QueryProviders;
