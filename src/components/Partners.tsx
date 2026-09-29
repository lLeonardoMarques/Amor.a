import React from 'react';
import { partnersLogos } from '../data/content';
import { Language } from '../types';
import { Sparkles } from 'lucide-react';

interface PartnersProps {
  language: Language;
}

export const Partners: React.FC<PartnersProps> = ({ language }) => {
  const isPt = language === 'pt';

  return (
    <section className="py-20 bg-[#F5EFEB] dark:bg-[#1A0E17] border-b border-[#E8DFD5] dark:border-[#381B2D] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#A67C46] dark:text-[#E5BE82]" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#8C7362] dark:text-[#E5BE82] font-semibold">
            {isPt ? 'Curadoria de Confiança' : 'Curated Elite Partners'}
          </span>
        </div>
        <h3 className="font-serif-title text-2xl sm:text-3xl text-[#351425] dark:text-[#F8F3EC] font-light mb-12">
          {isPt
            ? 'Trabalhamos com os Melhores Fornecedores do Mercado'
            : 'Partnered with the Most Reputable Luxury Vendors'}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partnersLogos.map((partner, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#FAF7F2] dark:bg-[#20111B] border border-[#E8DFD5] dark:border-[#381B2D] transition-all duration-300 group hover:border-[#C5A880] dark:hover:border-[#E5BE82] hover:shadow-md hover:-translate-y-0.5 flex flex-col items-center justify-center min-h-[90px]"
            >
              <span className="font-serif text-base sm:text-lg text-[#6A5A50] dark:text-[#E2D4DC] group-hover:text-[#4A1E34] dark:group-hover:text-[#E5BE82] transition-colors font-medium tracking-wide">
                {partner.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#A67C46] dark:text-[#E5BE82] mt-1 opacity-80 group-hover:opacity-100">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
