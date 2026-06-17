import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

interface CollectionPageProps {
  lang: 'zh' | 'en';
  content: any;
  categories: any;
}

export const CollectionPage = ({ lang, content, categories }: CollectionPageProps) => {
  const { type } = useParams<{ type: string }>();
  const activeType = type || 'organic';
  const t = content;
  const items = categories[activeType] || [];
  const navigate = useNavigate();

  const isSubcategoryPage = activeType === 'stone' || activeType === 'plaster';
  const parentType = isSubcategoryPage ? 'inorganic' : activeType;

  const getTitle = () => {
    if (activeType === 'stone') return lang === 'zh' ? '石材' : 'Stone';
    if (activeType === 'plaster') return lang === 'zh' ? '石膏' : 'Plaster';
    
    const sub = t.nav.collections.sub.find((s: any) => s.path.endsWith(activeType));
    return sub ? sub.name : '';
  };

  return (
    <div className="bg-mullano-gray min-h-screen">
      <PageHero 
        title={getTitle()}
        subtitle={t.collections.title}
        image="/collections-bg.webp"
        fallbackImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {isSubcategoryPage ? (
              <button 
                onClick={() => navigate('/collections/inorganic')}
                className="flex items-center text-sm text-gray-400 hover:text-mullano-black transition-colors uppercase tracking-widest mb-4 md:mb-0"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                {lang === 'zh' ? '返回无机系列' : 'Back to Inorganic'}
              </button>
            ) : <div />}
            <div className="flex flex-wrap gap-8 md:gap-12">
              {t.nav.collections.sub.map((sub: any) => {
                const typeFromPath = sub.path.split('/').pop();
                const isActive = parentType === typeFromPath;
                return (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    className={`text-[11px] tracking-[0.4em] uppercase transition-all relative ${isActive ? 'text-mullano-black font-semibold' : 'text-gray-400'}`}
                  >
                    {sub.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-24">
        <motion.div
          key={`${activeType}-${lang}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"
        >
          {items.map((item: any) => (
            <Link 
              to={item.isSubcategory ? `/collections/${item.id}` : `/product/${item.id}`} 
              key={item.id} 
              className="group cursor-pointer"
            >
              <div className="img-reveal aspect-[4/5] bg-white overflow-hidden shadow-xl">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt={item.name[lang]}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-mullano-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center text-white backdrop-blur-sm">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <div className="flex items-center space-x-6 mb-4">
                  <span className="text-[11px] tracking-[0.3em] text-mullano-gold uppercase font-semibold">
                    {item.isSubcategory ? (lang === 'zh' ? '系列' : 'Collection') : item.id}
                  </span>
                  <div className="h-px flex-grow bg-black/5" />
                </div>
                <h4 className="text-3xl font-serif tracking-[0.2em] mb-4 uppercase">{item.name[lang]}</h4>
                <p className="text-sm text-gray-400 font-light tracking-widest uppercase leading-relaxed">{item.desc[lang]}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
