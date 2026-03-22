import { defineConfig } from 'vitepress'

export default defineConfig({
  // 💡 在这里添加自定义样式，让右侧图片变圆角、加阴影，像苹果图标一样
  head: [
    ['style', {}, `
      .VPImage.image-src {
        border-radius: 40px !important; /* 苹果风格大圆角 */
        box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important; /* 柔和深邃的阴影 */
        transition: transform 0.3s ease !important;
      }
      .VPImage.image-src:hover {
        transform: translateY(-10px) scale(1.02) !important; /* 鼠标悬浮微动 */
      }
    `]
  ],
  base: '/openclaw-learning-hub-cn/',
  title: "OpenClaw Learning Hub",
  description: "精选 OpenClaw 中文资源与硬件/模型对比指南",
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '精选教程', link: '/guide/tutorials' },
      { text: '产品对比', link: '/comparison/products' },
      { text: '主机对比', link: '/comparison/hardware' },
      { text: '模型对比', link: '/models/pricing' }
    ],
    sidebar: [
      {
        text: '📖 教程资源',
        items: [
          { text: '精选教程汇总', link: '/guide/tutorials' },
        ]
      },
      {
        text: '🤖 产品与硬件',
        items: [
          { text: '主流产品汇总与对比', link: '/comparison/products' },
          { text: '核心硬件清单与选型', link: '/comparison/hardware' },
        ]
      },
      {
        text: '💡 AI 模型相关',
        items: [
          { text: '模型接入汇总与售价', link: '/models/pricing' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lucas-c-lin/openclaw-learning-hub-cn' }
    ]
  }
})