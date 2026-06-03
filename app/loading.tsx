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

export default function Loading() {
  return (
    <main className="overflow-hidden">
      {/* Hero skeleton */}
      <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
        <div className="flex-1 pt-36 sm:px-16 px-6">
          <div className="w-3/4 h-16 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse mb-10" />
          <div className="w-40 h-12 bg-primary-blue/20 rounded-full animate-pulse" />
        </div>
        <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
          <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] bg-gray-200/50 rounded-3xl animate-pulse" />
        </div>
      </div>

      <div className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto">
        {/* Title skeleton */}
        <div className="w-48 h-10 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="w-64 h-5 bg-gray-200 rounded animate-pulse mb-8" />

        {/* Search bar skeleton */}
        <div className="flex gap-4 mb-10">
          <div className="flex-1 h-12 bg-gray-200 rounded-full animate-pulse" />
          <div className="w-36 h-12 bg-gray-200 rounded-lg animate-pulse" />
          <div className="w-36 h-12 bg-gray-200 rounded-lg animate-pulse" />
        </div>

        {/* Car cards skeleton grid */}
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
