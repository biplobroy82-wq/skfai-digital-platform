
import Image from "next/image";

const certificates = [
  {
    title: "All India Film Federation Union",
    subtitle: "Certificate of Recognition",
    image: "/aif-certificate.png",
    alt: "Sri Krishna Films All India Film Federation certificate",
    description:
      "Recognition of Sri Krishna Films & Advertisement Industry by the All India Film Federation Union.",
  },
  {
    title: "Udyam Registration",
    subtitle: "Government of India",
    image: "/udyam-certificate.png",
    alt: "Sri Krishna Films Udyam Registration certificate",
    description:
      "Udyam Registration certificate of Sri Krishna Films & Advertisement Industry.",
  },
];

export default function Recognition() {
  return (
    <section
      id="recognition-content"
      className="bg-[#08090b] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            Our Credentials
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            Recognition & Certificates
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-400">
            Sri Krishna Films & Advertisement Industry, Kolkata.
            Explore our recognition and business registration certificates.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-8">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#111214] p-4 sm:p-6"
            >
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-orange-500">
                  {certificate.subtitle}
                </p>
              </div>

              <div className="overflow-hidden rounded-lg border border-white/10 bg-white p-2">
                <Image
                  src={certificate.image}
                  alt={certificate.alt}
                  width={1000}
                  height={750}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <p className="mt-5 text-sm leading-6 text-gray-400">
                {certificate.description}
              </p>

              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center rounded-lg bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
              >
                View Full Certificate ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
