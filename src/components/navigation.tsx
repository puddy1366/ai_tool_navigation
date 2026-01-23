'use client';

// 导航栏组件
export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[var(--z-fixed)] bg-[var(--color-bg-secondary)] backdrop-blur-md border-b border-[var(--color-border)]">
      {/* 导航栏顶部流光效果 */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-accent-primary)] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-accent-primary)] group-hover:via-white group-hover:to-[var(--color-accent-secondary)] transition-all duration-300">
              AI 工具导航
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
