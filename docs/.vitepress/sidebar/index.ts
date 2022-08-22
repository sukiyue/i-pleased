/*
 * @Description: 侧边栏导航
 */

export default {
  '/document/': [
      {
        text: 'JavaScript',
        collapsible: true,
        items: [
          { text: 'Array', link: '/document/JS-Array'},
          { text: 'String', link: '/document/JS-String'}
        ]
      },
      {
        text: 'TypeScript',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/document/TypeScript' },
          { text: 'FAQ', link: '/document/TS-FAQ' },
        ]
      },
      {
        text: 'Nginx',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/document/Nginx' }
        ]
      },
      {
        text: 'Git',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/document/Git' }
        ]
      }
  ]
}