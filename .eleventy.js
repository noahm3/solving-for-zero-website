module.exports = function(eleventyConfig) {
    // Copy static assets directly to the output folder
    eleventyConfig.addPassthroughCopy("src/assets");
    
    // Add a shortcode for the current year
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    
    // Set input and output directories
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    };
  };