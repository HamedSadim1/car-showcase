import Image from "next/image";
import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utils";
import { CAR_THUMBNAIL_ANGLES } from "@/constants";

interface CarThumbnailsProps {
  car: CarProps;
}

const CarThumbnails = ({ car }: CarThumbnailsProps) => (
  <div className="flex gap-3">
    {CAR_THUMBNAIL_ANGLES.map((angle) => (
      <div key={angle} className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
        <Image
          src={generateCarImageUrl(car, angle)}
          alt={`${car.make} ${car.model} angle ${angle}`}
          fill
          priority
          sizes="(max-width: 768px) 50vw, 160px"
          className="object-contain"
        />
      </div>
    ))}
  </div>
);

export default CarThumbnails;
