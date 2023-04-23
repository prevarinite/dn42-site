import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DN42 Network - Prevarinite`,
    siteUrl: `https://dn42.prevarinite.net`
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
        host: "https://dn42.prevarinite.net",
        sitemap: "https://dn42.prevarinite.net/sitemap.xml",
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
