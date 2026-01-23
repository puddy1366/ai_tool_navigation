import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';

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
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <Navigation categories={categories} />
      <main>
        <HeroSection />
        <CategoriesSection categories={categories} />
      </main>
    </div>
  );
}

// Hero 区域组件
function HeroSection() {
  return (
    <section
      className="relative min-h-[280px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(135deg, #0A0E14 0%, #1A1E2E 50%, #0A0E14 100%)',
      }}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--color-accent-primary)] rounded-full blur-3xl opacity-10" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--color-accent-secondary)] rounded-full blur-3xl opacity-10"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* 主内容 */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-primary)] via-white to-[var(--color-accent-secondary)]">
            探索 AI 的无限可能
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
          精选优质 AI 工具，助力你的创作与学习
        </p>
      </div>

      {/* 底部装饰线条 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-primary)] to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-secondary)] to-transparent opacity-30" style={{ marginTop: '1px' }} />
    </section>
  );
}

// 分类区域组件
function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
      className="relative group bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 sm:p-8 transition-all duration-[var(--duration-normal)] hover:transform hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
    >
      {/* 分类标题 */}
      <div className="relative pl-4 mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-full" />
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
          {category.title}
        </h2>
      </div>

      {/* 工具列表 */}
      <div className="space-y-4">
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
      className="group/tool block p-3 rounded-lg border border-[var(--color-border)] transition-all duration-[var(--duration-fast)] hover:transform hover:translate-x-1 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-tertiary)]"
    >
      <h3 className="font-semibold text-[var(--color-text-primary)] mb-1 group-hover/tool:text-[var(--color-accent-primary)] transition-colors">
        {tool.name}
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
        {tool.description}
      </p>
    </a>
  );
}
