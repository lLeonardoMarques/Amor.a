import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { useTheme } from '../context/ThemeContext';

interface SubOption {
  label: string;
  sublabel: string;
  href: string;
}

interface NavItem {
  id: string;
  label: string;
  href?: string;
  subOptions?: SubOption[];
}

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenQuoteModal
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isPt = language === 'pt';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary navigation grouped into fewer, clean, high-level options with sub-options
  const navigationItems: NavItem[] = isPt
    ? [
        {
          id: 'sobre',
          label: 'A Amora',
          subOptions: [
            {
              label: 'Quem Somos & Pilares',
              sublabel: 'Propósito, excelência e exclusividade',
              href: '#sobre'
            },
            {
              label: 'Joyce Costa & Agatha Zillar',
              sublabel: 'As fundadoras e responsáveis pela gestão',
              href: '#sobre'
            },
            {
              label: 'Como Trabalhamos',
              sublabel: 'Nossa metodologia em 4 etapas',
              href: '#processo'
            }
          ]
        },
        {
          id: 'servicos',
          label: 'Celebrações',
          subOptions: [
            {
              label: 'Casamentos & Mini Weddings',
              sublabel: 'Assessoria completa ou final do grande dia',
              href: '#servicos'
            },
            {
              label: 'Eventos Corporativos & Galas',
              sublabel: 'Rigor e sofisticação para sua marca',
              href: '#servicos'
            },
            {
              label: 'Portfólio & Galeria Real',
              sublabel: 'Inspire-se com eventos já realizados',
              href: '#portfolio'
            }
          ]
        },
        {
          id: 'experiencias',
          label: 'Experiências',
          subOptions: [
            {
              label: 'Depoimentos de Clientes',
              sublabel: 'A visão de quem viveu o inesquecível',
              href: '#depoimentos'
            },
            {
              label: 'Dúvidas Frequentes (FAQ)',
              sublabel: 'Perguntas e respostas sobre assessoria',
              href: '#faq'
            },
            {
              label: 'Diário & Inspirações',
              sublabel: 'Artigos e tendências por Joyce & Agatha',
              href: '#blog'
            }
          ]
        },
        {
          id: 'contato',
          label: 'Contato',
          href: '#contato'
        }
      ]
    : [
        {
          id: 'about',
          label: 'About',
          subOptions: [
            {
              label: 'The Studio & Pillars',
              sublabel: 'Our vision, excellence and purpose',
              href: '#sobre'
            },
            {
              label: 'Joyce Costa & Agatha Zillar',
              sublabel: 'Founders and managing directors',
              href: '#sobre'
            },
            {
              label: 'Our Process',
              sublabel: '4-step signature methodology',
              href: '#processo'
            }
          ]
        },
        {
          id: 'services',
          label: 'Celebrations',
          subOptions: [
            {
              label: 'Weddings & Mini Weddings',
              sublabel: 'Full planning and day-of management',
              href: '#servicos'
            },
            {
              label: 'Corporate Galas & Summits',
              sublabel: 'Executive precision and refined elegance',
              href: '#servicos'
            },
            {
              label: 'Portfolio & Real Gallery',
              sublabel: 'Curated gallery of real milestones',
              href: '#portfolio'
            }
          ]
        },
        {
          id: 'stories',
          label: 'Stories',
          subOptions: [
            {
              label: 'Client Testimonials',
              sublabel: 'Words from couples and hosts',
              href: '#depoimentos'
            },
            {
              label: 'Frequently Asked Questions',
              sublabel: 'Answers to planning inquiries',
              href: '#faq'
            },
            {
              label: 'Journal & Insights',
              sublabel: 'Editorial articles by Joyce & Agatha',
              href: '#blog'
            }
          ]
        },
        {
          id: 'contact',
          label: 'Contact',
          href: '#contato'
        }
      ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 dark:bg-[#12070F]/95 backdrop-blur-md border-b border-[#E6D9CD]/80 dark:border-[#2D1424] shadow-md shadow-[#2C0E1E]/8 dark:shadow-xl dark:shadow-black/50 py-3'
          : 'bg-[#FAF7F2]/75 dark:bg-[#12070F]/75 backdrop-blur-sm border-b border-[#E8DFD5]/40 dark:border-white/5 py-4 lg:py-5'
      }`}
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleScrollTo(e, '#inicio')}
          className="group flex items-center shrink-0 transition-opacity hover:opacity-90"
          aria-label="Amora Assessoria - Início"
        >
          <Logo
            size="md"
            variant={theme === 'dark' ? 'light' : 'dark'}
          />
        </a>

        {/* Minimalist Desktop Navigation (Few Main Options with Curated Dropdowns) - Centralized */}
        <nav className="hidden lg:flex items-center justify-center gap-10 mx-auto text-center">
          {navigationItems.map((item) => {
            const hasSub = item.subOptions && item.subOptions.length > 0;
            const isOpen = activeDropdown === item.id;

            return (
              <div
                key={item.id}
                className="relative flex items-center justify-center"
                onMouseEnter={() => hasSub && handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href!)}
                    className="text-[12px] uppercase tracking-[0.24em] font-medium text-[#4A3843] dark:text-[#E2D4DC] hover:text-[#671F43] dark:hover:text-[#E5BE82] transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.5px] after:bg-[#C5A880] dark:after:bg-[#E5BE82] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="inline-flex items-center justify-center gap-1 text-[12px] uppercase tracking-[0.24em] font-medium text-[#4A3843] dark:text-[#E2D4DC] hover:text-[#671F43] dark:hover:text-[#E5BE82] transition-colors py-2 group cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#9E743B] dark:text-[#E5BE82] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}

                {/* Dropdown Menu Panel */}
                {hasSub && isOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 animate-fadeIn z-50 pointer-events-auto"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="rounded-2xl bg-[#FAF7F2] dark:bg-[#1A0C16] border border-[#E3D4C5] dark:border-[#381B2D] p-2.5 shadow-2xl shadow-[#2C0E1E]/12 dark:shadow-black/70 backdrop-blur-xl">
                      {item.subOptions!.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => handleScrollTo(e, sub.href)}
                          className="group block px-4 py-3 rounded-xl transition-all duration-200 hover:bg-[#F3E8DF]/70 dark:hover:bg-[#281523]"
                        >
                          <div className="font-serif text-sm font-medium text-[#351425] dark:text-[#FAF7F2] group-hover:text-[#671F43] dark:group-hover:text-[#E5BE82] transition-colors">
                            {sub.label}
                          </div>
                          <div className="text-[11px] text-[#7A6472] dark:text-[#C5B3BF] mt-0.5 font-sans leading-tight">
                            {sub.sublabel}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle, Language Switcher, and Minimal CTA */}
        <div className="hidden lg:flex items-center justify-end gap-4 shrink-0">
          {/* Subtle Utility Group - Centralized */}
          <div className="flex items-center justify-center gap-1.5 pl-2 border-l border-[#E2D4C5] dark:border-[#381B2D]">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              title={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#553C4B] dark:text-[#E5BE82] hover:text-[#2C0E1E] dark:hover:text-white hover:bg-[#EFE6DC] dark:hover:bg-[#251320] transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-[#E5BE82]" />
              ) : (
                <Moon className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center justify-center text-[11px] font-medium tracking-widest text-[#7A6472] dark:text-[#BFAEB8] px-1">
              <button
                onClick={() => onLanguageChange('pt')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  isPt
                    ? 'text-[#3E1428] dark:text-[#FAF7F2] font-semibold'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                PT
              </button>
              <span className="opacity-30">|</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  !isPt
                    ? 'text-[#3E1428] dark:text-[#FAF7F2] font-semibold'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Clean CTA Button - Centralized Content */}
          <a
            href="#contato"
            onClick={(e) => {
              if (onOpenQuoteModal) {
                e.preventDefault();
                onOpenQuoteModal();
              } else {
                handleScrollTo(e, '#contato');
              }
            }}
            className="inline-flex items-center justify-center text-center self-center px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-medium text-[#FAF7F2] bg-[#3E1428] dark:bg-[#7D2954] hover:bg-[#240A18] dark:hover:bg-[#923363] border border-[#C5A880]/30 hover:border-[#C5A880] rounded-full transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            {isPt ? 'Solicitar Orçamento' : 'Request Quote'}
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-1 lg:hidden">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#4A1733] dark:text-[#E5BE82] hover:bg-[#EFE6DC] dark:hover:bg-[#251320] transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Language Switcher Mobile */}
          <button
            onClick={() => onLanguageChange(isPt ? 'en' : 'pt')}
            className="px-2 py-1 text-[11px] font-semibold text-[#4A1733] dark:text-[#E5BE82]"
            aria-label="Alternar idioma"
          >
            {language.toUpperCase()}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#351425] dark:text-[#F8F3EC] hover:bg-[#EFE6DC] dark:hover:bg-[#251320] transition-colors ml-1"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Drawer Menu (With Hierarchical Accordion) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bg-[#FAF7F2]/98 dark:bg-[#12070F]/98 backdrop-blur-xl border-b border-[#E6D9CD] dark:border-[#2D1424] shadow-xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-3 max-w-sm mx-auto">
            {navigationItems.map((item) => {
              const hasSub = item.subOptions && item.subOptions.length > 0;
              const isExpanded = mobileExpanded === item.id;

              if (item.href) {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href!)}
                    className="text-sm uppercase tracking-[0.2em] font-serif text-[#351425] dark:text-[#F8F3EC] hover:text-[#C5A880] dark:hover:text-[#E5BE82] py-2 transition-colors border-b border-[#EFE7E0]/60 dark:border-[#281320]"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <div key={item.id} className="border-b border-[#EFE7E0]/60 dark:border-[#281320] pb-1">
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(isExpanded ? null : item.id)}
                    className="w-full flex items-center justify-between text-sm uppercase tracking-[0.2em] font-serif text-[#351425] dark:text-[#F8F3EC] py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#9E743B] dark:text-[#E5BE82] transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {hasSub && isExpanded && (
                    <div className="pl-3 py-1 flex flex-col gap-2 animate-fadeIn bg-[#F5EFEB]/50 dark:bg-[#1E0F1A]/50 rounded-xl my-1 p-2">
                      {item.subOptions!.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => handleScrollTo(e, sub.href)}
                          className="py-1 text-xs text-[#5D4653] dark:text-[#D5C2CC] hover:text-[#351425] dark:hover:text-white"
                        >
                          <span className="font-serif block text-[13px] text-[#351425] dark:text-[#F8F3EC]">
                            {sub.label}
                          </span>
                          <span className="text-[10px] text-[#8C7362] dark:text-[#A896A2]">
                            {sub.sublabel}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contato"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) {
                    e.preventDefault();
                    onOpenQuoteModal();
                  } else {
                    handleScrollTo(e, '#contato');
                  }
                }}
                className="w-full text-center py-3 px-6 text-[11px] uppercase tracking-[0.22em] font-medium text-[#FAF7F2] bg-[#3E1428] dark:bg-[#7D2954] rounded-full shadow-sm"
              >
                {isPt ? 'Solicitar Orçamento' : 'Request Quote'}
              </a>

              <p className="text-center text-xs text-[#8C7362] dark:text-[#E5BE82] font-script text-lg pt-1">
                Você sonha, a gente realiza
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
