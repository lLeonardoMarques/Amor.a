import React, { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Portfolio } from './components/Portfolio';
import { StatsCounter } from './components/StatsCounter';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { BudgetCalculator } from './components/BudgetCalculator';
import { BlogInspirations } from './components/BlogInspirations';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { NewsletterModal } from './components/NewsletterModal';
import { Language, QuoteFormData } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [presetQuoteData, setPresetQuoteData] = useState<Partial<QuoteFormData> | null>(null);

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setPresetQuoteData({
      eventType: serviceTitle,
      message: `Olá! Tenho interesse no pacote "${serviceTitle}". Gostaria de receber uma proposta personalizada.`
    });

    const contactEl = document.getElementById('contato');
    if (contactEl) {
      const topOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleApplyBudgetToQuote = (details: {
    eventType: string;
    guestCount: string;
    packageTitle: string;
  }) => {
    setPresetQuoteData({
      eventType: details.eventType,
      guestCount: details.guestCount,
      message: `Realizei a simulação no site e obtive a recomendação: "${details.packageTitle}" para aproximadamente ${details.guestCount}. Gostaria de agendar uma reunião.`
    });

    const contactEl = document.getElementById('contato');
    if (contactEl) {
      const topOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5EF] dark:bg-[#150B12] text-[#2B1D25] dark:text-[#F8F3EC] selection:bg-[#4A1733] selection:text-[#FAF5EF] relative transition-colors duration-300">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Fixed Sticky Header Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero language={language} />

        {/* 2. Sobre Nós & Liderança (Joice Costa & Agatha Zillar) */}
        <AboutUs language={language} />

        {/* 3. Serviços & Detalhes de Pacotes */}
        <Services
          language={language}
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* 4. Como Trabalhamos (Timeline de 4 Etapas) */}
        <ProcessTimeline language={language} />

        {/* 5. Portfólio / Galeria com Lightbox */}
        <Portfolio language={language} />

        {/* 6. Números / Destaques (+500 Eventos, +10 Anos, 98% Satisfação) */}
        <StatsCounter language={language} />

        {/* 7. Depoimentos (Carrossel com Aspas Douradas) */}
        <Testimonials language={language} />

        {/* 8. Fornecedores / Parceiros Selecionados */}
        <Partners language={language} />

        {/* 9. Simulador Interativo / Calculadora de Assessoria */}
        <BudgetCalculator
          language={language}
          onApplyToQuote={handleApplyBudgetToQuote}
        />

        {/* 10. Blog / Diário de Inspirações */}
        <BlogInspirations language={language} />

        {/* 11. FAQ (Perguntas Frequentes) */}
        <FAQSection language={language} />

        {/* 12. Faixa CTA Final */}
        <FinalCTA language={language} />

        {/* 13. Formulário de Contato & Mapa */}
        <ContactSection
          language={language}
          presetData={presetQuoteData}
        />
      </main>

      {/* 14. Footer */}
      <Footer language={language} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton language={language} />

      {/* Gentle Newsletter / Guide Popup */}
      <NewsletterModal language={language} />
    </div>
  );
}
