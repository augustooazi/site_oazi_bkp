module.exports = function(config) {

  config.addPassthroughCopy('images');
  config.addPassthroughCopy('apple-touch-icon.png');
  config.addPassthroughCopy('favicon-ico');
  config.addPassthroughCopy('_includes/css/');

  return {
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    pathPrefix: "/",
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'js', 'html', 'yml'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
