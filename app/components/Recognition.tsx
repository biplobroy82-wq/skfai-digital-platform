import Image from "next/image";

export default function Recognition() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-yellow-400">
            Certificate of Recognition
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Sri Krishna Films & Advertisement Industry has been officially
            recognized by the All India Film Federation Union for its
            outstanding contribution to the Indian Film & Advertisement Industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div className="flex justify-center">
            <Image
              src="/certificate.jpg.png"
              alt="Recognition Certificate"
              width={650}
              height={650}
              className="rounded-xl border-4 border-yellow-500 shadow-2xl"
            />
          </div>

          <div>

            <h3 className="text-4xl font-bold text-yellow-400 mb-6">
              Proud Moment For Us
            </h3>

            <p className="text-gray-300 leading-8 mb-5">
              Sri Krishna Films & Advertisement Industry has been honored
              with the prestigious Certificate of Recognition from the
              All India Film Federation Union.
            </p>

            <p className="text-gray-300 leading-8 mb-5">
              This recognition reflects our commitment to creative excellence,
              professional filmmaking and premium production quality.
            </p>

            <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-6 mt-8">

              <h4 className="text-yellow-400 text-2xl font-bold mb-4">
                Official Recognition
              </h4>

              <p className="text-gray-300 mb-2">
                ✔ All India Film Federation Union
              </p>

              <p className="text-gray-300 mb-2">
                ✔ Professional Film Production
              </p>

              <p className="text-gray-300">
                ✔ Trusted Creative Agency
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}