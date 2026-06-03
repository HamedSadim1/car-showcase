"use client";

import { useState } from "react";
import Image from "next/image";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@/types";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function CustomFilter({ title, options }: CustomFilterProps) {
  const { updateSearchParams } = useUpdateSearchParams();
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          updateSearchParams(title, e.value.toLowerCase());
        }}
      >
        <div className="relative w-fit z-10">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron_up-down"
            />
          </ListboxButton>
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="custom-filter__options">
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  className="relative cursor-default select-none py-2 px-4 data-[selected]:bg-primary-blue data-[selected]:text-white text-gray-900"
                  value={option}
                >
                  <span className="block truncate font-normal data-[selected]:font-medium">
                    {option.title}
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
