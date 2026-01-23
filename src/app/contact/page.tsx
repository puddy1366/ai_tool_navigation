import { Navigation } from '@/components/navigation';
import { ParticleBackground } from '@/components/particle-background';
import { DynamicGradientBackground } from '@/components/dynamic-gradient';
import { Footer } from '@/components/footer';

export const metadata = {
  title: '联系我们 - AI 工具导航',
  description: '联系 AI 工具导航',
};

export default function ContactPage() {
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

      <Navigation categories={[]} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-8 animate-gradient-title">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-primary)] via-white to-[var(--color-accent-secondary)]">
            联系我们
          </span>
        </h1>

        <div className="space-y-6">
          {/* 联系方式卡片 */}
          <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
              联系方式
            </h2>

            <div className="space-y-4">
              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center group-hover:bg-[var(--color-accent-primary)] transition-colors">
                  <svg
                    className="w-6 h-6 text-[var(--color-accent-primary)] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Email
                  </div>
                  <div className="text-lg font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)]">
                    your-email@example.com
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center group-hover:bg-[var(--color-accent-primary)] transition-colors">
                  <svg
                    className="w-6 h-6 text-[var(--color-text-primary)] group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    GitHub
                  </div>
                  <div className="text-lg font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)]">
                    @yourusername
                  </div>
                </div>
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center group-hover:bg-[var(--color-accent-primary)] transition-colors">
                  <svg
                    className="w-6 h-6 text-[var(--color-accent-primary)] group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    X (Twitter)
                  </div>
                  <div className="text-lg font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)]">
                    @yourusername
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* 反馈建议 */}
          <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
              反馈与建议
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              如果您有任何建议、反馈或想要推荐新的 AI 工具，欢迎随时联系我们！
              您的意见对我们非常重要，我们将认真对待每一条反馈。
            </p>
          </div>

          {/* 社交媒体 */}
          <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
              关注我们
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              关注我们的社交媒体账号，获取最新的 AI 工具推荐和技术资讯。
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
