import { defineConfig } from 'vitepress'

export default defineConfig({
  // 💡 在这里添加自定义样式，让右侧图片变圆角、加阴影，像苹果图标一样
  head: [
    ['style', {}, `
      /* 1. 给图片容器设置相对定位，并设置固定宽高 (防止文字影响布局) */
      .VPHero .image-container {
        position: relative;
        display: inline-block;
        width: 320px; /* 根据你的图片比例调整 */
        height: 320px; /* 1:1 图片 */
      }

      /* 2. 图片本身的样式：绝对定位，层级更高，并增加圆角阴影 */
      .VPImage.image-src {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2; /* 确保图片在文字上面 */
        border-radius: 40px !important;
        box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
        
        /* 平滑过渡动效 */
        transition: transform 0.3s ease, box-shadow 0.3s ease !important;
      }

      /* 3. 鼠标悬停时的动效：图片向上悬浮 */
      .VPImage.image-src:hover {
        transform: translateY(-20px) !important; /* 向上悬浮更多，露出底下的字 */
        box-shadow: 0 40px 80px rgba(0,0,0,0.2) !important; /* 阴影也变深，加强悬浮感 */
      }

      /* 4. 创建“底色”背景块，文字将在这个块上面显示 */
      .VPHero .image-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        background-color: #f5f5f7; /* 类似苹果风格的极浅灰色 */
        z-index: 1;
      }

      /* 5. 创建底部的彩蛋文字 */
      .VPHero .image-container::after {
        content: '🤖 哇哦！发现了 OpenClaw 的秘密基地！这里有教程、产品、主机和模型对比哦！🎉';
        position: absolute;
        bottom: 20px; /* 文字距离底部的距离 */
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 14px;
        color: #86868b; /* 苹果风格的灰色文字 */
        font-weight: 500;
        padding: 0 20px;
        box-sizing: border-box;
        z-index: 1; /* 确保文字在图片下面，但在底色块上面 */
        
        /* 默认隐藏，只有图片悬浮时才显示 (可选，如果你想更神秘一点) */
        /* opacity: 0;
        transition: opacity 0.3s ease; */
      }

      /* (可选) 当图片悬浮时，文字慢慢浮现 */
      /* .VPImage.image-src:hover + ::after {
        opacity: 1;
      } */
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