"use client";

import SearchBar from "./SearchBar";
import CustomFilter from "./CustomFilter";
import { fuels, yearsOfProduction } from "@/constants";

export default function SearchFilters() {
  return (
    <div className="home__filters">
      <SearchBar />

      <div className="home__filter-container">
        <CustomFilter title="fuel" options={fuels} />
        <CustomFilter title="year" options={yearsOfProduction} />
      </div>
    </div>
  );
}
