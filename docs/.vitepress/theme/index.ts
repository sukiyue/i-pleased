/*
 * @Description: 主题配置
 * @Date: 2022-08-24 15:58:22
 */

import DefaultTheme from 'vitepress/theme'
import './custom.styl'
// import { h } from 'vue'
// import Layout from './components/Layout.vue'
import SukanaWidget from './components/sakana-widget.vue'

export default {
  ...DefaultTheme,
  // Layout() {
  //   return h(DefaultTheme.Layout, null, {
  //     'home-hero-before': () => h(Layout)
  //   })
  // },
  enhanceApp({ app }) {
    app.component('SukanaWidget', SukanaWidget)
  }
}