import { useTranslation } from '../../i18n/LanguageProvider';
import { useFadeIn } from '../../hooks/useFadeIn';

const ProductDevelopment = () => {
  const { t, language } = useTranslation();
  useFadeIn();

  const benefits = [
    {
      title: 'Faster Time to Market',
      titleId: 'Waktu ke Pasar Lebih Cepat',
      description: 'Accelerate your product launch with agile development methodologies and streamlined processes that reduce time-to-market significantly.',
      descriptionId: 'Percepat peluncuran produk Anda dengan metodologi pengembangan agile dan proses yang efisien yang secara signifikan mengurangi waktu ke pasar.',
    },
    {
      title: 'Reduced Development Costs',
      titleId: 'Biaya Pengembangan Berkurang',
      description: 'Optimize your development budget through efficient processes, reusable components, and strategic resource allocation.',
      descriptionId: 'Optimalkan anggaran pengembangan Anda melalui proses yang efisien, komponen yang dapat digunakan kembali, dan alokasi sumber daya yang strategis.',
    },
    {
      title: 'Scalable Solutions',
      titleId: 'Solusi yang Dapat Diskalakan',
      description: 'Build products that grow with your business, designed to handle increasing demand and scale seamlessly.',
      descriptionId: 'Bangun produk yang berkembang bersama bisnis Anda, dirancang untuk menangani peningkatan permintaan dan skala dengan mulus.',
    },
    {
      title: 'Expert Guidance',
      titleId: 'Panduan Ahli',
      description: 'Leverage our team\'s extensive experience and industry best practices from concept to launch and beyond.',
      descriptionId: 'Manfaatkan pengalaman luas tim kami dan praktik terbaik industri dari konsep hingga peluncuran dan seterusnya.',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Discovery & Planning',
      titleId: 'Penemuan & Perencanaan',
      description: 'We start by understanding your business needs, market requirements, and user expectations to create a comprehensive product vision and roadmap.',
      descriptionId: 'Kami mulai dengan memahami kebutuhan bisnis, persyaratan pasar, dan harapan pengguna Anda untuk menciptakan visi produk dan roadmap yang komprehensif.',
    },
    {
      step: '2',
      title: 'Design & Prototyping',
      titleId: 'Desain & Prototyping',
      description: 'Our team creates detailed designs and interactive prototypes, ensuring user experience excellence before development begins.',
      descriptionId: 'Tim kami membuat desain detail dan prototipe interaktif, memastikan keunggulan pengalaman pengguna sebelum pengembangan dimulai.',
    },
    {
      step: '3',
      title: 'Development & Testing',
      titleId: 'Pengembangan & Pengujian',
      description: 'We build your product using best practices, modern technologies, and rigorous testing to ensure quality and reliability.',
      descriptionId: 'Kami membangun produk Anda menggunakan praktik terbaik, teknologi modern, dan pengujian ketat untuk memastikan kualitas dan keandalan.',
    },
    {
      step: '4',
      title: 'Launch & Support',
      titleId: 'Peluncuran & Dukungan',
      description: 'We help you launch successfully and provide ongoing support, maintenance, and optimization to ensure long-term success.',
      descriptionId: 'Kami membantu Anda meluncurkan dengan sukses dan menyediakan dukungan, pemeliharaan, dan optimasi berkelanjutan untuk memastikan kesuksesan jangka panjang.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {t('services.productDevelopment.title')}
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {t('services.productDevelopment.description')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {language === 'id'
                  ? 'Dari ide awal hingga produk yang siap dipasarkan, kami memandu Anda melalui setiap tahap pengembangan dengan keahlian, inovasi, dan komitmen terhadap kualitas yang luar biasa.'
                  : 'From initial concept to market-ready product, we guide you through every stage of development with expertise, innovation, and unwavering commitment to excellence.'}
              </p>
            </div>
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80"
                alt={t('services.productDevelopment.title')}
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {language === 'id' ? 'Layanan Pengembangan Produk Komprehensif' : 'Comprehensive Product Development Services'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === 'id'
                ? 'Kami menyediakan layanan pengembangan produk end-to-end yang mencakup semua aspek dari konseptualisasi hingga peluncuran dan dukungan berkelanjutan. Tim ahli kami bekerja sama dengan Anda untuk menciptakan produk yang tidak hanya memenuhi kebutuhan pasar tetapi juga melampaui harapan pengguna.'
                : 'We provide end-to-end product development services covering all aspects from conceptualization to launch and ongoing support. Our expert team collaborates with you to create products that not only meet market needs but also exceed user expectations.'}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {language === 'id' ? 'Manfaat' : 'Benefits'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'id'
                ? 'Mengapa memilih layanan pengembangan produk kami untuk proyek Anda.'
                : 'Why choose our product development services for your project.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border-2 border-navy rounded-lg p-8 fade-in hover:shadow-xl transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-navy text-white rounded-lg flex items-center justify-center mb-6 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  {language === 'id' ? benefit.titleId : benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'id' ? benefit.descriptionId : benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {language === 'id' ? 'Proses Kami' : 'Our Process'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'id'
                ? 'Kami mengikuti metodologi yang terbukti dan terstruktur untuk memastikan kesuksesan setiap proyek pengembangan produk.'
                : 'We follow a proven and structured methodology to ensure the success of every product development project.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative fade-in"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white border-2 border-navy rounded-lg p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {language === 'id' ? step.titleId : step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {language === 'id' ? step.descriptionId : step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                {language === 'id' ? 'Teknologi & Keahlian' : 'Technologies & Expertise'}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'id'
                  ? 'Kami menggunakan teknologi terdepan dan praktik terbaik industri untuk mengembangkan produk yang inovatif, andal, dan siap untuk masa depan.'
                  : 'We leverage cutting-edge technologies and industry best practices to develop innovative, reliable, and future-ready products.'}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy mb-1">
                      {language === 'id' ? 'Pengembangan Modern' : 'Modern Development'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'id'
                        ? 'React, Node.js, Python, dan teknologi modern lainnya untuk aplikasi web dan mobile yang powerful.'
                        : 'React, Node.js, Python, and other modern technologies for powerful web and mobile applications.'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy mb-1">
                      {language === 'id' ? 'Cloud & DevOps' : 'Cloud & DevOps'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'id'
                        ? 'Infrastruktur cloud yang scalable dan pipeline CI/CD untuk deployment yang efisien.'
                        : 'Scalable cloud infrastructure and CI/CD pipelines for efficient deployment.'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy mb-1">
                      {language === 'id' ? 'Quality Assurance' : 'Quality Assurance'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'id'
                        ? 'Pengujian komprehensif dan metodologi QA untuk memastikan kualitas produk yang tinggi.'
                        : 'Comprehensive testing and QA methodologies to ensure high product quality.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
                alt={language === 'id' ? 'Pengembangan Produk' : 'Product Development'}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {language === 'id'
              ? 'Siap Mengembangkan Produk Inovatif?'
              : 'Ready to Develop an Innovative Product?'}
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            {language === 'id'
              ? 'Hubungi kami hari ini untuk diskusi gratis tentang proyek pengembangan produk Anda dan pelajari bagaimana kami dapat membantu mewujudkan visi Anda.'
              : 'Contact us today for a free consultation about your product development project and learn how we can help bring your vision to life.'}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {language === 'id' ? 'Hubungi Kami' : 'Get In Touch'}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductDevelopment;
