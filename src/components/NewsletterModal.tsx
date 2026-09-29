import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, Check } from 'lucide-react';
import { Language } from '../types';

interface NewsletterModalProps {
  language: Language;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ language }) => {
  const isPt = language === 'pt';
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already closed the popup in this session
    const hasSeen = sessionStorage.getItem('amora_newsletter_seen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('amora_newsletter_seen', 'true');
      }, 30000); // 30 seconds as requested in prompt

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C1824]/75 dark:bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FAF7F2] dark:bg-[#1E0F1A] rounded-3xl p-6 sm:p-8 border border-[#C5A880]/70 dark:border-[#E5BE82]/60 shadow-2xl overflow-hidden transition-colors duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#F5EFEB] dark:bg-[#281523] text-[#4A1E34] dark:text-[#E5BE82] hover:bg-[#4A1E34] hover:text-[#FAF7F2] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFEB] dark:bg-[#281523] border border-[#C5A880]/30 dark:border-[#E5BE82]/40 text-[#A67C46] dark:text-[#E5BE82] text-[11px] uppercase tracking-wider font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isPt ? 'Presente Exclusivo' : 'Exclusive Guide'}</span>
          </div>

          <h3 className="font-serif-title text-2xl sm:text-3xl text-[#351425] dark:text-[#F8F3EC] font-light mb-2">
            {isPt
              ? 'Guia Exclusivo de Planejamento de Casamento'
              : 'The Essential Wedding Planning Checklist'}
          </h3>

          <p className="font-script text-2xl text-[#8C7362] dark:text-[#E5BE82] mb-3">
            {isPt ? 'por Joyce Costa & Agatha Zillar' : 'by Joyce Costa & Agatha Zillar'}
          </p>

          <p className="text-xs sm:text-sm text-[#5C4855] dark:text-[#D5C2CC] leading-relaxed mb-6 max-w-sm mx-auto">
            {isPt
              ? 'Cadastre-se para receber em seu e-mail o checklist de 12 meses com as dicas essenciais que evitam os maiores erros no grande dia.'
              : 'Subscribe to receive our 12-month master checklist and avoid the most common planning pitfalls.'}
          </p>

          {submitted ? (
            <div className="p-4 rounded-2xl bg-[#F5EFEB] dark:bg-[#281523] border border-[#C5A880] text-center text-xs text-[#351425] dark:text-[#F8F3EC] font-medium animate-fadeIn flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#4A1E34] dark:bg-[#7D2954] text-white flex items-center justify-center">
                <Check className="w-4 h-4 text-[#C5A880] dark:text-[#E5BE82]" />
              </div>
              <span>
                {isPt
                  ? 'Guia enviado com sucesso! Verifique sua caixa de entrada.'
                  : 'Guide dispatched successfully! Check your inbox.'}
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-left">
              <div>
                <input
                  type="text"
                  required
                  placeholder={isPt ? 'Seu primeiro nome' : 'Your first name'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#251320] border border-[#D5C2AF] dark:border-[#422237] text-xs text-[#2C242B] dark:text-[#F8F3EC] focus:outline-none focus:border-[#4A1E34] dark:focus:border-[#E5BE82]"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder={isPt ? 'Seu melhor e-mail' : 'Your email address'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#251320] border border-[#D5C2AF] dark:border-[#422237] text-xs text-[#2C242B] dark:text-[#F8F3EC] focus:outline-none focus:border-[#4A1E34] dark:focus:border-[#E5BE82]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full bg-[#4A1E34] dark:bg-[#7D2954] hover:bg-[#351425] dark:hover:bg-[#943264] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-[#C5A880] dark:text-[#E5BE82]" />
                <span>{isPt ? 'Quero Receber o Guia' : 'Get Free Guide'}</span>
              </button>
            </form>
          )}

          <p className="text-[10px] text-[#A69485] dark:text-[#B69FA9] mt-4">
            Respeitamos sua privacidade. Cancele a qualquer momento.
          </p>
        </div>
      </div>
    </div>
  );
};
