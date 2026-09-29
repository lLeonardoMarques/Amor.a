import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1100);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7F2] transition-opacity duration-700 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center animate-fade-in text-center px-4">
        <Logo size="lg" variant="dark" />
        <p className="mt-4 font-script text-2xl text-[#8C7362] tracking-wide">
          Você sonha, a gente realiza
        </p>

        {/* Minimal loading bar */}
        <div className="w-24 h-[1px] bg-[#C5A880]/30 mt-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#4A1E34] animate-pulse" />
        </div>
      </div>
    </div>
  );
};
