import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Shield, Globe, Wind, X } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

import { PageHero } from '../components/PageHero';

interface HeritagePageProps {
  lang: 'zh' | 'en' | 'it';
  content: any;
}

export const HeritagePage = ({ lang, content }: HeritagePageProps) => {
  const { sub } = useParams<{ sub: string }>();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  
  const categories = content.nav.heritage.sub;
  const currentCategory = categories.find((c: any) => c.path.includes(sub || ''));

  return (
    <div className="bg-white min-h-screen">
      <PageHero 
        title={currentCategory?.name || (lang === 'zh' ? '品牌故事' : 'Brand Story')}
        subtitle={lang === 'zh' ? '品牌溯源' : 'Heritage'}
        image="/heritage-hero.webp"
        fallbackImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Sub-nav */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-wrap gap-8">
          {categories.map((cat: any) => (
            <Link
              key={cat.path}
              to={cat.path}
              className={`text-sm tracking-widest uppercase transition-colors ${
                cat.path.includes(sub || '') 
                  ? 'text-gray-900 font-medium' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Hero Section - Story */}
      {(sub === 'story' || !sub) && (
        <section className="relative pb-48 bg-mullano-gray overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{lang === 'zh' ? '品牌故事' : 'Brand Story'}</h3>
                <h2 className="text-4xl font-serif tracking-[0.2em] mb-12 uppercase leading-tight">{lang === 'zh' ? '源于对美的极致追求' : 'Pursuit of Beauty'}</h2>
                <div className="space-y-8 text-base text-gray-500 font-light leading-loose tracking-widest uppercase max-w-lg">
                  <p>
                    {lang === 'zh' 
                      ? '木兰诺（MULLANO）是玉兰集团旗下的高端艺术涂料品牌。我们深知，墙面不仅是空间的边界，更是建筑的肌肤。' 
                      : 'MULLANO is a premium art paint brand under Yulan Group. We believe that walls are not just boundaries of space, but the skin of architecture.'}
                  </p>
                  <p>
                    {lang === 'zh' 
                      ? '依托集团 40 年深厚积淀，MULLANO 致力于将全球前沿的色彩美学与精湛的德系工匠技艺带入每一个中国家庭。我们以极致极简的设计哲学，赋予空间内敛而高级的质感。' 
                      : 'Backed by 40 years of heritage, MULLANO is dedicated to bringing global color aesthetics and exquisite German craftsmanship to every home. With an ultimate minimalist design philosophy, we endow spaces with an introverted and premium texture.'}
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-white shadow-2xl overflow-hidden p-6 border border-black/5">
                  <img
                    src="/heritage-story.webp"
                    className="w-full h-full object-cover grayscale-[20%]"
                    alt="Heritage"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Brand Story Enrichment: Timeline & Craftsmanship Rules */}
      {(sub === 'story' || !sub) && (
        <>
          {/* Timeline Section */}
          <section className="py-40 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-8">
              <motion.div 
                className="text-center mb-28"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-6 uppercase font-semibold">
                  {lang === 'zh' ? '玉兰40年历史刻度' : '40 YEARS OF LANDMARKS'}
                </h3>
                <h2 className="text-3xl md:text-4xl font-serif tracking-[0.15em] uppercase text-gray-900 leading-tight">
                  {lang === 'zh' ? '时光沉淀 · 匠心履迹' : 'THE LEGACY OF TIME & SOUL'}
                </h2>
                <p className="mt-6 text-gray-400 max-w-xl mx-auto font-light text-xs tracking-widest leading-loose uppercase">
                  {lang === 'zh' 
                    ? '自1984年至今，我们跨越半个世纪，用双手与自然结盟，写就一部关于墙面艺术与空间美学的宏大史诗。' 
                    : 'Since 1984, we have spanned half a century, forging alliances with nature to write a grand epic of wall art and spatial aesthetics.'}
                </p>
              </motion.div>

              {/* Vertical Timeline Layout */}
              <div className="relative border-l border-neutral-100 ml-4 md:ml-32 md:pl-20 pl-8 space-y-24">
                {[
                  {
                    year: '1984',
                    title: { zh: '玉兰起航：奠基时代', en: 'The Launch: Laying Foundations' },
                    desc: {
                      zh: '玉兰集团正式成立，怀揣着“以美化千家万户”的初心，开启中国壁纸与高端墙面美学的辉煌华章。',
                      en: 'Yulan Group was officially established, pioneering the brilliant chapter of Chinese luxury wallcoverings and artistic aesthetics.'
                    }
                  },
                  {
                    year: '1998',
                    title: { zh: '德系严苛品质实验室', en: 'German Precision Lab' },
                    desc: {
                      zh: '投资建立德系品质标准实验室，引进欧洲最先进的环保与物理性能检测仪器，全流程遵循德国制造业的严密标准。',
                      en: 'Established our German Quality Lab, introducing European inspection standards to ensure absolute environmental safety.'
                    }
                  },
                  {
                    year: '2012',
                    title: { zh: '无机矿物全球溯源计划', en: 'Inorganic Mineral Traceability' },
                    desc: {
                      zh: '开启全球材料合作，与意大利、德国无机矿物研究所深度联合，发掘纯净的阿尔卑斯石英、威尼斯石灰岩及凝灰岩砂。',
                      en: 'Partnered with European geological research institutes, securing exclusive supplies of pure limestone and volcanic sands.'
                    }
                  },
                  {
                    year: '2020',
                    title: { zh: 'MULLANO木兰诺耀目降临', en: 'Birth of MULLANO' },
                    desc: {
                      zh: '木兰诺（MULLANO）作为奢华艺术涂料品牌重磅推出，将意大利文艺复兴手作艺术与德系精工深度交融，专注于别墅、大宅的空间重构。',
                      en: 'MULLANO was launched as a luxury art paint brand, combining Renaissance hand-craft with German precision for villa spaces.'
                    }
                  },
                  {
                    year: '2026',
                    title: { zh: '二十四节气“艺术盒子”发布', en: '24 Solar Terms Art Box' },
                    desc: {
                      zh: '全球发布二十四节气墅级高定系列。让东方的时令自然、西方的古典肌理，在一面墙体上达成最完美的重奏。',
                      en: 'Unveiled the 24 Solar Terms luxury portfolio, harmonizing Eastern cosmic rhythms with exquisite European textured plaster.'
                    }
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                  >
                    {/* Pulsing timeline dot */}
                    <div className="absolute -left-[37px] md:-left-[117px] top-1 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white border-2 border-mullano-gold flex items-center justify-center group-hover:bg-mullano-gold transition-colors duration-500">
                        <div className="w-1.5 h-1.5 bg-mullano-gold rounded-full group-hover:bg-white" />
                      </div>
                      <div className="absolute w-8 h-8 rounded-full bg-mullano-gold/10 scale-0 group-hover:scale-100 transition-transform duration-700 -z-10" />
                    </div>

                    {/* Timeline Card */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                      <div className="md:col-span-1">
                        <span className="text-4xl md:text-5xl font-serif font-light text-mullano-gold leading-none tracking-widest block select-none">
                          {item.year}
                        </span>
                      </div>
                      <div className="md:col-span-3 space-y-3">
                        <h4 className="text-lg font-serif font-medium text-gray-900 tracking-wider group-hover:text-mullano-gold transition-colors">
                          {item.title[lang]}
                        </h4>
                        <p className="text-sm text-gray-400 font-light leading-relaxed tracking-widest uppercase">
                          {item.desc[lang]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Golden Rules of MULLANO Craft Section */}
          <section className="py-44 bg-neutral-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mullano-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-mullano-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8">
              <motion.div 
                className="text-center mb-28"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-[10px] tracking-[0.4em] text-mullano-gold mb-6 uppercase font-semibold">
                  {lang === 'zh' ? '木兰诺艺术工艺黄金法则' : 'THE GOLDEN RULES OF CRAFT'}
                </h3>
                <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] text-white uppercase leading-tight">
                  {lang === 'zh' ? '三大高定奢级美学法则' : 'THREE LUXURY AESTHETIC LAWS'}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {[
                  {
                    num: '01',
                    title: { zh: '15%-25% 黄金折光率', en: '15%-25% Matte Glow' },
                    subtitle: { zh: '温润舒适的光影环境', en: 'The Optimum Gloss' },
                    desc: {
                      zh: '历经数万次实验，木兰诺将光泽度精准控在15%-25%黄金区间。当自然光掠过粗粝或丝滑的肌理时，呈现极其完美的、如同天鹅绒般的漫反射，绝不反射强光、不刺眼，让空间无时无刻不流动着高雅静穆。',
                      en: 'We control wall reflectance to exactly 15%-25%. Light diffuses softly through mineral silica micropores, avoiding glares and forming warm, velvet-like light and shadow transitions.'
                    }
                  },
                  {
                    num: '02',
                    title: { zh: '手工馒刀微刻塑形', en: 'The Dual-Trowel Technique' },
                    subtitle: { zh: '独一无二的墙面微雕刻面', en: 'Non-reproducible Artistry' },
                    desc: {
                      zh: '木兰诺的专属工艺巨匠须有5年以上高级艺术大宅实操经验。每一平米的墙体表面都是数十次用不锈钢馒刀以不同弧度、不同力道手工层叠慢批、微刮起伏，带有工匠细腻的手作温存，绝非机器复制的冰冷线条。',
                      en: 'Every square meter of the luxury villa is sculpted by seasoned master artisans. Layers are carefully troweled and carved with varying pressure to ensure the walls possess warmth, texture, and high emotional resonance.'
                    }
                  },
                  {
                    num: '03',
                    title: { zh: '无机呼吸矿物多孔墙', en: 'Inorganic Breathing Matrix' },
                    subtitle: { zh: '会呼吸的生态豪宅背景', en: 'Natural Microclimate' },
                    desc: {
                      zh: '全线严选阿尔卑斯山脉高纯无机石灰岩、石膏与纯净二氧化硅微颗粒。利用材料天然多孔物理结构，使墙体具有出色的空气微气候自动吞吐调节功能，防霉、防潮、自呼吸，持久守护健康生态大宅。',
                      en: 'We strictly insist on using natural mineral lime, plaster, and pure silica micro-grains. Its natural porous matrix acts as a breathable filter that auto-regulates indoor humidity, keeping the space crisp and fresh.'
                    }
                  }
                ].map((law, index) => (
                  <motion.div
                    key={index}
                    className="border border-white/5 bg-white/[0.02] p-12 hover:border-mullano-gold/30 hover:bg-white/[0.04] transition-all duration-700 flex flex-col justify-between rounded-xl group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  >
                    <div className="space-y-6">
                      <span className="text-4xl font-serif text-mullano-gold/20 font-light block group-hover:text-mullano-gold/40 transition-colors duration-500">
                        {law.num}
                      </span>
                      <h4 className="text-xl font-serif text-white tracking-widest uppercase">
                        {law.title[lang]}
                      </h4>
                      <p className="text-[10px] tracking-[0.2em] text-mullano-gold/80 uppercase font-semibold">
                        {law.subtitle[lang]}
                      </p>
                    </div>
                    <p className="text-xs text-stone-400 font-light tracking-widest leading-loose mt-8 uppercase">
                      {law.desc[lang]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Legacy Section */}
      {(sub === 'legacy' || !sub) && (
        <section className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <motion.div 
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="aspect-[4/5] bg-mullano-gray overflow-hidden shadow-2xl relative group rounded-2xl border border-neutral-100">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img
                    src="/heritage-legacy.webp"
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                    alt="Craftsmanship"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div 
                className="order-1 lg:order-2 lg:pl-12"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-10 uppercase font-semibold">{lang === 'zh' ? '玉兰传承 · 意式精粹' : 'Yulan Legacy & Italian Soul'}</h3>
                <h2 className="text-3xl md:text-4xl font-serif tracking-[0.1em] leading-tight mb-16 uppercase text-stone-900">
                  {lang === 'zh' ? '四十载大成底蕴，融汇意式美学灵魂' : '40 Years of Heritage, Infused with Italian Soul'}
                </h2>
                <div className="space-y-8 text-base text-gray-500 font-light leading-loose mb-20 tracking-widest uppercase">
                  <p>
                    {lang === 'zh'
                      ? '作为玉兰集团（Yulan Group）旗下的奢华艺术涂料品牌，MULLANO木兰诺不仅完美继承了母公司四十年来在高端墙面美学领域深厚的技术沉淀与国家级绿色制造实力，更全方位引入了意大利殿堂级的艺术涂料工艺。'
                      : 'As a luxury sub-brand of Yulan Group, MULLANO inherits 40 years of pioneering wallcovering heritage while introducing authentic Italian master coating technology.'}
                  </p>
                  <p>
                    {lang === 'zh'
                      ? '我们携手意大利米兰与威尼斯的色彩美学实验室，将意式传统湿壁画与熟石灰（Grassello di Calce）手作工艺，与德系极致严苛的品质体系深度交融。每一面墙不仅是一次色彩的涂抹，更是玉兰40年工业大成与意大利艺术美学的跨时空重奏。'
                      : 'Partnering with prestigious color laboratories in Milan and Venice, we merge classical Italian frescoes and mineral plaster techniques with rigorous German quality control to create walls that resonate with soul.'}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-mullano-gray flex items-center justify-center text-mullano-gold flex-shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg font-serif tracking-wider uppercase text-stone-900">Italian Artistry</div>
                      <div className="text-xs text-gray-400 mt-2 tracking-widest uppercase leading-relaxed">
                        {lang === 'zh' ? '意大利美学联合研发实验室' : 'Strategic Milan Joint Laboratory'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-mullano-gray flex items-center justify-center text-mullano-gold flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg font-serif tracking-wider uppercase text-stone-900">40-Year Epoch</div>
                      <div className="text-xs text-gray-400 mt-2 tracking-widest uppercase leading-relaxed">
                        {lang === 'zh' ? '玉兰集团40载国家级环保底蕴' : '40 Years of Chinese Pioneer Eco-Manufacturing'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Craftsmanship Section */}
      {(sub === 'craft' || !sub) && (
        <section className="py-48 bg-mullano-gray">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div 
              className="text-center mb-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{lang === 'zh' ? '工匠精神 · Spirito Artigianale' : 'Craftsmanship & Artisan Heritage'}</h3>
              <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase text-stone-900">{lang === 'zh' ? '意式文艺复兴手作，德系严苛物理品质' : 'Renaissance Handcraft & German Precision'}</h2>
              <p className="mt-8 text-gray-500 max-w-2xl mx-auto font-light tracking-widest leading-loose uppercase text-xs">
                {lang === 'zh' 
                  ? '秉承意大利古典主义匠人的热忱与严苛，我们将每一面墙的涂装视为雕刻时光。从基层处理到不锈钢馒刀多层慢揉，每一道工序都遵循近乎艺术级的工序法则。' 
                  : 'We view every wall as a canvas of time, combining Renaissance mineral plaster techniques with precise German engineering quality and multi-layer troweling.'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { 
                  icon: Shield, 
                  title: lang === 'zh' ? '意式微雕叠批' : 'Venetian Stucco Art', 
                  desc: lang === 'zh' ? '传承意大利威尼托（Veneto）产区的湿壁画手工叠批工艺。采用高硬度精磨不锈钢馒刀，经匠人多维弧度、不同力度微雕刮抹，使墙面触感如丝绸与凝脂般自然温润。' : 'Using classic Grassello di Calce and steel trowels to create the authentic tactile beauty of historic Venetian mansions.' 
                },
                { 
                  icon: Wind, 
                  title: lang === 'zh' ? '会呼吸的微气候' : 'Inorganic Breath', 
                  desc: lang === 'zh' ? '借助纯天然无机大理石与熟石灰的天然微孔呼吸网。涂层具有极佳的调湿透气性，能有效防止结露与霉菌，在室内形成森林般纯净的健康微气候。' : 'Natural porous lime structure regulates room moisture, effectively defending against mold and maintaining a healthy indoor air quality.' 
                },
                { 
                  icon: Award, 
                  title: lang === 'zh' ? '天鹅绒折光率' : '15%-25% Velvet Glow', 
                  desc: lang === 'zh' ? '严格控制涂层光泽度处于黄金15%-25%的微哑天鹅绒区间。实现完美的柔和漫反射，让光影宛如在墙面上缓缓流淌，绝不炫光刺眼，显现极静质感。' : 'Maintains gloss levels precisely at the optimum 15%-25% range, eliminating any glare and delivering soft velvet light and shadow.' 
                },
              ].map((value, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-white p-16 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 group rounded-2xl border border-neutral-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  <div className="w-16 h-16 rounded-full bg-mullano-gray text-mullano-gold mb-10 flex items-center justify-center group-hover:bg-mullano-gold group-hover:text-white transition-colors duration-700">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif tracking-widest uppercase mb-6 text-stone-900">{value.title}</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed tracking-widest uppercase">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Material Traceability Section */}
      {(sub === 'material' || !sub) && (
        <section className="py-48 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="lg:col-span-5"
              >
                <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{lang === 'zh' ? '材质溯源 · Origine Minerale' : 'Material Traceability & Sourcing'}</h3>
                <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] mb-12 uppercase leading-tight text-stone-900">{lang === 'zh' ? '跨越阿尔卑斯与威尼托，甄选传世矿石精粹' : 'From Alps to Veneto: Pure Sacred Minerals'}</h2>
                <div className="space-y-8 text-base text-gray-500 font-light leading-loose tracking-widest uppercase">
                  <p>
                    {lang === 'zh' 
                      ? 'MULLANO深信，顶级的质感源于大自然最纯粹的馈赠。我们跨越山海，开启“欧洲无机矿物溯源计划”，在意大利半岛本土及欧洲腹地甄选最顶级珍稀的自然矿物。' 
                      : 'MULLANO firmly believes that elite textures originate from the absolute purest elements of nature. We run a dedicated global mineral traceability program across legendary European quarries.'}
                  </p>
                  <p>
                    {lang === 'zh' 
                      ? '我们严选意大利威尼托（Veneto）地下深层熟化多年的活性高纯度熟石灰、阿尔卑斯山脉（Alps）的高硬度天然大理石晶体颗粒、以及意大利皮埃蒙特（Piedmont）的自然微型云母片。这些历经地壳千万年沉淀的天然晶体通过极其精细的研磨工艺，保留了最本真微气孔物理特征，使墙面展现出极其静谧温润的经典石肌美学。' 
                      : 'We source pure aged limestone from subterranean Veneto, crystalline marble grains from the cold Alps, and volcanic ash from active Italian terrain. Refined through rigorous purification, these raw mineral treasures produce breathing, stone-like crystalline matrix walls.'}
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="relative lg:col-span-7"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-8 mt-16">
                    <div 
                      onClick={() => setZoomedImage('/heritage-material-1.webp')}
                      className="aspect-[3/4] bg-mullano-gray overflow-hidden rounded-2xl border border-neutral-100 shadow-xl cursor-zoom-in group/img"
                    >
                      <img
                        src="/heritage-material-1.webp"
                        className="w-full h-full object-cover grayscale-[15%] group-hover/img:scale-105 group-hover/img:grayscale-0 transition-all duration-700"
                        alt="Natural Minerals"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div 
                      onClick={() => setZoomedImage('/heritage-material-2.webp')}
                      className="aspect-[3/4] bg-mullano-gray overflow-hidden rounded-2xl border border-neutral-100 shadow-xl cursor-zoom-in group/img"
                    >
                      <img
                        src="/heritage-material-2.webp"
                        className="w-full h-full object-cover grayscale-[15%] group-hover/img:scale-105 group-hover/img:grayscale-0 transition-all duration-700"
                        alt="Stone Texture"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Lightbox Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
              onClick={() => setZoomedImage(null)}
            />
            
            {/* Close Button */}
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-6 right-6 z-[210] w-12 h-12 bg-white/10 hover:bg-mullano-gold hover:text-stone-900 text-white rounded-full flex items-center justify-center transition-all cursor-pointer border border-white/10 shadow-2xl hover:scale-105 active:scale-95"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Wrapper */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative z-10 max-w-5xl max-h-[85vh] w-full flex items-center justify-center select-none"
              onClick={() => setZoomedImage(null)}
            >
              <img
                src={zoomedImage}
                alt="Zoomed material detail"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10 cursor-zoom-out"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
