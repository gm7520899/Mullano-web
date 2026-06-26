import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Globe, Wind } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

import { PageHero } from '../components/PageHero';

interface HeritagePageProps {
  lang: 'zh' | 'en' | 'it';
  content: any;
}

export const HeritagePage = ({ lang, content }: HeritagePageProps) => {
  const { sub } = useParams<{ sub: string }>();
  const t = content;
  
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
                      en: 'We strictly insist on using natural mineral lime, plaster, and pure silica micro-grains. Its natural porous network acts as a breathable filter that auto-regulates indoor humidity, keeping the space crisp and fresh.'
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
                <div className="aspect-[4/5] bg-mullano-gray overflow-hidden shadow-2xl relative group">
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
                <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-10 uppercase font-semibold">{lang === 'zh' ? '玉兰传承' : 'Yulan Legacy'}</h3>
                <h2 className="text-3xl md:text-4xl font-serif tracking-[0.1em] leading-tight mb-16 uppercase">
                  {lang === 'zh' ? '40年匠心沉淀' : '40 Years of Heritage'}
                </h2>
                <div className="space-y-8 text-base text-gray-400 font-light leading-loose mb-20 tracking-widest uppercase">
                  <p>
                    {lang === 'zh'
                      ? '作为玉兰集团的高端子品牌，MULLANO 继承了母公司在墙面装饰领域 40 年的专业经验与技术积累。'
                      : 'As a premium sub-brand of Yulan Group, MULLANO inherits 40 years of professional experience and technical accumulation in wall decoration.'}
                  </p>
                  <p>
                    {lang === 'zh'
                      ? '从第一卷壁纸的诞生，到如今引领高端艺术涂料的风尚，我们始终坚守对品质的严苛要求。每一道工序，每一次调色，都凝聚着几代玉兰人的智慧与汗水。'
                      : 'From the birth of the first roll of wallpaper to leading the trend of premium art paint today, we have always adhered to strict quality requirements. Every process and color mixing embodies the wisdom and sweat of generations of Yulan people.'}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full bg-mullano-gray flex items-center justify-center text-mullano-gold">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xl font-serif tracking-widest uppercase">Global Vision</div>
                      <div className="text-xs text-gray-400 mt-2 tracking-widest uppercase">{lang === 'zh' ? '全球视野' : 'Global Perspective'}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full bg-mullano-gray flex items-center justify-center text-mullano-gold">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xl font-serif tracking-widest uppercase">40 Years</div>
                      <div className="text-xs text-gray-400 mt-2 tracking-widest uppercase">{lang === 'zh' ? '深厚积淀' : 'Deep Heritage'}</div>
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
              <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{lang === 'zh' ? '工匠精神' : 'Craftsmanship'}</h3>
              <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase">{lang === 'zh' ? '追求极致 德系品质' : 'Ultimate German Quality'}</h2>
              <p className="mt-8 text-gray-500 max-w-2xl mx-auto font-light tracking-widest leading-loose uppercase">
                {lang === 'zh' 
                  ? '秉承德国制造业的严谨与精细，我们将每一面墙的涂装视为艺术创作。从基层处理到面漆打磨，每一道工序都遵循近乎苛刻的标准。' 
                  : 'Adhering to the rigor and precision of German manufacturing, we treat the painting of every wall as an artistic creation. From base treatment to topcoat polishing, every process follows almost demanding standards.'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { icon: Shield, title: lang === 'zh' ? '严苛标准' : 'Strict Standards', desc: lang === 'zh' ? '坚持使用天然矿物原料，确保每一滴涂料都符合国际至高环保与物理性能标准。' : 'Insist on using natural mineral raw materials to ensure every drop of paint meets international high eco and physical standards.' },
                { icon: Wind, title: lang === 'zh' ? '微气候调节' : 'Microclimate', desc: lang === 'zh' ? '通过无机材料的天然微孔结构，调节室内湿度，让居住空间自由呼吸。' : 'Regulate indoor humidity through the natural microporous structure of inorganic materials, allowing the space to breathe freely.' },
                { icon: Award, title: lang === 'zh' ? '极致肌理' : 'Ultimate Texture', desc: lang === 'zh' ? '精准控制15%-25%的光泽度，实现柔和的漫反射光影，赋予墙面高级的触感与视觉。' : 'Precisely control 15%-25% gloss to achieve soft diffuse reflection, giving walls a premium tactile and visual sense.' },
              ].map((value, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-white p-16 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  <div className="w-16 h-16 rounded-full bg-mullano-gray text-mullano-gold mb-10 flex items-center justify-center group-hover:bg-mullano-gold group-hover:text-white transition-colors duration-700">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif tracking-widest uppercase mb-6">{value.title}</h4>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h3 className="text-[11px] tracking-[0.4em] text-mullano-gold mb-8 uppercase font-semibold">{lang === 'zh' ? '材质溯源' : 'Material Traceability'}</h3>
                <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] mb-12 uppercase leading-tight">{lang === 'zh' ? '探寻自然之源' : 'Tracing the Source of Nature'}</h2>
                <div className="space-y-8 text-base text-gray-500 font-light leading-loose tracking-widest uppercase max-w-lg">
                  <p>
                    {lang === 'zh' 
                      ? 'MULLANO 坚信，顶级的质感源于最纯粹的自然馈赠。我们跨越山海，在全球范围内甄选优质的无机矿物、天然石材与高纯度石膏。' 
                      : 'MULLANO firmly believes that top-tier texture comes from the purest gifts of nature. We cross mountains and seas to select high-quality inorganic minerals, natural stone, and high-purity plaster globally.'}
                  </p>
                  <p>
                    {lang === 'zh' 
                      ? '每一份原料都经过严格的筛选与溯源，确保其物理特性的稳定。通过先进的研磨与提纯工艺，我们保留了材质最本真的肌理，使其在墙面上呈现出光泽度在 15%-25% 之间的完美漫反射效果，光影过渡极其柔和，散发着高级的德系工匠感。' 
                      : 'Every raw material undergoes strict screening and traceability to ensure the stability of its physical properties. Through advanced grinding and purification processes, we retain the most authentic texture of the material, presenting a perfect diffuse reflection effect with a gloss between 15%-25% on the wall, with extremely soft light and shadow transitions, exuding a premium German craftsmanship.'}
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-8 mt-16">
                    <div className="aspect-[3/4] bg-mullano-gray overflow-hidden">
                      <img
                        src="/heritage-material-1.webp"
                        className="w-full h-full object-cover grayscale-[30%]"
                        alt="Natural Minerals"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="aspect-[3/4] bg-mullano-gray overflow-hidden">
                      <img
                        src="/heritage-material-2.webp"
                        className="w-full h-full object-cover grayscale-[30%]"
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
    </div>
  );
};

