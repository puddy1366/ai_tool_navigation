'use client';

export function AboutSidebar() {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-24 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 backdrop-blur-md">
        {/* 头像 */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--color-border)] shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              <img
                src="/avatar.svg"
                alt="头像"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // 如果头像加载失败，显示默认占位
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center">
                      <span class="text-white text-4xl font-bold">PD</span>
                    </div>
                  `;
                }}
              />
            </div>
            {/* 在线状态指示器 */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-[var(--color-bg-secondary)]" />
          </div>
        </div>

        {/* 个人信息 */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            产品狗，产品狗
          </h2>
          <p className="text-[var(--color-text-secondary)] text-sm mb-3">
            全栈工程师 / AI 爱好者
          </p>
          <p className="text-[var(--color-text-tertiary)] text-sm leading-relaxed">
            热爱探索 AI 技术的前沿领域，致力于将 AI 融入日常工作，提升效率和创造力。
          </p>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-[var(--color-border)]">
          <div className="text-center">
            <div className="text-xl font-bold text-[var(--color-accent-primary)]">6</div>
            <div className="text-xs text-[var(--color-text-secondary)]">分类</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[var(--color-accent-primary)]">27</div>
            <div className="text-xs text-[var(--color-text-secondary)]">工具</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[var(--color-accent-primary)]">100%</div>
            <div className="text-xs text-[var(--color-text-secondary)]">精选</div>
          </div>
        </div>

        {/* 社交链接 */}
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            联系方式
          </h3>
          <div className="space-y-3">
            <a
              href="mailto:your-email@example.com"
              className="flex items-center gap-3 p-3 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center group-hover:bg-[var(--color-accent-primary)] transition-colors">
                <svg
                  className="w-5 h-5 text-[var(--color-accent-primary)] group-hover:text-white"
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
              <div className="flex-1">
                <div className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)]">
                  Email
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  your-email@example.com
                </div>
              </div>
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center group-hover:bg-[var(--color-accent-primary)] transition-colors">
                <svg
                  className="w-5 h-5 text-[var(--color-text-primary)] group-hover:text-white"
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
              <div className="flex-1">
                <div className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)]">
                  GitHub
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  @yourusername
                </div>
              </div>
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center group-hover:bg-[var(--color-accent-primary)] transition-colors">
                <svg
                  className="w-5 h-5 text-[var(--color-accent-primary)] group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)]">
                  X (Twitter)
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  @yourusername
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
