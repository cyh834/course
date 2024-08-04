import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Docs",
    icon: "book",
    children: [
      {
        prefix: "/software/",
        children: [
          "README.md",
          { text: "...", icon: "ellipsis", link: "#" },
        ],
      },
    ],
  },
]);
