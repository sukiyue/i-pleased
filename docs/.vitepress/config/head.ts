/*
 * @Description: <head>内标签配置
 * @Date: 2022-08-24 17:40:38
 */
import { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['meta', { name: 'author', content: 'sukiyue' }],
  ['meta', { name: 'keywords', content: 'FULL INTO THE MOON' }],
  // 添加图片放大预览效果
  ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },],
  ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
]