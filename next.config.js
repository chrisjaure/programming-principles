const { remarkCodeHike } = require("@code-hike/mdx")

const withNextra = require("nextra")({
  output: "export",
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.mjs",
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme: "material-palenight" }]],
  },
})

module.exports = withNextra()
