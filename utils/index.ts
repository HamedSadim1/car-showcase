import { CarProps, FilterProps } from "@/types";
import {
  RENTAL_BASE_PRICE_PER_DAY,
  RENTAL_MILEAGE_FACTOR,
  RENTAL_AGE_FACTOR,
  CAR_API_HOST,
  CAR_API_BASE_URL,
  IMAGIN_API_BASE_URL,
  DEFAULT_IMAGIN_API_KEY,
} from "@/constants";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const mileageRate = city_mpg * RENTAL_MILEAGE_FACTOR;
  const ageRate = (new Date().getFullYear() - year) * RENTAL_AGE_FACTOR;

  const rentalRatePerDay =
    RENTAL_BASE_PRICE_PER_DAY + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchCars(
  filters: FilterProps,
): Promise<CarProps[] | { message: string }> {
  const { manufacturer, year, model, limit, fuel } = filters;

  const apiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;
  if (!apiKey) {
    return { message: "API key not configured. Please set NEXT_PUBLIC_RAPID_API_KEY." };
  }

  const headers: HeadersInit = {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": CAR_API_HOST,
  };

  const queryParams = new URLSearchParams();
  if (manufacturer) queryParams.append("make", manufacturer);
  if (year) queryParams.append("year", year.toString());
  if (model) queryParams.append("model", model);
  if (limit) queryParams.append("limit", limit.toString());
  if (fuel) queryParams.append("fuel_type", fuel);

  try {
    const response = await fetch(
      `${CAR_API_BASE_URL}?${queryParams.toString()}`,
      { headers },
    );

    if (!response.ok) {
      return { message: `API error: ${response.status} ${response.statusText}` };
    }

    const result: CarProps[] | { message: string } = await response.json();

    return result;
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "Failed to fetch cars. Please try again later.",
    };
  }
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL(IMAGIN_API_BASE_URL);
  const { make, model, year } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || DEFAULT_IMAGIN_API_KEY,
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
