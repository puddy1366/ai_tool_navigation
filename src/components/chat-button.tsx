'use client';

import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 悬浮按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[var(--z-modal-backdrop)] bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white rounded-full p-4 shadow-[0_4px_20px_rgba(0,240,255,0.4)] hover:shadow-[0_6px_30px_rgba(0,240,255,0.6)] hover:scale-110 transition-all duration-300 group"
        title="智能助手"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>

      {/* 弹窗 */}
      {isOpen && (
        <>
          {/* 遮罩层 */}
          <div
            className="fixed inset-0 z-[var(--z-modal-backdrop)] bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* 弹窗内容 */}
          <div className="fixed bottom-24 right-6 z-[var(--z-modal)] w-[400px] h-[600px] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up">
            {/* 弹窗标题栏 */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)] bg-[var(--color-bg-tertiary)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text-primary)]">智能助手</h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">随时为你服务</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-200"
                title="关闭"
              >
                <X className="w-4 h-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]" />
              </button>
            </div>

            {/* iframe 容器 */}
            <div className="flex-1 relative">
              <iframe
                src="https://www.coze.cn/store/agent/7602470592113328191?bot_id=true"
                className="w-full h-full border-0"
                title="智能助手"
                allow="microphone; camera; clipboard-read; clipboard-write"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
