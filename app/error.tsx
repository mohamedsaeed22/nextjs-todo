"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <h1 className="text-4xl font-bold text-red-600">Something went wrong!</h1>
      <p className="mt-4 text-lg text-red-500">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try Again
      </button>
    </div>
  );
}
