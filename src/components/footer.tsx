export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* 版权信息 */}
          <div className="text-sm text-[var(--color-text-secondary)]">
            © {new Date().getFullYear()} AI 工具导航. All rights reserved.
          </div>

          {/* 链接 */}
          <div className="flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
            <a
              href="#"
              className="hover:text-[var(--color-accent-primary)] transition-colors"
            >
              关于我们
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-accent-primary)] transition-colors"
            >
              隐私政策
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-accent-primary)] transition-colors"
            >
              使用条款
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-accent-primary)] transition-colors"
            >
              联系我们
            </a>
          </div>

          {/* 备案号（可选） */}
          <div className="text-sm text-[var(--color-text-tertiary)]">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent-primary)] transition-colors"
            >
              备案号：京ICP备XXXXXXXX号
            </a>
          </div>
        </div>

        {/* 底部装饰线 */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-primary)] to-transparent opacity-30" />
      </div>
    </footer>
  );
}
