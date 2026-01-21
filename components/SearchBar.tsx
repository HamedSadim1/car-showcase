"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import SearchManufacturer from "./SearchManufacturer";

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

  const setManuFacturer = (value: string | null) => {
    setManufacturerState(value || "");
  };

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = () => {
    console.log("handleSearch called", { manufacturer, model });
    if (manufacturer.trim() === "" && model.trim() === "") {
      console.log("handleSearch: empty input");
      return alert("Please provide some input");
    }

    updateSearchParams(model, manufacturer);
  };

  const updateSearchParams = async (model: string, manufacturer: string) => {
    // Build a mutable URLSearchParams from the readonly searchParams
    const newSearchParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    );

    if (model) {
      newSearchParams.set("model", model);
    } else {
      newSearchParams.delete("model");
    }

    if (manufacturer) {
      newSearchParams.set("manufacturer", manufacturer);
    } else {
      newSearchParams.delete("manufacturer");
    }

    // Keep the same pathname to ensure correct route; use absolute path for reliability
    const pathname = window.location.pathname || "/";
    const to = `${pathname}?${newSearchParams.toString()}`;
    console.log("updateSearchParams -> pushing", to);
    try {
      await router.push(to);
    } catch (err) {
      console.error("router.push error", err);
    }
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
