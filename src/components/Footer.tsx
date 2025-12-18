import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageProvider';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sample Company</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.companyInfo')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('navbar.home')}
                </Link>
              </li>
              <li>
                <Link to="/about/company-profile" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('navbar.companyProfile')}
                </Link>
              </li>
              <li>
                <Link to="/services/overview" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('navbar.services')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('navbar.projects')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('navbar.careers')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('navbar.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contactSupport')}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="font-semibold">{t('contact.info.address')}:</span>
                <br />
                {t('contact.info.addressValue')}
              </li>
              <li>
                <span className="font-semibold">{t('contact.info.email')}:</span>
                <br />
                <a href={`mailto:${t('contact.info.emailValue')}`} className="hover:text-white transition-colors">
                  {t('contact.info.emailValue')}
                </a>
              </li>
              <li>
                <span className="font-semibold">{t('contact.info.phone')}:</span>
                <br />
                <a href={`tel:${t('contact.info.phoneValue')}`} className="hover:text-white transition-colors">
                  {t('contact.info.phoneValue')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          {t('footer.allRightsReserved')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

