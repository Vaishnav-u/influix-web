import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Footer from './components/footer'
import ServiceSection from './components/services'
import TestimonialCards from './components/TestimonialCards'
import CaseStudies from './components/CaseStudies'
import ContactPage from './components/ContactPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black min-h-screen text-white w-full overflow-hidden">
      <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
      {currentPage === 'home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <AboutUs />
          <ServiceSection />
          <TestimonialCards />
        </>
      )}
      {currentPage === 'case-studies' && (
        <CaseStudies onBack={() => handleNavigate('home')} />
      )}
      {currentPage === 'contact' && (
        <ContactPage onBack={() => handleNavigate('home')} />
      )}
      {currentPage !== 'contact' && <Footer onNavigate={handleNavigate} />}
    </div>
  )
}

export default App
