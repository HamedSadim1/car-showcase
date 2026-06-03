import { Suspense } from "react";
import { fetchCars } from "@/utils";
import { DEFAULT_YEAR, DEFAULT_PAGE_LIMIT } from "@/constants";
import { CarCard, ShowMore, Hero } from "@/components";
import SearchFilters from "@/components/search/SearchFilters";

export const dynamic = "force-dynamic";

// Server Component voor de home pagina
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Wacht op de zoekparameters
  const params = await searchParams;

  // Bouw parameters voor de API call
  const filters = {
    manufacturer: (params.manufacturer as string) || "",
    year: Number(params.year as string) || DEFAULT_YEAR,
    fuel: (params.fuel as string) || "",
    limit: Number(params.limit as string) || DEFAULT_PAGE_LIMIT,
    model: (params.model as string) || "",
  };

  // Haal auto's op van de API
  const allCars = await fetchCars(filters);

  // Controleer of de data leeg is
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      {/* Hero sectie */}
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {/* Titel en beschrijving */}
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore our cars you might like</p>
        </div>

        <Suspense>
          {/* Zoekfilters */}
          <SearchFilters />

          {/* Conditionele rendering gebaseerd op data */}
          {!isDataEmpty ? (
            <section>
              {/* Lijst van auto's */}
              <div className="home__cars-wrapper">
                {allCars?.map((car, i) => (
                  <CarCard key={i} car={car} />
                ))}
              </div>

              {/* Meer tonen component */}
              <ShowMore
                pageNumber={(Number(params.limit as string) || DEFAULT_PAGE_LIMIT) / DEFAULT_PAGE_LIMIT}
                isNext={(Number(params.limit as string) || DEFAULT_PAGE_LIMIT) > allCars.length}
              />
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{(allCars as { message?: string })?.message}</p>
            </div>
          )}
        </Suspense>
      </div>
    </main>
  );
}
