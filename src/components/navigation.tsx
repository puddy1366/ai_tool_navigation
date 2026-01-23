'use client';

// 导航栏组件
export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[var(--z-fixed)] bg-[var(--color-bg-secondary)] backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-lg font-bold text-[var(--color-text-primary)]">
              AI 工具导航
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
