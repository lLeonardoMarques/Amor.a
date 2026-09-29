import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = true
}) => {
  const isDark = variant === 'dark';
  const isLight = variant === 'light';

  // Sizing styles
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-14 h-14'
  }[size];

  const titleSizes = {
    sm: 'text-lg tracking-[0.22em]',
    md: 'text-2xl tracking-[0.26em]',
    lg: 'text-4xl tracking-[0.3em]'
  }[size];

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[11px] tracking-[0.32em]',
    lg: 'text-sm tracking-[0.38em]'
  }[size];

  const textColor =
    variant === 'light'
      ? 'text-[#FAF7F2]'
      : variant === 'gold'
      ? 'text-[#C5A880]'
      : 'text-[#351425] dark:text-[#F8F3EC]';

  const subtitleColor =
    variant === 'light'
      ? 'text-[#E6D5BD]'
      : variant === 'gold'
      ? 'text-[#E5BE82]'
      : 'text-[#8C7362] dark:text-[#CBB4A4]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Refined Geometric Honeycomb + Botanical Sprig Icon */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconDimensions}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Top-Right Hexagon (Gold outline) */}
          <polygon
            points="58,12 78,23 78,47 58,58 38,47 38,23"
            stroke="#C5A880"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Top-Left Hexagon (Gold outline) */}
          <polygon
            points="38,28 58,39 58,63 38,74 18,63 18,39"
            stroke="#C5A880"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Bottom Hexagon (Plum filled + Gold stroke) */}
          <polygon
            points="50,44 70,55 70,79 50,90 30,79 30,55"
            fill="#4A1E34"
            stroke="#C5A880"
            strokeWidth="2.5"
          />

          {/* Delicate Botanical Leaf Sprig Branch (Aubergine & Gold) */}
          <path
            d="M56 68 C 65 60, 75 52, 88 42"
            stroke="#C5A880"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Leaf 1 */}
          <path
            d="M68 56 C 72 50, 78 51, 80 57 C 76 60, 70 60, 68 56 Z"
            fill="#6E2F4F"
            stroke="#C5A880"
            strokeWidth="1"
          />
          {/* Leaf 2 */}
          <path
            d="M78 48 C 84 43, 89 45, 91 50 C 86 53, 80 52, 78 48 Z"
            fill="#4A1E34"
            stroke="#C5A880"
            strokeWidth="1"
          />
          {/* Leaf 3 */}
          <path
            d="M74 62 C 80 62, 84 66, 83 71 C 78 70, 75 66, 74 62 Z"
            fill="#9E7A4B"
          />
          {/* Tiny Gold Accent Dot */}
          <circle cx="85" cy="38" r="2.2" fill="#D4AF37" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline">
          <span
            className={`font-serif-title font-semibold uppercase leading-none ${titleSizes} ${textColor}`}
          >
            Amora
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`font-sans uppercase font-medium ${subtitleSizes} ${subtitleColor}`}>
              Assessoria & Eventos
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#C5A880]/80" />
          </div>
        )}
      </div>
    </div>
  );
};
