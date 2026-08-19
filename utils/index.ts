import { CarProps } from "@/types";
import {
  RENTAL_BASE_PRICE_PER_DAY,
  RENTAL_MILEAGE_FACTOR,
  RENTAL_AGE_FACTOR,
  IMAGIN_API_BASE_URL,
} from "@/constants";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const mileageRate = city_mpg * RENTAL_MILEAGE_FACTOR;
  const ageRate = (new Date().getFullYear() - year) * RENTAL_AGE_FACTOR;

  const rentalRatePerDay =
    RENTAL_BASE_PRICE_PER_DAY + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL(IMAGIN_API_BASE_URL);
  const { make, model, year } = car;

  const imaginCustomerId = process.env.NEXT_PUBLIC_IMAGIN_API_KEY;
  if (imaginCustomerId) {
    url.searchParams.append("customer", imaginCustomerId);
  }
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
