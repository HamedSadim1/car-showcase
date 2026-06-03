import Image from "next/image";
import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utils";

interface CarMainImageProps {
  car: CarProps;
}

const CarMainImage = ({ car }: CarMainImageProps) => (
  <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
    <Image
      src={generateCarImageUrl(car)}
      alt={`${car.make} ${car.model}`}
      fill
      priority
      sizes="(max-width: 768px) 100vw, 512px"
      className="object-contain"
    />
  </div>
);

export default CarMainImage;
