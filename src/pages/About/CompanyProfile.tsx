import { useTranslation } from '../../i18n/LanguageProvider';
import { useFadeIn } from '../../hooks/useFadeIn';

const CompanyProfile = () => {
  const { t, language } = useTranslation();
  useFadeIn();

  const milestones = [
    {
      year: '2010',
      title: 'Foundation',
      titleId: 'Pendirian',
      description: 'Sample Company was founded with a vision to empower businesses through innovative technology solutions.',
      descriptionId: 'Sample Company didirikan dengan visi untuk memberdayakan bisnis melalui solusi teknologi inovatif.',
    },
    {
      year: '2015',
      title: 'Expansion',
      titleId: 'Ekspansi',
      description: 'Expanded our services to include IT consulting and digital transformation solutions.',
      descriptionId: 'Memperluas layanan kami untuk mencakup konsultasi IT dan solusi transformasi digital.',
    },
    {
      year: '2020',
      title: 'Global Reach',
      titleId: 'Jangkauan Global',
      description: 'Reached milestone of serving hundreds of companies across multiple countries worldwide.',
      descriptionId: 'Mencapai tonggak sejarah melayani ratusan perusahaan di berbagai negara di seluruh dunia.',
    },
    {
      year: '2025',
      title: 'Innovation Leader',
      titleId: 'Pemimpin Inovasi',
      description: 'Recognized as a leading provider of intelligent business solutions and digital innovation.',
      descriptionId: 'Diakui sebagai penyedia solusi bisnis cerdas dan inovasi digital terkemuka.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {t('about.companyProfile.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {language === 'id'
              ? 'Pelajari lebih lanjut tentang perjalanan kami, nilai-nilai yang kami pegang, dan komitmen kami terhadap keunggulan.'
              : 'Learn more about our journey, the values we hold, and our commitment to excellence.'}
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                {t('about.companyProfile.historyTitle')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t('about.companyProfile.history')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'id'
                  ? 'Hari ini, kami terus berinovasi dan beradaptasi dengan perubahan teknologi, selalu berkomitmen untuk memberikan nilai terbaik bagi klien kami dan membantu mereka mencapai kesuksesan di era digital yang terus berkembang.'
                  : 'Today, we continue to innovate and adapt to technological changes, always committed to delivering the best value to our clients and helping them achieve success in an ever-evolving digital era.'}
              </p>
            </div>
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt={t('about.companyProfile.historyTitle')}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-navy mb-8 text-center">
              {language === 'id' ? 'Tonggak Sejarah' : 'Key Milestones'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-navy rounded-lg p-6 hover:shadow-lg transition-shadow"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="text-3xl font-bold text-navy mb-3">{milestone.year}</div>
                  <h4 className="text-xl font-bold text-navy mb-2">
                    {language === 'id' ? milestone.titleId : milestone.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {language === 'id' ? milestone.descriptionId : milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 text-center">
              {t('about.companyProfile.missionTitle')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              {t('about.companyProfile.mission')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {t('about.companyProfile.valuesTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.companyProfile.values')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                titleId: 'Integritas',
                description: 'We conduct our business with honesty, transparency, and ethical practices in everything we do.',
                descriptionId: 'Kami menjalankan bisnis dengan kejujuran, transparansi, dan praktik etis dalam segala hal yang kami lakukan.',
              },
              {
                title: 'Innovation',
                titleId: 'Inovasi',
                description: 'We continuously seek new solutions and embrace cutting-edge technologies to drive progress.',
                descriptionId: 'Kami terus mencari solusi baru dan mengadopsi teknologi canggih untuk mendorong kemajuan.',
              },
              {
                title: 'Excellence',
                titleId: 'Keunggulan',
                description: 'We are committed to delivering exceptional quality and exceeding expectations in every project.',
                descriptionId: 'Kami berkomitmen untuk memberikan kualitas luar biasa dan melampaui harapan dalam setiap proyek.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white border-2 border-navy rounded-lg p-8 fade-in hover:shadow-xl transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-navy text-white rounded-lg flex items-center justify-center mb-6 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  {language === 'id' ? value.titleId : value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'id' ? value.descriptionId : value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfile;
