import React from 'react';
import { Calendar, Award, ThumbsUp, Heart } from 'lucide-react';
import { Language } from '../types';

interface StatsCounterProps {
  language: Language;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ language }) => {
  const isPt = language === 'pt';

  const stats = [
    {
      value: '+500',
      label: isPt ? 'Eventos Realizados' : 'Events Coordinated',
      desc: isPt ? 'Casamentos, galas e celebrações inesquecíveis' : 'Weddings, galas & luxury celebrations',
      icon: Calendar
    },
    {
      value: '+10',
      label: isPt ? 'Anos de Experiência' : 'Years of Experience',
      desc: isPt ? 'Trajetória sólida no mercado de alto padrão' : 'Proven track record in luxury events',
      icon: Award
    },
    {
      value: '98%',
      label: isPt ? 'Índice de Satisfação' : 'Client Satisfaction',
      desc: isPt ? 'Recomendação unânime de nossos anfitriões' : 'Unanimous recommendation by our hosts',
      icon: ThumbsUp
    },
    {
      value: '100%',
      label: isPt ? 'Tranquilidade e Presença' : 'Peace of Mind',
      desc: isPt ? 'Dedicação exclusiva ao seu grande dia' : 'Exclusive focus on your big milestone',
      icon: Heart
    }
  ];

  return (
    <section className="py-20 bg-[#FAF5EF] dark:bg-[#150B12] border-y border-[#E3D4C5] dark:border-[#381B2D] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#F4ECE4]/70 dark:bg-[#20111B] border border-[#DFCFC2] dark:border-[#381B2D] transition-all duration-300 hover:bg-[#F4ECE4] dark:hover:bg-[#281523] hover:border-[#671F43]/40 dark:hover:border-[#E5BE82]/40 hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-full bg-[#FAF5EF] dark:bg-[#281523] border-2 border-[#C59E65]/50 dark:border-[#E5BE82]/50 flex items-center justify-center text-[#671F43] dark:text-[#E5BE82] mb-4 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-serif-title text-4xl sm:text-5xl font-normal text-[#2C0E1E] dark:text-[#F8F3EC] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#9E743B] dark:text-[#E5BE82] mt-2 mb-1">
                  {stat.label}
                </span>
                <p className="text-xs text-[#5D4653] dark:text-[#CBB4A4] max-w-[210px] leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
