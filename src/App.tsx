import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CompanyProfile from './pages/About/CompanyProfile';
import VisionMission from './pages/About/VisionMission';
import Teams from './pages/About/Teams';
import ServiceOverview from './pages/Services/ServiceOverview';
import ProductDevelopment from './pages/Services/ProductDevelopment';
import ITConsulting from './pages/Services/ITConsulting';
import MarketingSolution from './pages/Services/MarketingSolution';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/company-profile" element={<CompanyProfile />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/teams" element={<Teams />} />
              <Route path="/services/overview" element={<ServiceOverview />} />
              <Route path="/services/product-development" element={<ProductDevelopment />} />
              <Route path="/services/it-consulting" element={<ITConsulting />} />
              <Route path="/services/marketing-solution" element={<MarketingSolution />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
