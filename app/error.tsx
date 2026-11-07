"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white">
      <p className="font-bold uppercase text-primary text-xl mb-2">Error</p>
      <h1 className="font-bold text-dark text-3xl sm:text-4xl mb-4">
        Something went wrong
      </h1>
      <p className="font-medium text-base text-secondary max-w-md mb-8">
        An unexpected error occurred while loading this page.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-md hover:opacity-80 hover:shadow-teal-400 transition duration-300 ease-in-out"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="text-base font-semibold text-dark py-3 px-8 rounded-full border border-slate-300 hover:border-primary hover:text-primary transition duration-300 ease-in-out"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
