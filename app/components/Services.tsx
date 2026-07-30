export default function Services() {
  const services = [
    {
      title: "TV Commercial",
      desc: "Creative TV Ads that build trust and increase sales.",
      icon: "🎬",
    },
    {
      title: "AI Video Creation",
      desc: "Modern AI generated promotional videos for every business.",
      icon: "🤖",
    },
    {
      title: "Corporate Film",
      desc: "Professional company profile & documentary production.",
      icon: "🎥",
    },
    {
      title: "Digital Marketing",
      desc: "Facebook, Instagram & Google Ads Lead Generation.",
      icon: "📱",
    },
    {
      title: "Lead Generation",
      desc: "High quality business leads with complete marketing strategy.",
      icon: "📈",
    },
    {
      title: "Documentary",
      desc: "Government & Corporate documentary filmmaking.",
      icon: "🎞️",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-yellow-400">
          Our Services
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Premium Creative & Digital Solutions For Your Business
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-2 duration-300"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}