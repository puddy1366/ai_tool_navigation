import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';

export const metadata: Metadata = {
  title: 'AI 工具导航 - 探索无限可能',
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
  colorClass: string; // 分类颜色类
  tools: Tool[];
}

// 分类数据
const categories: Category[] = [
  {
    id: 'painting',
    title: 'AI 绘画',
    colorClass: 'accent-cyan',
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
    colorClass: 'accent-purple',
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
    colorClass: 'accent-blue',
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
    colorClass: 'accent-pink',
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
    colorClass: 'accent-green',
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
];

export default function Home() {
  return (
    <div
      className="min-h-screen text-[var(--color-text-primary)]"
      style={{
        backgroundColor: 'var(--color-bg-primary)',
        backgroundImage: `
          radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.15), transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.15), transparent 25%)
        `,
      }}
    >
      <Navigation />
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
    <section className="hero">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold mb-4 tracking-tight leading-tight">
          <span
            className="bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
            }}
          >
            探索 AI 的无限可能
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
          精选优质 AI 工具，助力你的创作与学习
        </p>

        {/* 搜索框 */}
        <div className="search-container max-w-md mx-auto">
          <input
            type="text"
            placeholder="搜索 AI 工具..."
            className="search-input w-full px-5 py-3 rounded-full outline-none transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-search-bg)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-primary)',
              fontSize: '1rem',
            }}
          />
        </div>
      </div>
    </section>
  );
}

// 分类区域组件
function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <section className="container max-w-6xl mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
      className="category-section rounded-2xl p-6 transition-transform duration-300 flex flex-col gap-6"
      style={{
        backgroundColor: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* 分类标题 */}
      <div className="category-header flex items-center gap-3">
        <div
          className={`category-icon w-1 rounded`}
          style={{
            height: '24px',
            backgroundColor: `var(--accent-${category.colorClass})`,
            boxShadow: `0 0 10px var(--accent-${category.colorClass})`,
          }}
        />
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
          {category.title}
        </h2>
      </div>

      {/* 工具列表 */}
      <div className="tool-list flex flex-col gap-4">
        {category.tools.length > 0 ? (
          category.tools.map((tool) => (
            <ToolLink key={tool.name} tool={tool} />
          ))
        ) : (
          <p className="text-[var(--color-text-secondary)] text-center py-8">
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
      className="tool-card block text-decoration-none rounded-xl transition-all duration-200"
      style={{
        backgroundColor: 'var(--color-bg-tool)',
        border: '1px solid var(--color-border)',
        padding: '1.2rem',
      }}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3
            className="font-semibold text-[var(--color-text-primary)] mb-2"
            style={{ fontSize: '1rem' }}
          >
            {tool.name}
          </h3>
          <p
            className="text-sm truncate"
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.85rem',
            }}
          >
            {tool.description}
          </p>
        </div>
        <svg
          className="w-4 h-4 flex-shrink-0 ml-2 opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </a>
  );
}
