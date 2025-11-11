import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 via-transparent to-transparent dark:from-blue-950/50"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 dark:from-white dark:via-cyan-400 dark:to-white bg-clip-text text-transparent mb-4">
            معلومات التواصل
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="tel:+213782675199"
            className="group relative bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative flex items-center gap-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-right">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">الهاتف</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white" dir="ltr">
                  +213 782 675 199
                </p>
              </div>
            </div>
          </a>

          <a
            href="mailto:achraf.dev.ai@gmail.com"
            className="group relative bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative flex items-center gap-6">
              <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-right">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">البريد الإلكتروني</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white break-all">
                  achraf.dev.ai@gmail.com
                </p>
              </div>
            </div>
          </a>

          <div className="md:col-span-2 group relative bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/40 dark:border-white/10 shadow-xl">
            <div className="relative flex items-center gap-6">
              <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-right">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">الموقع</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white" dir="rtl">
                  الجزائر
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 dark:from-blue-500/5 dark:via-cyan-500/5 dark:to-blue-500/5 backdrop-blur-md rounded-3xl p-8 border border-blue-200/40 dark:border-blue-500/20">
            <p className="text-gray-700 dark:text-gray-300 text-lg" dir="rtl">
              نحن هنا لخدمتكم وتقديم أفضل رعاية طبية لصحة عيونكم
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © 2025 Dr. Achref - All Rights Reserved
        </p>
      </footer>
    </section>
  );
}
