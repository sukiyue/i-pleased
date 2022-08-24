/*
 * @Description: 
 * @Date: 2022-08-24 17:23:17
 */
import{ DefaultTheme } from 'vitepress/theme'
import { nav } from './nav'
import { sidebar } from './sidebar'

export const themeConfig: DefaultTheme.Config = {
  logo: '/logo.svg',   
  nav, // 导航栏配置
  sidebar, // 侧边栏配置

  lastUpdatedText: 'Updated Date',

  // 社交链接
  socialLinks: [
    { icon: 'github', link: 'https://github.com/sukiyue' },
  ],

  // algolia: {
  //   apiKey: 'your_api_key',
  //   indexName: 'index_name'
  // },

  footer: {
    // message: 'You are special.',
    copyright: 'Copyright © 2022-present sukiyue'
  },
  
  docFooter: {
    prev: 'Pagina prior',
    next: 'Proxima pagina'
  }
}