import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "文档",
  description: "cyh的文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
