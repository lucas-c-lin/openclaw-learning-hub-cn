import { defineConfig } from 'vitepress'

export default defineConfig({
  // 💡 彻底静态化：取消所有位移(transform)效果，确保全设备显示一致
  head: [
    ['style', {}, `
      /* 1. 容器适配：回归标准流，解决手机端重叠问题 */
      .VPHero .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 0; 
      }

      /* 2. 静态图片样式：强化苹果式圆角与呼吸感阴影 */
      .VPImage.image-src {
        border-radius: 44px !important; 
        box-shadow: 
          0 10px 20px rgba(0,0,0,0.1), 
          0 20px 50px rgba(0,0,0,0.15) !important; 
        transition: all 0.4s ease !important; /* 平滑过渡 */
        max-width: 100%;
        height: auto;
        transform: none !important; /* 强制初始状态不位移 */
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
        .VPImage.image-src {
          border-radius: 32px !important;
          max-width: 280px !important;
        }
        .VPHero .image-container {
          margin-top: 24px; /* 手机端标题下方留出间距 */
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