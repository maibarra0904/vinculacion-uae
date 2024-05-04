module.exports = {
    module: {
      rules: [
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: '@mdx-js/loader',
              options: {},
            },
          ],
        },
      ],
    },
  };
  