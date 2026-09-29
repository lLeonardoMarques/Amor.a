import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Language } from '../types';

interface WhatsAppButtonProps {
  language: Language;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ language }) => {
  const isPt = language === 'pt';
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const phone = '5511999999999';
  const defaultText = encodeURIComponent(
    'Olá, Joyce e Agatha! Estava no site da Amora Assessoria e gostaria de tirar dúvidas sobre o planejamento do meu evento.'
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultText}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Tooltip Box */}
      {tooltipOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-[#FAF7F2] dark:bg-[#1E0F1A] p-4 shadow-2xl border border-[#C5A880]/60 dark:border-[#E5BE82]/60 animate-fadeIn relative transition-colors duration-300">
          <button
            onClick={() => setTooltipOpen(false)}
            className="absolute top-2 right-2 text-[#8C7362] dark:text-[#CBB4A4] hover:text-[#4A1E34] dark:hover:text-white"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4A1E34] dark:text-[#E5BE82]">
              {isPt ? 'Amora Assessoria Online' : 'Amora Concierge Online'}
            </span>
          </div>

          <p className="text-xs text-[#5C4855] dark:text-[#D5C2CC] mb-3 leading-relaxed">
            {isPt
              ? 'Olá! Joyce e Agatha estão disponíveis para orientar o formato perfeito para o seu evento. Deseja conversar agora?'
              : 'Hello! Joyce & Agatha are available to assist your event inquiries. Would you like to chat?'}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center block py-2 px-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-medium tracking-wider uppercase transition-colors shadow-sm"
          >
            {isPt ? 'Abrir WhatsApp' : 'Open WhatsApp'}
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setTooltipOpen(true)}
          aria-label="Falar no WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-7 h-7" />
          {/* Online green indicator dot */}
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white" />
        </a>
      </div>
    </div>
  );
};
