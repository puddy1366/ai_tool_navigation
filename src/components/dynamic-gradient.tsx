'use client';

export function DynamicGradientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-5 mix-blend-overlay">
      {/* 动态渐变层1 - 蓝紫色 */}
      <div className="absolute inset-0 animate-gradient-1">
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #6B48FF 0%, transparent 70%)',
            left: '20%',
            top: '10%',
            animation: 'float-1 20s ease-in-out infinite',
          }}
        />
      </div>

      {/* 动态渐变层2 - 青色 */}
      <div className="absolute inset-0 animate-gradient-2">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #00F0FF 0%, transparent 70%)',
            right: '15%',
            bottom: '20%',
            animation: 'float-2 25s ease-in-out infinite',
          }}
        />
      </div>

      {/* 动态渐变层3 - 紫红色 */}
      <div className="absolute inset-0 animate-gradient-3">
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
            left: '10%',
            bottom: '30%',
            animation: 'float-3 22s ease-in-out infinite',
          }}
        />
      </div>

      {/* 动态渐变层4 - 深蓝色 */}
      <div className="absolute inset-0 animate-gradient-4">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
            right: '20%',
            top: '40%',
            animation: 'float-4 18s ease-in-out infinite',
          }}
        />
      </div>

      <style jsx global>{`
        @keyframes float-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(50px, 50px) scale(1.1);
          }
          50% {
            transform: translate(0, 100px) scale(0.9);
          }
          75% {
            transform: translate(-50px, 50px) scale(1.05);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-60px, -40px) scale(1.15);
          }
          66% {
            transform: translate(30px, -80px) scale(0.95);
          }
        }

        @keyframes float-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(80px, -60px) scale(1.2);
          }
        }

        @keyframes float-4 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          40% {
            transform: translate(-70px, 70px) scale(1.1);
          }
          80% {
            transform: translate(40px, -40px) scale(0.9);
          }
        }

        @keyframes gradient-1 {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.35;
          }
        }

        @keyframes gradient-2 {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes gradient-3 {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }

        @keyframes gradient-4 {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-gradient-1 {
          animation: gradient-1 8s ease-in-out infinite;
        }

        .animate-gradient-2 {
          animation: gradient-2 10s ease-in-out infinite;
        }

        .animate-gradient-3 {
          animation: gradient-3 12s ease-in-out infinite;
        }

        .animate-gradient-4 {
          animation: gradient-4 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
