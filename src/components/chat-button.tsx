'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Search, ExternalLink } from 'lucide-react';

// 工具数据
const tools = [
  // AI 绘画
  { name: 'Midjourney', description: '强大的 AI 图像生成工具', url: 'https://www.midjourney.com/', category: 'AI 绘画' },
  { name: 'Stable Diffusion', description: '开源的 AI 绘画模型', url: 'https://stability.ai/', category: 'AI 绘画' },
  { name: 'DALL·E 3', description: 'OpenAI 的图像生成 AI', url: 'https://openai.com/dall-e-3', category: 'AI 绘画' },
  { name: 'Adobe Firefly', description: 'Adobe 的创意 AI 工具', url: 'https://www.adobe.com/products/firefly.html', category: 'AI 绘画' },
  // AI 写作
  { name: 'ChatGPT', description: '最流行的 AI 对话助手', url: 'https://chat.openai.com/', category: 'AI 写作' },
  { name: 'Claude', description: 'Anthropic 的 AI 助手', url: 'https://claude.ai/', category: 'AI 写作' },
  { name: '文心一言', description: '百度的大语言模型', url: 'https://yiyan.baidu.com/', category: 'AI 写作' },
  { name: '豆包', description: '字节跳动的 AI 助手', url: 'https://www.doubao.com/', category: 'AI 写作' },
  // AI 编程
  { name: 'GitHub Copilot', description: 'AI 代码助手', url: 'https://github.com/features/copilot', category: 'AI 编程' },
  { name: 'Cursor', description: 'AI 驱动的代码编辑器', url: 'https://cursor.sh/', category: 'AI 编程' },
  { name: 'Replit', description: '在线编程平台', url: 'https://replit.com/', category: 'AI 编程' },
  { name: 'Codeium', description: '免费的 AI 编码助手', url: 'https://codeium.com/', category: 'AI 编程' },
  // AI 学习
  { name: 'DeepLearning.AI', description: '吴恩达的 AI 课程', url: 'https://www.deeplearning.ai/', category: 'AI 学习' },
  { name: 'Hugging Face', description: 'AI 模型社区', url: 'https://huggingface.co/', category: 'AI 学习' },
  { name: 'Kaggle', description: '数据科学平台', url: 'https://www.kaggle.com/', category: 'AI 学习' },
  { name: 'Papers With Code', description: '论文与代码链接', url: 'https://paperswithcode.com/', category: 'AI 学习' },
  { name: 'Fast.ai', description: '实用的深度学习课程', url: 'https://www.fast.ai/', category: 'AI 学习' },
  // AI 媒体
  { name: 'Suno', description: 'AI 音乐生成工具', url: 'https://suno.com/', category: 'AI 媒体' },
  { name: 'Runway', description: 'AI 视频创作工具', url: 'https://runwayml.com/', category: 'AI 媒体' },
  { name: 'Pika', description: 'AI 视频生成平台', url: 'https://pika.art/', category: 'AI 媒体' },
  { name: 'ElevenLabs', description: 'AI 语音合成工具', url: 'https://elevenlabs.io/', category: 'AI 媒体' },
  { name: 'HeyGen', description: 'AI 数字人视频生成', url: 'https://www.heygen.com/', category: 'AI 媒体' },
  // AI 办公
  { name: 'Notion AI', description: '智能笔记和知识管理工具', url: 'https://www.notion.so/', category: 'AI 办公' },
  { name: 'Gamma', description: 'AI 幻灯片和文档生成', url: 'https://gamma.app/', category: 'AI 办公' },
  { name: 'Tome', description: 'AI 演示文稿创建工具', url: 'https://tome.app/', category: 'AI 办公' },
  { name: 'Canva', description: 'AI 设计和创意工具', url: 'https://www.canva.com/', category: 'AI 办公' },
  { name: 'ChatDOC', description: 'AI 文档阅读和智能问答', url: 'https://chatdoc.com/', category: 'AI 办公' },
];

interface Message {
  type: 'user' | 'bot';
  content: string;
  tools?: typeof tools;
}

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: '你好！我是智能助手，可以帮你搜索 AI 工具。你可以问我：\n\n"有什么绘画工具？"\n"推荐编程工具"\n"找音乐生成工具"',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const searchTools = (query: string): typeof tools => {
    const lowerQuery = query.toLowerCase();
    return tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(lowerQuery) ||
        tool.description.toLowerCase().includes(lowerQuery) ||
        tool.category.toLowerCase().includes(lowerQuery)
    );
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages((prev) => [...prev, { type: 'user', content: userMessage }]);
    setIsLoading(true);

    // 本地搜索
    const results = searchTools(userMessage);

    // 模拟 AI 响应延迟
    setTimeout(() => {
      let botResponse: string;

      if (results.length > 0) {
        botResponse = `为你找到 ${results.length} 个相关工具：`;
      } else {
        botResponse = `抱歉，没有找到与"${userMessage}"相关的工具。\n\n你可以尝试搜索：\n• AI 绘画、写作、编程\n• 音乐、视频生成\n• 学习、办公工具`;
      }

      setMessages((prev) => [
        ...prev,
        { type: 'bot', content: botResponse, tools: results.length > 0 ? results : undefined },
      ]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

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
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text-primary)]">智能搜索</h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">搜索 AI 工具</p>
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

            {/* 消息列表 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white'
                        : 'bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-primary)]'
                    }`}
                  >
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                    {message.tools && message.tools.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.tools.map((tool) => (
                          <a
                            key={tool.name}
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg p-3 hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-200 group"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-semibold text-sm text-[var(--color-text-primary)]">{tool.name}</span>
                                  <span className="text-xs px-2 py-0.5 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] rounded-full">
                                    {tool.category}
                                  </span>
                                </div>
                                <p className="text-xs text-[var(--color-text-secondary)]">{tool.description}</p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-[var(--color-accent-primary)] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-2xl p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* 输入框 */}
            <div className="p-4 border-t border-[var(--color-border)] bg-[var(--color-bg-tertiary)]">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="搜索 AI 工具..."
                  className="flex-1 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white flex items-center justify-center hover:shadow-[0_4px_20px_rgba(0,240,255,0.4)] hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
