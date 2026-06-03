"use client";

import Image from "next/image";
import React, { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

const SearchButton = ({
  otherClasses,
  handleClick,
}: {
  otherClasses: string;
  handleClick?: () => void;
}) => (
  <button
    type="button"
    className={`-ml-3 z-10 ${otherClasses}`}
    onClick={handleClick}
  >
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturerState] = useState("");
  const [model, setModel] = useState("");
  const { setMultipleParams } = useUpdateSearchParams();

  const setManuFacturer = (value: string | null) => {
    setManufacturerState(value || "");
  };

  const handleSearch = () => {
    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    const params: [string, string][] = [];
    if (model) params.push(["model", model]);
    if (manufacturer) params.push(["manufacturer", manufacturer]);
    if (params.length > 0) setMultipleParams(params);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClasses="sm:hidden" handleClick={handleSearch} />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" handleClick={handleSearch} />
      </div>
      <SearchButton otherClasses="max-sm:hidden" handleClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
