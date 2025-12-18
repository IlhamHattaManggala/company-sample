import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageProvider';

const Navbar = () => {
  const { t, language, setLanguage } = useTranslation();
  const location = useLocation();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.svg"
              alt="Sample Company Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold text-navy">Sample Company</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-navy transition-colors ${
                location.pathname === '/' ? 'text-navy font-semibold' : ''
              }`}
            >
              {t('navbar.home')}
            </Link>

            <div 
              className="relative" 
              ref={aboutRef}
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                className={`text-gray-700 hover:text-navy transition-colors flex items-center ${
                  location.pathname.startsWith('/about') ? 'text-navy font-semibold' : ''
                }`}
              >
                {t('navbar.about')}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isAboutOpen && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-white rounded-md shadow-lg py-2">
                    <Link
                      to="/about/company-profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-navy transition-colors"
                    >
                      {t('navbar.companyProfile')}
                    </Link>
                    <Link
                      to="/about/vision-mission"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-navy transition-colors"
                    >
                      {t('navbar.visionMission')}
                    </Link>
                    <Link
                      to="/about/teams"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-navy transition-colors"
                    >
                      {t('navbar.ourTeam')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div 
              className="relative" 
              ref={servicesRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`text-gray-700 hover:text-navy transition-colors flex items-center ${
                  location.pathname.startsWith('/services') ? 'text-navy font-semibold' : ''
                }`}
              >
                {t('navbar.services')}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-md shadow-lg py-2">
                    <Link
                      to="/services/overview"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-navy transition-colors"
                    >
                      {t('navbar.serviceOverview')}
                    </Link>
                    <Link
                      to="/services/product-development"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-navy transition-colors"
                    >
                      {t('navbar.productDevelopment')}
                    </Link>
                    <Link
                      to="/services/it-consulting"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-navy transition-colors"
                    >
                      {t('navbar.itConsulting')}
                    </Link>
                    <Link
                      to="/services/marketing-solution"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-navy transition-colors"
                    >
                      {t('navbar.marketingSolution')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/projects"
              className={`text-gray-700 hover:text-navy transition-colors ${
                location.pathname === '/projects' ? 'text-navy font-semibold' : ''
              }`}
            >
              {t('navbar.projects')}
            </Link>

            <Link
              to="/careers"
              className={`text-gray-700 hover:text-navy transition-colors ${
                location.pathname === '/careers' ? 'text-navy font-semibold' : ''
              }`}
            >
              {t('navbar.careers')}
            </Link>

            <Link
              to="/contact"
              className={`text-gray-700 hover:text-navy transition-colors ${
                location.pathname === '/contact' ? 'text-navy font-semibold' : ''
              }`}
            >
              {t('navbar.contact')}
            </Link>

            <button
              onClick={toggleLanguage}
              className="px-3 py-1 border border-navy rounded-md text-navy hover:bg-navy hover:text-white transition-colors text-sm font-medium"
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 border border-navy rounded-md text-navy text-sm font-medium"
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2 px-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-gray-700 hover:text-navy ${
                  location.pathname === '/' ? 'text-navy font-semibold' : ''
                }`}
              >
                {t('navbar.home')}
              </Link>
              <Link
                to="/about/company-profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-gray-700 hover:text-navy ${
                  location.pathname.startsWith('/about') ? 'text-navy font-semibold' : ''
                }`}
              >
                {t('navbar.about')}
              </Link>
              <Link
                to="/services/overview"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-gray-700 hover:text-navy ${
                  location.pathname.startsWith('/services') ? 'text-navy font-semibold' : ''
                }`}
              >
                {t('navbar.services')}
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-gray-700 hover:text-navy ${
                  location.pathname === '/projects' ? 'text-navy font-semibold' : ''
                }`}
              >
                {t('navbar.projects')}
              </Link>
              <Link
                to="/careers"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-gray-700 hover:text-navy ${
                  location.pathname === '/careers' ? 'text-navy font-semibold' : ''
                }`}
              >
                {t('navbar.careers')}
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-gray-700 hover:text-navy ${
                  location.pathname === '/contact' ? 'text-navy font-semibold' : ''
                }`}
              >
                {t('navbar.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

