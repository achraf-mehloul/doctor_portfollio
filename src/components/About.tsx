import { Award, GraduationCap, Stethoscope } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-950/30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 dark:from-white dark:via-cyan-400 dark:to-white bg-clip-text text-transparent mb-4">
            من هو الدكتور أشرف؟
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/40 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="/photo_2025-11-07_17-36-29.jpg"
                alt="Dr. Achref"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed text-right" dir="rtl">
                الدكتور أشرف، جراح مختص في طب العيون، حاصل على شهادة الطب من جامعة الجزائر ومعتمد من المجلس الجزائري للطب. يملك خبرة واسعة في تشخيص وعلاج أمراض العين وجراحتها باستخدام أحدث الأجهزة العالمية.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 backdrop-blur-md rounded-2xl p-6 border border-blue-200/40 dark:border-blue-500/20 hover:scale-105 transition-transform">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 dark:bg-blue-500/30 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <div className="text-right flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">شهادة الطب</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">جامعة الجزائر</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/5 dark:to-blue-500/5 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/40 dark:border-cyan-500/20 hover:scale-105 transition-transform">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/20 dark:bg-cyan-500/30 rounded-xl">
                    <Award className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div className="text-right flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">معتمد من المجلس الجزائري</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">للطب والجراحة</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 backdrop-blur-md rounded-2xl p-6 border border-blue-200/40 dark:border-blue-500/20 hover:scale-105 transition-transform">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 dark:bg-blue-500/30 rounded-xl">
                    <Stethoscope className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <div className="text-right flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">خبرة +10 سنوات</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">في جراحة العيون المتقدمة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
