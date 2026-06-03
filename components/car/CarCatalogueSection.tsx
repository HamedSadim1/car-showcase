import { fetchCars } from "@/utils";
import { CarCard, ShowMore } from "@/components";
import { DEFAULT_PAGE_LIMIT } from "@/constants";

interface CarCatalogueSectionProps {
  filters: {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
  };
  limit: number;
}

export default async function CarCatalogueSection({
  filters,
  limit,
}: CarCatalogueSectionProps) {
  const allCars = await fetchCars(filters);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  if (isDataEmpty) {
    return (
      <div className="home__error-container">
        <h2 className="text-black text-xl font-bold">Oops, no results</h2>
        <p>{(allCars as { message?: string })?.message}</p>
      </div>
    );
  }

  return (
    <section>
      <div className="home__cars-wrapper">
        {allCars?.map((car, i) => (
          <CarCard key={i} car={car} />
        ))}
      </div>

      <ShowMore
        pageNumber={limit / DEFAULT_PAGE_LIMIT}
        isNext={limit > allCars.length}
      />
    </section>
  );
}
