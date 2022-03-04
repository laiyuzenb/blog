const navbarConfig = require("./configs/navbar.config");
const sideBarConfig = require("./configs/sidebar.config");
const pluginsConfig = require("./configs/plugins.config");

module.exports = {
  lang: "zh-CN",
  title: "On Cloud Nine",
  description: "这是我的第一个 VuePress 站点",
  themeConfig: {
    logo: "https://v2.vuepress.vuejs.org/images/hero.png",
    navbar: navbarConfig,
    sidebar: sideBarConfig,
    lastUpdatedText: "更新时间",
    contributorsText: "贡献者",
    repo: "laiyuzenb/blog",
    editLink: false,
  },
  plugins: pluginsConfig,
};
