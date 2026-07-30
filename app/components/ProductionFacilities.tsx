import Image from "next/image";
import {
  Camera,
  Video,
  Lightbulb,
  Mic,
  Building2,
  Users,
  CheckCircle2,
} from "lucide-react";

const cameraEquipment = [
  "Cinema Cameras",
  "DSLR / Mirrorless Cameras",
  "Prime & Zoom Lenses",
  "Camera Rig / Cage",
  "Follow Focus",
];

const supportEquipment = [
  "Tripod",
  "Monopod",
  "Gimbal / Stabilizer",
  "Shoulder Rig",
  "Slider",
  "Jib / Crane",
  "Steadicam",
  "Drone",
];

const lightingEquipment = [
  "LED Lights",
  "Softboxes & Diffusers",
  "Reflectors",
  "Fresnel Lights",
  "RGB Lights",
  "Light Stands",
];

const audioEquipment = [
  "Shotgun Microphones",
  "Wireless Lavalier Microphones",
  "Field Recorders",
  "Boom Pole",
  "Windshield / Deadcat",
  "Audio Mixer",
];

const productionSupport = [
  "Green Screen Studio",
  "Professional Studio Setup",
  "Set Designer",
  "Makeup Artist",
  "Costumes & Props",
  "Production Crew",
];

export default function ProductionFacilities() {
  return (
    <section
      id="production"
      className="bg-gradient-to-b from-black via-zinc-950 to-black py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-block border border-yellow-500 text-yellow-400 px-5 py-2 rounded-full uppercase tracking-[4px] text-sm">
            Production Facilities
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Complete Production Infrastructure
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            Sri Krishna Films provides complete production support including
            professional equipment, studio setup, production crew,
            makeup artists, set designers and post-production solutions.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start mt-20">

          {/* LEFT */}

          <div>

            <div className="relative overflow-hidden rounded-3xl border border-yellow-500">

              <Image
                src="/image8.jpg"
                alt="Studio Setup"
                width={900}
                height={900}
                priority
                className="w-full h-[720px] object-cover rounded-3xl transition-all duration-700 hover:scale-105"
              />

              <div className="absolute top-6 left-6 bg-yellow-500 text-black px-6 py-3 rounded-full shadow-xl">

                <p className="text-xs uppercase tracking-widest font-semibold">
                  Trusted Since
                </p>

                <h4 className="font-bold text-lg">
                  1999
                </h4>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-5 text-center">

                <h3 className="text-yellow-400 text-3xl font-bold">
                  5000+
                </h3>

                <p className="text-gray-300 mt-2">
                  Video Productions
                </p>

              </div>

              <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-5 text-center">

                <h3 className="text-yellow-400 text-3xl font-bold">
                  27+
                </h3>

                <p className="text-gray-300 mt-2">
                  Years Experience
                </p>

              </div>

            </div>

            <div className="mt-6 bg-zinc-900 border border-yellow-500 rounded-2xl p-6">

              <h3 className="text-yellow-400 text-xl font-bold mb-5">
                Why Choose Our Production Setup?
              </h3>

              <div className="space-y-3">

                {[
                  "Professional Film Studio",
                  "Green Screen Setup",
                  "Experienced Production Crew",
                  "Makeup Artist Available",
                  "Set Designer Available",
                  "Equipment on Demand",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      className="text-yellow-400"
                      size={18}
                    />

                    <span className="text-gray-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-8">

            {/* CAMERA */}

            <div className="bg-zinc-900 border border-yellow-500 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]">

              <div className="flex items-center gap-3 mb-5">

                <Camera className="text-yellow-400" size={30} />

                <h3 className="text-2xl font-bold text-white">
                  Camera Equipment
                </h3>

              </div>

              <div className="grid sm:grid-cols-2 gap-3">

                {cameraEquipment.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-2 text-gray-300"
                  >

                    <CheckCircle2
                      className="text-yellow-400"
                      size={18}
                    />

                    {item}

                  </div>

                ))}

              </div>

            </div>

            {/* CAMERA SUPPORT */}

            <div className="bg-zinc-900 border border-yellow-500 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]">

              <div className="flex items-center gap-3 mb-5">

                <Video className="text-yellow-400" size={30} />

                <h3 className="text-2xl font-bold text-white">
                  Camera Support
                </h3>

              </div>

              <div className="grid sm:grid-cols-2 gap-3">

                {supportEquipment.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-2 text-gray-300"
                  >

                    <CheckCircle2
                      className="text-yellow-400"
                      size={18}
                    />

                    {item}

                  </div>

                ))}

              </div>

            </div>

            {/* LIGHTING */}

            <div className="bg-zinc-900 border border-yellow-500 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]">

              <div className="flex items-center gap-3 mb-5">

                <Lightbulb
                  className="text-yellow-400"
                  size={30}
                />

                <h3 className="text-2xl font-bold text-white">
                  Lighting Equipment
                </h3>

              </div>

              <div className="grid sm:grid-cols-2 gap-3">

                {lightingEquipment.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-2 text-gray-300"
                  >

                    <CheckCircle2
                      className="text-yellow-400"
                      size={18}
                    />

                    {item}

                  </div>

                ))}

              </div>

            </div>
                        {/* AUDIO */}

            <div className="bg-zinc-900 border border-yellow-500 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]">

              <div className="flex items-center gap-3 mb-5">

                <Mic
                  className="text-yellow-400"
                  size={30}
                />

                <h3 className="text-2xl font-bold text-white">
                  Audio Equipment
                </h3>

              </div>

              <div className="grid sm:grid-cols-2 gap-3">

                {audioEquipment.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-2 text-gray-300"
                  >

                    <CheckCircle2
                      className="text-yellow-400"
                      size={18}
                    />

                    {item}

                  </div>

                ))}

              </div>

            </div>

            {/* PRODUCTION SUPPORT */}

            <div className="bg-zinc-900 border border-yellow-500 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]">

              <div className="flex items-center gap-3 mb-5">

                <Users
                  className="text-yellow-400"
                  size={30}
                />

                <h3 className="text-2xl font-bold text-white">
                  Production Support
                </h3>

              </div>

              <div className="grid sm:grid-cols-2 gap-3">

                {productionSupport.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-2 text-gray-300"
                  >

                    <CheckCircle2
                      className="text-yellow-400"
                      size={18}
                    />

                    {item}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="mt-20 bg-zinc-900 border border-yellow-500 rounded-3xl p-10">

          <div className="flex items-center justify-center gap-3 mb-8">

            <Building2
              className="text-yellow-400"
              size={34}
            />

            <h3 className="text-3xl font-bold text-white text-center">
              Everything Required For Professional Film Production Under One Roof
            </h3>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {[
              "Professional Production Equipment",
              "Green Screen Studio",
              "Studio Setup",
              "Makeup Artist",
              "Set Designer",
              "Production Crew",
              "Drone Shoot",
              "Post Production",
              "PAN India Service",
            ].map((item) => (

              <div
                key={item}
                className="bg-black border border-yellow-500/30 rounded-xl p-4 flex items-center gap-3"
              >

                <CheckCircle2
                  className="text-yellow-400"
                  size={20}
                />

                <span className="text-gray-300">
                  {item}
                </span>

              </div>

            ))}

          </div>

          <div className="text-center mt-14">

            <h3 className="text-4xl font-bold text-white">
              Ready To Shoot Your Next Project?
            </h3>

            <p className="text-gray-400 max-w-3xl mx-auto mt-5 leading-8">

              From scripting and planning to shooting, editing and final
              delivery, Sri Krishna Films provides complete production
              solutions with studio, equipment and experienced crew.

            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <a
                href="tel:+916204731481"
                className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/916204731481"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-yellow-500 text-yellow-400 font-bold px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}
