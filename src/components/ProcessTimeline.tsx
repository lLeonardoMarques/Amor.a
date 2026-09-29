import React, { useState } from 'react';
import { processSteps } from '../data/content';
import { CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { Language } from '../types';

interface ProcessTimelineProps {
  language: Language;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ language }) => {
  const isPt = language === 'pt';
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="processo" className="py-24 lg:py-32 bg-[#FAF7F2] dark:bg-[#150B12] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EBE1] dark:bg-[#251320] border border-[#C5A880]/40 dark:border-[#E5BE82]/40 mb-4">
            <Compass className="w-3.5 h-3.5 text-[#A67C46] dark:text-[#E5BE82]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#6A4B3A] dark:text-[#E5BE82] font-semibold">
              {isPt ? 'Metodologia Exclusiva' : 'Our Proven Method'}
            </span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl text-[#351425] dark:text-[#F8F3EC] font-light">
            {isPt ? 'Como Trabalhamos: Do Sonho ao Sucesso' : 'How We Work: From Dream to Reality'}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto my-5" />
          <p className="text-base sm:text-lg text-[#5C4855] dark:text-[#D5C2CC]">
            {isPt
              ? 'Uma jornada estruturada em 4 etapas transparentes para que você aproveite cada instante com serenidade absoluta.'
              : 'A transparent four-phase journey ensuring you savor every moment in complete peace of mind.'}
          </p>
        </div>

        {/* Step Selector Pills for Desktop / Tablet */}
        <div className="hidden md:flex items-center justify-center gap-3 mb-16">
          {processSteps.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 border ${
                activeStep === idx
                  ? 'bg-[#4A1E34] dark:bg-[#7D2954] text-[#FAF7F2] border-[#4A1E34] dark:border-[#7D2954] shadow-md scale-105'
                  : 'bg-[#FAF7F2] dark:bg-[#20111B] text-[#6A5A50] dark:text-[#CBB4A4] border-[#E8DFD5] dark:border-[#381B2D] hover:border-[#C5A880] dark:hover:border-[#E5BE82] hover:text-[#351425] dark:hover:text-[#F8F3EC]'
              }`}
            >
              <span className={`font-serif text-sm ${activeStep === idx ? 'text-[#C5A880] dark:text-[#E5BE82]' : 'text-[#8C7362] dark:text-[#CBB4A4]'}`}>
                {step.stepNumber}
              </span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Highlight Card for Selected Step */}
        <div className="rounded-3xl bg-[#F5EFEB] dark:bg-[#1E0F1A] border border-[#E3D7CC] dark:border-[#381B2D] p-8 sm:p-12 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-4xl sm:text-6xl font-serif text-[#C5A880] dark:text-[#E5BE82] opacity-80 block font-light">
                {processSteps[activeStep].stepNumber}
              </span>
              <h3 className="font-serif-title text-3xl sm:text-4xl text-[#351425] dark:text-[#F8F3EC] font-normal mt-2 mb-3">
                {processSteps[activeStep].title}
              </h3>
              <p className="text-sm font-medium uppercase tracking-widest text-[#A67C46] dark:text-[#E5BE82] mb-4">
                {processSteps[activeStep].tagline}
              </p>
              <p className="text-base text-[#5C4855] dark:text-[#D5C2CC] leading-relaxed">
                {processSteps[activeStep].description}
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#FAF7F2] dark:bg-[#281523] rounded-2xl p-6 sm:p-8 border border-[#E8DFD5] dark:border-[#3E2034]">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#351425] dark:text-[#F8F3EC] mb-4">
                {isPt ? 'Entregas e Ações Desta Etapa:' : 'Deliverables & Key Milestones:'}
              </h4>
              <ul className="space-y-3.5">
                {processSteps[activeStep].deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4A3E35] dark:text-[#E2D4DC]">
                    <CheckCircle2 className="w-5 h-5 text-[#A67C46] dark:text-[#E5BE82] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#EFE7E0] dark:border-[#3E2034] flex items-center justify-between text-xs text-[#8C7362] dark:text-[#C5B3BF]">
                <span>
                  {isPt ? 'Supervisão direta:' : 'Direct supervision:'}{' '}
                  <strong className="text-[#4A1E34] dark:text-[#E5BE82]">Joyce Costa & Agatha Zillar</strong>
                </span>

                <div className="flex gap-2">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-lg border border-[#D5C2AF] dark:border-[#4A243C] text-[#4A3E35] dark:text-[#E2D4DC] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#F5EFEB] dark:hover:bg-[#341A2D]"
                  >
                    Anterior
                  </button>
                  <button
                    disabled={activeStep === processSteps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                    className="px-3 py-1.5 rounded-lg bg-[#4A1E34] dark:bg-[#7D2954] text-[#FAF7F2] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#351425] dark:hover:bg-[#943264] inline-flex items-center gap-1"
                  >
                    <span>Próximo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical/Horizontal Flow Overview for Mobile/Scannability */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.stepNumber}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-200 border ${
                activeStep === idx
                  ? 'bg-[#FAF7F2] dark:bg-[#281523] border-[#C5A880] dark:border-[#E5BE82] shadow-md ring-1 ring-[#C5A880] dark:ring-[#E5BE82]'
                  : 'bg-[#FAF7F2]/60 dark:bg-[#1E0F1A] border-[#E8DFD5] dark:border-[#381B2D] hover:bg-[#FAF7F2] dark:hover:bg-[#251320]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-2xl text-[#A67C46] dark:text-[#E5BE82]">{step.stepNumber}</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8C7362] dark:text-[#C5B3BF]">
                  FASE 0{idx + 1}
                </span>
              </div>
              <h4 className="font-serif text-lg text-[#351425] dark:text-[#F8F3EC] font-medium mb-1.5">
                {step.title}
              </h4>
              <p className="text-xs text-[#6A5A50] dark:text-[#CBB4A4] line-clamp-2">
                {step.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
