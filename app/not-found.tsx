import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <h2 className="text-4xl font-extrabold text-black">404</h2>
      <p className="text-gray-500">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary-blue text-white rounded-full font-medium hover:opacity-80 transition-opacity"
      >
        Go Home
      </Link>
    </div>
  );
}
