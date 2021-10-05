module.exports = {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: [
              '> 1%',
              'last 5 versions',
              'Firefox >= 45',
              'iOS >=8',
              'Safari >=8',
              'ie >= 10',
            ],
          },
        },
      ],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
    ],
    env: {
      test: {
        plugins: ['require-context-hook'],
      },
    },
  };
1  