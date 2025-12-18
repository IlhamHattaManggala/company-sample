import { useTranslation } from '../../i18n/LanguageProvider';
import { useFadeIn } from '../../hooks/useFadeIn';
import TeamCard from '../../components/TeamCard';

const Teams = () => {
  const { t } = useTranslation();
  useFadeIn();

  const teamMembers = [
    { key: 'johnDoe', image: 'https://i.pravatar.cc/300?img=1' },
    { key: 'janeSmith', image: 'https://i.pravatar.cc/300?img=2' },
    { key: 'mikeJohnson', image: 'https://i.pravatar.cc/300?img=3' },
    { key: 'sarahWilliams', image: 'https://i.pravatar.cc/300?img=4' },
    { key: 'davidBrown', image: 'https://i.pravatar.cc/300?img=5' },
    { key: 'emilyDavis', image: 'https://i.pravatar.cc/300?img=6' },
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">
            {t('about.teams.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('about.teams.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.key}
              className="fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <TeamCard memberKey={member.key} image={member.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;

