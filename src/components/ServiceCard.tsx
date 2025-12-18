import { useTranslation } from '../i18n/LanguageProvider';

interface ServiceCardProps {
  serviceKey: string;
  icon?: string;
  image?: string;
}

const ServiceCard = ({ serviceKey, icon, image }: ServiceCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col overflow-hidden">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={t(`services.${serviceKey}.title`)}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        {icon && (
          <div className="text-4xl mb-4 text-navy">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-navy mb-3">
          {t(`services.${serviceKey}.title`)}
        </h3>
        <p className="text-gray-600 leading-relaxed flex-grow">
          {t(`services.${serviceKey}.description`)}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

