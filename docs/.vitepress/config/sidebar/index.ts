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
          { text: '数组常用方法', link: '/document/javascript/JS-Array'},
          { text: '字符串常用方法', link: '/document/javascript/JS-String'},
          { text: '遍历常用方法', link: '/document/javascript/JS-Traversal-Method'}
        ]
      },
      {
        text: 'TypeScript',
        collapsible: true,
        items: [
          { text: '基础', link: '/document/typescript/TypeScript' },
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
          { text: '基础', link: '/document/nginx/Nginx' }
        ]
      },
      {
        text: 'Git',
        collapsible: true,
        items: [
          { text: '基础', link: '/document/git/Git' },
          { text: 'FAQ', link: '/document/git/FAQ' }
        ]
      }
  ],
  '/note/javascript': [
    {
      text: 'Javascript',
      collapsible: true,
      items: [
        { text: '简介', link: '/note/javascript/index' },
        { text: '引用类型', link: '/note/javascript/ReferenceType' },
        { text: '面向对象', link: '/note/javascript/ObjectOriented'},
        { text: '原型', link: '/note/javascript/Prototype'},
        { text: '闭包', link: '/note/javascript/Closure'},
        { text: '函数方法', link: '/note/javascript/FunctionMethods' },
      ]
    }
  ],
  '/note/ecmascript6': [
    {
      text: 'EcmaScript6 语法入门',
      collapsible: true,
      items: [
        { text: '简介', link: '/note/ecmascript6/index' },
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