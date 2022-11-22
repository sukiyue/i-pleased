/*
 * @Description: 侧边栏导航
 */

import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/document/': [
      {
        text: 'HTML',
        collapsible: true,
        items: [
          { text: 'HTML', link: '/document/html/Html'}
        ]
      },  
      {
        text: 'CSS',
        collapsible: true,
        items: [
          { text: 'CSS', link: '/document/css/css'}
        ]
      }, 
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
          // { text: 'FAQ', link: '/document/typescript/FAQ' },
        ]
      },
      // {
      //   text: 'Vue',
      //   collapsible: true,
      //   items: [
      //     { text: 'Vue', link: '/document/Vue/Vue' },
      //     { text: 'Vue3', link: '/document/Vue/Vue3' },
      //     { text: 'FAQ', link: '/document/Vue/FAQ' },
      //   ]
      // },
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
  ],
  '/note/javascript': [
    {
      text: 'Javascript',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/note/javascript/index' },
        { text: 'Reference Type', link: '/note/javascript/ReferenceType' },
        { text: 'Object Oriented', link: '/note/javascript/ObjectOriented'},
        { text: 'Function Methods', link: '/note/javascript/FunctionMethods' },
      ]
    }
  ],
  '/note/ecmascript6': [
    {
      text: 'EcmaScript6 语法入门',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/note/ecmascript6/index' },
        { text: 'Proxy', link: '/note/ecmascript6/Proxy' },
        { text: 'Promise', link: '/note/ecmascript6/Promise' },
        { text: 'Module', link: '/note/ecmascript6/Module' },
        { text: 'Iterator', link: '/note/ecmascript6/Iterator' },
      ]
    },
  ],
  '/note/thymeleaf': [
    {
      text: 'Thymeleaf 语法入门',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/note/thymeleaf/index' },
        { text: 'BaseSyntax', link: '/note/thymeleaf/BaseSyntax' },
      ]
    }
  ]
}