import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sri Krishna Films & Advertisement Industry",

    short_name: "Sri Krishna Films",

    description:
      "TV Commercials, Corporate Films, AI Video Ads, Digital Marketing, Website Development and Lead Generation Services Across India.",

    start_url: "/",

    display: "standalone",

    background_color: "#000000",

    theme_color: "#000000",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },

      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}