import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageProvider';

const HeroSection = () => {
  const { t, language } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      number: '15+',
      label: language === 'id' ? 'Tahun Pengalaman' : 'Years Experience',
    },
    {
      number: '500+',
      label: language === 'id' ? 'Klien Puas' : 'Happy Clients',
    },
    {
      number: '1000+',
      label: language === 'id' ? 'Proyek Selesai' : 'Projects Completed',
    },
    {
      number: '50+',
      label: language === 'id' ? 'Tim Ahli' : 'Expert Team',
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-navy via-blue-900 to-navy text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold backdrop-blur-sm">
                {language === 'id' ? 'Solusi Bisnis Terpercaya' : 'Trusted Business Solutions'}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="bg-white text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
              >
                {t('hero.getStarted')}
              </Link>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-navy transition-all backdrop-blur-sm"
              >
                {t('hero.learnMore')}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white border-opacity-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600 to-blue-800 rounded-lg transform -rotate-6 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt={t('hero.title')}
                className="relative w-full h-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('services')}
          className="flex flex-col items-center text-white text-opacity-70 hover:text-opacity-100 transition-opacity"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">{language === 'id' ? 'Gulir ke bawah' : 'Scroll down'}</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
