import { defineConfig } from 'vitepress'

export default defineConfig({
  // 💡 调整 head 里的 CSS，实现“右下角 45° 闪开”和“位置向右偏移”
  head: [
    ['style', {}, `
      /* ============================================================
        1. 通用样式与电脑端定义 (桌面优先)
        ============================================================ */
      .VPHero .image-container {
        position: relative;
        display: inline-block;
        width: 320px; 
        height: 320px;
        margin-left: 80px; /* 电脑端偏移量 */
      }

      .VPHero .image-container::before {
        content: ''; position: absolute; top: 0; left: 0;
        width: 100%; height: 100%; border-radius: 40px;
        background-color: #f5f5f7; z-index: 1;
        box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
      }

      .VPHero .image-container::after {
        content: '🤖 哇哦！发现了 OpenClaw 的秘密基地！这里有教程、产品、主机和模型对比哦！🎉';
        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        display: flex; align-items: center; justify-content: center;
        text-align: center; font-size: 16px; color: #86868b;
        padding: 40px; box-sizing: border-box; z-index: 2; line-height: 1.5;
      }

      .VPImage.image-src {
        position: absolute !important; top: 2 !important; left: 2 !important;
        margin: 0 !important; width: 100% !important; height: 100% !important;
        z-index: 3; border-radius: 40px !important;
        box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }

      .VPHero .image-container:hover .VPImage.image-src {
        transform: translate(105%, 105%) rotate(12deg) !important; 
        opacity: 0.2;
      }

      /* ============================================================
        2. 📱 手机端适配逻辑 (当屏幕宽度小于 960px 时触发)
        ============================================================ */
      @media (max-width: 960px) {
        /* 强制容器居中，并取消向右的偏移 */
        .VPHero .image-container {
          margin: 20px auto !important; /* 上下留空，水平居中 */
          display: block !important;
          width: 280px; /* 手机端缩小一点图片尺寸 */
          height: 280px;
        }

        /* 核心：手机端取消图片划走的动效，避免在小屏幕上划出界 */
        .VPHero .image-container:hover .VPImage.image-src {
          transform: translateY(-10px) !important; /* 手机端改成微弱上浮即可 */
          opacity: 1;
        }

        /* 让文字彩蛋在手机端也稍微缩放一点 */
        .VPHero .image-container::after {
          font-size: 14px;
          padding: 30px;
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