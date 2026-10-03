import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-xl">

        <h1 className="text-8xl font-black text-yellow-400">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-6">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-6 leading-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-10 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
        >
          Back To Home
        </Link>

      </div>

    </main>
  );
}