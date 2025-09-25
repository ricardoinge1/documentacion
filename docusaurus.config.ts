import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Elenix Analytics',
  tagline: 'Plataforma Avanzada de Visualización de Datos',
  favicon: 'img/logoicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeConfigs: {
      es: {
        htmlLang: 'es',
        direction: 'ltr',
      },
      en: {
        htmlLang: 'en',
        direction: 'ltr',
      },
    },
},

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          // Please change this to your repo.
          // Remove this
        },
       

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo1.svg',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },  
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    navbar: {
      
      logo: {
        alt: 'Elenix Logo',
        src: 'img/logo1.svg',
        srcDark: 'img/logo2.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          to: 'https://elenix-analytics.com/',
          label: 'Regresar a Elenix',
          position: 'left',
        },
        {
          type: 'localeDropdown',
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
              label: 'Tutorial',
              to: '/category/introducción',
            },
          ],
        },


      ],
      copyright: `Copyright © ${new Date().getFullYear()} Elenix Analytics. Todos los derechos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,

};

export default config;
