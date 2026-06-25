import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Award, Shield, Flame, Wind, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  lang: 'zh' | 'en';
  content: any;
  categories: any;
}

export const Home = ({ lang, content, categories }: HomeProps) => {
  const t = content;
  const [activeTab, setActiveTab] = useState<string>('organic');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  const heroSlides = [
    {
      id: 2,
      src: '/hero-bg-2.webp',
      fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      title: lang === 'zh' ? '以矿物之名，赋空间以呼吸' : 'Pure Minerals, Breathing Spaces',
      subtitle: lang === 'zh' ? '严选意大利天然原料 | 匠人指尖的手工雕琢' : 'Premium Italian Materials | Hand-sculpted by Master Artisans',
      cta: lang === 'zh' ? '感知意式美学' : 'Discover Italian Aesthetics',
      path: '/atelier/art'
    },
    {
      id: 3,
      src: '/hero-bg-3.webp',
      fallback: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
      title: lang === 'zh' ? '每一面墙，都是不朽的艺术孤品' : 'Every Wall, A One-of-a-Kind Masterpiece',
      subtitle: lang === 'zh' ? '光影在肌理上跃动 | 打造高定美学奢享空间' : 'Dance of Light and Shadow | Bespoke High-End Luxury Design',
      cta: lang === 'zh' ? '品鉴空间实景' : 'View Realized Projects',
      path: '/atelier/art'
    },
    {
      id: 1,
      src: '/hero-bg-1.webp',
      fallback: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop',
      title: lang === 'zh' ? '墙，是家中面积最大的家具' : 'The Wall: The Largest Canvas',
      subtitle: lang === 'zh' ? '让艺术漫延墙面 | 传承玉兰集团40年匠心' : 'Let Art Flow On Walls | 40 Years of Yulan Heritage',
      cta: lang === 'zh' ? '探索墙面艺术' : 'Explore Wall Artistry',
      path: '/atelier/art'
    }
  ];

  const craftsmanshipSlides = [
    {
      src: '/mullano-desert-case-bedroom.webp',
      alt: 'Mullano Desert Case Bedroom',
      fallback: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1000&h=1000',
      label: lang === 'zh' ? '艺术卧室空间' : 'Artistic Bedroom'
    },
    {
      src: '/mullano-desert-case-living.webp',
      alt: 'Mullano Desert Case Living',
      fallback: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000&h=1000',
      label: lang === 'zh' ? '雅奢客厅空间' : 'Luxury Living Room'
    },
    {
      src: '/mullano-desert-case-lounge.webp',
      alt: 'Mullano Desert Case Lounge',
      fallback: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000&h=1000',
      label: lang === 'zh' ? '雅致书屋空间' : 'Elegant Lounge'
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % craftsmanshipSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [craftsmanshipSlides.length]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-neutral-950">
        {/* Background Slideshow with crossfade and subtle zoom-in (Ken Burns) */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={heroSlideIndex}
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1.08 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={heroSlides[heroSlideIndex].src}
                className="w-full h-full object-cover"
                alt="Mullano Interior"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = heroSlides[heroSlideIndex].fallback;
                }}
              />
              <div className="absolute inset-0 bg-black/35" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Container with independent exit/entrance animation */}
        <div className="relative z-10 text-center px-8 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${heroSlideIndex}-${lang}`}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-[0.25em] mb-10 leading-tight uppercase font-medium">
                {heroSlides[heroSlideIndex].title}
              </h1>
              <p className="text-white/85 text-sm md:text-base tracking-[0.4em] uppercase font-light mb-16 max-w-3xl mx-auto leading-relaxed">
                {heroSlides[heroSlideIndex].subtitle}
              </p>
              <div className="flex flex-col items-center justify-center space-y-4">
                {/* Micro-prompt guiding click with floating animation */}
                <motion.div 
                  animate={{ 
                    opacity: [0.55, 1, 0.55]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3, 
                    ease: "easeInOut" 
                  }}
                  className="text-[10px] md:text-xs tracking-[0.35em] text-mullano-gold font-medium uppercase flex items-center gap-2 select-none"
                >
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-mullano-gold"></span>
                    <motion.span 
                      animate={{ 
                        scale: [1, 2.2, 1],
                        opacity: [0.6, 0.15, 0.6]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "easeInOut" 
                      }}
                      className="absolute inline-flex h-full w-full rounded-full bg-mullano-gold"
                    />
                  </span>
                  {lang === 'zh' ? '点击探索 · 开启高定艺术之旅' : 'CLICK TO DISCOVER · EXPERIENCE BESPOKE LUXURY'}
                </motion.div>

                <Link 
                  to={heroSlides[heroSlideIndex].path} 
                  className="relative inline-flex items-center space-x-6 text-white px-10 py-4 bg-neutral-900/60 rounded-full border border-white/15 hover:border-mullano-gold hover:text-neutral-950 hover:bg-mullano-gold hover:shadow-mullano-gold/25 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                >
                  <span className="text-xs md:text-sm tracking-[0.35em] uppercase font-bold transition-colors duration-300">
                    {heroSlides[heroSlideIndex].cta}
                  </span>
                  
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-neutral-950 group-hover:text-mullano-gold transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual Navigation Controls */}
        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex justify-between pointer-events-none">
          <button
            type="button"
            onClick={() => setHeroSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="w-14 h-14 rounded-full border border-white/10 bg-black/45 text-white hover:text-mullano-gold hover:border-mullano-gold/40 hover:bg-black/60 flex items-center justify-center transition-all pointer-events-auto group cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            type="button"
            onClick={() => setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length)}
            className="w-14 h-14 rounded-full border border-white/10 bg-black/45 text-white hover:text-mullano-gold hover:border-mullano-gold/40 hover:bg-black/60 flex items-center justify-center transition-all pointer-events-auto group cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Dynamic Indicator Dots with Live Progress Bar */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setHeroSlideIndex(idx)}
              className="group relative h-1 flex items-center justify-center focus:outline-none cursor-pointer py-2 pointer-events-auto"
              aria-label={`Go to slide ${idx + 1}`}
            >
              {/* background lane */}
              <div className="h-[2px] rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white/40 w-12" />
              {/* dynamic indicator filling */}
              {idx === heroSlideIndex ? (
                <motion.div
                  layoutId="activeSlideProgress"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6.5, ease: 'linear' }}
                  className="absolute left-0 h-[2px] bg-mullano-gold rounded-full w-12 origin-left"
                />
              ) : null}
            </button>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-40 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {t.certificates.map((cert: any, index: number) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-center group bg-white/70 border border-stone-200/35 p-10 rounded-2xl shadow-[0_4px_24px_rgba(27,24,20,0.02)] hover:shadow-2xl hover:bg-white hover:-translate-y-1.5 transition-all duration-700 ease-out"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-mullano-gray text-mullano-gold mb-10 group-hover:bg-mullano-gold group-hover:text-white transition-all duration-700 ease-in-out transform group-hover:rotate-[360deg]">
                  {index === 0 && <Award className="w-10 h-10" />}
                  {index === 1 && <Shield className="w-10 h-10" />}
                  {index === 2 && <Flame className="w-10 h-10" />}
                  {index === 3 && <Wind className="w-10 h-10" />}
                </div>
                <h3 className="text-lg font-serif mb-4 tracking-[0.2em] text-stone-900 group-hover:text-mullano-gold transition-colors duration-300 uppercase">{cert.title}</h3>
                <p className="text-[10px] text-stone-400 uppercase tracking-[0.3em] font-light leading-relaxed">{cert.desc}</p>
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
                  <div className="img-reveal aspect-[4/5] bg-stone-100 overflow-hidden rounded-2xl border border-stone-200/30 shadow-md group-hover:shadow-2xl transition-all duration-700 ease-out">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      alt={item.name[lang]}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-mullano-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center text-white bg-black/30">
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
              <div className="aspect-[3/4] bg-mullano-gray overflow-hidden mt-12 rounded-2xl border border-stone-200/35 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out">
                <img 
                  src="/mullano-desert-case-dining.webp" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms]" 
                  alt="Project 1" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>
              <div className="aspect-[3/4] bg-mullano-gray overflow-hidden rounded-2xl border border-stone-200/35 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out">
                <img 
                  src="/projects-commercial-shenzhen-bay.webp" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms]" 
                  alt="Project 2" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wall Artistry Showcase Section */}
      <section className="py-48 bg-[#eae8e4]/30 border-y border-black/[0.03]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="mb-12 md:mb-0">
              <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-6 uppercase font-semibold">
                {lang === 'zh' ? '高定墙面艺术' : 'Bespoke Wall Artistry'}
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif tracking-[0.2em] uppercase">
                {lang === 'zh' ? '经典高定画馆' : 'Bespoke Art Gallery'}
              </h2>
            </div>
            <Link to="/atelier/art" className="group flex items-center space-x-6 text-mullano-black/60 hover:text-mullano-gold transition-colors">
              <span className="text-[11px] tracking-[0.4em] uppercase font-semibold">
                {lang === 'zh' ? '进入画馆品鉴' : 'Enter Gallery'}
              </span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                id: '01',
                title: { zh: '山海肌理', en: 'Mountains & Oceans' },
                subtitle: { zh: 'MULLANO Gesso 艺术灰泥', en: 'MULLANO Gesso Plaster' },
                image: '/gesso-gallery-1-1.webp',
                desc: {
                  zh: '层叠慢批出波澜起伏，当自然光掠过，呈现深邃而宁静的立体阴影。',
                  en: 'Hand-layered textures capture the movement of waves, creating organic depth.'
                }
              },
              {
                id: '02',
                title: { zh: '极光微澜', en: 'Auroral Ripple' },
                subtitle: { zh: 'MULLANO Milan Velvet 天鹅绒', en: 'MULLANO Milan Velvet' },
                image: '/gesso-gallery-2-1.webp',
                desc: {
                  zh: '流动的双色蚕丝质感与珍珠微光，随着视角移动，光影温润变幻。',
                  en: 'Fuses double-tone metallic shimmer with a velvet touch that shifts with light.'
                }
              },
              {
                id: '03',
                title: { zh: '金箔重奏', en: 'Gilded Symphony' },
                subtitle: { zh: 'MULLANO Plaster + 24K 金箔', en: 'MULLANO Plaster + Gold Leaf' },
                image: '/gesso-gallery-3-1.webp',
                desc: {
                  zh: '复古厚泥开裂出时间的断层，手工金箔点缀其间，极具视觉冲击。',
                  en: 'Erosive fissures hand-gilded with premium gold flakes to evoke striking contrast.'
                }
              }
            ].map((art, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                className="group relative"
              >
                <Link to="/atelier/art" className="cursor-pointer block relative">
                  {/* Aspect 9:16 Museum Scroll Frame */}
                  <div className="aspect-[9/16] w-full bg-neutral-900 overflow-hidden relative rounded-2xl border border-black/[0.06] shadow-md group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-700 ease-out">
                    <img 
                      src={art.image} 
                      className="w-full h-full object-cover transition-transform duration-[1200ms] scale-[1.01] group-hover:scale-105"
                      alt={art.title[lang]}
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient for text readability and premium look */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
                    
                    {/* Hover Content and Guidance */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                      {/* Top Corner Badge */}
                      <div className="self-start bg-white/15 border border-white/20 px-3 py-1.5 rounded-full">
                        <span className="text-[9px] font-mono tracking-[0.2em] text-white uppercase font-semibold">
                          MULLANO MUSEUM
                        </span>
                      </div>
                      
                      {/* Pulsing prompt to click (Guide User Click) */}
                      <div className="absolute top-8 right-8 z-20 flex items-center gap-2 bg-neutral-950/60 border border-white/10 px-3 py-1.5 rounded-full select-none group-hover:bg-mullano-gold/90 group-hover:border-mullano-gold transition-all duration-500">
                        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-mullano-gold"></span>
                          <motion.span 
                            animate={{ 
                              scale: [1, 2.2, 1],
                              opacity: [0.6, 0.15, 0.6]
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 3, 
                              ease: "easeInOut" 
                            }}
                            className="absolute inline-flex h-full w-full rounded-full bg-mullano-gold"
                          />
                        </span>
                        <span className="text-[9px] text-white font-medium tracking-widest uppercase">
                          {lang === 'zh' ? '点击探索' : 'EXPLORE'}
                        </span>
                      </div>

                      {/* Overlay on hover: Centered clear invitation */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="px-6 py-3.5 bg-mullano-gold text-neutral-950 rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
                          <span>{lang === 'zh' ? '品鉴高定 · 查看工艺' : 'DISCOVER STEPS'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Bottom Info inside the image frame */}
                      <div className="space-y-3 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-[10px] tracking-[0.25em] text-mullano-gold font-bold block uppercase">
                          {art.subtitle[lang]}
                        </span>
                        <h4 className="text-2xl md:text-3xl font-serif text-white tracking-widest uppercase font-medium">
                          {art.title[lang]}
                        </h4>
                        <p className="text-white/70 text-xs font-light tracking-wide leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 h-0 group-hover:h-auto overflow-hidden">
                          {art.desc[lang]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Under-Image Refined Editorial Typography */}
                  <div className="mt-8 flex gap-6 items-start">
                    <span className="text-2xl font-serif font-light text-mullano-gold leading-none">
                      {art.id}
                    </span>
                    <div className="space-y-2">
                      <h5 className="text-lg font-serif text-neutral-900 tracking-wide uppercase font-medium group-hover:text-mullano-gold transition-colors">
                        {art.title[lang]}
                      </h5>
                      <p className="text-xs text-neutral-500 font-light tracking-wide leading-relaxed line-clamp-2">
                        {art.desc[lang]}
                      </p>
                      <div className="pt-2 flex items-center gap-2 text-[10px] font-semibold text-mullano-gold tracking-widest uppercase group-hover:translate-x-1.5 transition-transform duration-300">
                        <span>{lang === 'zh' ? '点击品鉴艺术及施工步骤' : 'VIEW APPLICATION STEPS'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Prompt at bottom to guide click & link to Wall Artistry */}
          <div className="mt-28 text-center">
            <Link 
              to="/atelier/art"
              className="relative inline-flex items-center space-x-6 text-neutral-900 px-12 py-5 bg-white rounded-full border border-neutral-200 hover:border-mullano-gold hover:text-white hover:bg-neutral-950 transition-all duration-500 group overflow-hidden shadow-sm hover:shadow-xl cursor-pointer"
            >
              <span className="text-xs tracking-[0.35em] uppercase font-bold">
                {lang === 'zh' ? '品鉴经典高定画馆（全套9款工艺）' : 'VIEW ALL BESPOKE WALL ARTISTRY'}
              </span>
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-mullano-gold group-hover:text-neutral-950 transition-colors duration-300">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative group">
              <div className="aspect-square bg-mullano-gray overflow-hidden shadow-2xl relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={craftsmanshipSlides[currentSlide].src}
                      className="w-full h-full object-cover"
                      alt={craftsmanshipSlides[currentSlide].alt}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = craftsmanshipSlides[currentSlide].fallback;
                      }}
                    />
                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-8 text-white">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-mullano-gold/90 mb-1 font-semibold">
                        MULLANO DESERT CASE
                      </p>
                      <h4 className="text-lg font-serif tracking-widest uppercase">
                        {craftsmanshipSlides[currentSlide].label}
                      </h4>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left Arrow */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + craftsmanshipSlides.length) % craftsmanshipSlides.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-mullano-black cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % craftsmanshipSlides.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-mullano-black cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Progress Indicators */}
                <div className="absolute bottom-8 right-8 z-10 flex gap-2">
                  {craftsmanshipSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1 transition-all duration-500 cursor-pointer ${
                        currentSlide === idx ? 'w-8 bg-mullano-gold' : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
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
