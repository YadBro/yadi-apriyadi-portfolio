import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white">
      <p className="font-bold uppercase text-primary text-xl mb-2">404</p>
      <h1 className="font-bold text-dark text-3xl sm:text-4xl mb-4">
        Page Not Found
      </h1>
      <p className="font-medium text-base text-secondary max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-md hover:opacity-80 hover:shadow-teal-400 transition duration-300 ease-in-out"
      >
        Back to Home
      </Link>
    </main>
  );
}
