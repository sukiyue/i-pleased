/*
 * @Description: 侧边栏导航
 */

import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/document/': [
      {
        text: 'JavaScript',
        collapsible: true,
        items: [
          { text: 'Array', link: '/document/javascript/JS-Array'},
          { text: 'String', link: '/document/javascript/JS-String'},
          { text: 'Traversal Method', link: '/document/javascript/JS-Traversal-Method'}
        ]
      },
      {
        text: 'TypeScript',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/document/typescript/TypeScript' },
          { text: 'FAQ', link: '/document/typescript/FAQ' },
        ]
      },
      {
        text: 'Vue',
        collapsible: true,
        items: [
          { text: 'Vue', link: '/document/Vue/Vue' },
          { text: 'Vue3', link: '/document/Vue/Vue3' },
          { text: 'FAQ', link: '/document/Vue/FAQ' },
        ]
      },
      {
        text: 'Nginx',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/document/nginx/Nginx' }
        ]
      },
      {
        text: 'Git',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/document/git/Git' },
          { text: 'FAQ', link: '/document/git/FAQ' }
        ]
      }
  ]
}