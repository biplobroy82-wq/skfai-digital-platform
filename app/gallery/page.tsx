import GalleryGrid from "./GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="py-16 text-center">
        <h1 className="text-5xl font-bold text-yellow-400">
          Our Gallery
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Explore our advertisements, corporate films, product shoots,
          celebrity campaigns and behind-the-scenes moments.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <GalleryGrid />
      </section>

    </main>
  );
}