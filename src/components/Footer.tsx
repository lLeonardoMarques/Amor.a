import React, { useState } from 'react';
import { Logo } from './Logo';
import { Instagram, Mail, Phone, MapPin, Heart, ArrowUp, X } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isPt = language === 'pt';
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B0F20] dark:bg-[#0F050C] text-[#FAF7F2] pt-20 pb-12 relative border-t border-[#4A1E34] dark:border-[#2D1223] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#4A1E34]/80 dark:border-[#2D1223]">
          {/* Col 1: Brand & Essence */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" variant="light" />
            <p className="font-script text-2xl text-[#C5A880] tracking-wide pt-2">
              Você sonha, a gente realiza
            </p>
            <p className="text-xs text-[#D5C2AF] leading-relaxed font-light max-w-sm">
              {isPt
                ? 'Assessoria e coordenação de eventos e casamentos de alto padrão por Joyce Costa e Agatha Zillar. Menos preocupação, mais momentos inesquecíveis.'
                : 'Luxury event and wedding advisory by Joyce Costa & Agatha Zillar. Less worry, more timeless celebrations.'}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/amora.assessoria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3D142D] border border-[#C5A880]/40 flex items-center justify-center text-[#E6D5BD] hover:text-white hover:bg-[#4A1E34] transition-colors"
                aria-label="Instagram da Amora Assessoria"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@amoraassessoria.com.br"
                className="w-9 h-9 rounded-full bg-[#3D142D] border border-[#C5A880]/40 flex items-center justify-center text-[#E6D5BD] hover:text-white hover:bg-[#4A1E34] transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3D142D] border border-[#C5A880]/40 flex items-center justify-center text-[#E6D5BD] hover:text-white hover:bg-[#4A1E34] transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.24em] font-semibold text-[#C5A880]">
              {isPt ? 'Navegação' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-[#D5C2AF]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  {isPt ? 'Início' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  {isPt ? 'Sobre a Amora' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  {isPt ? 'Serviços' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-white transition-colors">
                  {isPt ? 'Como Trabalhamos' : 'Process'}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  {isPt ? 'Portfólio' : 'Portfolio'}
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  {isPt ? 'Depoimentos' : 'Testimonials'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Gestão / Liderança */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.24em] font-semibold text-[#C5A880]">
              {isPt ? 'Responsáveis pela Gestão' : 'Leadership'}
            </h4>
            <div className="space-y-3 text-xs text-[#D5C2AF]">
              <div>
                <strong className="block text-[#FAF7F2] font-serif text-sm">Joyce Costa</strong>
                <span className="text-[11px] text-[#A67C46] block">Assessora & Coordenadora de Eventos</span>
                <a
                  href="https://instagram.com/jooiicossta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#E6D5BD] hover:underline"
                >
                  @jooiicossta
                </a>
              </div>

              <div>
                <strong className="block text-[#FAF7F2] font-serif text-sm">Agatha Zillar</strong>
                <span className="text-[11px] text-[#A67C46] block">Assessora de Eventos</span>
                <a
                  href="https://instagram.com/agatha_zillar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#E6D5BD] hover:underline"
                >
                  @agatha_zillar
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter Box */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.24em] font-semibold text-[#C5A880]">
              {isPt ? 'Newsletter Editorial' : 'Curated Newsletter'}
            </h4>
            <p className="text-xs text-[#D5C2AF] leading-relaxed">
              {isPt
                ? 'Receba tendências de casamento, checklist exclusivo e inspirações selecionadas por Joyce e Agatha.'
                : 'Receive wedding styling trends and seasonal insights curated by Joyce & Agatha.'}
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#3D142D] border border-[#C5A880]/50 text-xs text-[#FAF7F2] text-center">
                {isPt ? '✓ Inscrição confirmada com sucesso!' : '✓ Successfully subscribed!'}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={isPt ? 'Seu melhor e-mail' : 'Your email address'}
                  className="w-full px-4 py-2.5 rounded-full bg-[#3D142D] border border-[#C5A880]/40 text-xs text-[#FAF7F2] placeholder-[#A69485] focus:outline-none focus:border-[#C5A880]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-full bg-[#C5A880] hover:bg-[#D4AF37] text-[#2B0F20] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  {isPt ? 'Assinar Diário' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A69485]">
          <div>
            © {new Date().getFullYear()} Amora Assessoria & Eventos. Todos os direitos reservados.
            <span className="mx-2">•</span>
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:underline hover:text-[#C5A880]"
            >
              Política de Privacidade
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Desenvolvido com carinho e sofisticação
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#3D142D] border border-[#C5A880]/40 text-[#E6D5BD] hover:text-white hover:bg-[#4A1E34] transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#FAF7F2] dark:bg-[#1E0F1A] text-[#2C242B] dark:text-[#F8F3EC] rounded-3xl p-6 sm:p-8 border border-[#C5A880] dark:border-[#E5BE82] shadow-2xl">
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F5EFEB] dark:bg-[#281523] text-[#4A1E34] dark:text-[#E5BE82] hover:bg-[#4A1E34] hover:text-[#FAF7F2]"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-serif-title text-2xl text-[#351425] dark:text-[#F8F3EC] mb-4">
              Política de Privacidade e Proteção de Dados
            </h3>

            <div className="space-y-3 text-xs text-[#5C4855] dark:text-[#D5C2CC] leading-relaxed max-h-72 overflow-y-auto pr-2">
              <p>
                Na Amora Assessoria & Eventos, a privacidade e o respeito aos dados de nossos noivos, clientes e parceiros são tratados com total transparência e segurança jurídica, em conformidade com a LGPD (Lei Geral de Proteção de Dados - Lei 13.709/2018).
              </p>
              <p>
                As informações coletadas em nossos formulários (nome, e-mail, telefone, preferências de evento) são utilizadas exclusivamente para a elaboração de propostas personalizadas e comunicação direta entre você e as assessoras Joyce Costa e Agatha Zillar.
              </p>
              <p>
                Seus dados nunca serão comercializados ou compartilhados com terceiros não autorizados.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8DFD5] dark:border-[#381B2D] text-right">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="px-6 py-2 rounded-full bg-[#4A1E34] dark:bg-[#7D2954] text-[#FAF7F2] text-xs uppercase tracking-wider font-medium hover:bg-[#351425]"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
