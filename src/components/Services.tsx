import React, { useState } from 'react';
import { servicesData } from '../data/content';
import { HeartHandshake, Briefcase, Sparkles, Wine, ArrowRight, Check, X, ShieldCheck } from 'lucide-react';
import { Service, Language } from '../types';

interface ServicesProps {
  language: Language;
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  language,
  onSelectServiceForQuote
}) => {
  const isPt = language === 'pt';
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#A67C46]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#A67C46]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#A67C46]" />;
      case 'Wine':
      default:
        return <Wine className="w-6 h-6 text-[#A67C46]" />;
    }
  };

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#F5EFEB] dark:bg-[#1A0E17] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.28em] text-[#A67C46] dark:text-[#E5BE82] font-semibold">
            {isPt ? 'Atendimento Personalizado' : 'Bespoke Advisory'}
          </span>
          <h2 className="mt-3 font-serif-title text-3xl sm:text-5xl text-[#351425] dark:text-[#F8F3EC] font-light">
            {isPt ? 'Nossos Serviços de Assessoria' : 'Our Advisory Services'}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto my-5" />
          <p className="text-base sm:text-lg text-[#5C4855] dark:text-[#D5C2CC]">
            {isPt
              ? 'Projetos desenhados para acolher a sua história com a máxima sofisticação, responsabilidade e afeto.'
              : 'Tailored solutions designed to welcome your vision with unmatched sophistication, precision, and heartfelt care.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-[#FAF7F2] dark:bg-[#20111B] border border-[#E8DFD5] dark:border-[#381B2D] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#4A1E34]/15 hover:border-[#671F43]/50 dark:hover:border-[#E5BE82]/50 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Preview Banner */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] dark:from-[#20111B] via-[#FAF7F2]/20 dark:via-[#20111B]/20 to-transparent" />
                <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-[#FAF7F2]/90 dark:bg-[#251320]/90 backdrop-blur-md border border-[#C5A880]/40 dark:border-[#E5BE82]/40 flex items-center justify-center shadow-sm">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between -mt-6 relative z-10">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A67C46] dark:text-[#E5BE82]">
                    {service.subtitle}
                  </span>
                  <h3 className="mt-1 font-serif-title text-2xl sm:text-3xl text-[#351425] dark:text-[#F8F3EC] font-normal group-hover:text-[#4A1E34] dark:group-hover:text-[#E5BE82] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#6A5A50] dark:text-[#CBB4A4] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights feature list preview */}
                  <ul className="mt-6 space-y-2.5">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3E35] dark:text-[#E2D4DC]">
                        <Check className="w-4 h-4 text-[#A67C46] dark:text-[#E5BE82] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-6 border-t border-[#EFE7E0] dark:border-[#381B2D] flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs uppercase tracking-[0.18em] font-semibold text-[#4A1E34] dark:text-[#E5BE82] hover:text-[#A67C46] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{isPt ? 'Ver Detalhes do Pacote' : 'View Package Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium bg-[#FAF7F2] dark:bg-[#281523] text-[#4A1E34] dark:text-[#F8F3EC] border border-[#C5A880] dark:border-[#E5BE82]/60 hover:bg-[#4A1E34] dark:hover:bg-[#7D2954] hover:text-[#FAF7F2] transition-all duration-200"
                  >
                    {isPt ? 'Solicitar Proposta' : 'Get a Proposal'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2C1824]/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#FAF7F2] dark:bg-[#1E0F1A] rounded-3xl p-6 sm:p-10 border border-[#C5A880]/50 dark:border-[#E5BE82]/50 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#F5EFEB] dark:bg-[#281523] text-[#4A1E34] dark:text-[#E5BE82] hover:bg-[#4A1E34] hover:text-[#FAF7F2] transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-[0.25em] text-[#A67C46] dark:text-[#E5BE82] font-semibold">
              {activeModalService.subtitle}
            </span>
            <h3 className="font-serif-title text-3xl sm:text-4xl text-[#351425] dark:text-[#F8F3EC] font-light mt-1 mb-4">
              {activeModalService.title}
            </h3>

            <p className="text-sm sm:text-base text-[#5C4855] dark:text-[#D5C2CC] leading-relaxed mb-6">
              {activeModalService.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#F5EFEB] dark:bg-[#281523] border border-[#E8DFD5] dark:border-[#381B2D] mb-6 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#A67C46] dark:text-[#E5BE82] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#4A1E34] dark:text-[#E5BE82]">
                  {isPt ? 'Ideal Para' : 'Recommended For'}
                </h4>
                <p className="text-xs sm:text-sm text-[#6A5A50] dark:text-[#CBB4A4] mt-0.5">
                  {activeModalService.recommendedFor}
                </p>
              </div>
            </div>

            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#351425] dark:text-[#F8F3EC] mb-3">
              {isPt ? 'O Que Está Incluso Nesta Assessoria:' : 'What Is Included in This Advisory:'}
            </h4>

            <ul className="space-y-3 mb-8">
              {activeModalService.features.map((feat, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[#4A3E35] dark:text-[#E2D4DC]">
                  <span className="w-5 h-5 rounded-full bg-[#4A1E34]/10 dark:bg-[#E5BE82]/20 text-[#4A1E34] dark:text-[#E5BE82] flex items-center justify-center shrink-0 text-xs font-semibold mt-0.5">
                    ✓
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#E8DFD5] dark:border-[#381B2D] flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-medium text-[#6A5A50] dark:text-[#CBB4A4] hover:text-[#2C242B] dark:hover:text-white"
              >
                {isPt ? 'Voltar' : 'Back'}
              </button>
              <button
                onClick={() => {
                  onSelectServiceForQuote(activeModalService.title);
                  setActiveModalService(null);
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium bg-[#4A1E34] dark:bg-[#7D2954] text-[#FAF7F2] hover:bg-[#351425] dark:hover:bg-[#943264] transition-all shadow-md"
              >
                {isPt ? 'Quero Este Pacote' : 'Select This Package'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
