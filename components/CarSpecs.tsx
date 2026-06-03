import { memo } from "react";
import { CarProps } from "@/types";

interface CarSpecsProps {
  car: CarProps;
}

const CarSpecs = ({ car }: CarSpecsProps) => (
  <div className="flex-1 flex flex-col gap-2">
    <h2 className="font-semibold text-xl capitalize">
      {car.make} {car.model}
    </h2>

    <div className="mt-3 flex flex-wrap gap-4">
      {Object.entries(car).map(([key, value]) => (
        <div
          className="flex justify-between gap-5 w-full text-right"
          key={key}
        >
          <h4 className="text-grey capitalize">
            {key.split("_").join(" ")}
          </h4>
          <p className="text-black-100 font-semibold">{String(value)}</p>
        </div>
      ))}
    </div>
  </div>
);

export default memo(CarSpecs);
