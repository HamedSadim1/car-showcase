import { Suspense } from "react";
import { DEFAULT_YEAR, DEFAULT_PAGE_LIMIT } from "@/constants";
import { Hero } from "@/components";
import SearchFilters from "@/components/search/SearchFilters";
import CarCatalogueSection from "@/components/car/CarCatalogueSection";
import SearchFiltersSkeleton from "@/components/search/SearchFiltersSkeleton";
import CarCatalogueSkeleton from "@/components/car/CarCatalogueSkeleton";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const filters = {
    manufacturer: (params.manufacturer as string) || "",
    year: Number(params.year as string) || DEFAULT_YEAR,
    fuel: (params.fuel as string) || "",
    limit: Number(params.limit as string) || DEFAULT_PAGE_LIMIT,
    model: (params.model as string) || "",
  };

  const limit = Number(params.limit as string) || DEFAULT_PAGE_LIMIT;

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

        <Suspense fallback={<SearchFiltersSkeleton />}>
          <SearchFilters />
        </Suspense>

        {/* Suspense rondom de async data-fetching sectie */}
        <Suspense fallback={<CarCatalogueSkeleton />}>
          <CarCatalogueSection filters={filters} limit={limit} />
        </Suspense>
      </div>
    </main>
  );
}
