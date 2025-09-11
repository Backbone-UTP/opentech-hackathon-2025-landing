import Hero from './components/Hero';
import About from './components/About';
import Agenda from './components/Agenda';
import Rules from './components/Rules';
import Community from './components/Community';
import Sponsors from './components/Sponsors';
import './App.css'
import Prizes from './components/Prizes';
import Faq from './components/Faq';
import CTA from './components/CTA';
import MainLayout from './components/MainLayout';

function App() {
  const ctaButton = {
    label: 'Registrarse',
    url: 'https://forms.gle/aZGFr3ZhDPMdY4ga7',
  };

  return (
    <MainLayout>
      <Hero
        title="OpenTech Hackathon 2025"
        tagline="Un espacio diseñado para que estudiantes, profesionales y entusiastas de la tecnología creen soluciones innovadoras usando Inteligencia Artificial y Blockchain."
        cta={ctaButton}
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBuUjh1Z9Qz7VSz_smcszyLyHI99aHHNGM-GPXIzWbk9NCx32h4G_S6bHjGXldGw_V1j0ux8sc5lELhUTDvfasjVYcXiQELLAEb9WLTbYXSKcng23DYKUAOgkzweynH8xCa2LdnvCTjWMZIi9PB1DewypkudCCx4-v5y_yRj1hSB3QM4jXnCKElZFM-QRluT-wVz7nn8TQdZobG7Y_hHqoi87qhKwwl3J-Kedg1wHiKaIo5FCEPbYgX2iWYLhkpVXVNnQ9dQ-NHoXBq"
      />
      <About />
      <Agenda />
      <Rules />
      <Prizes />
      <Community />
      <Sponsors />
      <Faq />
      <CTA
        title="¿Listo para innovar?"
        description="Únete a las mentes más brillantes de la región y crea algo increíble."
        buttonLabel={ctaButton.label}
        buttonUrl={ctaButton.url}
      />
    </MainLayout>
  )
}

export default App
