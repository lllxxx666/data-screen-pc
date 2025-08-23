const designWidth = 1920;
const baseFontSize = 100;
// 计算出的换算比例
const ratio = baseFontSize / designWidth;

export default {
  // 将模板文件添加到 content 配置中
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      // 生成类似 { '1': '0.01rem', '2': '0.02rem', ... '100': '1rem', ... '200': '2rem' }
      map[index] = `${index * 0.01}rem`;
      return map;
    }, {}),
    extend: {
      // 重要：使用 rem 单位覆盖 Tailwind 的默认间距/尺寸 scale
      spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
        // 生成类似 { '1': '0.01rem', '2': '0.02rem', ... '100': '1rem', ... '200': '2rem' }
        map[index] = `${index * 0.01}rem`;
        return map;
      }, {}),
      fontSize: {
        // 示例：'text-16' 类将会生成 `font-size: 0.16rem;` (即 16px @ 1920px)
        8: "0.08rem",
        12: "0.12rem",
        14: "0.14rem",
        16: "0.16rem",
        24: "0.24rem",
        32: "0.32rem",
      },
      borderRadius: {
        4: "0.04rem",
        8: "0.08rem",
      },
      marginLeft: {
        1: "0.04rem",
        2: "0.08rem",
        4: "0.16rem",
      },
      // 你也可以覆盖 screens，但使用 vw 方案后，媒体查询的逻辑可能发生变化
      // screens: {
      //   'sm': '384px', // => @media (min-width: 0.384rem) { ... }
      //   'md': '496px',
      // },
    },
  },
  plugins: [],
};
