import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MissionSection from './components/MissionSection';
import EventSection from './components/EventSection';
import CommissionSection from './components/CommissionSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <title>Association des Jeunes CDC Bambilor - Ensemble pour l'avenir</title>
          <meta 
            name="description" 
            content="Association des Jeunes de la Cité CDC Bambilor - Engagement citoyen, culture, solidarité et développement communautaire. Rejoignez-nous pour construire l'avenir ensemble." 
          />
          <meta name="keywords" content="AJCDC, CDC Bambilor, association, jeunes, Sénégal, culture, solidarité, engagement citoyen" />
          <meta name="author" content="Association des Jeunes CDC Bambilor" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Association des Jeunes CDC Bambilor" />
          <meta property="og:description" content="Ensemble pour l'engagement citoyen, la culture et le développement communautaire" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="fr_FR" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Association des Jeunes CDC Bambilor" />
          <meta name="twitter:description" content="Ensemble pour l'engagement citoyen, la culture et le développement communautaire" />
        </Helmet>

        <Header />
        <main>
          <Hero />
          <AboutSection />
          <MissionSection />
          <EventSection />
          <CommissionSection />
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;