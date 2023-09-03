const { remarkCodeHike } = require("@code-hike/mdx")

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.mjs",
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme: "min-light" }]],
  },
})

module.exports = withNextra({
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === "production" ? "/programming-principles" : "",
  pageExtensions: ['mdx']
})
