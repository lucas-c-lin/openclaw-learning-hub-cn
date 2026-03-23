import { defineConfig } from 'vitepress'

export default defineConfig({
  // 💡 彻底静态化：取消所有位移(transform)效果，确保全设备显示一致
  head: [
    ['style', {}, `
      /* 0. Hero 整体调整：完整解决方案 */
      .VPHero {
        display: flex !important;
        flex-direction: row !important;
        justify-content: space-between !important;
        align-items: center !important;
        gap: 60px !important;
      }
      .VPHero .container { flex: 1 !important; }
      .VPHero .image-container { 
        flex: 0 0 450px !important;
        min-height: 400px !important;
        /* 下面这些可以加上来微调位置 */
        margin-left: 0;      /* 左边间距 */
        margin-right: 0;     /* 右边间距 */
        margin-top: 0;       /* 上边间距 */
        margin-bottom: 0;    /* 下边间距 */
      }

      /* 1. 图片容器 - 显示在右侧 */
      /* 已移至上面的 .VPHero .image-container */

      /* 2. 静态图片样式：大号图片 500px 保持 1:1 */
      .VPImage.image-src {
        width: 100% !important;
        max-width: 500px !important;
        aspect-ratio: 1 / 1 !important;
        object-fit: cover !important;
        border-radius: 44px !important; 
        box-shadow: 
          0 10px 20px rgba(0,0,0,0.1), 
          0 20px 50px rgba(0,0,0,0.15) !important; 
        transition: all 0.4s ease !important;
        transform: none !important;
      }

      /* 3. 悬停反馈：取消“跑路”效果，改为原地轻微缩放 */
      .VPImage.image-src:hover {
        transform: scale(1.02) !important; /* 仅在原地轻微放大，不产生坐标位移 */
        box-shadow: 
          0 15px 30px rgba(0,0,0,0.12), 
          0 30px 70px rgba(0,0,0,0.2) !important;
      }

      /* 4. 移动端兼容性补丁 */
      @media (max-width: 960px) {
        .VPHero {
          flex-direction: column !important;
          gap: 30px !important;
        }
        .VPHero .container {
          order: 1 !important;
        }
        .VPHero .image-container {
          order: 2 !important;
          flex: none !important;
          min-height: auto !important;
        }
        .VPImage.image-src {
          border-radius: 32px !important;
          max-width: 320px !important;
          aspect-ratio: 1 / 1 !important;
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