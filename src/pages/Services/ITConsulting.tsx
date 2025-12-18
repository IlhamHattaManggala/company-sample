import { useTranslation } from '../../i18n/LanguageProvider';
import { useFadeIn } from '../../hooks/useFadeIn';

const ITConsulting = () => {
  const { t, language } = useTranslation();
  useFadeIn();

  const expertise = [
    {
      title: 'Cloud Infrastructure Design',
      titleId: 'Desain Infrastruktur Cloud',
      description: 'Comprehensive cloud infrastructure design and migration services to modernize your IT environment.',
      descriptionId: 'Layanan desain dan migrasi infrastruktur cloud komprehensif untuk memodernisasi lingkungan IT Anda.',
    },
    {
      title: 'Cybersecurity Assessment',
      titleId: 'Penilaian Keamanan Siber',
      description: 'Advanced cybersecurity assessment and implementation to protect your business from threats.',
      descriptionId: 'Penilaian dan implementasi keamanan siber canggih untuk melindungi bisnis Anda dari ancaman.',
    },
    {
      title: 'Digital Transformation',
      titleId: 'Transformasi Digital',
      description: 'Strategic digital transformation to help your business adapt and thrive in the digital age.',
      descriptionId: 'Transformasi digital strategis untuk membantu bisnis Anda beradaptasi dan berkembang di era digital.',
    },
    {
      title: 'IT Architecture Optimization',
      titleId: 'Optimasi Arsitektur IT',
      description: 'Optimize your IT architecture for better performance, scalability, and cost efficiency.',
      descriptionId: 'Optimalkan arsitektur IT Anda untuk kinerja, skalabilitas, dan efisiensi biaya yang lebih baik.',
    },
    {
      title: 'Technology Stack Evaluation',
      titleId: 'Evaluasi Technology Stack',
      description: 'Comprehensive evaluation of your technology stack to ensure optimal performance and alignment.',
      descriptionId: 'Evaluasi komprehensif technology stack Anda untuk memastikan kinerja dan keselarasan yang optimal.',
    },
    {
      title: 'IT Strategy & Planning',
      titleId: 'Strategi & Perencanaan IT',
      description: 'Strategic IT planning and roadmap development to align technology with business objectives.',
      descriptionId: 'Perencanaan IT strategis dan pengembangan roadmap untuk menyelaraskan teknologi dengan tujuan bisnis.',
    },
  ];

  const services = [
    {
      title: 'Strategic Planning',
      titleId: 'Perencanaan Strategis',
      description: 'We analyze your current IT infrastructure and develop a comprehensive strategic roadmap that aligns with your business goals and future growth plans.',
      descriptionId: 'Kami menganalisis infrastruktur IT Anda saat ini dan mengembangkan roadmap strategis komprehensif yang selaras dengan tujuan bisnis dan rencana pertumbuhan masa depan Anda.',
    },
    {
      title: 'Implementation Support',
      titleId: 'Dukungan Implementasi',
      description: 'Our expert consultants guide you through the implementation of recommended solutions, ensuring smooth transitions and minimal disruption to your operations.',
      descriptionId: 'Konsultan ahli kami memandu Anda melalui implementasi solusi yang direkomendasikan, memastikan transisi yang lancar dan gangguan minimal terhadap operasi Anda.',
    },
    {
      title: 'Ongoing Optimization',
      titleId: 'Optimasi Berkelanjutan',
      description: 'We provide continuous monitoring, optimization, and support to ensure your IT infrastructure maintains peak performance and adapts to changing needs.',
      descriptionId: 'Kami menyediakan pemantauan, optimasi, dan dukungan berkelanjutan untuk memastikan infrastruktur IT Anda mempertahankan kinerja puncak dan beradaptasi dengan kebutuhan yang berubah.',
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
                {t('services.itConsulting.title')}
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {t('services.itConsulting.description')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {language === 'id'
                  ? 'Dapatkan keahlian strategis untuk mengoptimalkan infrastruktur teknologi Anda, meningkatkan efisiensi operasional, dan mendorong inovasi digital yang mengubah cara bisnis Anda beroperasi.'
                  : 'Get strategic expertise to optimize your technology infrastructure, enhance operational efficiency, and drive digital innovation that transforms how your business operates.'}
              </p>
            </div>
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt={t('services.itConsulting.title')}
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {language === 'id' ? 'Layanan Konsultasi IT Strategis' : 'Strategic IT Consulting Services'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === 'id'
                ? 'Kami menyediakan layanan konsultasi IT yang komprehensif untuk membantu organisasi Anda mengoptimalkan infrastruktur teknologi, meningkatkan keamanan, dan mencapai tujuan transformasi digital dengan efisien dan efektif.'
                : 'We provide comprehensive IT consulting services to help your organization optimize technology infrastructure, enhance security, and achieve digital transformation goals efficiently and effectively.'}
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {language === 'id' ? 'Keahlian Kami' : 'Our Expertise'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'id'
                ? 'Kami memiliki pengalaman luas dalam berbagai aspek konsultasi IT dan transformasi digital.'
                : 'We have extensive experience across various aspects of IT consulting and digital transformation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow fade-in"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-bold text-navy mb-3">
                  {language === 'id' ? item.titleId : item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'id' ? item.descriptionId : item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {language === 'id' ? 'Bagaimana Kami Membantu' : 'How We Help'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'id'
                ? 'Kami mengikuti pendekatan terstruktur untuk memastikan kesuksesan setiap proyek konsultasi IT.'
                : 'We follow a structured approach to ensure the success of every IT consulting project.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-navy rounded-lg p-8 fade-in hover:shadow-xl transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-navy text-white rounded-lg flex items-center justify-center mb-6 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  {language === 'id' ? service.titleId : service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'id' ? service.descriptionId : service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                {language === 'id' ? 'Manfaat Konsultasi IT Kami' : 'Benefits of Our IT Consulting'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy mb-1">
                      {language === 'id' ? 'Optimasi Biaya' : 'Cost Optimization'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'id'
                        ? 'Identifikasi peluang untuk mengurangi biaya IT sambil meningkatkan efisiensi dan kinerja.'
                        : 'Identify opportunities to reduce IT costs while improving efficiency and performance.'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy mb-1">
                      {language === 'id' ? 'Peningkatan Keamanan' : 'Enhanced Security'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'id'
                        ? 'Perkuat postur keamanan siber Anda dengan strategi dan implementasi keamanan yang komprehensif.'
                        : 'Strengthen your cybersecurity posture with comprehensive security strategies and implementations.'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy mb-1">
                      {language === 'id' ? 'Skalabilitas' : 'Scalability'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'id'
                        ? 'Bangun infrastruktur IT yang dapat diskalakan untuk mendukung pertumbuhan bisnis Anda di masa depan.'
                        : 'Build scalable IT infrastructure to support your business growth in the future.'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy mb-1">
                      {language === 'id' ? 'Inovasi Digital' : 'Digital Innovation'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'id'
                        ? 'Manfaatkan teknologi terbaru dan praktik terbaik untuk mendorong inovasi dan keunggulan kompetitif.'
                        : 'Leverage the latest technologies and best practices to drive innovation and competitive advantage.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80"
                alt={language === 'id' ? 'Konsultasi IT' : 'IT Consulting'}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {language === 'id'
              ? 'Siap Mengoptimalkan Infrastruktur IT Anda?'
              : 'Ready to Optimize Your IT Infrastructure?'}
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            {language === 'id'
              ? 'Hubungi kami hari ini untuk konsultasi gratis dan pelajari bagaimana kami dapat membantu transformasi digital bisnis Anda.'
              : "Contact us today for a free consultation and learn how we can help transform your business's digital infrastructure."}
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

export default ITConsulting;
