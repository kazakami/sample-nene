module.exports = {
    mode: 'development',

    entry: {
      'hello': './hello.ts'
    },

    output: {
      path: `${__dirname}/dist`,
      filename: '[name].js'
    },
    module: {
      rules: [
        {
            test: /\.ts$/,
            use: 'ts-loader'}
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    node: {
      fs: 'empty'
    }
  };