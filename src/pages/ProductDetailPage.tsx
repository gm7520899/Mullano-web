import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Award, Wind, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface ProductDetailPageProps {
  lang: 'zh' | 'en' | 'it';
  categories: any;
}

export const ProductDetailPage = ({ lang, categories }: ProductDetailPageProps) => {
  const { id } = useParams<{ id: string }>();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const craftsmanshipSlides = [
    {
      src: '/mullano-desert-case-bedroom.webp',
      alt: 'Mullano Desert Case Bedroom',
      fallback: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1000&h=1000',
      label: lang === 'zh' ? '艺术卧室空间' : lang === 'en' ? 'Artistic Bedroom' : 'Camera da Letto Artistica'
    },
    {
      src: '/mullano-desert-case-living.webp',
      alt: 'Mullano Desert Case Living',
      fallback: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000&h=1000',
      label: lang === 'zh' ? '雅奢客厅空间' : lang === 'en' ? 'Luxury Living Room' : 'Soggiorno di Lusso'
    },
    {
      src: '/mullano-desert-case-lounge.webp',
      alt: 'Mullano Desert Case Lounge',
      fallback: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000&h=1000',
      label: lang === 'zh' ? '雅致书屋空间' : lang === 'en' ? 'Elegant Lounge' : 'Salotto Elegante'
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % craftsmanshipSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [craftsmanshipSlides.length]);
  
  // Find product and its category
  let product: any = null;
  let categoryType = 'organic';
  
  for (const [type, items] of Object.entries(categories)) {
    const found = (items as any[]).find(p => p.id === id);
    if (found) {
      product = found;
      categoryType = type;
      break;
    }
  }

  if (!product) {
    return (
      <div className="pt-40 pb-48 text-center bg-mullano-gray min-h-screen">
        <h2 className="text-3xl font-serif mb-8">Product Not Found</h2>
        <Link to="/" className="text-mullano-gold uppercase tracking-widest border-b border-mullano-gold pb-2">Return Home</Link>
      </div>
    );
  }

  const detailLang: 'zh' | 'en' | 'it' | null = product.details?.[lang] 
    ? lang 
    : (product.details?.['en'] ? 'en' : (product.details?.['zh'] ? 'zh' : null));

  const specs = (detailLang ? product.details?.[detailLang]?.specs : null) || [
    { label: lang === 'zh' ? '光泽度' : lang === 'en' ? 'Glossiness' : 'Lucentezza', value: '15% - 25%' },
    { label: lang === 'zh' ? '反射特性' : lang === 'en' ? 'Reflection' : 'Riflessione', value: lang === 'zh' ? '漫反射' : lang === 'en' ? 'Diffuse' : 'Diffuso' },
    { label: lang === 'zh' ? '光影过渡' : lang === 'en' ? 'Light Transition' : 'Transizione di Luce', value: lang === 'zh' ? '柔和' : lang === 'en' ? 'Soft' : 'Morbida' },
    { label: lang === 'zh' ? '肌理感' : lang === 'en' ? 'Texture' : 'Tattilità', value: lang === 'zh' ? '极高' : lang === 'en' ? 'High' : 'Molto Alta' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Product Hero */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 bg-mullano-gray overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <Link to={`/collections/${categoryType}`} className="inline-flex items-center space-x-4 text-gray-400 hover:text-mullano-gold transition-colors mb-16 group">
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">{lang === 'zh' ? '返回系列' : lang === 'en' ? 'Back to Collections' : 'Torna alle Collezioni'}</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{product.id}</h3>
              <h1 className="text-4xl md:text-6xl font-serif tracking-[0.2em] mb-12 uppercase leading-tight">{product.name[lang]}</h1>
              <p className="text-base text-gray-500 font-light leading-loose mb-16 tracking-widest uppercase max-w-lg">
                {product.desc[lang]}
              </p>
              
              <div className="grid grid-cols-2 gap-12 border-t border-black/5 pt-12">
                {specs.map((spec: any) => (
                  <div key={spec.label}>
                    <div className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-3 font-light">{spec.label}</div>
                    <div className="text-xl font-serif tracking-widest text-mullano-black uppercase">{spec.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-white shadow-2xl overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full object-cover"
                  alt={product.name[lang]}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-mullano-gold/10 -z-10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      {detailLang && (
        <section className="py-48 bg-white border-b border-black/5">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-12 uppercase font-semibold">{lang === 'zh' ? '产品概述' : 'Overview'}</h3>
            <p className="text-xl md:text-2xl font-serif leading-relaxed tracking-widest text-mullano-black uppercase">
              {product.details[detailLang].intro}
            </p>
          </div>
        </section>
      )}

      {/* Features Grid */}
      {detailLang && product.details?.[detailLang]?.features && (
        <section className="py-48 bg-mullano-gray">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-32">
              <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{lang === 'zh' ? '核心优势' : 'Core Features'}</h3>
              <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase">{lang === 'zh' ? '卓越性能 · 艺术表现' : 'Excellence in Performance'}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {product.details[detailLang].features.map((feature: any, idx: number) => (
                <div key={idx} className="bg-white p-12 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-mullano-gold mb-8">
                    {idx === 0 && <Shield className="w-10 h-10" />}
                    {idx === 1 && <Award className="w-10 h-10" />}
                    {idx === 2 && <Wind className="w-10 h-10" />}
                    {idx >= 3 && <Shield className="w-10 h-10" />}
                  </div>
                  <h4 className="text-xl font-serif tracking-widest mb-6 uppercase">{feature.title}</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed tracking-widest uppercase">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Construction Steps */}
      {detailLang && product.details?.[detailLang]?.steps && (
        <section className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
              <div>
                <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{lang === 'zh' ? '施工工艺' : 'Construction'}</h3>
                <h2 className="text-4xl md:text-5xl font-serif tracking-[0.1em] leading-tight mb-16 uppercase">
                  {lang === 'zh' ? '三分料，七分工\n匠心筑就艺术' : '30% Material,\n70% Craftsmanship'}
                </h2>
                <div className="relative group mb-16">
                  <div className="aspect-[4/3] bg-mullano-gray overflow-hidden shadow-2xl relative">
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
                </div>
                
                {product.details[detailLang].precautions && (
                  <div className="bg-mullano-gray p-10">
                    <h4 className="text-lg font-serif tracking-widest mb-6 uppercase text-mullano-black">{lang === 'zh' ? '注意事项' : 'Precautions'}</h4>
                    <ul className="space-y-4">
                      {product.details[detailLang].precautions.map((precaution: string, idx: number) => (
                        <li key={idx} className="flex items-start space-x-4">
                          <span className="text-mullano-gold mt-1">•</span>
                          <span className="text-sm text-gray-500 font-light leading-relaxed tracking-widest">{precaution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="space-y-16 lg:pt-24">
                {product.details[detailLang].steps.map((step: any, idx: number) => (
                  <div key={idx} className="flex space-x-12">
                    <div className="text-4xl font-serif text-mullano-gold/30">0{idx + 1}</div>
                    <div>
                      <h4 className="text-xl font-serif tracking-widest mb-4 uppercase">{step.title}</h4>
                      <p className="text-sm text-gray-400 font-light leading-relaxed tracking-widest uppercase">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Application Scenarios */}
      {detailLang && product.details?.[detailLang]?.scenarios && (
        <section className="py-48 bg-mullano-gray">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24">
              <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{lang === 'zh' ? '应用场景' : 'Scenarios'}</h3>
              <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase">{lang === 'zh' ? '多元空间 · 艺术呈现' : 'Versatile Spaces'}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {product.details[detailLang].scenarios.map((scenario: string, idx: number) => (
                <div key={idx} className="px-10 py-6 bg-white border border-black/5 text-[11px] tracking-[0.3em] uppercase font-semibold text-mullano-black">
                  {scenario}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Color Palette */}
      {detailLang && product.details?.[detailLang]?.colors && (
        <section className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-32">
              <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{lang === 'zh' ? '色彩美学' : 'Color Palette'}</h3>
              <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase">{lang === 'zh' ? '自然色系 · 灵感源泉' : 'Natural Tones'}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {product.details[detailLang].colors.map((color: any, idx: number) => (
                <div key={idx} className="group cursor-pointer">
                  <div 
                    className="aspect-square mb-6 shadow-inner transition-transform duration-500 group-hover:scale-105" 
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-center">
                    <div className="text-[10px] tracking-widest text-mullano-gold font-bold mb-1">{color.code}</div>
                    <div className="text-[10px] tracking-widest text-gray-400 uppercase font-light">{color.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery / Effect Images */}
      {detailLang && product.details?.[detailLang]?.gallery && (
        <section className="py-48 bg-mullano-gray">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24">
              <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{lang === 'zh' ? '实景案例' : 'Gallery'}</h3>
              <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase">{lang === 'zh' ? '空间美学 · 匠心呈现' : 'Aesthetic Spaces'}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.details[detailLang].gallery.map((img: string, idx: number) => (
                <div key={idx} className="aspect-[3/4] bg-white group relative transition-all duration-700 hover:z-50">
                  <img 
                    src={img} 
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:shadow-2xl transition-all duration-700 relative z-10 group-hover:z-50" 
                    alt={`Gallery ${idx}`} 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Texture View (Fallback for other products) */}
      {!detailLang && (
        <section className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-32">
              <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{lang === 'zh' ? '细节之美' : 'The Beauty of Detail'}</h3>
              <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase">{lang === 'zh' ? '触手可及的艺术' : 'Art Within Reach'}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="aspect-square bg-mullano-gray overflow-hidden group">
                <img
                  src={product.image}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  alt="Detail 1"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center lg:pl-20">
                <div className="space-y-16">
                  <div>
                    <div className="flex items-center space-x-6 mb-6">
                      <Shield className="w-8 h-8 text-mullano-gold" />
                      <h4 className="text-2xl font-serif tracking-widest uppercase">
                        {lang === 'zh' ? (product.id.includes('pro') ? '防霉抗菌' : '持久耐用') : (product.id.includes('pro') ? 'Anti-Mold & Antibacterial' : 'Durability')}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-400 font-light leading-relaxed tracking-widest uppercase">
                      {lang === 'zh' 
                        ? (product.id.includes('pro') 
                            ? '达到国家 0 级防霉标准，有效抑制细菌滋生，为家居环境提供长效健康保护。' 
                            : '采用玉兰集团核心技术，具备卓越的抗污、耐擦洗性能，让墙面艺术经久不衰。')
                        : (product.id.includes('pro')
                            ? 'Meets national Grade 0 mold resistance standard, effectively inhibiting bacterial growth for long-term protection.'
                            : 'Using Yulan Group core technology, it has excellent stain resistance and scrub resistance.')}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-6 mb-6">
                      <Award className="w-8 h-8 text-mullano-gold" />
                      <h4 className="text-2xl font-serif tracking-widest uppercase">
                        {lang === 'zh' ? (product.id.includes('pro') ? '高效除甲醛' : '环保标准') : (product.id.includes('pro') ? 'Formaldehyde Removal' : 'Eco Standard')}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-400 font-light leading-relaxed tracking-widest uppercase">
                      {lang === 'zh' 
                        ? (product.id.includes('pro')
                            ? '特别添加甲醛净化因子，能有效分解室内游离甲醛，让您即刻入住新家。'
                            : '符合法国 VOC A+ 国际至高环保标准，为您的家庭提供健康纯净的居住环境。')
                        : (product.id.includes('pro')
                            ? 'Specially added formaldehyde purification factors effectively decompose free formaldehyde in the air.'
                            : 'Complies with French VOC A+ international high environmental protection standards.')}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-6 mb-6">
                      <Wind className="w-8 h-8 text-mullano-gold" />
                      <h4 className="text-2xl font-serif tracking-widest uppercase">{lang === 'zh' ? '透气防霉' : 'Breathable'}</h4>
                    </div>
                    <p className="text-sm text-gray-400 font-light leading-relaxed tracking-widest uppercase">
                      {lang === 'zh' 
                        ? '天然矿物成分赋予墙面自由呼吸的能力，有效防止霉菌滋生，保持室内干爽。' 
                        : 'Natural mineral ingredients give the wall the ability to breathe freely, effectively preventing mold growth and keeping the interior dry.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
