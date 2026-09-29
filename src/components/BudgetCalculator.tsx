import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { Language } from '../types';

interface BudgetCalculatorProps {
  language: Language;
  onApplyToQuote: (details: { eventType: string; guestCount: string; packageTitle: string }) => void;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({
  language,
  onApplyToQuote
}) => {
  const isPt = language === 'pt';

  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState('Casamento');
  const [guestCount, setGuestCount] = useState('100 a 250 convidados');
  const [stage, setStage] = useState('Tenho apenas uma data em mente');

  const getRecommendation = () => {
    if (stage === 'Já contratei a maioria dos fornecedores') {
      return {
        title: 'Assessoria Final & Coordenação do Grande Dia',
        description: 'Perfeita para anfitriões que já contrataram os principais fornecedores e necessitam de uma gestão minuciosa no alinhamento de contratos, montagem, roteiro e regência impecável.',
        timeline: 'Início 60 dias antes do evento',
        badge: 'Tranquilidade Absoluta'
      };
    }
    if (eventType === 'Casamento' || guestCount === 'Mais de 250 convidados') {
      return {
        title: 'Assessoria Completa & Curadoria Exclusiva',
        description: 'A experiência completa e personalizada. Conduzimos você desde a estruturação orçamentária até a última música da festa, poupando seu tempo e garantindo os melhores fornecedores.',
        timeline: 'Início com 10 a 18 meses de antecedência',
        badge: 'Mais Escolhida'
      };
    }
    return {
      title: 'Assessoria Personalizada & Planejamento Estratégico',
      description: 'Ideal para o seu perfil. Focamos no alinhamento dos contratos pendentes, projeto cenográfico e na supervisão total da execução.',
      timeline: 'Início com 6 a 9 meses de antecedência',
      badge: 'Sob Medida'
    };
  };

  const recommendation = getRecommendation();

  return (
    <section className="py-24 bg-[#FAF5EF] dark:bg-[#150B12] relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="rounded-3xl bg-[#F4ECE4] dark:bg-[#1E0F1A] border-2 border-[#E3D4C5] dark:border-[#381B2D] p-8 sm:p-12 shadow-lg relative overflow-hidden">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EF] dark:bg-[#281523] border border-[#C59E65]/60 dark:border-[#E5BE82]/60 mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#9E743B] dark:text-[#E5BE82]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#671F43] dark:text-[#E5BE82] font-bold">
                {isPt ? 'Orientação das Fundadoras' : 'Founders Guidance'}
              </span>
            </div>
            <h3 className="font-serif-title text-3xl sm:text-4xl text-[#2C0E1E] dark:text-[#F8F3EC] font-normal">
              {isPt ? 'Qual o Formato Ideal para a Sua Celebração?' : 'Which Advisory Format Suits Your Event?'}
            </h3>
            <p className="mt-2 text-sm text-[#5D4653] dark:text-[#D5C2CC]">
              {isPt
                ? 'Em três escolhas simples, conheça o formato que Joyce Costa & Agatha Zillar recomendam para o seu evento.'
                : 'In three simple choices, discover the advisory format Joyce Costa & Agatha Zillar recommend for your event.'}
            </p>
          </div>

          {/* Interactive Steps */}
          {step < 4 ? (
            <div className="space-y-8">
              {/* Step 1: Event Type */}
              {step === 1 && (
                <div className="animate-fadeIn">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A67C46] dark:text-[#E5BE82] block mb-2">
                    Passo 01 de 03
                  </span>
                  <h4 className="font-serif text-2xl text-[#351425] dark:text-[#F8F3EC] mb-4">
                    Qual tipo de celebração você está planejando?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Casamento', 'Evento Corporativo', 'Festa de 15 Anos / Bodas', 'Evento Social Intimista'].map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setEventType(type);
                          setStep(2);
                        }}
                        className={`p-4 rounded-xl text-left border text-sm font-medium transition-all ${
                          eventType === type
                            ? 'bg-[#4A1E34] dark:bg-[#7D2954] text-[#FAF7F2] border-[#4A1E34] dark:border-[#7D2954] shadow-sm'
                            : 'bg-[#FAF7F2] dark:bg-[#281523] text-[#4A3E35] dark:text-[#E2D4DC] border-[#E8DFD5] dark:border-[#3E2034] hover:border-[#C5A880] dark:hover:border-[#E5BE82]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Guest Count */}
              {step === 2 && (
                <div className="animate-fadeIn">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A67C46] dark:text-[#E5BE82] block mb-2">
                    Passo 02 de 03
                  </span>
                  <h4 className="font-serif text-2xl text-[#351425] dark:text-[#F8F3EC] mb-4">
                    Qual a estimativa de convidados?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Até 80 convidados (Mini Event)', '80 a 180 convidados', '180 a 300 convidados', 'Mais de 300 convidados'].map((count) => (
                      <button
                        key={count}
                        onClick={() => {
                          setGuestCount(count);
                          setStep(3);
                        }}
                        className={`p-4 rounded-xl text-left border text-sm font-medium transition-all ${
                          guestCount === count
                            ? 'bg-[#4A1E34] dark:bg-[#7D2954] text-[#FAF7F2] border-[#4A1E34] dark:border-[#7D2954] shadow-sm'
                            : 'bg-[#FAF7F2] dark:bg-[#281523] text-[#4A3E35] dark:text-[#E2D4DC] border-[#E8DFD5] dark:border-[#3E2034] hover:border-[#C5A880] dark:hover:border-[#E5BE82]'
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="mt-4 text-xs text-[#8C7362] dark:text-[#E5BE82] hover:text-[#4A1E34] dark:hover:text-white underline"
                  >
                    ← Voltar ao passo anterior
                  </button>
                </div>
              )}

              {/* Step 3: Current Stage */}
              {step === 3 && (
                <div className="animate-fadeIn">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A67C46] dark:text-[#E5BE82] block mb-2">
                    Passo 03 de 03
                  </span>
                  <h4 className="font-serif text-2xl text-[#351425] dark:text-[#F8F3EC] mb-4">
                    Em qual estágio do planejamento vocês estão?
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      'Ainda no início (definindo data, estilo e local)',
                      'Tenho a data e o espaço contratados, buscando os outros fornecedores',
                      'Já contratei a maioria dos fornecedores (preciso de coordenação e roteiro final)'
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setStage(item);
                          setStep(4);
                        }}
                        className="p-4 rounded-xl text-left border text-sm font-medium bg-[#FAF7F2] dark:bg-[#281523] text-[#4A3E35] dark:text-[#E2D4DC] border-[#E8DFD5] dark:border-[#3E2034] hover:border-[#C5A880] dark:hover:border-[#E5BE82] transition-all hover:bg-white dark:hover:bg-[#341A2D]"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="mt-4 text-xs text-[#8C7362] dark:text-[#E5BE82] hover:text-[#4A1E34] dark:hover:text-white underline"
                  >
                    ← Voltar ao passo anterior
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Result recommendation card */
            <div className="bg-[#FAF7F2] dark:bg-[#251320] rounded-2xl p-8 border border-[#C5A880]/60 dark:border-[#E5BE82]/60 shadow-lg animate-fadeIn">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#4A1E34] dark:bg-[#7D2954] text-[#FAF7F2] text-xs uppercase tracking-wider font-medium">
                  {recommendation.badge}
                </span>
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#8C7362] dark:text-[#CBB4A4] hover:text-[#4A1E34] dark:hover:text-[#E5BE82]"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Refazer teste
                </button>
              </div>

              <h4 className="font-serif-title text-2xl sm:text-3xl text-[#351425] dark:text-[#F8F3EC] mb-3">
                {recommendation.title}
              </h4>

              <p className="text-sm sm:text-base text-[#5C4855] dark:text-[#D5C2CC] leading-relaxed mb-6">
                {recommendation.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#F5EFEB] dark:bg-[#1E0F1A] border border-[#E8DFD5] dark:border-[#381B2D] mb-8 text-xs text-[#6A5A50] dark:text-[#CBB4A4]">
                <div>
                  <strong className="text-[#351425] dark:text-[#F8F3EC] block uppercase tracking-wider mb-0.5">Tempo Sugerido:</strong>
                  {recommendation.timeline}
                </div>
                <div>
                  <strong className="text-[#351425] dark:text-[#F8F3EC] block uppercase tracking-wider mb-0.5">Seu Perfil Selecionado:</strong>
                  {eventType} • {guestCount}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#671F43] dark:text-[#E5BE82] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#9E743B] dark:text-[#E5BE82]" />
                  <span>Proposta personalizada elaborada por Joyce Costa e Agatha Zillar</span>
                </div>

                <button
                  onClick={() => {
                    onApplyToQuote({
                      eventType,
                      guestCount,
                      packageTitle: recommendation.title
                    });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold bg-[#4A1733] dark:bg-[#7D2954] text-[#FAF7F2] hover:bg-[#2C0E1E] dark:hover:bg-[#943264] transition-all shadow-md shadow-[#4A1733]/25"
                >
                  <span>Preencher Orçamento com Estes Dados</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
