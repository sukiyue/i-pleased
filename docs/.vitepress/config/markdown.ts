/*
 * @Description: Markdown配置
 * @Date: 2022-08-24 17:53:35
 */
import { MarkdownOptions } from "vitepress";
import mdItCustomAttrs  from 'markdown-it-custom-attrs'

export const markdown: MarkdownOptions = {
  theme: 'material-palenight',
  lineNumbers: true,
  config: (md) => {
    // use more markdown-it plugins!
    // 添加图片放大预览效果
    md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
    })
    }
}