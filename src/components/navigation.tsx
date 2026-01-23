'use client';

// 导航栏组件
export function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0"
      style={{
        padding: '1rem 5%',
        backgroundColor: 'var(--color-nav-bg)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div className="flex items-center gap-2">
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%)',
          }}
        >
          <span className="text-white font-bold text-base">AI</span>
        </div>
        <span
          className="font-bold"
          style={{
            fontSize: '1.25rem',
            color: 'var(--color-text-primary)',
          }}
        >
          AI 工具导航
        </span>
      </div>
    </nav>
  );
}
