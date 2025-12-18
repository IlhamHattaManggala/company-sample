import { useTranslation } from '../i18n/LanguageProvider';
import { useFadeIn } from '../hooks/useFadeIn';

const Projects = () => {
  const { t } = useTranslation();
  useFadeIn();

  const projects = [
    { key: 'project1', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800' },
    { key: 'project2', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800' },
    { key: 'project3', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800' },
    { key: 'project4', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800' },
    { key: 'project5', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800' },
    { key: 'project6', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800' },
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">
            {t('projects.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.key}
              className="fade-in group cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={t(`projects.${project.key}.title`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {t(`projects.${project.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

