const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'WoT-JP CG',
  url: 'https://wot-jp-cg.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'WoT-JP CG',
  projectName: 'wot-jp-cg',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          editUrl: 'https://github.com/w3c/wot-jp-cg/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WoT-JP CG',
        logo: {
          alt: 'logo-mini-blue',
          src: 'img/logo-mini-blue.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'ドキュメント',
          },
          {
            href: 'https://github.com/w3c/wot-jp-cg/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'ドキュメント',
                to: '/docs/about',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'W3C WoT-JP CG',
                href: 'https://www.w3.org/community/wot-jp/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/w3c/wot-jp-cg/',
              },
              {
                label: 'connpass',
                href: 'https://wot-jp-cg.connpass.com/',
              },
            ],
          },
          {
            items: [
              {
                label: 'ライセンス',
                to: '/docs/LICENSE',
              },
              {
                label: 'Code of Conduct',
                to: '/docs/CODE_OF_CONDUCT',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} W3C Web of Thing Japanese Community Group. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      hideableSidebar: true,
    }),
});
