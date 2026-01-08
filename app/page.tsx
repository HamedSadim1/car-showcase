import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@/components";

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
    year: Number(params.year as string) || 2022,
    fuel: (params.fuel as string) || "",
    limit: Number(params.limit as string) || 10,
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
          <p>Explore out cars you might like</p>
        </div>

        {/* Zoekfilters */}
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

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
              pageNumber={(Number(params.limit as string) || 10) / 10}
              isNext={(Number(params.limit as string) || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{(allCars as any)?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
