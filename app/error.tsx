"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <h2 className="text-2xl font-bold text-black">Something went wrong!</h2>
      <p className="text-gray-500">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="px-6 py-3 bg-primary-blue text-white rounded-full font-medium hover:opacity-80 transition-opacity"
      >
        Try again
      </button>
    </div>
  );
}
