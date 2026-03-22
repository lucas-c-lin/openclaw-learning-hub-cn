import { defineConfig } from 'vitepress'

export default defineConfig({
  // 💡 调整 head 里的 CSS，实现“右下角 45° 闪开”和“位置向右偏移”
  head: [
    ['style', {}, `
      /* 1. 容器：决定整体位置。通过 margin-left 整体往右挪，不影响内部对齐 */
      .VPHero .image-container {
        position: relative;
        display: inline-block;
        width: 320px; 
        height: 320px;
        margin-left: 80px; /* 💡 整体向右偏移量，你可以根据视觉效果微调这个值 */
      }

      /* 2. 底色背景块：作为基准层 */
      .VPHero .image-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        background-color: #f5f5f7;
        z-index: 1;
        box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
      }

      /* 3. 底层彩蛋文字：在背景块之上，图片之下 */
      .VPHero .image-container::after {
        content: '🤖 哇哦！发现了 OpenClaw 的秘密基地！这里有教程、产品、主机和模型对比哦！🎉';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 16px;
        color: #86868b;
        font-weight: 600;
        padding: 40px;
        box-sizing: border-box;
        z-index: 2;
        line-height: 1.5;
      }

      /* 4. 图片本身：初始状态必须设为 top:0; left:0; 才能实现完全重叠 */
      .VPImage.image-src {
        position: absolute !important;
        top: 2 !important;
        left: 2 !important;
        margin: 0 !important; /* 💡 强制清除 VitePress 默认的 margin */
        width: 100% !important;
        height: 100% !important;
        z-index: 3; /* 最顶层 */
        border-radius: 40px !important;
        box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important; /* 丝滑的苹果式动画 */
      }

      /* 5. 悬停效果：向右下 45° 弹出 */
      .VPHero .image-container:hover .VPImage.image-src {
        transform: translate(105%, 105%) rotate(12deg) !important; 
        opacity: 0.2;
        box-shadow: 0 0 0 rgba(0,0,0,0) !important;
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