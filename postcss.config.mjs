const designWidth = 1920;
const baseFontSize = 100;

export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: (module) => {
        if (/\/main\.(js|ts)|index\.html/.test(module.file)) {
          // 如果是 vite 的 main.js 或者 index.html 入口文件，直接返回基准值
          return baseFontSize;
        }
        // 对于其他文件，也使用默认的基准字体大小
        return baseFontSize;
      },
      propList: ["*"],
      replace: true,
      exclude: /(node_modules)/,
      mediaQuery: true,
      minPixelValue: 2,
      include: undefined,
      exclude: /node_modules/i,
    },
  },
};
