/*
 * @Description: 侧边栏导航
 */

export default {
  '/document/': [
      {
        text: 'JavaScript',
        collapsible: true,
        items: [
          { text: 'Array Basic Operation', link: '/document/js-array'}
        ]
      },
      {
        text: 'TypeScript',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/document/typescript' },
          { text: 'Question', link: '/document/ts-question' },
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