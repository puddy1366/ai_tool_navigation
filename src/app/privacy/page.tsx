import { Navigation } from '@/components/navigation';
import { ParticleBackground } from '@/components/particle-background';
import { DynamicGradientBackground } from '@/components/dynamic-gradient';
import { Footer } from '@/components/footer';

export const metadata = {
  title: '隐私政策 - AI 工具导航',
  description: 'AI 工具导航的隐私政策',
};

export default function PrivacyPage() {
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
            隐私政策
          </span>
        </h1>

        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 backdrop-blur-md">
          <div className="space-y-6 text-[var(--color-text-secondary)]">
            <p className="text-sm text-[var(--color-text-tertiary)]">
              最后更新时间：{new Date().toLocaleDateString('zh-CN')}
            </p>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                1. 信息收集
              </h2>
              <p className="leading-relaxed">
                我们可能收集以下信息：
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>访问日志信息（如 IP 地址、浏览器类型、访问时间）</li>
                <li>用户主动提供的信息（如联系表单中的内容）</li>
                <li>Cookie 和类似技术收集的信息</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                2. 信息使用
              </h2>
              <p className="leading-relaxed">
                我们使用收集的信息用于：
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>提供和改进我们的服务</li>
                <li>响应您的咨询和反馈</li>
                <li>分析网站使用情况，优化用户体验</li>
                <li>发送重要通知和更新</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                3. 信息共享
              </h2>
              <p className="leading-relaxed">
                我们不会向第三方出售、交易或转让您的个人信息，除非：
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>获得您的明确同意</li>
                <li>法律法规要求或政府部门要求</li>
                <li>为了保护我们的权利、财产或安全</li>
                <li>与受信任的服务提供商合作（在保密协议下）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                4. Cookie 使用
              </h2>
              <p className="leading-relaxed">
                我们使用 Cookie 和类似技术来：
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>记住您的偏好设置</li>
                <li>分析网站流量和使用情况</li>
                <li>提供个性化内容</li>
              </ul>
              <p className="mt-3">
                您可以通过浏览器设置管理 Cookie。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                5. 数据安全
              </h2>
              <p className="leading-relaxed">
                我们采取合理的技术和组织措施来保护您的个人信息安全，包括：
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>使用加密技术保护数据传输</li>
                <li>限制员工对个人信息的访问</li>
                <li>定期审查安全措施</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                6. 您的权利
              </h2>
              <p className="leading-relaxed">
                您有权：
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>访问您的个人信息</li>
                <li>更正不准确的信息</li>
                <li>删除您的个人信息</li>
                <li>反对或限制信息处理</li>
                <li>数据可携带性</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                7. 隐私政策更新
              </h2>
              <p className="leading-relaxed">
                我们可能会不时更新本隐私政策。更新后的政策将在本页面发布，建议您定期查看。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                8. 联系我们
              </h2>
              <p className="leading-relaxed">
                如果您对本隐私政策有任何疑问，请通过以下方式联系我们：
              </p>
              <div className="mt-3">
                <p>📧 Email: your-email@example.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
