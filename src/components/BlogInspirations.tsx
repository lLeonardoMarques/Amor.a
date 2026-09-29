import React, { useState } from 'react';
import { blogPosts } from '../data/content';
import { BlogPost, Language } from '../types';
import { BookOpen, Calendar, Clock, ArrowRight, X, User } from 'lucide-react';

interface BlogInspirationsProps {
  language: Language;
}

export const BlogInspirations: React.FC<BlogInspirationsProps> = ({ language }) => {
  const isPt = language === 'pt';
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 lg:py-32 bg-[#FAF7F2] dark:bg-[#150B12] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5EFEB] dark:bg-[#251320] border border-[#C5A880]/30 dark:border-[#E5BE82]/40 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#A67C46] dark:text-[#E5BE82]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#8C7362] dark:text-[#E5BE82] font-semibold">
              {isPt ? 'Diário & Inspirações' : 'Journal & Inspiration'}
            </span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-5xl text-[#351425] dark:text-[#F8F3EC] font-light">
            {isPt ? 'Dicas e Tendências por Quem Entende' : 'Event Curation & Bridal Insights'}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto my-5" />
          <p className="text-base sm:text-lg text-[#5C4855] dark:text-[#D5C2CC]">
            {isPt
              ? 'Artigos práticos e visões estéticas escritas por Joyce Costa e Agatha Zillar para inspirar o seu grande dia.'
              : 'Practical advice and design wisdom by Joyce Costa & Agatha Zillar to inspire your milestone.'}
          </p>
        </div>

        {/* 3 Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group cursor-pointer rounded-3xl bg-[#F5EFEB] dark:bg-[#1E0F1A] border border-[#E8DFD5] dark:border-[#381B2D] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#4A1E34]/15 hover:border-[#671F43]/50 dark:hover:border-[#E5BE82]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#FAF7F2]/90 dark:bg-[#20111B]/90 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-[#4A1E34] dark:text-[#E5BE82]">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs text-[#8C7362] dark:text-[#CBB4A4] mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#A67C46] dark:text-[#E5BE82]" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#A67C46] dark:text-[#E5BE82]" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="font-serif-title text-xl text-[#351425] dark:text-[#F8F3EC] font-medium leading-snug group-hover:text-[#4A1E34] dark:group-hover:text-[#E5BE82] transition-colors mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6A5A50] dark:text-[#CBB4A4] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#4A1E34] dark:text-[#E5BE82] group-hover:text-[#A67C46]">
                <span>{isPt ? 'Ler Artigo Completo' : 'Read Full Post'}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Post Reading Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2C1824]/85 dark:bg-black/90 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#FAF7F2] dark:bg-[#1E0F1A] rounded-3xl border border-[#C5A880]/50 dark:border-[#E5BE82]/50 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <img src={activePost.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] dark:from-[#1E0F1A] via-[#FAF7F2]/20 dark:via-[#1E0F1A]/20 to-transparent" />
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 p-2.5 rounded-full bg-[#FAF7F2]/90 dark:bg-[#281523]/90 text-[#351425] dark:text-[#FAF7F2] hover:bg-[#4A1E34] hover:text-[#FAF7F2] transition-colors shadow-md"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 sm:p-12 -mt-10 relative z-10">
              <div className="flex items-center gap-3 text-xs text-[#8C7362] dark:text-[#CBB4A4] mb-3">
                <span className="px-3 py-1 rounded-full bg-[#F5EFEB] dark:bg-[#281523] border border-[#E8DFD5] dark:border-[#381B2D] text-[#4A1E34] dark:text-[#E5BE82] font-medium uppercase tracking-wider">
                  {activePost.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#A67C46] dark:text-[#E5BE82]" />
                  {activePost.date}
                </span>
                <span>•</span>
                <span>Por {activePost.author}</span>
              </div>

              <h3 className="font-serif-title text-2xl sm:text-4xl text-[#351425] dark:text-[#F8F3EC] font-normal leading-tight mb-6">
                {activePost.title}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#5C4855] dark:text-[#D5C2CC] leading-relaxed font-normal">
                {activePost.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-[#E8DFD5] dark:border-[#381B2D] flex items-center justify-between">
                <div className="font-script text-2xl text-[#4A1E34] dark:text-[#E5BE82]">
                  Amora Assessoria & Eventos
                </div>
                <button
                  onClick={() => setActivePost(null)}
                  className="px-6 py-2.5 rounded-full bg-[#4A1E34] dark:bg-[#7D2954] text-[#FAF7F2] text-xs uppercase tracking-wider font-medium hover:bg-[#351425] dark:hover:bg-[#943264]"
                >
                  {isPt ? 'Fechar' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
