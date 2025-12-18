import { useTranslation } from '../i18n/LanguageProvider';
import { useFadeIn } from '../hooks/useFadeIn';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const { t } = useTranslation();
  useFadeIn();

  const services = [
    { key: 'productDevelopment', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80' },
    { key: 'itConsulting', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80' },
    { key: 'marketingSolution', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80' },
    { key: 'webDevelopment', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80' },
    { key: 'cloudServices', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80' },
    { key: 'dataAnalytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80' },
  ];

  const projects = [
    { key: 'project1', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800' },
    { key: 'project2', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800' },
    { key: 'project3', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800' },
    { key: 'project4', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800' },
  ];

  return (
    <div>
      <HeroSection />

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-12 text-center fade-in">
            {t('home.aboutTitle')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt={t('home.aboutTitle')}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="fade-in space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('home.aboutText')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('home.aboutText2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {t('home.servicesTitle')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('home.servicesSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.key}
                className="fade-in"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ServiceCard serviceKey={service.key} image={service.image} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {t('home.projectsTitle')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('home.projectsSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.key}
                className="fade-in group cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={t(`projects.${project.key}.title`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">
                      {t(`projects.${project.key}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`projects.${project.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('home.bannerTitle')}
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            {t('home.bannerSubtitle')}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('hero.getStarted')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

