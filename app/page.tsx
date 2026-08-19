import { Suspense } from "react";
import { DEFAULT_YEAR, DEFAULT_PAGE_LIMIT } from "@/constants";
import { Hero } from "@/components";
import SearchFilters from "@/components/search/SearchFilters";
import CarCatalogueSection from "@/components/car/CarCatalogueSection";
import CarCatalogueSkeleton from "@/components/car/CarCatalogueSkeleton";

export const dynamic = "force-dynamic";

const getFirstSearchParam = (
  value: string | string[] | undefined,
): string => (Array.isArray(value) ? value[0] : value) || "";

const getIntegerSearchParam = (
  value: string | string[] | undefined,
  fallback: number,
): number => {
  const parsed = Number.parseInt(getFirstSearchParam(value), 10);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const requestedLimit = getIntegerSearchParam(
    params.limit,
    DEFAULT_PAGE_LIMIT,
  );
  const limit = Math.min(Math.max(requestedLimit, DEFAULT_PAGE_LIMIT), 50);

  const filters = {
    manufacturer: getFirstSearchParam(params.manufacturer),
    year: getIntegerSearchParam(params.year, DEFAULT_YEAR),
    fuel: getFirstSearchParam(params.fuel),
    limit,
    model: getFirstSearchParam(params.model),
  };

  return (
    <main className="overflow-hidden">
      {/* Hero sectie - statisch, rendert direct */}
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {/* Titel en beschrijving - statisch, rendert direct */}
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore our cars you might like</p>
        </div>

        {/* SearchFilters - statisch, rendert direct */}
        <SearchFilters />

        {/* Suspense rondom de async data-fetching sectie */}
        <Suspense fallback={<CarCatalogueSkeleton />}>
          <CarCatalogueSection filters={filters} limit={limit} />
        </Suspense>
      </div>
    </main>
  );
}
