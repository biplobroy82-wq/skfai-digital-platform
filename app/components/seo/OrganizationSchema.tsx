export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.skfai.online/#organization",

        name: "Sri Krishna Films & Advertisement Industry",
        alternateName: "Sri Krishna Films",

        url: "https://www.skfai.online",

        logo: {
          "@type": "ImageObject",
          url: "https://www.skfai.online/og-image.jpg"
        },

        image: "https://www.skfai.online/logo.png",

        email: "info.skfai@gmail.com",
        telephone: "+91 6204731481",

        foundingDate: "1999",

        description:
          "Sri Krishna Films & Advertisement Industry provides TV Commercials, Corporate Films, AI Video Ads, Product Advertisements, Documentary Films, Digital Marketing, Website Development and Lead Generation services across India.",

        areaServed: {
          "@type": "Country",
          name: "India",
        },

        sameAs: [
          "https://www.facebook.com/profile.php?id=100066893407758",
          "https://www.instagram.com/sri.krishnafilms/?hl=en",
          "https://www.youtube.com/@srikrishnafilmsadvertiseme6000",
        ],

        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91 6204731481",
            contactType: "Customer Support",
            areaServed: "IN",
            availableLanguage: [
              "English",
              "Hindi",
              "Bengali"
            ]
          }
        ]
      },

      {
        "@type": "LocalBusiness",

        "@id": "https://www.skfai.online/#localbusiness",

        name: "Sri Krishna Films & Advertisement Industry",

        url: "https://www.skfai.online",

        image: "https://www.skfai.online/logo.png",

        telephone: "+91 6204731481",

        email: "info.skfai@gmail.com",

        priceRange: "$$",

        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.482681,
          longitude: 88.339974
        },

        address: {
          "@type": "PostalAddress",
          streetAddress: "Tollygunge",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "700041",
          addressCountry: "IN"
        },

        department: [
          {
            "@type": "LocalBusiness",

            name: "Purulia Branch",

            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Near Ramakrishna Mission Vidyapith",

              addressLocality: "Purulia",

              addressRegion: "West Bengal",

              postalCode: "723147",

              addressCountry: "IN"
            }
          },

          {
            "@type": "LocalBusiness",

            name: "Dhanbad Branch",

            address: {
              "@type": "PostalAddress",

              streetAddress:
                "Near Patherdih Railway Station",

              addressLocality: "Patherdih",

              addressRegion: "Jharkhand",

              postalCode: "828119",

              addressCountry: "IN"
            }
          }
        ],

        makesOffer: [
          {
            "@type": "Service",
            name: "TV Commercial Production"
          },
          {
            "@type": "Service",
            name: "Corporate Film Production"
          },
          {
            "@type": "Service",
            name: "AI Video Production"
          },
          {
            "@type": "Service",
            name: "Documentary Film Production"
          },
          {
            "@type": "Service",
            name: "Digital Marketing"
          },
          {
            "@type": "Service",
            name: "Website Development"
          },
          {
            "@type": "Service",
            name: "Lead Generation"
          }
        ]
      }
    ]
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