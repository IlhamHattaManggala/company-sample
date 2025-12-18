import { useTranslation } from '../i18n/LanguageProvider';
import { useFadeIn } from '../hooks/useFadeIn';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const { t } = useTranslation();
  useFadeIn();

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8 fade-in">
            <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8 fade-in">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-navy mb-2">{t('contact.info.address')}</h3>
                  <p className="text-gray-700">{t('contact.info.addressValue')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">{t('contact.info.email')}</h3>
                  <a
                    href={`mailto:${t('contact.info.emailValue')}`}
                    className="text-navy hover:underline"
                  >
                    {t('contact.info.emailValue')}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">{t('contact.info.phone')}</h3>
                  <a
                    href={`tel:${t('contact.info.phoneValue')}`}
                    className="text-navy hover:underline"
                  >
                    {t('contact.info.phoneValue')}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy text-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-200">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

