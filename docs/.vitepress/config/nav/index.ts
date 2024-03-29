/*
 * @Description: 顶部导航
 */
import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config['nav'] = [ 
  { text: 'Guide', link: '/guide/' },
  {
    text: 'Document', link: '/document/javascript/JS-Array'
  },
  {
    text: 'Note', 
    items: [
      {
        text: 'JavaScript', link:'/note/javascript/index'
      },
      {
        text: 'EcmaScript6', link:'/note/ecmascript6/index'
      },
      {
        text: 'Thymeleaf', link:'/note/thymeleaf/index'
      },
      {
        text: '包管理工具', link:'/note/package-manage/npm-yarn-pnpm'
      }
    ]
  }
]