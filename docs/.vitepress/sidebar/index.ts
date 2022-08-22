/*
 * @Description: 侧边栏导航
 */

export default {
  '/document/': [
      {
        text: 'JavaScript',
        collapsible: true,
        items: [
          { text: 'Array', link: '/document/javascript/JS-Array'},
          { text: 'String', link: '/document/javascript/JS-String'}
        ]
      },
      {
        text: 'TypeScript',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/document/typescript/TypeScript' },
          { text: 'FAQ', link: '/document/typescript/TS-FAQ' },
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