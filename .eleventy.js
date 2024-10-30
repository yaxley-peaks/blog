const mathjaxPlugin = require("eleventy-plugin-mathjax");

module.exports = function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  // Return your Object options:
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.gif");
  eleventyConfig.addPassthroughCopy("*.ico");
  eleventyConfig.addPassthroughCopy("_assets/*");
  eleventyConfig.addPassthroughCopy({"asis/*": "/"});
  eleventyConfig.addPlugin(mathjaxPlugin);
  return {
    passthroughFileCopy: true
  };
};
