import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Prevarinite on DN42`,
    siteUrl: `https://prevarinite.net`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://prevarinite.net",
        sitemap: "https://prevarinite.net/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true
      }
    }
  ]
};

export default config;
