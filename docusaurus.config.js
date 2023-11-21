const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Alif\'s Posts',
  tagline: 'HeroBuxx ‣ Posts',
  favicon: 'img/favicon.ico',
  url: 'https://posts.herobuxx.me',
  baseUrl: '/',
  organizationName: 'herobuxx',
  projectName: 'wiki',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
        },
        blog: false,
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
        title: 'heroBuxx ‣ Posts',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://posts.herobuxx.me',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'Telegram (Chat)',
                href: 'https://t.me/buxxredirect',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/herobuxx'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/iamherobuxx',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} HeroBuxx.<br><span style="color:var(--ifm-footer-link-color);display:inline-block;padding-top:1em">Licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0.</a></span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
