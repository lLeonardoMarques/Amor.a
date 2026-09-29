import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../data/content';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Language } from '../types';

interface TestimonialsProps {
  language: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const isPt = language === 'pt';
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[currentIndex];

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-[#FAF7F2] dark:bg-[#150B12] relative overflow-hidden transition-colors duration-300">
      {/* Decorative Warm Backdrops */}
      <div className="absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-[#F3E8DF] dark:bg-[#341829] filter blur-3xl opacity-50 dark:opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.28em] text-[#A67C46] dark:text-[#E5BE82] font-semibold">
            {isPt ? 'Histórias de Amor & Sucesso' : 'Client Testimonials'}
          </span>
          <h2 className="mt-3 font-serif-title text-3xl sm:text-5xl text-[#351425] dark:text-[#F8F3EC] font-light">
            {isPt ? 'A Confiança de Quem Viveu o Inesquecível' : 'The Trust of Those Who Lived It'}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto my-5" />
        </div>

        {/* Testimonial Showcase Card */}
        <div className="relative rounded-3xl bg-[#F5EFEB] dark:bg-[#1E0F1A] border border-[#E3D7CC] dark:border-[#381B2D] p-8 sm:p-14 md:p-16 shadow-lg shadow-[#4A1E34]/5">
          {/* Large Decorative Quote Icon */}
          <div className="absolute top-8 left-8 sm:top-10 sm:left-10 text-[#C5A880]/30 dark:text-[#E5BE82]/20 pointer-events-none">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37] dark:fill-[#E5BE82] text-[#D4AF37] dark:text-[#E5BE82]" />
              ))}
            </div>

            {/* Highlighted Quote Title */}
            <p className="font-serif-title text-xl sm:text-2xl md:text-3xl text-[#351425] dark:text-[#F8F3EC] font-normal italic max-w-3xl leading-snug mb-6">
              "{current.highlightPhrase}"
            </p>

            {/* Full Testimonial Text */}
            <p className="text-sm sm:text-base text-[#5C4855] dark:text-[#D5C2CC] leading-relaxed max-w-2xl font-normal mb-8">
              {current.quote}
            </p>

            {/* Author Meta */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-[#E8DFD5] dark:border-[#381B2D] w-full max-w-md justify-center">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C5A880] dark:border-[#E5BE82] shadow-sm">
                <img
                  src={current.avatar}
                  alt={current.clientName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="font-serif text-lg text-[#351425] dark:text-[#F8F3EC] font-medium">
                  {current.clientName}
                </h3>
                <p className="text-xs text-[#8C7362] dark:text-[#CBB4A4] font-medium">
                  {current.roleOrEvent} • {current.eventDate}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-between absolute inset-y-0 left-2 right-2 sm:left-4 sm:right-4 pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="pointer-events-auto p-2.5 rounded-full bg-[#FAF7F2]/90 dark:bg-[#281523]/90 hover:bg-[#FAF7F2] dark:hover:bg-[#341A2D] text-[#4A1E34] dark:text-[#E5BE82] border border-[#E8DFD5] dark:border-[#381B2D] shadow-md transition-all hover:scale-105"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="pointer-events-auto p-2.5 rounded-full bg-[#FAF7F2]/90 dark:bg-[#281523]/90 hover:bg-[#FAF7F2] dark:hover:bg-[#341A2D] text-[#4A1E34] dark:text-[#E5BE82] border border-[#E8DFD5] dark:border-[#381B2D] shadow-md transition-all hover:scale-105"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-[#4A1E34] dark:bg-[#E5BE82]'
                  : 'w-2 bg-[#D5C2AF] dark:bg-[#4A243C] hover:bg-[#A67C46]'
              }`}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
