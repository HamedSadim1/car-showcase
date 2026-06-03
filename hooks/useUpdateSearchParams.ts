"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export function useUpdateSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Store searchParams in a ref so callbacks always read the latest value
  // without being recreated on every URL change.
  const searchParamsRef = useRef(searchParams);
  useEffect(() => {
    searchParamsRef.current = searchParams;
  });

  const updateSearchParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParamsRef.current.toString());
      params.set(key, value);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname],
  );

  const setMultipleParams = useCallback(
    (entries: [string, string][]) => {
      const params = new URLSearchParams(searchParamsRef.current.toString());
      entries.forEach(([key, value]) => params.set(key, value));
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname],
  );

  const deleteSearchParams = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParamsRef.current.toString());
      params.delete(key);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname],
  );

  return { updateSearchParams, setMultipleParams, deleteSearchParams, searchParams };
}
