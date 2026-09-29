import React from 'react';
import { CalendarHeart, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface FinalCTAProps {
  language: Language;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ language }) => {
  const isPt = language === 'pt';

  const handleScrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-24 lg:py-28 bg-[#351425] dark:bg-[#160812] text-[#FAF7F2] overflow-hidden border-y border-transparent dark:border-[#381B2D] transition-colors duration-300">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1519228420658-0051d95015b3?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#351425]/85 dark:bg-[#160812]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 border border-[#C5A880]/30 backdrop-blur-md mb-6">
          <Sparkles className="w-4 h-4 text-[#C5A880]" />
          <span className="text-xs uppercase tracking-[0.24em] text-[#E6D5BD] font-medium">
            {isPt ? 'Disponibilidade de Datas Limitada' : 'Limited Annual Dates'}
          </span>
        </div>

        <h2 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4 text-[#FAF7F2]">
          {isPt ? (
            <>
              Menos preocupação, <span className="italic text-[#E6D5BD]">mais momentos</span>.
            </>
          ) : (
            <>
              Less worry, <span className="italic text-[#E6D5BD]">more unforgettable moments</span>.
            </>
          )}
        </h2>

        <p className="font-script text-3xl sm:text-4xl text-[#C5A880] mb-6">
          {isPt ? 'Você sonha, a gente realiza' : 'You dream, we make it real'}
        </p>

        <p className="text-sm sm:text-base text-[#D5C2AF] max-w-xl mx-auto mb-10 leading-relaxed font-light">
          {isPt
            ? 'Para garantir a atenção exclusiva e a excelência minuciosa que você merece, a Joyce e a Agatha realizam um número selecionado de eventos por ano.'
            : 'To uphold our signature white-glove care and bespoke precision, Joyce & Agatha accept a strictly curated number of celebrations annually.'}
        </p>

        <button
          onClick={handleScrollToContact}
          className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#FAF7F2] text-[#351425] hover:bg-[#C5A880] hover:text-[#FAF7F2] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-xl hover:scale-105"
        >
          <CalendarHeart className="w-4 h-4 text-[#4A1E34] group-hover:text-white" />
          <span>{isPt ? 'Vamos Planejar Seu Evento?' : 'Shall We Plan Your Event?'}</span>
        </button>
      </div>
    </section>
  );
};
