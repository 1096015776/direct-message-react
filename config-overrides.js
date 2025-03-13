const { override, addWebpackAlias, useBabelRc } = require('customize-cra');
const path = require('path');
const setPublicPath = (config) => {
  // 根据不同环境设置 publicPath
  if (process.env.NODE_ENV === 'production') {
    // 生产环境下的 publicPath，这里以二级路径为例
    config.output.publicPath = '/direct/';
  } else {
    // 开发环境下的 publicPath
    config.output.publicPath = '/';
  }
  return config;
};

const addImageWebpackLoader = (config) => {
  const imageRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4
          },
          gifsicle: {
            interlaced: false,
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75
          }
        },
      },
    ],
  };

  // 找到合适的地方插入图片加载器规则
  const rules = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
  rules.unshift(imageRule);

  return config;
};

module.exports = override(
  useBabelRc(),
  setPublicPath,
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  addImageWebpackLoader
);
