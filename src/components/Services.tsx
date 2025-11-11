import { Eye, Scan, Microscope, Activity } from 'lucide-react';

const services = [
  {
    icon: Eye,
    title: 'تصحيح البصر بالليزر',
    subtitle: 'LASIK Surgery',
    description: 'عمليات تصحيح النظر بأحدث تقنيات الليزر لعلاج قصر وطول النظر والاستجماتيزم',
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'blue'
  },
  {
    icon: Scan,
    title: 'جراحة الساد',
    subtitle: 'Cataract Surgery',
    description: 'إزالة المياه البيضاء وزراعة العدسات الداخلية بأحدث التقنيات الجراحية',
    gradient: 'from-cyan-500 to-teal-500',
    glowColor: 'cyan'
  },
  {
    icon: Microscope,
    title: 'تشخيص أمراض الشبكية والقرنية',
    subtitle: 'Retina & Cornea Diagnosis',
    description: 'فحص دقيق وعلاج أمراض الشبكية والقرنية باستخدام أجهزة عالية الدقة',
    gradient: 'from-teal-500 to-emerald-500',
    glowColor: 'teal'
  },
  {
    icon: Activity,
    title: 'الفحص الدوري الشامل',
    subtitle: 'Comprehensive Eye Checkup',
    description: 'فحص شامل للعين لمرضى السكري وضغط الدم مع متابعة دورية للوقاية من المضاعفات',
    gradient: 'from-blue-600 to-blue-500',
    glowColor: 'blue'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent dark:via-cyan-950/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-cyan-700 to-gray-900 dark:from-white dark:via-cyan-400 dark:to-white bg-clip-text text-transparent mb-4">
            الخدمات الطبية
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            خدمات متكاملة في جراحة وطب العيون
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 blur-xl transition-all duration-500 rounded-3xl`}></div>

                <div className="relative h-full bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-right" dir="rtl">
                    {service.title}
                  </h3>

                  <p className="text-sm text-blue-600 dark:text-cyan-400 mb-4 font-medium">
                    {service.subtitle}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-right" dir="rtl">
                    {service.description}
                  </p>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
