import { defineConfig } from 'vitepress'

export default defineConfig({
  // 💡 调整 head 里的 CSS，实现“右下角 45° 闪开”和“位置向右偏移”
  head: [
    ['style', {}, `
      /* 1. 给图片容器设置相对定位，并整体向右偏移 */
      .VPHero .image-container {
        position: relative;
        display: inline-block;
        width: 320px; 
        height: 320px;
        margin-left: 100px; /* 💡 让整个图片框往右挪一点，避开文字标题 */
      }

      /* 2. 底层彩蛋文字：默认就在那里，只是被图片压住了 */
      .VPHero .image-container::after {
        content: '🤖 哇哦！发现了 OpenClaw 的秘密基地！这里有教程、产品、主机和模型对比哦！🎉';
        position: absolute;
        top: 50%; /* 垂直居中 */
        left: 50%;
        transform: translate(-50%, -50%); /* 确保文字在方块中心 */
        width: 80%;
        text-align: center;
        font-size: 16px;
        color: #86868b;
        font-weight: 600;
        z-index: 1;
        line-height: 1.5;
      }

      /* 3. 底色背景块：像个容器一样垫在下面 */
      .VPHero .image-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        background-color: #f5f5f7;
        z-index: 0;
        box-shadow: inset 0 2px 10px rgba(0,0,0,0.05); /* 加一点内阴影，更有深度感 */
      }

      /* 4. 图片本身：初始位置盖死 */
      .VPImage.image-src {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2; /* 压在文字上面 */
        border-radius: 40px !important;
        box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important; /* 增加一点弹性动画 */
      }

      /* 5. 💡 核心改动：鼠标悬停时，向右下角 45° 移走 */
      .VPHero .image-container:hover .VPImage.image-src {
        transform: translate(120%, 120%) rotate(15deg) !important; /* 向右下平移并带点旋转 */
        opacity: 0.1; /* 变透明一点，让焦点回到文字上 */
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