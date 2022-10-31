/*
 * @Description: 配置 
 */
import { defineConfig } from 'vitepress'
import { head } from './config/head'
import { markdown } from './config/markdown'
import { themeConfig } from './config/themeConfig'

export default defineConfig({
   // These are app level configs.
  lang: 'en-US', //
  // locales: {
  //   // 键名是该语言所属的子路径
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  //   '/': {
  //     lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
  //     title: 'I-Pleased',
  //     // description: ''
  //   },
  //   '/zh/': {
  //     lang: 'zh-CN',
  //     title: 'I-Pleased',
  //     // description: ''
  //   }
  // },
  title: 'IPleased',
  description: 'Full into the moon.',
  base: '/i-pleased/',
  lastUpdated: true, // 显示最后更新时间

  head: head,  // <head>内标签配置
  markdown, // Markdown配置
  themeConfig,   // 主题配置
})
