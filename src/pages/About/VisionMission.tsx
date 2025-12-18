import { useTranslation } from '../../i18n/LanguageProvider';
import { useFadeIn } from '../../hooks/useFadeIn';

const VisionMission = () => {
  const { t, language } = useTranslation();
  useFadeIn();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {t('about.visionMission.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {language === 'id'
              ? 'Visi dan misi kami memandu setiap keputusan yang kami buat dan setiap layanan yang kami berikan.'
              : 'Our vision and mission guide every decision we make and every service we deliver.'}
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto fade-in">
            <div className="bg-white border-2 border-navy rounded-lg p-8 md:p-12 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-navy text-white rounded-lg flex items-center justify-center text-2xl font-bold mr-6">
                  V
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy">
                  {t('about.visionMission.visionTitle')}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.visionMission.vision')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto fade-in">
            <div className="bg-white border-2 border-navy rounded-lg p-8 md:p-12 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-navy text-white rounded-lg flex items-center justify-center text-2xl font-bold mr-6">
                  M
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy">
                  {t('about.visionMission.missionTitle')}
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.visionMission.mission')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('about.visionMission.missionPoints.0')}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('about.visionMission.missionPoints.1')}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('about.visionMission.missionPoints.2')}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('about.visionMission.missionPoints.3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {language === 'id' ? 'Komitmen Kami' : 'Our Commitment'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'id'
                ? 'Kami berkomitmen untuk memberikan nilai terbaik dan membangun hubungan jangka panjang dengan klien kami.'
                : 'We are committed to delivering the best value and building long-term relationships with our clients.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Client Success',
                titleId: 'Kesuksesan Klien',
                description: 'Your success is our priority. We measure our success by the results we help you achieve.',
                descriptionId: 'Kesuksesan Anda adalah prioritas kami. Kami mengukur kesuksesan kami dari hasil yang kami bantu Anda capai.',
              },
              {
                title: 'Quality Excellence',
                titleId: 'Keunggulan Kualitas',
                description: 'We maintain the highest standards of quality in every project and service we deliver.',
                descriptionId: 'Kami mempertahankan standar kualitas tertinggi dalam setiap proyek dan layanan yang kami berikan.',
              },
              {
                title: 'Continuous Innovation',
                titleId: 'Inovasi Berkelanjutan',
                description: 'We stay ahead of industry trends and continuously improve our solutions and services.',
                descriptionId: 'Kami selalu berada di depan tren industri dan terus meningkatkan solusi dan layanan kami.',
              },
              {
                title: 'Partnership Approach',
                titleId: 'Pendekatan Kemitraan',
                description: 'We work as your trusted partner, not just a service provider, in your business journey.',
                descriptionId: 'Kami bekerja sebagai mitra tepercaya Anda, bukan hanya penyedia layanan, dalam perjalanan bisnis Anda.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow fade-in"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-navy text-white rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {language === 'id' ? item.titleId : item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {language === 'id' ? item.descriptionId : item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
