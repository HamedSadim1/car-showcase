const SkeletonCard = () => (
  <div className="flex flex-col p-6 bg-primary-blue-100 rounded-3xl animate-pulse">
    {/* Title - matches car-card__content-title: text-[22px] leading-[26px] */}
    <div className="w-3/4 h-[26px] bg-gray-200 rounded" />

    {/* Price - matches car-card__price: text-[32px] leading-[38px] + mt-6 */}
    <div className="mt-6 flex items-end gap-1">
      <div className="w-[14px] h-[17px] bg-gray-200 rounded" />
      <div className="w-20 h-[38px] bg-gray-200 rounded" />
      <div className="w-8 h-[17px] bg-gray-200 rounded" />
    </div>

    {/* Image placeholder - matches car-card__image: h-40 my-3 */}
    <div className="relative w-full h-40 my-3 bg-gray-200 rounded-lg" />

    {/* Icons row - matches the flex row with 3 icon groups */}
    <div className="flex w-full justify-between mt-2">
      <div className="flex flex-col items-center gap-2">
        <div className="w-5 h-5 bg-gray-200 rounded" />
        <div className="w-16 h-[17px] bg-gray-200 rounded" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-5 h-5 bg-gray-200 rounded" />
        <div className="w-10 h-[17px] bg-gray-200 rounded" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-5 h-5 bg-gray-200 rounded" />
        <div className="w-14 h-[17px] bg-gray-200 rounded" />
      </div>
    </div>
  </div>
);

export default function CarCatalogueSkeleton() {
  return (
    <div role="status" aria-label="Loading car catalogue">
      {/* Car cards skeleton grid */}
      <div className="home__cars-wrapper">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
