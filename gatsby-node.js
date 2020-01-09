exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /pixi.js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
