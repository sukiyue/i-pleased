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
  title: 'IPleased',
  description: 'Full into the moon.',
  base: '/i-pleased/',
  lastUpdated: true, // 显示最后更新时间

  head: head,  // <head>内标签配置
  markdown, // Markdown配置
  themeConfig,   // 主题配置
})
