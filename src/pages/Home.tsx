import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Award, Shield, Flame, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  lang: 'zh' | 'en';
  content: any;
  categories: any;
}

export const Home = ({ lang, content, categories }: HomeProps) => {
  const t = content;
  const [activeTab, setActiveTab] = useState<string>('organic');
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0 scale-110">
          <img 
            src="/hero-bg.webp"
            className="w-full h-full object-cover opacity-100"
            alt="Mullano Interior"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to unsplash if the user hasn't uploaded the image yet
              e.currentTarget.src = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 text-center px-8 max-w-5xl">
          <motion.h1
            key={`title-${lang}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-serif text-white tracking-[0.3em] mb-12 leading-tight uppercase"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            key={`subtitle-${lang}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="text-white/70 text-sm md:text-base tracking-[0.5em] uppercase font-light mb-20"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link to="/collections/organic" className="inline-flex items-center space-x-6 text-white border-b border-white/20 pb-4 hover:border-mullano-gold hover:text-mullano-gold transition-all group">
              <span className="text-xs tracking-[0.4em] uppercase font-light">{t.hero.cta}</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
            {t.certificates.map((cert: any, index: number) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-mullano-gray text-mullano-gold mb-10 group-hover:bg-mullano-gold group-hover:text-white transition-all duration-700 ease-in-out transform group-hover:scale-110">
                  {index === 0 && <Award className="w-10 h-10" />}
                  {index === 1 && <Shield className="w-10 h-10" />}
                  {index === 2 && <Flame className="w-10 h-10" />}
                  {index === 3 && <Wind className="w-10 h-10" />}
                </div>
                <h3 className="text-xl font-serif mb-4 tracking-[0.2em] uppercase">{cert.title}</h3>
                <p className="text-[11px] text-gray-400 uppercase tracking-[0.3em] font-light">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Preview Section */}
      <section className="py-48 bg-mullano-gray">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="mb-12 md:mb-0">
              <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-6 uppercase font-semibold">{t.collections.tag}</h3>
              <h2 className="text-4xl md:text-5xl font-serif tracking-[0.2em] uppercase">{t.collections.title}</h2>
            </div>
            <Link to={`/collections/${activeTab}`} className="group flex items-center space-x-6 text-mullano-black/60 hover:text-mullano-gold transition-colors">
              <span className="text-[11px] tracking-[0.4em] uppercase font-semibold">View All</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-12 mb-20 border-b border-black/5 pb-6">
            {Object.entries(t.collections.tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`text-[11px] tracking-[0.3em] uppercase font-semibold transition-all relative pb-6 ${
                  activeTab === key ? 'text-mullano-black' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {label as string}
                {activeTab === key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-mullano-gold"
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
          >
            <AnimatePresence mode="wait">
              {categories[activeTab].slice(0, 3).map((item: any) => (
                <Link to={`/product/${item.id}`} key={item.id} className="group cursor-pointer">
                  <div className="img-reveal aspect-[4/5] bg-white overflow-hidden">
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
                      <span className="text-[11px] tracking-[0.3em] text-mullano-gold uppercase font-semibold">{item.id}</span>
                      <div className="h-px flex-grow bg-black/5" />
                    </div>
                    <h4 className="text-3xl font-serif tracking-[0.2em] mb-4 uppercase">{item.name[lang]}</h4>
                    <p className="text-sm text-gray-400 font-light tracking-widest uppercase line-clamp-2">{item.desc[lang]}</p>
                  </div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-48 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{lang === 'zh' ? '空间实景' : 'Space Realities'}</h3>
              <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] mb-12 uppercase leading-tight">
                {lang === 'zh' ? '让艺术在空间中漫延' : 'Art Spreading in Space'}
              </h2>
              <p className="text-base text-gray-500 font-light leading-loose mb-16 tracking-widest uppercase max-w-lg">
                {lang === 'zh' 
                  ? '从私人豪宅到高端商业空间，MULLANO 为每一个独特的场域量身定制墙面艺术方案。' 
                  : 'From private villas to high-end commercial spaces, MULLANO customizes wall art solutions for every unique field.'}
              </p>
              <Link to="/projects/residential" className="inline-flex items-center space-x-6 text-mullano-black border-b border-black/10 pb-4 hover:border-mullano-gold hover:text-mullano-gold transition-all group">
                <span className="text-xs tracking-[0.4em] uppercase font-light">{lang === 'zh' ? '探索案例' : 'Explore Projects'}</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-[3/4] bg-mullano-gray overflow-hidden mt-12">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Project 1" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] bg-mullano-gray overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Project 2" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="aspect-square bg-mullano-gray overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1000&h=1000"
                  className="w-full h-full object-cover"
                  alt="Craftsmanship"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-mullano-gold/5 -z-10 rounded-full blur-3xl" />
            </div>
            <div className="lg:pl-12">
              <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-10 uppercase font-semibold">{t.craft.tag}</h3>
              <h2 className="text-4xl md:text-5xl font-serif tracking-[0.1em] leading-tight mb-16 whitespace-pre-line uppercase">
                {t.craft.heading}
              </h2>
              <p className="text-base text-gray-400 font-light leading-loose mb-20 tracking-widest uppercase">
                {t.craft.desc}
              </p>
              <div className="grid grid-cols-2 gap-16">
                {t.craft.stats.map((stat: any, idx: number) => (
                  <div key={idx} className="border-l-2 border-mullano-gold/20 pl-8">
                    <div className="text-5xl font-serif mb-4 text-mullano-black">{stat.value}</div>
                    <div className="text-[11px] tracking-[0.3em] text-gray-400 uppercase font-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
