import { Navigation } from '@/components/navigation';
import { ParticleBackground } from '@/components/particle-background';
import { DynamicGradientBackground } from '@/components/dynamic-gradient';
import { Footer } from '@/components/footer';

export const metadata = {
  title: '使用条款 - AI 工具导航',
  description: 'AI 工具导航的使用条款',
};

export default function TermsPage() {
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
            使用条款
          </span>
        </h1>

        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 backdrop-blur-md">
          <div className="space-y-6 text-[var(--color-text-secondary)]">
            <p className="text-sm text-[var(--color-text-tertiary)]">
              最后更新时间：{new Date().toLocaleDateString('zh-CN')}
            </p>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                1. 接受条款
              </h2>
              <p className="leading-relaxed">
                使用本网站即表示您同意遵守这些使用条款。如果您不同意这些条款，请勿使用本网站。
                我们保留随时修改这些条款的权利，修改后的条款将在本页面发布。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                2. 网站内容
              </h2>
              <p className="leading-relaxed">
                本网站提供的 AI 工具信息仅供参考，我们不对以下内容承担责任：
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>第三方工具的准确性、完整性或可靠性</li>
                <li>第三方工具的功能、服务或政策变更</li>
                <li>使用第三方工具产生的任何损失或损害</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                3. 使用规范
              </h2>
              <p className="leading-relaxed">
                在使用本网站时，您同意：
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>不用于任何非法目的</li>
                <li>不干扰或破坏网站的正常运行</li>
                <li>不传播病毒、恶意代码或其他有害内容</li>
                <li>不侵犯他人的知识产权或隐私权</li>
                <li>不进行垃圾信息发送或其他滥用行为</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                4. 知识产权
              </h2>
              <p className="leading-relaxed">
                本网站的内容（包括但不限于文本、图片、标识、设计）均受知识产权法保护。
                未经明确授权，您不得：
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>复制、修改或分发网站内容</li>
                <li>将内容用于商业目的</li>
                <li>移除或修改任何版权或所有权声明</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                5. 外部链接
              </h2>
              <p className="leading-relaxed">
                本网站包含指向第三方网站的链接。这些链接仅为方便用户而提供。
                我们不对第三方网站的内容或隐私政策负责。
                建议您在访问任何外部网站时查看其隐私政策和使用条款。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                6. 免责声明
              </h2>
              <p className="leading-relaxed">
                本网站按"现状"和"可用"基础提供服务，不提供任何明示或暗示的保证，包括但不限于：
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>网站将不间断运行</li>
                <li>错误将被及时纠正</li>
                <li>网站或服务器无病毒或其他有害成分</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                7. 责任限制
              </h2>
              <p className="leading-relaxed">
                在法律允许的最大范围内，我们不对以下情况承担责任：
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>直接或间接使用或无法使用本网站</li>
                <li>网站上的任何错误、遗漏或中断</li>
                <li>任何未经授权访问或使用我们的服务器</li>
                <li>任何从网站传输的病毒或其他有害成分</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                8. 适用法律
              </h2>
              <p className="leading-relaxed">
                这些使用条款受中华人民共和国法律管辖，并据此解释。
                任何因使用本网站引起的争议应提交至中国有管辖权的法院解决。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                9. 条款修改
              </h2>
              <p className="leading-relaxed">
                我们保留随时修改这些条款的权利。修改后的条款将在本页面发布，
                并自发布之日起生效。继续使用本网站即表示您接受修改后的条款。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                10. 联系我们
              </h2>
              <p className="leading-relaxed">
                如果您对这些使用条款有任何疑问，请通过以下方式联系我们：
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
