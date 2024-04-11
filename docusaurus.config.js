// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '白日做梦',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dendoink.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/daydream/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dendoink', // Usually your GitHub org/user name.
  projectName: 'daydream', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
      // ({
      //   docs: {
      //     sidebarPath: require.resolve('./sidebars.js'),
      //     // Please change this to your repo.
      //     // Remove this to remove the "edit this page" links.
      //     // editUrl:
      //     //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      //   },
      //   blog: {
      //     showReadingTime: true,
      //     // Please change this to your repo.
      //     // Remove this to remove the "edit this page" links.
      //     // editUrl:
      //     //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      //   },
      //   theme: {
      //     customCss: require.resolve('./src/css/custom.css'),
      //   },
      // }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/daydreamcard.png',
      navbar: {
        title: 'Daydream',
        logo: {
          alt: 'Logo',
          src: 'img/logo.gif',
        },
        items: [
          {
            type: 'doc',
            docId: 'chrome-tricks/index',
            position: 'left',
            label: 'Chrome 调试技巧',
          },
          { to: '/blog', label: '技术', position: 'left' },
          { to: '/life', label: '思考', position: 'left' },
          { to: '/reading', label: '阅读', position: 'left' },
          {
            href: 'https://github.com/dendoink/FrontendWingman',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '小册',
            items: [
              {
                label: 'Chrome 调试技巧',
                to: '/docs/chrome-tricks/index',
              },
            ],
          },
          {
            title: '只言片语',
            items: [
              {
                label: '技术让生活更美好 →',
                to: '/blog',
              },
              {
                label: '工作不是全部 →',
                to: '/life',
              },
              {
                label: '阅读使人明智 →',
                to: '/reading',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '关于我',
                href: 'https://github.com/dendoink',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dendoink. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'life-blog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'life',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './life',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'reading-blog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'reading',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './reading',
      },
    ],
  ],
};

module.exports = config;
