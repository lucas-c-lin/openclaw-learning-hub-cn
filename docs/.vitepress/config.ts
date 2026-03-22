import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OpenClaw Learning Hub",
  description: "精选 OpenClaw 中文资源与硬件/模型对比指南",
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速入门', link: '/guide/getting-started' }
    ],
    sidebar: [
      {
        text: '📖 核心教程',
        items: [
          { text: '快速上手指南', link: '/guide/getting-started' },
          { text: '常见问题避坑', link: '/guide/faq' },
        ]
      },
      {
        text: '💰 成本与硬件',
        items: [
          { text: '模型 API 售价对比', link: '/models/pricing' },
          { text: '硬件选购建议', link: '/hardware/buying-guide' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lucas-c-lin/openclaw-learning-hub-cn' }
    ]
  }
})