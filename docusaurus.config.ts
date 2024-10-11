import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Posts',
  tagline: "HeroBuxx's random posts collection",
  favicon: 'img/me-small.png',

  url: 'https://posts.buxxed.me',
  baseUrl: '/',

  organizationName: 'herobuxx',
  projectName: 'posts',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Posts",
      logo: {
        alt: 'My Site Logo',
        src: 'img/me-small.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/HeroBuxx',
          label: 'herobuxx@GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Find me on',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/buxxedchat',
            },
            {
              label: 'X',
              href: 'https://x.com/iamherobuxx',
            },
          ],
        },
        {
          title: 'My Projects',
          items: [
            {
              label: 'Lilium',
              href: 'https://github.com/liliumproject',
            },
            {
              label: 'Halcyon',
              href: 'https://github.com/halcyonproject',
            },
          ],
        },
        {
          title: 'Follow me on',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/herobuxx',
            },
            {
              label: 'GitLab',
              to: 'https://gitlab.com/herobuxx',
            },
            {
              label: 'X',
              href: 'https://x.com/iamherobuxx',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/iamherobuxx',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HeroBuxx. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
