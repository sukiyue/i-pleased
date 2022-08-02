/*
 * @Description: 配置 
 */
import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

export default defineConfig({
   // These are app level configs.
  lang: 'en-US', //
  title: 'IPleased',
  description: 'Just playing around.',
  base: '/',
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },

   // Theme related configurations.
  themeConfig: {
    // logo: '/logo.svg',   
    // siteTitle: 'Hello World', 
    // algolia: {
    //   apiKey: 'your_api_key',
    //   indexName: 'index_name'
    // },
    nav,
    sidebar,
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sukiyue' },
    ],
    footer: {
      // message: 'You are special.',
      copyright: 'Copyright © 2022-present sukiyue'
    },
    lastUpdatedText: 'Updated Date',
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    },
  },
 
})
