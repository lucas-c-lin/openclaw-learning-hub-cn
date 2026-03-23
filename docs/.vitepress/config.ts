import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['style', {}, `
      /* Hero 布局：标题左，图片右 */
      .VPHero {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 40px;
      }

      .VPHero .container { flex: 1; }

      /* 图片容器：1:1 正方形 */
      .VPHero .image-container {
        width: 400px;
        height: 400px;
      }

      /* 图片：圆角显示 */
      .VPImage.image-src {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        object-fit: cover;
      }

      /* 手机端：上下布局 */
      @media (max-width: 768px) {
        .VPHero {
          flex-direction: column;
          gap: 24px;
        }
        .VPHero .image-container {
          width: 280px;
          height: 280px;
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
        text: ' 教程资源',
        items: [
          { text: '精选教程汇总', link: '/guide/tutorials' },
        ]
      },
      {
        text: ' 产品与硬件',
        items: [
          { text: '主流产品汇总与对比', link: '/comparison/products' },
          { text: '核心硬件清单与选型', link: '/comparison/hardware' },
        ]
      },
      {
        text: ' AI 模型相关',
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