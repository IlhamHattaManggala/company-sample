import { useTranslation } from '../../i18n/LanguageProvider';
import { useFadeIn } from '../../hooks/useFadeIn';
import ServiceCard from '../../components/ServiceCard';

const ServiceOverview = () => {
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

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">
            {t('navbar.serviceOverview')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('home.servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
};

export default ServiceOverview;

