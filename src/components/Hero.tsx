import { Eye } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-cyan-100/30 dark:from-blue-900/20 dark:via-transparent dark:to-cyan-900/20"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-12 inline-block relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-500 dark:to-cyan-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl rounded-full border border-white/30 dark:border-white/10 shadow-2xl animate-float"></div>
            <img
              src="/photo_2025-11-07_17-36-29.jpg"
              alt="Dr. Achref"
              className="relative w-full h-full object-cover rounded-full p-3"
            />
          </div>
        </div>

        <div className="space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-full border border-white/40 dark:border-white/10 shadow-lg mb-4">
            <Eye className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">جراح عيون متخصص</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-cyan-400 dark:to-white bg-clip-text text-transparent mb-4">
            Dr. Achref
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            خبرة تفوق عشر سنوات في جراحة العيون باستخدام أحدث التقنيات الحديثة
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('about')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                حول الطبيب
                <span className="group-hover:translate-x-1 transition-transform">←</span>
              </span>
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-white/30 dark:bg-white/5 backdrop-blur-md border border-white/40 dark:border-white/20 text-gray-800 dark:text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
            >
              الخدمات الطبية
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
