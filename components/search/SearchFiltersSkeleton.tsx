export default function SearchFiltersSkeleton() {
  return (
    <div className="home__filters">
      {/* Search bar skeleton */}
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <div className="w-full h-[48px] bg-gray-200 rounded-full animate-pulse" />
      </div>

      {/* Filter skeletons */}
      <div className="flex justify-start flex-wrap items-center gap-2">
        <div className="w-[127px] h-9 bg-gray-200 rounded-lg animate-pulse" />
        <div className="w-[127px] h-9 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}
