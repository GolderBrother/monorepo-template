import { defineConfig } from 'vitepress'
import packageJson from '../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: packageJson.name,
  description: packageJson.description,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '使用指南', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://git.woa.com/ieg_cdp_web/delta-i18n-cli.git' }
    ],
    footer: {
      // message: `MIT Licensed | Copyright © ${new Date().getFullYear()} deltaverse`,
      copyright: `MIT Licensed | Copyright © ${new Date().getFullYear()} deltaverse`,
    }
  },
  ignoreDeadLinks: true
})
