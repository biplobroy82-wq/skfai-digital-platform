import Image from "next/image";

export default function BrandAmbassador() {
  return (
    <section className="bg-gradient-to-b from-black via-zinc-950 to-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-yellow-400">
          Brand Ambassador
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Proudly associated with one of the most respected personalities
          of Bengali Cinema.
        </p>

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute -inset-4 bg-yellow-500 rounded-3xl blur-3xl opacity-20"></div>

              <Image
                src="/brand-ambassador.png"
                alt="Brand Ambassador"
                width={650}
                height={850}
                priority
                className="relative rounded-3xl border-4 border-yellow-500 shadow-2xl object-cover"
              />

            </div>

          </div>

          {/* Right Content */}
          <div>

            <span className="uppercase tracking-[8px] text-yellow-400 text-sm">
              Sri Krishna Films
            </span>

            <h3 className="text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
              Biswajit Chatterjee
            </h3>

            <p className="text-2xl text-yellow-400 mt-4">
              Legendary Bengali Film Actor
            </p>

            <p className="text-gray-300 mt-8 leading-8 text-lg">
              Sri Krishna Films & Advertisement Industry is proud to be
              associated with legendary actor Biswajit Chatterjee.
              His remarkable contribution to Indian cinema represents
              excellence, professionalism and timeless artistic values,
              inspiring our creative journey.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-6">
                <h4 className="text-4xl font-bold text-yellow-400">
                  400+
                </h4>

                <p className="text-gray-300 mt-2">
                  Films
                </p>
              </div>

              <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-6">
                <h4 className="text-4xl font-bold text-yellow-400">
                  60+
                </h4>

                <p className="text-gray-300 mt-2">
                  Years of Excellence
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}