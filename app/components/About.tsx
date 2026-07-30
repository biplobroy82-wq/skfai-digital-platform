import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="flex justify-center">

            <Image
              src="/logo.png"
              alt="Sri Krishna Films"
              width={420}
              height={420}
              className="rounded-xl drop-shadow-[0_0_30px_rgba(255,215,0,0.15)]"
            />

          </div>

          {/* Right */}
          <div>

            <span className="inline-block border border-yellow-500 rounded-full px-5 py-2 text-yellow-400 uppercase tracking-[3px] text-sm">
              Since 1999 • 27+ Years of Excellence
            </span>

            <h2 className="text-5xl font-bold text-yellow-400 mt-6">
              About Sri Krishna Films
            </h2>

            <p className="text-gray-300 mt-8 leading-8 text-lg">

              Sri Krishna Films & Advertisement Industry is one of Kolkata's
              trusted production houses, delivering creative visual solutions
              since <span className="text-yellow-400 font-semibold">1999</span>.

              We specialize in TV Commercials, Corporate Films,
              Documentary Production, AI Video Creation,
              Digital Marketing, Lead Generation,
              Product Advertisements, Brand Promotions,
              Music Videos, Government Projects,
              Industrial Films and Professional Photography.

            </p>

            <p className="text-gray-400 mt-6 leading-8">

              With <span className="text-yellow-400 font-semibold">27+ years of experience</span>,
              we have successfully completed
              <span className="text-yellow-400 font-semibold"> 5000+ video advertisements </span>
              and served
              <span className="text-yellow-400 font-semibold"> 1000+ happy clients </span>
              across India.

            </p>

            <p className="text-gray-400 mt-6 leading-8">

              Our prestigious clients include
              <span className="text-white font-semibold"> IOCL</span>,
              <span className="text-white font-semibold"> Kolkata Metro</span>,
              <span className="text-white font-semibold"> IIT Kharagpur</span>,
              <span className="text-white font-semibold"> DAV Model School</span>,
              <span className="text-white font-semibold"> Medica Hospital</span>,
              <span className="text-white font-semibold"> Shyam Steel</span>,
              <span className="text-white font-semibold"> Shree Height Builders</span>
              and many other government, corporate and private organizations.

            </p>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-8 hover:scale-105 duration-300">

            <h3 className="text-yellow-400 text-3xl font-bold">
              5000+
            </h3>

            <p className="text-gray-400 mt-3">
              Video Advertisements
            </p>

          </div>

          <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-8 hover:scale-105 duration-300">

            <h3 className="text-yellow-400 text-3xl font-bold">
              1000+
            </h3>

            <p className="text-gray-400 mt-3">
              Happy Clients
            </p>

          </div>

          <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-8 hover:scale-105 duration-300">

            <h3 className="text-yellow-400 text-3xl font-bold">
              27+
            </h3>

            <p className="text-gray-400 mt-3">
              Years Experience
            </p>

          </div>

          <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-8 hover:scale-105 duration-300">

            <h3 className="text-yellow-400 text-3xl font-bold">
              PAN India
            </h3>

            <p className="text-gray-400 mt-3">
              Creative Services
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}