import { Navigation } from '@/components/navigation';
import { ParticleBackground } from '@/components/particle-background';
import { DynamicGradientBackground } from '@/components/dynamic-gradient';
import { Footer } from '@/components/footer';
import { ChatButton } from '@/components/chat-button';

export const metadata = {
  title: '关于我们 - AI 工具导航',
  description: '了解 AI 工具导航的故事和理念',
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* 全局背景 */}
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-8 animate-gradient-title">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-primary)] via-white to-[var(--color-accent-secondary)]">
            关于我们
          </span>
        </h1>

        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 backdrop-blur-md">
          <div className="space-y-6 text-[var(--color-text-secondary)]">
            <p className="text-lg leading-relaxed">
              AI 工具导航是一个致力于帮助用户发现和访问优质 AI 工具的平台。我们相信 AI 技术正在改变世界，
              希望通过精心整理的工具集合，让每个人都能轻松找到适合自己的 AI 助手。
            </p>

            <div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                我们的使命
              </h2>
              <p className="leading-relaxed">
                精选优质的 AI 工具，降低使用门槛，让 AI 技术真正服务于每个人的工作与生活。
                我们致力于成为 AI 工具领域最值得信赖的导航站。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                我们的价值观
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent-primary)] mt-1">✓</span>
                  <span>真实可靠：所有工具经过实际测试和验证</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent-primary)] mt-1">✓</span>
                  <span>持续更新：紧跟 AI 技术发展，及时更新工具列表</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent-primary)] mt-1">✓</span>
                  <span>用户至上：以用户需求为导向，不断优化体验</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                联系我们
              </h2>
              <p className="leading-relaxed">
                如果你有任何建议、反馈或合作意向，欢迎通过以下方式联系我们：
              </p>
              <div className="mt-4 space-y-2">
                <p>📧 Email: puddy1366@gmail.com</p>
                <p>💬 微信: your-wechat-id</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
}
