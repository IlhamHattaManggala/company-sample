import { useTranslation } from '../../i18n/LanguageProvider';
import { useFadeIn } from '../../hooks/useFadeIn';

const MarketingSolution = () => {
  const { t, language } = useTranslation();
  useFadeIn();

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Digital Marketing Strategy',
      titleId: 'Strategi Pemasaran Digital',
      description: 'Comprehensive digital marketing strategies tailored to your business goals and target audience.',
      descriptionId: 'Strategi pemasaran digital komprehensif yang disesuaikan dengan tujuan bisnis dan target audiens Anda.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: 'Social Media Management',
      titleId: 'Manajemen Media Sosial',
      description: 'Professional social media management and advertising to boost your online presence and engagement.',
      descriptionId: 'Manajemen dan periklanan media sosial profesional untuk meningkatkan kehadiran dan keterlibatan online Anda.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: 'Content Creation',
      titleId: 'Pembuatan Konten',
      description: 'High-quality content creation and marketing to engage your audience and drive conversions.',
      descriptionId: 'Pembuatan dan pemasaran konten berkualitas tinggi untuk melibatkan audiens dan meningkatkan konversi.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'SEO & SEM Optimization',
      titleId: 'Optimasi SEO & SEM',
      description: 'Advanced SEO and SEM strategies to improve your search engine rankings and visibility.',
      descriptionId: 'Strategi SEO dan SEM canggih untuk meningkatkan peringkat dan visibilitas mesin pencari Anda.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: 'Brand Identity',
      titleId: 'Identitas Merek',
      description: 'Strategic brand identity and positioning to differentiate your business in the market.',
      descriptionId: 'Identitas dan positioning merek strategis untuk membedakan bisnis Anda di pasar.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Analytics & Reporting',
      titleId: 'Analitik & Pelaporan',
      description: 'Comprehensive marketing analytics and reporting to track performance and optimize campaigns.',
      descriptionId: 'Analitik dan pelaporan pemasaran komprehensif untuk melacak kinerja dan mengoptimalkan kampanye.',
    },
  ];

  const benefits = [
    {
      title: 'Data-Driven Approach',
      titleId: 'Pendekatan Berbasis Data',
      description: 'We leverage advanced analytics and insights to make informed marketing decisions that drive results.',
      descriptionId: 'Kami memanfaatkan analitik dan wawasan canggih untuk membuat keputusan pemasaran yang tepat dan menghasilkan hasil.',
    },
    {
      title: 'Customized Strategies',
      titleId: 'Strategi yang Disesuaikan',
      description: 'Every marketing plan is carefully tailored to your unique business needs, goals, and target audience.',
      descriptionId: 'Setiap rencana pemasaran disesuaikan dengan kebutuhan, tujuan, dan target audiens bisnis Anda yang unik.',
    },
    {
      title: 'Proven Results',
      titleId: 'Hasil Terbukti',
      description: 'Our strategies have helped numerous businesses achieve significant growth and exceed their marketing objectives.',
      descriptionId: 'Strategi kami telah membantu banyak bisnis mencapai pertumbuhan signifikan dan melampaui tujuan pemasaran mereka.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {t('services.marketingSolution.title')}
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {t('services.marketingSolution.description')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {language === 'id'
                  ? 'Tingkatkan visibilitas merek Anda dan capai tujuan pemasaran dengan strategi yang terbukti efektif dan solusi inovatif yang disesuaikan dengan kebutuhan bisnis Anda.'
                  : 'Enhance your brand visibility and achieve your marketing goals with proven strategies and innovative solutions tailored to your business needs.'}
              </p>
            </div>
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80"
                alt={t('services.marketingSolution.title')}
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {language === 'id' ? 'Layanan Kami' : 'Our Services'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'id'
                ? 'Kami menyediakan rangkaian lengkap layanan pemasaran untuk membantu bisnis Anda berkembang dan mencapai kesuksesan.'
                : 'We provide a comprehensive range of marketing services to help your business grow and achieve success.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow fade-in group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-navy bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy group-hover:bg-opacity-20 transition-colors">
                  <div className="text-navy group-hover:text-navy">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {language === 'id' ? service.titleId : service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'id' ? service.descriptionId : service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {language === 'id' ? 'Mengapa Memilih Kami' : 'Why Choose Us'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 fade-in hover:shadow-xl transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  {language === 'id' ? benefit.titleId : benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'id' ? benefit.descriptionId : benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {language === 'id' ? 'Proses Kami' : 'Our Process'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'id'
                ? 'Kami mengikuti proses yang terstruktur dan terbukti untuk memastikan kesuksesan setiap kampanye pemasaran.'
                : 'We follow a structured and proven process to ensure the success of every marketing campaign.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Discovery & Analysis',
                titleId: 'Penemuan & Analisis',
                description: 'We analyze your business, market, and competitors to understand your unique position.',
                descriptionId: 'Kami menganalisis bisnis, pasar, dan pesaing Anda untuk memahami posisi unik Anda.',
              },
              {
                step: '2',
                title: 'Strategy Development',
                titleId: 'Pengembangan Strategi',
                description: 'We create a customized marketing strategy aligned with your business objectives.',
                descriptionId: 'Kami membuat strategi pemasaran yang disesuaikan dengan tujuan bisnis Anda.',
              },
              {
                step: '3',
                title: 'Implementation',
                titleId: 'Implementasi',
                description: 'We execute the strategy across all channels with continuous monitoring and optimization.',
                descriptionId: 'Kami mengeksekusi strategi di semua saluran dengan pemantauan dan optimasi berkelanjutan.',
              },
              {
                step: '4',
                title: 'Results & Optimization',
                titleId: 'Hasil & Optimasi',
                description: 'We track performance, analyze results, and continuously optimize for better outcomes.',
                descriptionId: 'Kami melacak kinerja, menganalisis hasil, dan terus mengoptimalkan untuk hasil yang lebih baik.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative fade-in"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white border-2 border-navy rounded-lg p-6 h-full">
                  <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {language === 'id' ? item.titleId : item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {language === 'id' ? item.descriptionId : item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {language === 'id'
              ? 'Siap Meningkatkan Pemasaran Anda?'
              : 'Ready to Elevate Your Marketing?'}
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            {language === 'id'
              ? 'Hubungi kami hari ini dan mari diskusikan bagaimana kami dapat membantu mencapai tujuan pemasaran Anda.'
              : "Contact us today and let's discuss how we can help you achieve your marketing goals."}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
              {language === 'id' ? 'Hubungi Kami' : 'Get In Touch'}
          </a>
        </div>
      </section>
    </div>
  );
};

export default MarketingSolution;
