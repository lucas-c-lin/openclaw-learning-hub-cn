import { defineConfig } from 'vitepress'

export default defineConfig({
  // 💡 精简后的样式：保留苹果味圆角和阴影，移除复杂的层级与彩蛋文字
  head: [
    ['style', {}, `
      /* 1. 容器适配：确保在不同设备上图片都能处于合理位置 */
      .VPHero .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 0; /* 默认居中，由 VitePress 布局控制 */
      }

      /* 2. 静态图片样式：核心在于大圆角和多层阴影叠加 */
      .VPImage.image-src {
        border-radius: 44px !important; /* 经典的苹果图标圆角比例 */
        box-shadow: 
          0 10px 20px rgba(0,0,0,0.1), 
          0 20px 50px rgba(0,0,0,0.15) !important; 
        transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
        max-width: 100%;
        height: auto;
      }

      /* 3. 轻微的交互：仅保留向上的微浮动，不再向右下角弹走 */
      .VPImage.image-src:hover {
        transform: translateY(-8px) scale(1.01) !important;
        box-shadow: 
          0 15px 30px rgba(0,0,0,0.12), 
          0 30px 70px rgba(0,0,0,0.2) !important;
      }

      /* 4. 移动端微调：确保图片在小屏幕上不会过大 */
      @media (max-width: 960px) {
        .VPImage.image-src {
          border-radius: 32px !important;
          max-width: 280px !important;
        }
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