import { useTranslation } from '../i18n/LanguageProvider';

interface TeamCardProps {
  memberKey: string;
  image: string;
}

const TeamCard = ({ memberKey, image }: TeamCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="aspect-w-1 aspect-h-1 w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={t(`team.${memberKey}.name`)}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-navy mb-2">
          {t(`team.${memberKey}.name`)}
        </h3>
        <p className="text-navy font-semibold mb-3">
          {t(`team.${memberKey}.position`)}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {t(`team.${memberKey}.description`)}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;

