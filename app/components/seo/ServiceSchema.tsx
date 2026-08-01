interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export default function ServiceSchema({
  name,
  description,
  url,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Service",

    serviceType: name,

    name,

    description,

    url,

    provider: {
      "@type": "Organization",

      name: "Sri Krishna Films & Advertisement Industry",

      url: "https://www.skfai.online",
    },

    areaServed: {
      "@type": "Country",

      name: "India",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}