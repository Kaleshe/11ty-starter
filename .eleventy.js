module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('robots.txt');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('.htaccess');

    return {
        dir: {
            input: `src`
        }
    };
};
