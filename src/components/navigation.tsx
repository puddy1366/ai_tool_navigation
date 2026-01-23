'use client';

import { useEffect, useState } from 'react';

// 分类数据类型
interface Tool {
  name: string;
  description: string;
  url: string;
}

interface Category {
  id: string;
  title: string;
  tools: Tool[];
}

// 导航栏组件
export function Navigation({ categories }: { categories: Category[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const category of categories) {
        const element = document.getElementById(category.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[var(--z-fixed)] bg-[var(--color-bg-secondary)] backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-lg font-bold text-[var(--color-text-primary)]">
              AI 工具导航
            </span>
          </div>

          {/* 分类锚点链接 */}
          <div className="hidden md:flex items-center gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleScrollTo(category.id)}
                className={`relative text-sm font-medium transition-all duration-[var(--duration-normal)] ${
                  activeCategory === category.id
                    ? 'text-[var(--color-accent-primary)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {category.title}
                {activeCategory === category.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]" />
                )}
              </button>
            ))}
          </div>

          {/* 移动端菜单按钮（简化版，直接显示所有链接） */}
          <div className="md:hidden flex flex-col gap-1">
            {categories.slice(0, 2).map((category) => (
              <button
                key={category.id}
                onClick={() => handleScrollTo(category.id)}
                className={`text-xs font-medium transition-all duration-[var(--duration-normal)] ${
                  activeCategory === category.id
                    ? 'text-[var(--color-accent-primary)]'
                    : 'text-[var(--color-text-secondary)]'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
