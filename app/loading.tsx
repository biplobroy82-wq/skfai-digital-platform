export default function Loading() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">

        <div className="w-14 h-14 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto" />

        <p className="mt-6 text-gray-300 text-lg">
          Loading...
        </p>

      </div>
    </main>
  );
}