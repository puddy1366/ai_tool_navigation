import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { ParticleBackground } from '@/components/particle-background';
import { DynamicGradientBackground } from '@/components/dynamic-gradient';
import { AboutSidebar } from '@/components/about-sidebar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'AI 工具导航 - 探索 AI 的无限可能',
  description: '精选优质 AI 工具，助力你的创作与学习',
};

// 工具数据类型
interface Tool {
  name: string;
  description: string;
  url: string;
}

// 分类数据类型
interface Category {
  id: string;
  title: string;
  tools: Tool[];
}

// 分类数据
const categories: Category[] = [
  {
    id: 'painting',
    title: 'AI 绘画',
    tools: [
      {
        name: 'Midjourney',
        description: '强大的 AI 图像生成工具',
        url: 'https://www.midjourney.com/',
      },
      {
        name: 'Stable Diffusion',
        description: '开源的 AI 绘画模型',
        url: 'https://stability.ai/',
      },
      {
        name: 'DALL·E 3',
        description: 'OpenAI 的图像生成 AI',
        url: 'https://openai.com/dall-e-3',
      },
      {
        name: 'Adobe Firefly',
        description: 'Adobe 的创意 AI 工具',
        url: 'https://www.adobe.com/products/firefly.html',
      },
    ],
  },
  {
    id: 'writing',
    title: 'AI 写作',
    tools: [
      {
        name: 'ChatGPT',
        description: '最流行的 AI 对话助手',
        url: 'https://chat.openai.com/',
      },
      {
        name: 'Claude',
        description: 'Anthropic 的 AI 助手',
        url: 'https://claude.ai/',
      },
      {
        name: '文心一言',
        description: '百度的大语言模型',
        url: 'https://yiyan.baidu.com/',
      },
      {
        name: '豆包',
        description: '字节跳动的 AI 助手',
        url: 'https://www.doubao.com/',
      },
    ],
  },
  {
    id: 'coding',
    title: 'AI 编程',
    tools: [
      {
        name: 'GitHub Copilot',
        description: 'AI 代码助手',
        url: 'https://github.com/features/copilot',
      },
      {
        name: 'Cursor',
        description: 'AI 驱动的代码编辑器',
        url: 'https://cursor.sh/',
      },
      {
        name: 'Replit',
        description: '在线编程平台',
        url: 'https://replit.com/',
      },
      {
        name: 'Codeium',
        description: '免费的 AI 编码助手',
        url: 'https://codeium.com/',
      },
    ],
  },
  {
    id: 'learning',
    title: 'AI 学习',
    tools: [
      {
        name: 'DeepLearning.AI',
        description: '吴恩达的 AI 课程',
        url: 'https://www.deeplearning.ai/',
      },
      {
        name: 'Hugging Face',
        description: 'AI 模型社区',
        url: 'https://huggingface.co/',
      },
      {
        name: 'Kaggle',
        description: '数据科学平台',
        url: 'https://www.kaggle.com/',
      },
      {
        name: 'Papers With Code',
        description: '论文与代码链接',
        url: 'https://paperswithcode.com/',
      },
      {
        name: 'Fast.ai',
        description: '实用的深度学习课程',
        url: 'https://www.fast.ai/',
      },
    ],
  },
  {
    id: 'media',
    title: 'AI 媒体',
    tools: [
      {
        name: 'Suno',
        description: 'AI 音乐生成工具',
        url: 'https://suno.com/',
      },
      {
        name: 'Runway',
        description: 'AI 视频创作工具',
        url: 'https://runwayml.com/',
      },
      {
        name: 'Pika',
        description: 'AI 视频生成平台',
        url: 'https://pika.art/',
      },
      {
        name: 'ElevenLabs',
        description: 'AI 语音合成工具',
        url: 'https://elevenlabs.io/',
      },
      {
        name: 'HeyGen',
        description: 'AI 数字人视频生成',
        url: 'https://www.heygen.com/',
      },
    ],
  },
  {
    id: 'office',
    title: 'AI 办公',
    tools: [
      {
        name: 'Notion AI',
        description: '智能笔记和知识管理工具',
        url: 'https://www.notion.so/',
      },
      {
        name: 'Gamma',
        description: 'AI 幻灯片和文档生成',
        url: 'https://gamma.app/',
      },
      {
        name: 'Tome',
        description: 'AI 演示文稿创建工具',
        url: 'https://tome.app/',
      },
      {
        name: 'Canva',
        description: 'AI 设计和创意工具',
        url: 'https://www.canva.com/',
      },
      {
        name: 'ChatDOC',
        description: 'AI 文档阅读和智能问答',
        url: 'https://chatdoc.com/',
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* 全局背景图片 */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* 粒子动画 */}
      <ParticleBackground />

      {/* 动态渐变背景 */}
      <DynamicGradientBackground />

      {/* 全局深色遮罩 */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundColor: 'rgba(10, 14, 20, 0.85)',
        }}
      />

      <Navigation />

      <main className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20 pb-12">
        {/* 左侧主内容区 */}
        <div className="flex-1 min-w-0">
          <HeroSection />
          <CategoriesSection categories={categories} />
        </div>

        {/* 右侧边栏 */}
        <AboutSidebar />
      </main>

      <Footer />
    </div>
  );
}

// Hero 区域组件
function HeroSection() {
  return (
    <section className="relative min-h-[240px] flex items-center justify-center overflow-hidden">
      {/* 背景装饰 - 增强动态效果 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--color-accent-primary)] rounded-full blur-3xl opacity-10 animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--color-accent-secondary)] rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* 主内容 */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-gradient-title">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-primary)] via-white to-[var(--color-accent-secondary)]">
            探索 AI 的无限可能
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
          精选优质 AI 工具，助力你的创作与学习
        </p>
      </div>

      {/* 底部装饰线条 - 动态效果 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-primary)] to-transparent opacity-50 animate-pulse" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-secondary)] to-transparent opacity-30 animate-pulse" style={{ marginTop: '1px', animationDelay: '0.5s' }} />
    </section>
  );
}

// 分类区域组件
function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

// 分类卡片组件
function CategoryCard({ category }: { category: Category }) {
  return (
    <article
      id={category.id}
      className="relative group bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 sm:p-8 overflow-hidden transition-all duration-[var(--duration-normal)] hover:transform hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
    >
      {/* 流光边框效果 */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer bg-gradient-to-r from-transparent via-[rgba(0,240,255,0.1)] to-transparent" />

      {/* 动态光晕 */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-accent-primary)] rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 group-hover:scale-150" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--color-accent-secondary)] rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 group-hover:scale-150" />

      {/* 分类标题 */}
      <div className="relative pl-4 mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-full animate-pulse" />
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-accent-primary)] group-hover:via-white group-hover:to-[var(--color-accent-secondary)] transition-all duration-300">
          {category.title}
        </h2>
      </div>

      {/* 工具列表 */}
      <div className="relative space-y-4">
        {category.tools.length > 0 ? (
          category.tools.map((tool) => (
            <ToolLink key={tool.name} tool={tool} />
          ))
        ) : (
          <p className="text-[var(--color-text-tertiary)] text-center py-8">
            暂无工具
          </p>
        )}
      </div>
    </article>
  );
}

// 工具链接组件
function ToolLink({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/tool relative block p-3 rounded-lg border border-[var(--color-border)] transition-all duration-[var(--duration-fast)] hover:transform hover:translate-x-1 hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-bg-tertiary)] overflow-hidden"
    >
      {/* 悬停光晕 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0, 240, 255, 0.1)] to-transparent opacity-0 group-hover/tool:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover/tool:translate-x-full" />

      <div className="relative z-10 flex items-start gap-3">
        <svg
          className="w-5 h-5 text-[var(--color-accent-primary)] mt-0.5 flex-shrink-0 group-hover/tool:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-1 group-hover/tool:text-[var(--color-accent-primary)] transition-colors">
            {tool.name}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 group-hover/tool:text-[var(--color-text-primary)] transition-colors">
            {tool.description}
          </p>
        </div>
      </div>
    </a>
  );
}
