"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useUpdateSearchParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateSearchParams = useCallback(
    (key: string, value: string) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, value);
      router.push(`?${newSearchParams.toString()}`);
    },
    [router, searchParams],
  );

  const setMultipleParams = useCallback(
    (params: [string, string][]) => {
      const newSearchParams = new URLSearchParams(searchParams);
      params.forEach(([key, value]) => newSearchParams.set(key, value));
      router.push(`?${newSearchParams.toString()}`);
    },
    [router, searchParams],
  );

  const deleteSearchParams = useCallback(
    (key: string) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete(key);
      router.push(`?${newSearchParams.toString()}`);
    },
    [router, searchParams],
  );

  return { updateSearchParams, setMultipleParams, deleteSearchParams, searchParams };
}
