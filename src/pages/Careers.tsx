import { useState } from 'react';
import { useTranslation } from '../i18n/LanguageProvider';
import { useFadeIn } from '../hooks/useFadeIn';

const Careers = () => {
  const { t, language } = useTranslation();
  useFadeIn();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [showEmailInfo, setShowEmailInfo] = useState<string | null>(null);

  const handleApply = (jobKey: string) => {
    const email = 'hr@samplecompany.com';
    const subject = language === 'id' 
      ? `Lamaran Posisi: ${t(`careers.${jobKey}.title`)}`
      : `Application for Position: ${t(`careers.${jobKey}.title`)}`;
    const body = language === 'id'
      ? `Halo,\n\nSaya tertarik untuk melamar posisi ${t(`careers.${jobKey}.title`)}.\n\nTerima kasih.`
      : `Hello,\n\nI am interested in applying for the ${t(`careers.${jobKey}.title`)} position.\n\nThank you.`;
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Try to open mailto
    window.location.href = mailtoLink;
    
    // Show email info as fallback
    setTimeout(() => {
      setShowEmailInfo(jobKey);
      setTimeout(() => setShowEmailInfo(null), 5000);
    }, 500);
  };

  const jobs = [
    { key: 'job1' },
    { key: 'job2' },
    { key: 'job3' },
    { key: 'job4' },
  ];

  const benefits = [
    { 
      title: 'Competitive Salary', 
      titleId: 'Gaji Kompetitif',
      icon: (
        <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: 'Health Insurance', 
      titleId: 'Asuransi Kesehatan',
      icon: (
        <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    { 
      title: 'Learning & Development', 
      titleId: 'Pelatihan & Pengembangan',
      icon: (
        <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      title: 'Flexible Work Hours', 
      titleId: 'Jam Kerja Fleksibel',
      icon: (
        <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: 'Remote Work Options', 
      titleId: 'Opsi Kerja Remote',
      icon: (
        <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      title: 'Team Building Events', 
      titleId: 'Acara Team Building',
      icon: (
        <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 fade-in">
            {t('careers.heroTitle')}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto fade-in">
            {t('careers.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center fade-in">
            {t('careers.whyJoin')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow fade-in"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="mb-4 flex items-center justify-center w-16 h-16 bg-navy bg-opacity-10 rounded-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {language === 'id' ? benefit.titleId : benefit.title}
                </h3>
                <p className="text-gray-600">
                  {language === 'id' 
                    ? 'Nikmati berbagai keuntungan dan fasilitas yang kami tawarkan untuk mendukung kesejahteraan dan pertumbuhan karir Anda.'
                    : 'Enjoy various benefits and perks we offer to support your well-being and career growth.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {t('careers.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('careers.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <div
                key={job.key}
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  selectedJob === job.key ? 'ring-2 ring-navy' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-navy">
                          {t(`careers.${job.key}.title`)}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 text-navy text-sm font-semibold rounded-full">
                          {t(`careers.${job.key}.type`)}
                        </span>
                      </div>
                      <p className="text-navy font-semibold mb-3">
                        {t(`careers.${job.key}.department`)}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <span className="flex items-center text-sm">
                      <svg className="w-5 h-5 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {t(`careers.${job.key}.location`)}
                    </span>
                    <span className="flex items-center text-sm">
                      <svg className="w-5 h-5 mr-2 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t(`careers.${job.key}.type`)}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {t(`careers.${job.key}.description`)}
                  </p>

                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-semibold text-navy mb-1">
                      {t('careers.requirements')}:
                    </p>
                    <p className="text-sm text-gray-600">
                      {t(`careers.${job.key}.requirements`)}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedJob(selectedJob === job.key ? null : job.key)}
                      className="flex-1 px-4 py-2 border-2 border-navy text-navy rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors"
                    >
                      {selectedJob === job.key ? (language === 'id' ? 'Tutup Detail' : 'Close Details') : t('careers.viewDetails')}
                    </button>
                    <button
                      onClick={() => handleApply(job.key)}
                      className="flex-1 px-4 py-2 bg-navy text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors"
                    >
                      {t('careers.apply')}
                    </button>
                  </div>

                  {selectedJob === job.key && (
                    <div className="mt-4 p-4 bg-navy text-white rounded-lg animate-fadeIn">
                      <h4 className="font-semibold mb-2">{t('careers.additionalInfo')}</h4>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>{t('careers.additionalInfoItems.0')}</li>
                        <li>{t('careers.additionalInfoItems.1')}</li>
                        <li>{t('careers.additionalInfoItems.2')}</li>
                        <li>{t('careers.additionalInfoItems.3')}</li>
                      </ul>
                    </div>
                  )}

                  {showEmailInfo === job.key && (
                    <div className="mt-4 p-4 bg-green-50 border-2 border-green-500 rounded-lg animate-fadeIn">
                      <p className="text-sm text-green-800 font-semibold mb-2">
                        {language === 'id' ? '📧 Email akan dibuka di aplikasi email Anda' : '📧 Email will open in your email application'}
                      </p>
                      <p className="text-xs text-green-700">
                        {language === 'id' 
                          ? `Jika email tidak terbuka, silakan kirim ke: hr@samplecompany.com`
                          : `If email doesn't open, please send to: hr@samplecompany.com`}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'id' 
              ? 'Tidak Menemukan Posisi yang Cocok?'
              : "Don't See a Position That Fits?"}
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            {language === 'id'
              ? 'Kirimkan CV Anda dan kami akan menghubungi Anda ketika ada kesempatan yang sesuai.'
              : "Send us your CV and we'll contact you when a suitable opportunity arises."}
          </p>
          <a
            href="mailto:hr@samplecompany.com?subject=General Application"
            className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {language === 'id' ? 'Kirim CV Umum' : 'Send General CV'}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
