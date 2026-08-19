import { CarProps, FilterProps } from "@/types";
import { CAR_API_BASE_URL, CAR_API_HOST } from "@/constants";

const MAX_QUERY_TEXT_LENGTH = 100;
const MAX_RESULTS = 50;
const MIN_YEAR = 1900;

const normalizeText = (value: string | undefined) =>
  value?.trim().slice(0, MAX_QUERY_TEXT_LENGTH) || "";

const normalizeYear = (year: number | undefined) => {
  const currentYear = new Date().getFullYear() + 1;

  return year && Number.isInteger(year) && year >= MIN_YEAR && year <= currentYear
    ? year
    : undefined;
};

const normalizeLimit = (limit: number | undefined) => {
  if (!limit || !Number.isInteger(limit)) {
    return 10;
  }

  return Math.min(Math.max(limit, 1), MAX_RESULTS);
};

export async function fetchCars(
  filters: FilterProps,
): Promise<CarProps[] | { message: string }> {
  const queryParams = new URLSearchParams();
  const manufacturer = normalizeText(filters.manufacturer);
  const model = normalizeText(filters.model);
  const fuel = normalizeText(filters.fuel);
  const year = normalizeYear(filters.year);
  const limit = normalizeLimit(filters.limit);
  const apiKey = process.env.RAPID_API_KEY;

  if (!apiKey) {
    return { message: "Car search is temporarily unavailable." };
  }

  if (manufacturer) queryParams.set("make", manufacturer);
  if (year) queryParams.set("year", year.toString());
  if (model) queryParams.set("model", model);
  queryParams.set("limit", limit.toString());
  if (fuel) queryParams.set("fuel_type", fuel);

  try {
    const response = await fetch(
      `${CAR_API_BASE_URL}?${queryParams.toString()}`,
      {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": CAR_API_HOST,
        },
        signal: AbortSignal.timeout(10_000),
      },
    );

    if (!response.ok) {
      return { message: `Car search failed (${response.status}).` };
    }

    const result: unknown = await response.json();

    if (!Array.isArray(result)) {
      return { message: "Car search returned an invalid response." };
    }

    return result as CarProps[];
  } catch {
    return { message: "Unable to load cars right now. Please try again later." };
  }
}
