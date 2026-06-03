const SkeletonCard = () => (
  <div className="flex flex-col p-6 bg-primary-blue-100 rounded-3xl animate-pulse">
    {/* Title */}
    <div className="w-3/4 h-6 bg-gray-200 rounded" />

    {/* Price */}
    <div className="mt-6 flex gap-1">
      <div className="w-4 h-3 bg-gray-200 rounded" />
      <div className="w-20 h-8 bg-gray-200 rounded" />
      <div className="w-8 h-3 bg-gray-200 rounded self-end" />
    </div>

    {/* Image placeholder */}
    <div className="relative w-full h-40 my-3 bg-gray-200 rounded-lg" />

    {/* Icons row */}
    <div className="flex w-full justify-between mt-2">
      <div className="flex flex-col items-center gap-2">
        <div className="w-5 h-5 bg-gray-200 rounded" />
        <div className="w-16 h-3 bg-gray-200 rounded" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-5 h-5 bg-gray-200 rounded" />
        <div className="w-10 h-3 bg-gray-200 rounded" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-5 h-5 bg-gray-200 rounded" />
        <div className="w-14 h-3 bg-gray-200 rounded" />
      </div>
    </div>
  </div>
);

export default function CarCatalogueSkeleton() {
  return (
    <div role="status" aria-label="Loading car catalogue">
      {/* Search bar skeleton */}
      <div className="flex gap-4 mb-10">
        <div className="flex-1 h-12 bg-gray-200 rounded-full animate-pulse" />
        <div className="w-36 h-12 bg-gray-200 rounded-lg animate-pulse" />
        <div className="w-36 h-12 bg-gray-200 rounded-lg animate-pulse" />
      </div>

      {/* Car cards skeleton grid */}
      <div className="home__cars-wrapper">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
